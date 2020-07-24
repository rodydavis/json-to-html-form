define(['dart_sdk', 'packages/codemirror/codemirror', 'packages/recase/recase'], function(dart_sdk, packages__codemirror__codemirror, packages__recase__recase) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const codemirror = packages__codemirror__codemirror.codemirror;
  const recase = packages__recase__recase.recase;
  var main = Object.create(dart.library);
  var $addEventListener = dartx.addEventListener;
  var $onSubmit = dartx.onSubmit;
  var $keys = dartx.keys;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $setInnerHtml = dartx.setInnerHtml;
  var $isNotEmpty = dartx.isNotEmpty;
  var $contains = dartx.contains;
  var $startsWith = dartx.startsWith;
  var $toString = dartx.toString;
  var $add = dartx.add;
  var IdentityMapOfStringL$StringL = () => (IdentityMapOfStringL$StringL = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  var IdentityMapOfStringL$ObjectL = () => (IdentityMapOfStringL$ObjectL = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  var EventLToNullN = () => (EventLToNullN = dart.constFn(dart.fnType(core.Null, [html.Event])))();
  var dynamicToNullN = () => (dynamicToNullN = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var MapOfStringL$dynamic = () => (MapOfStringL$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(core.String)))();
  const CT = Object.create(null);
  main.main = function main$() {
    let uiOutput = html.querySelector("#output-ui");
    let settings = html.querySelector("#material-option");
    let defaultCode = new (IdentityMapOfStringL$dynamic()).from(["name", new (IdentityMapOfStringL$StringL()).from(["first-name", "John", "last-name", "Doe"]), "details", new (IdentityMapOfStringL$ObjectL()).from(["email", "test@email.com", "favorite-color", "#ffffff", "age", 0, "birthday", "2015-05-22T14:56:28.000Z"]), "address", new (IdentityMapOfStringL$StringL()).from(["street", "", "city", "", "state", "", "zip", ""])]);
    let textInput = html.TextAreaElement.as(html.querySelector("#json-input"));
    let textOutput = html.TextAreaElement.as(html.querySelector("#json-output"));
    let form = html.TextAreaElement.as(html.querySelector("#form-output"));
    let editor = new codemirror.CodeMirror.fromTextArea(textInput, {options: new _js_helper.LinkedMap.from(["mode", "javascript", "theme", "blackboard"])});
    let viewer = new codemirror.CodeMirror.fromTextArea(textOutput, {options: new _js_helper.LinkedMap.from(["mode", "html", "theme", "blackboard", "readOnly", true])});
    let formOutput = new codemirror.CodeMirror.fromTextArea(form, {options: new _js_helper.LinkedMap.from(["mode", "javascript", "theme", "blackboard", "readOnly", true])});
    settings[$addEventListener]("click", dart.fn(event => {
      main._useMaterial = !dart.test(main._useMaterial);
      main._update(editor, uiOutput, viewer);
      main._listenForm(html.FormElement.as(html.querySelector("#input-form")), formOutput, editor);
    }, EventLToNullN()));
    main.updateHtmlUIOutput(uiOutput, defaultCode);
    main.updateCode(editor, defaultCode);
    main.updateHtmlCodeOutput(viewer, defaultCode);
    let formElement = html.FormElement.as(html.querySelector("#input-form"));
    editor.onChange.listen(dart.fn(event => {
      main._update(editor, uiOutput, viewer);
      main._submitForm(formElement, formOutput, editor);
    }, dynamicToNullN()));
    main._listenForm(formElement, formOutput, editor);
  };
  main._listenForm = function _listenForm(formElement, formOutput, editor) {
    main._submitForm(formElement, formOutput, editor);
    formElement[$onSubmit].listen(dart.fn(event => {
      event.preventDefault();
      main._submitForm(formElement, formOutput, editor);
    }, EventLToNullN()));
    formElement[$addEventListener]("change", dart.fn(event => {
      main._submitForm(formElement, formOutput, editor);
    }, EventLToNullN()));
  };
  main._submitForm = function _submitForm(formElement, formOutput, editor) {
    let jsonInput = core.Map.as(convert.json.decode(editor.getDoc().getValue()));
    let data = html.FormData.new(formElement);
    let _json = new (IdentityMapOfStringL$dynamic()).new();
    main._readJson(data, MapOfStringL$dynamic().as(jsonInput), MapOfStringL$dynamic().as(_json));
    formOutput.getDoc().setValue(main._getPrettyJson(MapOfStringL$dynamic().as(_json)));
  };
  main._readJson = function _readJson(formData, input, output, mapKey = null) {
    for (let key of input[$keys]) {
      let value = input[$_get](key);
      if (typeof value == 'string') {
        let _key = key;
        _key = mapKey == null ? key : dart.str(mapKey) + "[" + dart.str(_key) + "]";
        output[$_set](key, formData.get(_key));
      } else if (core.Map.is(value)) {
        output[$_set](key, new (IdentityMapOfStringL$dynamic()).new());
        main._readJson(formData, MapOfStringL$dynamic().as(value), MapOfStringL$dynamic().as(output[$_get](key)), key);
      }
    }
  };
  main._update = function _update(editor, uiOutput, viewer) {
    let value = editor.getDoc().getValue();
    let jsonInput = convert.json.decode(value);
    main.updateHtmlUIOutput(uiOutput, MapOfStringL$dynamic().as(jsonInput));
    main.updateHtmlCodeOutput(viewer, MapOfStringL$dynamic().as(jsonInput));
  };
  main.updateCode = function updateCode(editor, defaultCode) {
    let prettyprint = main._getPrettyJson(defaultCode);
    editor.getDoc().setValue(prettyprint);
  };
  main._getPrettyJson = function _getPrettyJson(defaultCode) {
    let encoder = new convert.JsonEncoder.withIndent("  ");
    let prettyprint = encoder.convert(defaultCode);
    return prettyprint;
  };
  main.updateHtmlCodeOutput = function updateHtmlCodeOutput(editor, jsonInput) {
    let output = main.convertToHtml(jsonInput, true);
    editor.getDoc().setValue(output);
  };
  main.updateHtmlUIOutput = function updateHtmlUIOutput(element, jsonInput) {
    let t0;
    let output = main.convertToHtml(jsonInput, false);
    element[$setInnerHtml](output, {validator: (t0 = new html.NodeValidatorBuilder.new(), t0.allowHtml5(), t0.allowElement("mwc-textfield", {attributes: JSArrayOfStringL().of(["value", "label", "type", "style"])}), t0)});
  };
  main.convertToHtml = function convertToHtml(jsonInput, codeOnly) {
    let sb = new core.StringBuffer.new();
    if (dart.test(codeOnly)) {
      sb.write("  <form action=\"/action_page.php\" method=\"post\">\n\n  ");
    } else {
      sb.write("  <form id=\"input-form\" method=\"post\">\n\n  ");
    }
    for (let key of jsonInput[$keys]) {
      let value = jsonInput[$_get](key);
      main.readKeys(sb, key, value);
    }
    sb.write("    <br/>\n    <input type=\"submit\" value=\"Submit\">\n  </form>\n  ");
    if (!dart.test(codeOnly)) return sb.toString();
    return main.wrapHtml(sb.toString(), codeOnly);
  };
  main.readKeys = function readKeys(sb, key, value, parents = null) {
    let name = new recase.ReCase.new(key).titleCase;
    if (core.Map.is(value)) {
      main._readMap(parents, key, sb, name, value);
      return;
    }
    if (core.List.is(value)) {
      return;
    }
    let objectName = key;
    let hasParent = parents != null && dart.test(parents[$isNotEmpty]);
    if (hasParent) {
      for (let parent of parents) {
        objectName = dart.str(parent) + "[" + dart.str(objectName) + "]";
      }
    }
    let type = "text";
    let placeholder = "";
    if (typeof value == 'string') {
      placeholder = value;
      if (value[$contains]("@")) {
        type = "email";
      } else if (value[$startsWith]("#")) {
        type = "color";
      } else if (value[$startsWith]("http")) {
        type = "url";
      } else if (core.DateTime.tryParse(value) != null) {
        type = "date";
      }
    } else if (typeof value == 'number' || core.int.is(value) || typeof value == 'number') {
      type = "number";
      placeholder = dart.toString(value);
    } else if (typeof value == 'boolean') {
      type = "checkbox";
      placeholder = dart.toString(value);
    }
    if (dart.test(main._useMaterial)) {
      sb.writeln("    <mwc-textfield style=\"margin:5px\" label=\"" + dart.str(name) + "\" type=\"" + type + "\" value=\"" + dart.str(placeholder) + "\"></mwc-textfield><br>\n    ");
    } else {
      sb.writeln("    <label for=\"" + dart.str(key) + "\">" + dart.str(name) + ":</label><br>\n    <input type=\"" + type + "\" id=\"" + dart.str(key) + "\" name=\"" + dart.str(objectName) + "\" value=\"" + dart.str(placeholder) + "\" placeholder=\"" + dart.str(placeholder) + "\"><br>\n    ");
    }
  };
  main._readMap = function _readMap(parents, key, sb, name, value) {
    let t0;
    let _parents = (t0 = parents, t0 == null ? JSArrayOfStringL().of([]) : t0);
    _parents[$add](key);
    sb.writeln("  <h4>" + dart.str(name) + "</h4>");
    for (let subKey of value[$keys]) {
      main.readKeys(sb, core.String.as(subKey), value[$_get](subKey), _parents);
    }
  };
  main.wrapHtml = function wrapHtml(body, codeOnly) {
    let sb = new core.StringBuffer.new();
    sb.write("    <!DOCTYPE html>  \n<html>  \n  \n<head> \n   <title>HTML Output</title> \n   ");
    sb.write("</head> \n  \n<body>\n");
    sb.writeln(body);
    if (dart.test(main._useMaterial)) {
      if (dart.test(codeOnly)) {
        sb.writeln("<script type=\"module\">\n  import '@material/mwc-textfield';\n</script> \n  ");
      } else {
        sb.writeln("<script type=\"module\" src=\"./output/index.js\"></script>");
      }
    }
    sb.writeln("</body>  \n  \n</html>  \n  ");
    return sb.toString();
  };
  dart.defineLazy(main, {
    /*main._useMaterial*/get _useMaterial() {
      return false;
    },
    set _useMaterial(_) {}
  }, true);
  dart.trackLibraries("web/main", {
    "org-dartlang-app:///web/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":"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","file":"main.ddc.js"}');
  // Exports:
  return {
    web__main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
