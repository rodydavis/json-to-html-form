import 'dart:convert';
import 'dart:html';

import 'package:codemirror/codemirror.dart';
import 'package:recase/recase.dart';

bool _useMaterial = false;

// {
//     "id": 2,
//     "name": "Ervin Howell",
//     "username": "Antonette",
//     "email": "Shanna@melissa.tv",
//     "address": {
//       "street": "Victor Plains",
//       "suite": "Suite 879",
//       "city": "Wisokyburgh",
//       "zipcode": "90566-7771",
//       "geo": {
//         "lat": "-43.9509",
//         "lng": "-34.4618"
//       }
//     },
//     "phone": "010-692-6593 x09125",
//     "website": "anastasia.net",
//     "company": {
//       "name": "Deckow-Crist",
//       "catchPhrase": "Proactive didactic contingency",
//       "bs": "synergize scalable supply-chains"
//     }
//   }

void main() {
  final Element uiOutput = querySelector('#output-ui');
  final Element settings = querySelector('#material-option');
  final defaultCode = <String, dynamic>{
    "name": {"first-name": "John", "last-name": "Doe"},
    "details": {
      "email": "test@email.com",
      "favorite-color": "#ffffff",
      "age": 0,
      "birthday": "2015-05-22T14:56:28.000Z"
    },
    "address": {"street": "", "city": "", "state": "", "zip": ""}
  };

  final TextAreaElement textInput = querySelector('#json-input');
  final TextAreaElement textOutput = querySelector('#json-output');
  final TextAreaElement form = querySelector('#form-output');
  final editor = CodeMirror.fromTextArea(textInput, options: {
    'mode': 'javascript',
    'theme': 'blackboard',
  });
  final viewer = CodeMirror.fromTextArea(textOutput, options: {
    'mode': 'html',
    'theme': 'blackboard',
    "readOnly": true,
  });
  final formOutput = CodeMirror.fromTextArea(form, options: {
    'mode': 'javascript',
    'theme': 'blackboard',
    "readOnly": true,
  });
  settings.addEventListener('click', (event) {
    _useMaterial = !_useMaterial;
    _update(editor, uiOutput, viewer);
    _listenForm(querySelector('#input-form'), formOutput, editor);
  });
  updateHtmlUIOutput(uiOutput, defaultCode);
  updateCode(editor, defaultCode);
  updateHtmlCodeOutput(viewer, defaultCode);
  final FormElement formElement = querySelector('#input-form');
  editor.onChange.listen((event) {
    _update(editor, uiOutput, viewer);
    _submitForm(formElement, formOutput, editor);
  });
  _listenForm(formElement, formOutput, editor);
}

void _listenForm(
    FormElement formElement, CodeMirror formOutput, CodeMirror editor) {
  _submitForm(formElement, formOutput, editor);
  formElement.onSubmit.listen((event) {
    event.preventDefault();
    _submitForm(formElement, formOutput, editor);
  });
  formElement.addEventListener('change', (event) {
    _submitForm(formElement, formOutput, editor);
  });
}

void _submitForm(
    FormElement formElement, CodeMirror formOutput, CodeMirror editor) {
  final Map jsonInput = json.decode(editor.getDoc().getValue());
  final data = FormData(formElement);
  Map _json = <String, dynamic>{};
  _readJson(data, jsonInput, _json);
  formOutput.getDoc().setValue(_getPrettyJson(_json));
}

void _readJson(
    FormData formData, Map<String, dynamic> input, Map<String, dynamic> output,
    [String mapKey]) {
  for (final key in input.keys) {
    final value = input[key];
    if (value is String) {
      String _key = key;
      _key = mapKey == null ? key : "$mapKey[$_key]";
      output[key] = formData.get(_key);
    } else if (value is Map) {
      output[key] = <String, dynamic>{};
      _readJson(formData, value, output[key], key);
    }
  }
}

void _update(CodeMirror editor, Element uiOutput, CodeMirror viewer) {
  final value = editor.getDoc().getValue();
  final jsonInput = json.decode(value);
  updateHtmlUIOutput(uiOutput, jsonInput);
  updateHtmlCodeOutput(viewer, jsonInput);
}

void updateCode(CodeMirror editor, Map<String, dynamic> defaultCode) {
  final prettyprint = _getPrettyJson(defaultCode);
  editor.getDoc().setValue(prettyprint);
}

String _getPrettyJson(Map<String, dynamic> defaultCode) {
  JsonEncoder encoder = new JsonEncoder.withIndent('  ');
  String prettyprint = encoder.convert(defaultCode);
  return prettyprint;
}

void updateHtmlCodeOutput(CodeMirror editor, Map<String, dynamic> jsonInput) {
  final output = convertToHtml(jsonInput, true);
  // element.text = convertToHtml(jsonInput, true);
  editor.getDoc().setValue(output);
}

void updateHtmlUIOutput(Element element, Map<String, dynamic> jsonInput) {
  final output = convertToHtml(jsonInput, false);
  element.setInnerHtml(output,
      validator: NodeValidatorBuilder()
        ..allowHtml5()
        ..allowElement('mwc-textfield',
            attributes: ['value', 'label', 'type', 'style']));
  // (element as IFrameElement).srcdoc = output;
}

String convertToHtml(Map<String, dynamic> jsonInput, bool codeOnly) {
  final sb = StringBuffer();
  if (codeOnly) {
    sb.write("""
  <form action="/action_page.php" method="post">

  """);
  } else {
    sb.write("""
  <form id="input-form" method="post">

  """);
  }
  for (final key in jsonInput.keys) {
    final value = jsonInput[key];
    readKeys(sb, key, value);
  }
  sb.write("""
    <br/>
    <input type="submit" value="Submit">
  </form>
  """);
  if (!codeOnly) return sb.toString();
  return wrapHtml(sb.toString(), codeOnly);
}

void readKeys(
  StringBuffer sb,
  String key,
  dynamic value, [
  List<String> parents,
]) {
  final name = ReCase(key).titleCase;
  if (value is Map) {
    _readMap(parents, key, sb, name, value);
    return;
  }
  if (value is List) {
    return;
  }
  String objectName = key;
  final hasParent = parents != null && parents.isNotEmpty;
  if (hasParent) {
    for (final parent in parents) {
      objectName = '$parent[$objectName]';
    }
  }
  String type = "text";
  String placeholder = "";

  if (value is String) {
    placeholder = value;
    if (value.contains("@")) {
      type = 'email';
    } else if (value.startsWith("#")) {
      type = 'color';
    } else if (value.startsWith("http")) {
      type = 'url';
    } else if (DateTime.tryParse(value) != null) {
      type = 'date';
    }
  } else if (value is num || value is int || value is double) {
    type = 'number';
    placeholder = value.toString();
  } else if (value is bool) {
    type = 'checkbox';
    placeholder = value.toString();
  }
  if (_useMaterial) {
    sb.writeln("""
    <mwc-textfield style="margin:5px" label="$name" type="$type" value="$placeholder"></mwc-textfield><br>
    """);
  } else {
    sb.writeln('''
    <label for="$key">$name:</label><br>
    <input type="$type" id="$key" name="$objectName" value="$placeholder" placeholder="$placeholder"><br>
    ''');
  }
}

void _readMap(
    List<String> parents, String key, StringBuffer sb, String name, Map value) {
  final _parents = parents ?? [];
  _parents.add(key);

  sb.writeln("  <h4>$name</h4>");
  for (final subKey in value.keys) {
    readKeys(sb, subKey, value[subKey], _parents);
  }
}

String wrapHtml(String body, bool codeOnly) {
  final sb = StringBuffer();
  sb.write("""
    <!DOCTYPE html>  
<html>  
  
<head> 
   <title>HTML Output</title> 
   """);

  sb.write("""
</head> 
  
<body>
""");
  sb.writeln(body);
  if (_useMaterial) {
    if (codeOnly) {
      sb.writeln("""
<script type="module">
  import '@material/mwc-textfield';
</script> 
  """);
    } else {
      sb.writeln('<script type="module" src="./output/index.js"></script>');
    }
  }

  sb.writeln("""
</body>  
  
</html>  
  """);
  return sb.toString();
}
