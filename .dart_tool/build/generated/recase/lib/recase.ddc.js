define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var recase = Object.create(dart.library);
  var $contains = dartx.contains;
  var $codeUnitAt = dartx.codeUnitAt;
  var $add = dartx.add;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $_get = dartx._get;
  var $toLowerCase = dartx.toLowerCase;
  var $_set = dartx._set;
  var $join = dartx.join;
  var $toUpperCase = dartx.toUpperCase;
  var $substring = dartx.substring;
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(core.String)))();
  var StringLToStringL = () => (StringLToStringL = dart.constFn(dart.fnType(core.String, [core.String])))();
  const CT = Object.create(null);
  var L0 = "package:recase/recase.dart";
  var _upperAlphaRegex = dart.privateName(recase, "_upperAlphaRegex");
  var _symbolRegex = dart.privateName(recase, "_symbolRegex");
  var _words = dart.privateName(recase, "_words");
  var _groupIntoWords = dart.privateName(recase, "_groupIntoWords");
  var _getCamelCase = dart.privateName(recase, "_getCamelCase");
  var _getConstantCase = dart.privateName(recase, "_getConstantCase");
  var _getSentenceCase = dart.privateName(recase, "_getSentenceCase");
  var _getSnakeCase = dart.privateName(recase, "_getSnakeCase");
  var _getPascalCase = dart.privateName(recase, "_getPascalCase");
  var _upperCaseFirstLetter = dart.privateName(recase, "_upperCaseFirstLetter");
  var originalText = dart.privateName(recase, "ReCase.originalText");
  recase.ReCase = class ReCase extends core.Object {
    get originalText() {
      return this[originalText];
    }
    set originalText(value) {
      this[originalText] = value;
    }
    [_groupIntoWords](text) {
      let sb = new core.StringBuffer.new();
      let words = JSArrayOfStringL().of([]);
      let isAllCaps = !text[$contains](core.RegExp.new("[a-z]"));
      for (let i = 0; i < text.length; i = i + 1) {
        let char = core.String.fromCharCode(text[$codeUnitAt](i));
        let nextChar = i + 1 === text.length ? null : core.String.fromCharCode(text[$codeUnitAt](i + 1));
        if (dart.test(this[_symbolRegex].hasMatch(char))) {
          continue;
        }
        sb.write(char);
        let isEndOfWord = nextChar == null || dart.test(this[_upperAlphaRegex].hasMatch(nextChar)) && !isAllCaps || dart.test(this[_symbolRegex].hasMatch(nextChar));
        if (isEndOfWord) {
          words[$add](sb.toString());
          sb.clear();
        }
      }
      return words;
    }
    get camelCase() {
      return this[_getCamelCase]();
    }
    get constantCase() {
      return this[_getConstantCase]();
    }
    get sentenceCase() {
      return this[_getSentenceCase]();
    }
    get snakeCase() {
      return this[_getSnakeCase]();
    }
    get dotCase() {
      return this[_getSnakeCase]({separator: "."});
    }
    get paramCase() {
      return this[_getSnakeCase]({separator: "-"});
    }
    get pathCase() {
      return this[_getSnakeCase]({separator: "/"});
    }
    get pascalCase() {
      return this[_getPascalCase]();
    }
    get headerCase() {
      return this[_getPascalCase]({separator: "-"});
    }
    get titleCase() {
      return this[_getPascalCase]({separator: " "});
    }
    [_getCamelCase](opts) {
      let separator = opts && 'separator' in opts ? opts.separator : "";
      let words = this[_words][$map](core.String, dart.bind(this, _upperCaseFirstLetter))[$toList]();
      words[$_set](0, words[$_get](0)[$toLowerCase]());
      return words[$join](separator);
    }
    [_getConstantCase](opts) {
      let separator = opts && 'separator' in opts ? opts.separator : "_";
      let words = this[_words][$map](core.String, dart.fn(word => word[$toUpperCase](), StringLToStringL()))[$toList]();
      return words[$join](separator);
    }
    [_getPascalCase](opts) {
      let separator = opts && 'separator' in opts ? opts.separator : "";
      let words = this[_words][$map](core.String, dart.bind(this, _upperCaseFirstLetter))[$toList]();
      return words[$join](separator);
    }
    [_getSentenceCase](opts) {
      let separator = opts && 'separator' in opts ? opts.separator : " ";
      let words = this[_words][$map](core.String, dart.fn(word => word[$toLowerCase](), StringLToStringL()))[$toList]();
      words[$_set](0, this[_upperCaseFirstLetter](words[$_get](0)));
      return words[$join](separator);
    }
    [_getSnakeCase](opts) {
      let separator = opts && 'separator' in opts ? opts.separator : "_";
      let words = this[_words][$map](core.String, dart.fn(word => word[$toLowerCase](), StringLToStringL()))[$toList]();
      return words[$join](separator);
    }
    [_upperCaseFirstLetter](word) {
      return word[$substring](0, 1)[$toUpperCase]() + word[$substring](1)[$toLowerCase]();
    }
  };
  (recase.ReCase.new = function(text) {
    this[_upperAlphaRegex] = core.RegExp.new("[A-Z]");
    this[_symbolRegex] = core.RegExp.new("[ ./_\\-]");
    this[originalText] = null;
    this[_words] = null;
    this.originalText = text;
    this[_words] = this[_groupIntoWords](text);
  }).prototype = recase.ReCase.prototype;
  dart.addTypeTests(recase.ReCase);
  dart.addTypeCaches(recase.ReCase);
  dart.setMethodSignature(recase.ReCase, () => ({
    __proto__: dart.getMethods(recase.ReCase.__proto__),
    [_groupIntoWords]: dart.fnType(core.List$(core.String), [core.String]),
    [_getCamelCase]: dart.fnType(core.String, [], {separator: core.String}, {}),
    [_getConstantCase]: dart.fnType(core.String, [], {separator: core.String}, {}),
    [_getPascalCase]: dart.fnType(core.String, [], {separator: core.String}, {}),
    [_getSentenceCase]: dart.fnType(core.String, [], {separator: core.String}, {}),
    [_getSnakeCase]: dart.fnType(core.String, [], {separator: core.String}, {}),
    [_upperCaseFirstLetter]: dart.fnType(core.String, [core.String])
  }));
  dart.setGetterSignature(recase.ReCase, () => ({
    __proto__: dart.getGetters(recase.ReCase.__proto__),
    camelCase: core.String,
    constantCase: core.String,
    sentenceCase: core.String,
    snakeCase: core.String,
    dotCase: core.String,
    paramCase: core.String,
    pathCase: core.String,
    pascalCase: core.String,
    headerCase: core.String,
    titleCase: core.String
  }));
  dart.setLibraryUri(recase.ReCase, L0);
  dart.setFieldSignature(recase.ReCase, () => ({
    __proto__: dart.getFields(recase.ReCase.__proto__),
    [_upperAlphaRegex]: dart.finalFieldType(core.RegExp),
    [_symbolRegex]: dart.finalFieldType(core.RegExp),
    originalText: dart.fieldType(core.String),
    [_words]: dart.fieldType(core.List$(core.String))
  }));
  recase['StringReCase|get#camelCase'] = function StringReCase$124get$35camelCase($this) {
    return new recase.ReCase.new($this).camelCase;
  };
  recase['StringReCase|get#constantCase'] = function StringReCase$124get$35constantCase($this) {
    return new recase.ReCase.new($this).constantCase;
  };
  recase['StringReCase|get#sentenceCase'] = function StringReCase$124get$35sentenceCase($this) {
    return new recase.ReCase.new($this).sentenceCase;
  };
  recase['StringReCase|get#snakeCase'] = function StringReCase$124get$35snakeCase($this) {
    return new recase.ReCase.new($this).snakeCase;
  };
  recase['StringReCase|get#dotCase'] = function StringReCase$124get$35dotCase($this) {
    return new recase.ReCase.new($this).dotCase;
  };
  recase['StringReCase|get#paramCase'] = function StringReCase$124get$35paramCase($this) {
    return new recase.ReCase.new($this).paramCase;
  };
  recase['StringReCase|get#pathCase'] = function StringReCase$124get$35pathCase($this) {
    return new recase.ReCase.new($this).pathCase;
  };
  recase['StringReCase|get#pascalCase'] = function StringReCase$124get$35pascalCase($this) {
    return new recase.ReCase.new($this).pascalCase;
  };
  recase['StringReCase|get#headerCase'] = function StringReCase$124get$35headerCase($this) {
    return new recase.ReCase.new($this).headerCase;
  };
  recase['StringReCase|get#titleCase'] = function StringReCase$124get$35titleCase($this) {
    return new recase.ReCase.new($this).titleCase;
  };
  dart.trackLibraries("packages/recase/recase", {
    "package:recase/recase.dart": recase
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["recase.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAKS;;;;;;sBAQ6B;AACrB,eAAS;AACT,kBAAQ;AAChB,sBAAY,CAAC,AAAK,IAAD,YAAU,gBAAO;AAEvC,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,AAAK,IAAD,SAAS,IAAA,AAAC,CAAA;AACzB,mBAAW,yBAAoB,AAAK,IAAD,cAAY,CAAC;AAChD,uBAAY,AAAE,AAAI,CAAL,GAAG,MAAK,AAAK,IAAD,UAC1B,OACI,yBAAoB,AAAK,IAAD,cAAY,AAAE,CAAD,GAAG;AAElD,sBAAI,AAAa,4BAAS,IAAI;AAC5B;;AAGY,QAAd,AAAG,EAAD,OAAO,IAAI;AAER,0BAAc,AAAS,AAC4B,QAD7B,IAAI,kBAC1B,AAAiB,gCAAS,QAAQ,OAAM,SAAS,cAClD,AAAa,4BAAS,QAAQ;AAElC,YAAI,WAAW;AACW,UAAxB,AAAM,KAAD,OAAK,AAAG,EAAD;AACF,UAAV,AAAG,EAAD;;;AAIN,YAAO,MAAK;IACd;;AAGwB;IAAe;;AAGZ;IAAkB;;AAGlB;IAAkB;;AAGrB;IAAe;;AAGjB,6CAAyB;IAAI;;AAG3B,6CAAyB;IAAI;;AAG9B,6CAAyB;IAAI;;AAG3B;IAAgB;;AAGhB,8CAA0B;IAAI;;AAG/B,8CAA0B;IAAI;;UAEzB;AACd,kBAAa,AAAO,AAA2B,0CAAvB;AACJ,MAAjC,AAAK,KAAA,QAAC,GAAK,AAAK,AAAI,KAAJ,QAAC;AAEjB,YAAO,AAAM,MAAD,QAAM,SAAS;IAC7B;;UAEgC;AACjB,kBAAa,AAAO,AAAkC,gCAA9B,QAAC,QAAS,AAAK,IAAD;AAEnD,YAAO,AAAM,MAAD,QAAM,SAAS;IAC7B;;UAE8B;AACf,kBAAa,AAAO,AAA2B,0CAAvB;AAErC,YAAO,AAAM,MAAD,QAAM,SAAS;IAC7B;;UAEgC;AACjB,kBAAa,AAAO,AAAkC,gCAA9B,QAAC,QAAS,AAAK,IAAD;AACT,MAA1C,AAAK,KAAA,QAAC,GAAK,4BAAsB,AAAK,KAAA,QAAC;AAEvC,YAAO,AAAM,MAAD,QAAM,SAAS;IAC7B;;UAE6B;AACd,kBAAa,AAAO,AAAkC,gCAA9B,QAAC,QAAS,AAAK,IAAD;AAEnD,YAAO,AAAM,MAAD,QAAM,SAAS;IAC7B;4BAEoC;AAClC,YAAU,AAAK,AAAgB,AAAiD,KAAlE,aAAW,GAAG,qBAAmB,AAAK,AAAa,IAAd,aAAW;IAChE;;gCAnGc;IAND,yBAAuB,gBAAO;IAC9B,qBAAmB,gBAAO;IAEhC;IACM;AAGa,IAAnB,oBAAe,IAAI;AACW,IAA9B,eAAS,sBAAgB,IAAI;EACpC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAqGwB,UAAA,AAAa;EAAS;;AAEnB,UAAA,AAAa;EAAY;;AAEzB,UAAA,AAAa;EAAY;;AAE5B,UAAA,AAAa;EAAS;;AAExB,UAAA,AAAa;EAAO;;AAElB,UAAA,AAAa;EAAS;;AAEvB,UAAA,AAAa;EAAQ;;AAEnB,UAAA,AAAa;EAAU;;AAEvB,UAAA,AAAa;EAAU;;AAExB,UAAA,AAAa;EAAS","file":"recase.ddc.js"}');
  // Exports:
  return {
    recase: recase
  };
});

//# sourceMappingURL=recase.ddc.js.map
