define(['dart_sdk', 'packages/codemirror/src/js_utils'], function(dart_sdk, packages__codemirror__src__js_utils) {
  'use strict';
  const core = dart_sdk.core;
  const js = dart_sdk.js;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const js_utils = packages__codemirror__src__js_utils.src__js_utils;
  var codemirror = Object.create(dart.library);
  var $_set = dartx._set;
  var $where = dartx.where;
  var $add = dartx.add;
  var $containsKey = dartx.containsKey;
  var $_get = dartx._get;
  var $map = dartx.map;
  var $remove = dartx.remove;
  var $isNotEmpty = dartx.isNotEmpty;
  var $values = dartx.values;
  var $hashCode = dartx.hashCode;
  var $compareTo = dartx.compareTo;
  var $isEmpty = dartx.isEmpty;
  var $first = dartx.first;
  var ListOfStringL = () => (ListOfStringL = dart.constFn(core.List$(core.String)))();
  var dynamicToboolL = () => (dynamicToboolL = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  var JsObjectLToNullN = () => (JsObjectLToNullN = dart.constFn(dart.fnType(core.Null, [js.JsObject])))();
  var ListOfTokenL = () => (ListOfTokenL = dart.constFn(core.List$(codemirror.Token)))();
  var dynamicToTokenL = () => (dynamicToTokenL = dart.constFn(dart.fnType(codemirror.Token, [dart.dynamic])))();
  var JSArrayOfTokenL = () => (JSArrayOfTokenL = dart.constFn(_interceptors.JSArray$(codemirror.Token)))();
  var IdentityMapOfStringL$intL = () => (IdentityMapOfStringL$intL = dart.constFn(_js_helper.IdentityMap$(core.String, core.int)))();
  var ListOfJsObjectL = () => (ListOfJsObjectL = dart.constFn(core.List$(js.JsObject)))();
  var IdentityMapOfStringL$JsEventListenerL = () => (IdentityMapOfStringL$JsEventListenerL = dart.constFn(_js_helper.IdentityMap$(core.String, js_utils.JsEventListener)))();
  var dynamicAnddynamicAnddynamicTodynamic = () => (dynamicAnddynamicAnddynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic, dart.dynamic])))();
  var dynamicAnddynamicTodynamic = () => (dynamicAnddynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic])))();
  var LinkedMapOfJsObjectL$CodeMirrorL = () => (LinkedMapOfJsObjectL$CodeMirrorL = dart.constFn(_js_helper.LinkedMap$(js.JsObject, codemirror.CodeMirror)))();
  var IterableOfStringL = () => (IterableOfStringL = dart.constFn(core.Iterable$(core.String)))();
  var JsArrayOfJsObjectL = () => (JsArrayOfJsObjectL = dart.constFn(js.JsArray$(js.JsObject)))();
  var SpanLToJsObjectL = () => (SpanLToJsObjectL = dart.constFn(dart.fnType(js.JsObject, [codemirror.Span])))();
  var PositionLToJsObjectL = () => (PositionLToJsObjectL = dart.constFn(dart.fnType(js.JsObject, [codemirror.Position])))();
  var JsObjectLAndintLToJsObjectL = () => (JsObjectLAndintLToJsObjectL = dart.constFn(dart.fnType(js.JsObject, [js.JsObject, core.int])))();
  var JsObjectLToSpanL = () => (JsObjectLToSpanL = dart.constFn(dart.fnType(codemirror.Span, [js.JsObject])))();
  var IterableOfSpanL = () => (IterableOfSpanL = dart.constFn(core.Iterable$(codemirror.Span)))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  var JSArrayOfTextMarkerL = () => (JSArrayOfTextMarkerL = dart.constFn(_interceptors.JSArray$(codemirror.TextMarker)))();
  var ListOfTextMarkerL = () => (ListOfTextMarkerL = dart.constFn(core.List$(codemirror.TextMarker)))();
  var dynamicToTextMarkerL = () => (dynamicToTextMarkerL = dart.constFn(dart.fnType(codemirror.TextMarker, [dart.dynamic])))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(core.String)))();
  var IdentityMapOfStringL$JsObjectL = () => (IdentityMapOfStringL$JsObjectL = dart.constFn(_js_helper.IdentityMap$(core.String, js.JsObject)))();
  var JSArrayOfPositionL = () => (JSArrayOfPositionL = dart.constFn(_interceptors.JSArray$(codemirror.Position)))();
  const CT = Object.create(null);
  var L0 = "package:codemirror/codemirror.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList(["3024-day", "3024-night", "abcdef", "ambiance-mobile", "ambiance", "ayu-dark", "ayu-mirage", "base16-dark", "base16-light", "bespin", "blackboard", "cobalt", "colorforth", "darcula", "dracula", "duotone-dark", "duotone-light", "eclipse", "elegant", "erlang-dark", "gruvbox-dark", "hopscotch", "icecoder", "idea", "isotope", "lesser-dark", "liquibyte", "lucario", "material-darker", "material-ocean", "material-palenight", "material", "mbo", "mdn-like", "midnight", "monokai", "moxer", "neat", "neo", "night", "nord", "oceanic-next", "panda-syntax", "paraiso-dark", "paraiso-light", "pastel-on-dark", "railscasts", "rubyblue", "seti", "shadowfox", "solarized", "ssms", "the-matrix", "tomorrow-night-bright", "tomorrow-night-eighties", "ttcn", "twilight", "vibrant-ink", "xq-dark", "xq-light", "yeti", "yonce", "zenburn"], core.String);
    },
    get C1() {
      return C1 = dart.constList(["default", "emacs", "sublime", "vim"], core.String);
    }
  }, false);
  var _doc = dart.privateName(codemirror, "_doc");
  var _events = dart.privateName(codemirror, "_events");
  var jsProxy$ = dart.privateName(codemirror, "ProxyHolder.jsProxy");
  codemirror.ProxyHolder = class ProxyHolder extends core.Object {
    get jsProxy() {
      return this[jsProxy$];
    }
    set jsProxy(value) {
      super.jsProxy = value;
    }
    call(methodName) {
      return this.jsProxy.callMethod(methodName);
    }
    callArg(methodName, arg) {
      return this.jsProxy.callMethod(methodName, [arg]);
    }
    callArgs(methodName, args) {
      return this.jsProxy.callMethod(methodName, args);
    }
    onEvent(T, eventName, opts) {
      let argCount = opts && 'argCount' in opts ? opts.argCount : 1;
      if (!dart.test(this[_events][$containsKey](eventName))) {
        if (argCount === 4) {
          this[_events][$_set](eventName, new (js_utils.JsEventListener$(T)).new(this.jsProxy, eventName, {cvtEvent: dart.fn((a, b, c) => a, dynamicAnddynamicAnddynamicTodynamic()), argCount: argCount}));
        } else if (argCount === 3) {
          this[_events][$_set](eventName, new (js_utils.JsEventListener$(T)).new(this.jsProxy, eventName, {cvtEvent: dart.fn((a, b) => a, dynamicAnddynamicTodynamic()), argCount: argCount}));
        } else if (argCount === 2) {
          this[_events][$_set](eventName, new (js_utils.JsEventListener$(T)).new(this.jsProxy, eventName, {argCount: argCount}));
        } else {
          this[_events][$_set](eventName, new (js_utils.JsEventListener$(T)).new(this.jsProxy, eventName));
        }
      }
      return async.Stream$(T).as(this[_events][$_get](eventName).stream);
    }
    get hashCode() {
      return dart.hashCode(this.jsProxy);
    }
    _equals(other) {
      if (other == null) return false;
      return codemirror.ProxyHolder.is(other) && dart.equals(this.jsProxy, other.jsProxy);
    }
    dispose() {
      if (dart.test(this[_events][$isNotEmpty])) {
        for (let event of this[_events][$values]) {
          event.dispose();
        }
      }
    }
  };
  (codemirror.ProxyHolder.new = function(jsProxy) {
    this[_events] = new (IdentityMapOfStringL$JsEventListenerL()).new();
    this[jsProxy$] = jsProxy;
    ;
  }).prototype = codemirror.ProxyHolder.prototype;
  dart.addTypeTests(codemirror.ProxyHolder);
  dart.addTypeCaches(codemirror.ProxyHolder);
  dart.setMethodSignature(codemirror.ProxyHolder, () => ({
    __proto__: dart.getMethods(codemirror.ProxyHolder.__proto__),
    call: dart.fnType(dart.dynamic, [core.String]),
    callArg: dart.fnType(dart.dynamic, [core.String, dart.dynamic]),
    callArgs: dart.fnType(dart.dynamic, [core.String, core.List]),
    onEvent: dart.gFnType(T => [async.Stream$(T), [core.String], {argCount: core.int}, {}]),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(codemirror.ProxyHolder, L0);
  dart.setFieldSignature(codemirror.ProxyHolder, () => ({
    __proto__: dart.getFields(codemirror.ProxyHolder.__proto__),
    jsProxy: dart.finalFieldType(js.JsObject),
    [_events]: dart.finalFieldType(core.Map$(core.String, js_utils.JsEventListener))
  }));
  dart.defineExtensionMethods(codemirror.ProxyHolder, ['_equals']);
  dart.defineExtensionAccessors(codemirror.ProxyHolder, ['hashCode']);
  var C0;
  var C1;
  codemirror.CodeMirror = class CodeMirror extends codemirror.ProxyHolder {
    static get _cm() {
      return js.JsObject.as(js.context._get("CodeMirror"));
    }
    static get MODES() {
      return ListOfStringL().from(js_utils.keys(js.JsObject.as(codemirror.CodeMirror._cm._get("modes")))[$where](dart.fn(modeName => !dart.equals(modeName, "null"), dynamicToboolL())));
    }
    static get MIME_MODES() {
      return ListOfStringL().from(js_utils.keys(js.JsObject.as(codemirror.CodeMirror._cm._get("mimeModes"))));
    }
    static get COMMANDS() {
      return ListOfStringL().from(js_utils.keys(js.JsObject.as(codemirror.CodeMirror._cm._get("commands"))));
    }
    static get version() {
      return core.String.as(codemirror.CodeMirror._cm._get("version"));
    }
    static findModeByExtension(ext) {
      return codemirror.ModeInfo.new(js.JsObject.as(codemirror.CodeMirror._cm.callMethod("findModeByExtension", [ext])));
    }
    static findModeByMime(mime) {
      return codemirror.ModeInfo.new(js.JsObject.as(codemirror.CodeMirror._cm.callMethod("findModeByMIME", [mime])));
    }
    static findModeByFileName(name) {
      return codemirror.ModeInfo.new(js.JsObject.as(codemirror.CodeMirror._cm.callMethod("findModeByFileName", [name])));
    }
    static findModeByName(name) {
      return codemirror.ModeInfo.new(js.JsObject.as(codemirror.CodeMirror._cm.callMethod("findModeByName", [name])));
    }
    static defineExtension(name, value) {
      codemirror.CodeMirror._cm.callMethod("defineExtension", [name, value]);
    }
    static defineDocExtension(name, value) {
      codemirror.CodeMirror._cm.callMethod("defineDocExtension", [name, value]);
    }
    static registerHelper(type, mode, helper) {
      codemirror.CodeMirror._cm.callMethod("registerHelper", [type, mode, helper]);
    }
    static _createFromElement(element, options) {
      if (options == null) {
        return js.JsObject.new(js.JsFunction.as(codemirror.CodeMirror._cm), [element]);
      } else {
        return js.JsObject.new(js.JsFunction.as(codemirror.CodeMirror._cm), [element, js_utils.jsify(options)]);
      }
    }
    static _createFromTextArea(textArea, options) {
      let args = [textArea];
      if (options != null) args[$add](js_utils.jsify(options));
      return js.JsObject.as(codemirror.CodeMirror._cm.callMethod("fromTextArea", args));
    }
    static addCommand(name, callback) {
      dart.dsend(codemirror.CodeMirror._cm._get("commands"), '_set', [name, dart.fn(obj => {
          let editor = codemirror.CodeMirror.fromJsObject(obj);
          callback(editor);
        }, JsObjectLToNullN())]);
    }
    static fromJsObject(object) {
      if (dart.test(codemirror.CodeMirror._instances[$containsKey](object))) {
        return codemirror.CodeMirror._instances[$_get](object);
      } else {
        return new codemirror.CodeMirror._fromJsObject(object);
      }
    }
    get onChange() {
      return this.onEvent(dart.dynamic, "change", {argCount: 2});
    }
    get onCursorActivity() {
      return this.onEvent(dart.dynamic, "cursorActivity");
    }
    get onMouseDown() {
      return this.onEvent(dart.dynamic, "mousedown", {argCount: 2}).cast(html.MouseEvent);
    }
    get onDoubleClick() {
      return this.onEvent(dart.dynamic, "dblclick", {argCount: 2}).cast(html.MouseEvent);
    }
    get onGutterClick() {
      return this.onEvent(core.int, "gutterClick", {argCount: 4});
    }
    getDoc() {
      this[_doc] == null ? this[_doc] = new codemirror.Doc.fromProxy(js.JsObject.as(this.call("getDoc"))) : null;
      return this[_doc];
    }
    swapDoc(doc) {
      this[_doc] = doc;
      this.callArg("swapDoc", doc.jsProxy);
    }
    getOption(option) {
      return this.callArg("getOption", option);
    }
    setOption(option, value) {
      return this.callArgs("setOption", [option, value]);
    }
    getTheme() {
      return core.String.as(this.getOption("theme"));
    }
    setTheme(theme) {
      return this.setOption("theme", theme);
    }
    getMode() {
      return core.String.as(this.getOption("mode"));
    }
    setMode(mode) {
      return this.setOption("mode", mode);
    }
    getKeyMap() {
      return core.String.as(this.getOption("keyMap"));
    }
    setKeyMap(value) {
      return this.setOption("keyMap", value);
    }
    getLineNumbers() {
      return core.bool.as(this.getOption("lineNumbers"));
    }
    setLineNumbers(value) {
      return this.setOption("lineNumbers", value);
    }
    getLine(n) {
      return core.String.as(this.callArg("getLine", n));
    }
    getIndentWithTabs() {
      return core.bool.as(this.getOption("indentWithTabs"));
    }
    setIndentWithTabs(value) {
      return this.setOption("indentWithTabs", value);
    }
    getReadOnly() {
      return dart.equals(this.getOption("readOnly"), true) || dart.equals(this.getOption("readOnly"), "true") || dart.equals(this.getOption("readOnly"), "nocursor");
    }
    setReadOnly(value, noCursor = false) {
      if (dart.test(value)) {
        if (dart.test(noCursor)) {
          this.setOption("readOnly", "nocursor");
        } else {
          this.setOption("readOnly", value);
        }
      } else {
        this.setOption("readOnly", value);
      }
    }
    getTabSize() {
      return core.int.as(this.getOption("tabSize"));
    }
    setTabSize(value) {
      return this.setOption("tabSize", value);
    }
    getIndentUnit() {
      return core.int.as(this.getOption("indentUnit"));
    }
    setIndentUnit(value) {
      return this.setOption("indentUnit", value);
    }
    refresh() {
      return this.call("refresh");
    }
    focus() {
      return this.call("focus");
    }
    getInputField() {
      return html.Element.as(this.call("getInputField"));
    }
    getCursor(start = null) {
      return new codemirror.Position.fromProxy(start == null ? this.call("getCursor") : this.callArg("getCursor", start));
    }
    execCommand(name) {
      this.callArg("execCommand", name);
    }
    setGutterMarker(line, gutterID, value) {
      this.callArgs("setGutterMarker", [line, gutterID, value]);
    }
    clearGutter(gutterID) {
      this.callArg("clearGutter", gutterID);
    }
    addWidget(pos, node, scrollIntoView = false) {
      this.callArgs("addWidget", [pos.toProxy(), node, scrollIntoView]);
    }
    addLineWidget(line, node, opts) {
      let coverGutter = opts && 'coverGutter' in opts ? opts.coverGutter : null;
      let noHScroll = opts && 'noHScroll' in opts ? opts.noHScroll : null;
      let above = opts && 'above' in opts ? opts.above : null;
      let handleMouseEvents = opts && 'handleMouseEvents' in opts ? opts.handleMouseEvents : null;
      let insertAt = opts && 'insertAt' in opts ? opts.insertAt : null;
      let className = opts && 'className' in opts ? opts.className : null;
      let options = new _js_helper.LinkedMap.new();
      if (coverGutter != null) options[$_set]("coverGutter", coverGutter);
      if (noHScroll != null) options[$_set]("noHScroll", noHScroll);
      if (above != null) options[$_set]("above", above);
      if (handleMouseEvents != null) {
        options[$_set]("handleMouseEvents", handleMouseEvents);
      }
      if (insertAt != null) options[$_set]("insertAt", insertAt);
      if (className != null) options[$_set]("className", className);
      let l = codemirror.LineHandle.is(line) ? line.jsProxy : line;
      return new codemirror.LineWidget.new(js.JsObject.as(this.callArgs("addLineWidget", [l, node, js_utils.jsify(options)])));
    }
    addLineClass(line, where, cssClass) {
      let l = codemirror.LineHandle.is(line) ? line.jsProxy : line;
      return new codemirror.LineHandle.new(js.JsObject.as(this.callArgs("addLineClass", [l, where, cssClass])));
    }
    removeLineClass(line, where, cssClass = null) {
      let l = codemirror.LineHandle.is(line) ? line.jsProxy : line;
      if (cssClass == null) {
        return new codemirror.LineHandle.new(js.JsObject.as(this.callArgs("removeLineClass", [l, where])));
      } else {
        return new codemirror.LineHandle.new(js.JsObject.as(this.callArgs("removeLineClass", [l, where, cssClass])));
      }
    }
    getTokenAt(pos, precise = null) {
      let r = precise == null ? this.callArg("getTokenAt", pos.toProxy()) : this.callArgs("getTokenAt", [pos.toProxy(), precise]);
      return new codemirror.Token.fromProxy(r);
    }
    getLineTokens(line, precise = null) {
      let result = precise != null ? this.callArgs("getLineTokens", [line, precise]) : this.callArg("getLineTokens", line);
      if (core.List.is(result)) {
        return ListOfTokenL().from(result[$map](dart.dynamic, dart.fn(t => new codemirror.Token.fromProxy(t), dynamicToTokenL())));
      } else {
        return JSArrayOfTokenL().of([]);
      }
    }
    getTokenTypeAt(pos) {
      return core.String.as(this.callArg("getTokenTypeAt", pos));
    }
    setSize(width, height) {
      return this.callArgs("setSize", [width, height]);
    }
    scrollTo(x, y) {
      return this.callArgs("scrollTo", [x, y]);
    }
    getScrollInfo() {
      return new codemirror.ScrollInfo.new(js.JsObject.as(this.call("getScrollInfo")));
    }
    scrollIntoView(line, ch, opts) {
      let margin = opts && 'margin' in opts ? opts.margin : null;
      if (margin != null) {
        this.callArgs("scrollIntoView", [js.JsObject.jsify(new (IdentityMapOfStringL$intL()).from(["line", line, "ch", ch])), margin]);
      } else {
        this.callArgs("scrollIntoView", [js.JsObject.jsify(new (IdentityMapOfStringL$intL()).from(["line", line, "ch", ch]))]);
      }
    }
    getHelpers(pos, type) {
      return ListOfJsObjectL().from(core.Iterable.as(this.callArgs("getHelpers", [pos.toProxy(), type])));
    }
    getHelper(pos, type) {
      return js.JsObject.as(this.callArgs("getHelper", [pos.toProxy(), type]));
    }
    save() {
      return this.call("save");
    }
    toTextArea() {
      return this.call("toTextArea");
    }
    getTextArea() {
      return html.TextAreaElement.as(this.call("getTextArea"));
    }
    dispose() {
      super.dispose();
      codemirror.CodeMirror._instances[$remove](this.jsProxy);
    }
  };
  (codemirror.CodeMirror.fromElement = function(element, opts) {
    let options = opts && 'options' in opts ? opts.options : null;
    this[_doc] = null;
    codemirror.CodeMirror.__proto__.new.call(this, codemirror.CodeMirror._createFromElement(element, options));
    codemirror.CodeMirror._instances[$_set](this.jsProxy, this);
  }).prototype = codemirror.CodeMirror.prototype;
  (codemirror.CodeMirror._fromJsObject = function(object) {
    this[_doc] = null;
    codemirror.CodeMirror.__proto__.new.call(this, object);
    codemirror.CodeMirror._instances[$_set](this.jsProxy, this);
  }).prototype = codemirror.CodeMirror.prototype;
  (codemirror.CodeMirror.fromTextArea = function(textArea, opts) {
    let options = opts && 'options' in opts ? opts.options : null;
    this[_doc] = null;
    codemirror.CodeMirror.__proto__.new.call(this, codemirror.CodeMirror._createFromTextArea(textArea, options));
    codemirror.CodeMirror._instances[$_set](this.jsProxy, this);
  }).prototype = codemirror.CodeMirror.prototype;
  dart.addTypeTests(codemirror.CodeMirror);
  dart.addTypeCaches(codemirror.CodeMirror);
  dart.setMethodSignature(codemirror.CodeMirror, () => ({
    __proto__: dart.getMethods(codemirror.CodeMirror.__proto__),
    getDoc: dart.fnType(codemirror.Doc, []),
    swapDoc: dart.fnType(dart.void, [codemirror.Doc]),
    getOption: dart.fnType(dart.dynamic, [core.String]),
    setOption: dart.fnType(dart.void, [core.String, dart.dynamic]),
    getTheme: dart.fnType(core.String, []),
    setTheme: dart.fnType(dart.void, [core.String]),
    getMode: dart.fnType(core.String, []),
    setMode: dart.fnType(dart.void, [core.String]),
    getKeyMap: dart.fnType(core.String, []),
    setKeyMap: dart.fnType(dart.void, [core.String]),
    getLineNumbers: dart.fnType(core.bool, []),
    setLineNumbers: dart.fnType(dart.void, [core.bool]),
    getLine: dart.fnType(core.String, [core.int]),
    getIndentWithTabs: dart.fnType(core.bool, []),
    setIndentWithTabs: dart.fnType(dart.void, [core.bool]),
    getReadOnly: dart.fnType(core.bool, []),
    setReadOnly: dart.fnType(dart.void, [core.bool], [core.bool]),
    getTabSize: dart.fnType(core.int, []),
    setTabSize: dart.fnType(dart.void, [core.int]),
    getIndentUnit: dart.fnType(core.int, []),
    setIndentUnit: dart.fnType(dart.void, [core.int]),
    refresh: dart.fnType(dart.void, []),
    focus: dart.fnType(dart.void, []),
    getInputField: dart.fnType(html.Element, []),
    getCursor: dart.fnType(codemirror.Position, [], [core.String]),
    execCommand: dart.fnType(dart.void, [core.String]),
    setGutterMarker: dart.fnType(dart.void, [core.int, core.String, html.Element]),
    clearGutter: dart.fnType(dart.void, [core.String]),
    addWidget: dart.fnType(dart.void, [codemirror.Position, html.Element], [core.bool]),
    addLineWidget: dart.fnType(codemirror.LineWidget, [dart.dynamic, html.Element], {above: core.bool, className: core.String, coverGutter: core.bool, handleMouseEvents: core.bool, insertAt: core.int, noHScroll: core.bool}, {}),
    addLineClass: dart.fnType(codemirror.LineHandle, [dart.dynamic, core.String, core.String]),
    removeLineClass: dart.fnType(codemirror.LineHandle, [dart.dynamic, core.String], [core.String]),
    getTokenAt: dart.fnType(codemirror.Token, [codemirror.Position], [core.bool]),
    getLineTokens: dart.fnType(core.List$(codemirror.Token), [core.int], [core.bool]),
    getTokenTypeAt: dart.fnType(core.String, [codemirror.Position]),
    setSize: dart.fnType(dart.void, [core.num, core.num]),
    scrollTo: dart.fnType(dart.void, [core.num, core.num]),
    getScrollInfo: dart.fnType(codemirror.ScrollInfo, []),
    scrollIntoView: dart.fnType(dart.void, [core.int, core.int], {margin: core.int}, {}),
    getHelpers: dart.fnType(core.List$(js.JsObject), [codemirror.Position, core.String]),
    getHelper: dart.fnType(js.JsObject, [codemirror.Position, core.String]),
    save: dart.fnType(dart.void, []),
    toTextArea: dart.fnType(dart.void, []),
    getTextArea: dart.fnType(html.TextAreaElement, [])
  }));
  dart.setGetterSignature(codemirror.CodeMirror, () => ({
    __proto__: dart.getGetters(codemirror.CodeMirror.__proto__),
    onChange: async.Stream,
    onCursorActivity: async.Stream,
    onMouseDown: async.Stream$(html.MouseEvent),
    onDoubleClick: async.Stream$(html.MouseEvent),
    onGutterClick: async.Stream$(core.int)
  }));
  dart.setLibraryUri(codemirror.CodeMirror, L0);
  dart.setFieldSignature(codemirror.CodeMirror, () => ({
    __proto__: dart.getFields(codemirror.CodeMirror.__proto__),
    [_doc]: dart.fieldType(codemirror.Doc)
  }));
  dart.defineLazy(codemirror.CodeMirror, {
    /*codemirror.CodeMirror.THEMES*/get THEMES() {
      return C0 || CT.C0;
    },
    /*codemirror.CodeMirror.KEY_MAPS*/get KEY_MAPS() {
      return C1 || CT.C1;
    },
    /*codemirror.CodeMirror._instances*/get _instances() {
      return new (LinkedMapOfJsObjectL$CodeMirrorL()).new();
    }
  }, true);
  var _editor = dart.privateName(codemirror, "_editor");
  codemirror.Doc = class Doc extends codemirror.ProxyHolder {
    static _create(text, mode, firstLineNumber) {
      if (firstLineNumber == null) {
        return js.JsObject.new(js.JsFunction.as(dart.dsend(js.context._get("CodeMirror"), '_get', ["Doc"])), [text, mode]);
      } else {
        return js.JsObject.new(js.JsFunction.as(dart.dsend(js.context._get("CodeMirror"), '_get', ["Doc"])), [text, mode, firstLineNumber]);
      }
    }
    getEditor() {
      this[_editor] == null ? this[_editor] = codemirror.CodeMirror.fromJsObject(js.JsObject.as(this.call("getEditor"))) : null;
      return this[_editor];
    }
    getValue(separator = null) {
      return core.String.as(this.callArg("getValue", separator));
    }
    setValue(value) {
      return this.callArg("setValue", value);
    }
    lineCount() {
      return core.int.as(this.call("lineCount"));
    }
    firstLine() {
      return core.int.as(this.call("firstLine"));
    }
    lastLine() {
      return core.int.as(this.call("lastLine"));
    }
    getLine(n) {
      return core.String.as(this.callArg("getLine", n));
    }
    eachLine(callback, opts) {
      let start = opts && 'start' in opts ? opts.start : null;
      let end = opts && 'end' in opts ? opts.end : null;
      start == null ? start = this.firstLine() : null;
      end == null ? end = dart.notNull(this.lastLine()) + 1 : null;
      this.callArgs("eachLine", [start, end, dart.fn(line => {
          callback(new codemirror.LineHandle.new(line));
        }, JsObjectLToNullN())]);
    }
    somethingSelected() {
      return core.bool.as(this.call("somethingSelected"));
    }
    getSelection(lineSep = null) {
      return core.String.as(this.callArg("getSelection", lineSep));
    }
    setSelection(anchor, opts) {
      let head = opts && 'head' in opts ? opts.head : null;
      let options = opts && 'options' in opts ? opts.options : null;
      this.callArgs("setSelection", [anchor.toProxy(), head == null ? null : head.toProxy(), options]);
    }
    replaceSelection(replacement, select = null) {
      this.callArgs("replaceSelection", select != null ? [replacement, select] : [replacement]);
    }
    getSelections(lineSep = null) {
      return IterableOfStringL().as(dart.dgsend(this.callArg("getSelections", lineSep), [core.String], 'cast', []));
    }
    setSelections(ranges, opts) {
      let primary = opts && 'primary' in opts ? opts.primary : null;
      let options = opts && 'options' in opts ? opts.options : null;
      this.callArgs("setSelections", [JsArrayOfJsObjectL().from(ranges[$map](js.JsObject, dart.fn(range => range.toProxy(), SpanLToJsObjectL()))), primary, options]);
    }
    replaceSelections(replacement, opts) {
      let select = opts && 'select' in opts ? opts.select : null;
      this.callArgs("replaceSelections", select != null ? [js_utils.jsify(replacement), select] : [js_utils.jsify(replacement)]);
    }
    addSelection(opts) {
      let anchor = opts && 'anchor' in opts ? opts.anchor : null;
      let head = opts && 'head' in opts ? opts.head : null;
      head == null ? head = anchor : null;
      this.callArgs("addSelection", [anchor.toProxy(), head.toProxy()]);
    }
    extendSelection(from, to = null, options = null) {
      let t0;
      this.callArgs("extendSelection", [from.toProxy(), (t0 = to, t0 == null ? null : t0.toProxy()), options]);
    }
    extendSelections(heads, options = null) {
      this.callArgs("extendSelections", [JsArrayOfJsObjectL().from(heads[$map](js.JsObject, dart.fn(head => head.toProxy(), PositionLToJsObjectL()))), options]);
    }
    extendSelectionsBy(f, options = null) {
      this.callArgs("extendSelectionsBy", [dart.fn((obj, i) => f(new codemirror.Span.fromProxy(obj), i).toProxy(), JsObjectLAndintLToJsObjectL()), options]);
    }
    setExtending(value) {
      this.callArg("setExtending", value);
    }
    getExtending() {
      return core.bool.as(this.call("getExtending"));
    }
    listSelections() {
      return IterableOfSpanL().as(dart.dsend(this.call("listSelections"), 'map', [dart.fn(selection => new codemirror.Span.fromProxy(selection), JsObjectLToSpanL())]));
    }
    replaceRange(replacement, from, to = null, origin = null) {
      this.callArgs("replaceRange", origin != null ? [replacement, from.toProxy(), to.toProxy(), origin] : [replacement, from.toProxy(), to == null ? null : to.toProxy()]);
    }
    markClean() {
      return this.call("markClean");
    }
    changeGeneration(closeEvent = null) {
      return core.int.as(closeEvent == null ? this.call("changeGeneration") : this.callArg("changeGeneration", closeEvent));
    }
    isClean(generation = null) {
      return core.bool.as(generation == null ? this.call("isClean") : this.callArg("isClean", generation));
    }
    undo() {
      return this.call("undo");
    }
    redo() {
      return this.call("redo");
    }
    undoSelection() {
      return this.call("undoSelection");
    }
    redoSelection() {
      return this.call("redoSelection");
    }
    historySize() {
      let result = js.JsObject.as(this.call("historySize"));
      return new (IdentityMapOfStringL$intL()).from(["undo", core.int.as(result._get("undo")), "redo", core.int.as(result._get("redo"))]);
    }
    clearHistory() {
      return this.call("clearHistory");
    }
    getHistory() {
      return js.JsObject.as(this.call("getHistory"));
    }
    setHistory(history) {
      return this.callArg("setHistory", history);
    }
    getCursor(start = null) {
      return new codemirror.Position.fromProxy(start == null ? this.call("getCursor") : this.callArg("getCursor", start));
    }
    setCursor(pos, opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      this.callArgs("setCursor", [pos.toProxy(), options]);
    }
    getRange(from, to, separator = null) {
      return core.String.as(this.callArgs("getRange", [from.toProxy(), to.toProxy(), separator]));
    }
    posFromIndex(index) {
      return new codemirror.Position.fromProxy(this.callArg("posFromIndex", index));
    }
    indexFromPos(pos) {
      return core.int.as(this.callArg("indexFromPos", pos.toProxy()));
    }
    markText(from, to, opts) {
      let className = opts && 'className' in opts ? opts.className : null;
      let inclusiveLeft = opts && 'inclusiveLeft' in opts ? opts.inclusiveLeft : null;
      let inclusiveRight = opts && 'inclusiveRight' in opts ? opts.inclusiveRight : null;
      let atomic = opts && 'atomic' in opts ? opts.atomic : null;
      let collapsed = opts && 'collapsed' in opts ? opts.collapsed : null;
      let clearOnEnter = opts && 'clearOnEnter' in opts ? opts.clearOnEnter : null;
      let clearWhenEmpty = opts && 'clearWhenEmpty' in opts ? opts.clearWhenEmpty : null;
      let replacedWith = opts && 'replacedWith' in opts ? opts.replacedWith : null;
      let handleMouseEvents = opts && 'handleMouseEvents' in opts ? opts.handleMouseEvents : null;
      let readOnly = opts && 'readOnly' in opts ? opts.readOnly : null;
      let addToHistory = opts && 'addToHistory' in opts ? opts.addToHistory : null;
      let startStyle = opts && 'startStyle' in opts ? opts.startStyle : null;
      let endStyle = opts && 'endStyle' in opts ? opts.endStyle : null;
      let css = opts && 'css' in opts ? opts.css : null;
      let title = opts && 'title' in opts ? opts.title : null;
      let shared = opts && 'shared' in opts ? opts.shared : null;
      let options = new (IdentityMapOfStringL$dynamic()).new();
      if (className != null) options[$_set]("className", className);
      if (inclusiveLeft != null) options[$_set]("inclusiveLeft", inclusiveLeft);
      if (inclusiveRight != null) options[$_set]("inclusiveRight", inclusiveRight);
      if (atomic != null) options[$_set]("atomic", atomic);
      if (collapsed != null) options[$_set]("collapsed", collapsed);
      if (clearOnEnter != null) options[$_set]("clearOnEnter", clearOnEnter);
      if (clearWhenEmpty != null) options[$_set]("clearWhenEmpty", clearWhenEmpty);
      if (replacedWith != null) options[$_set]("replacedWith", replacedWith);
      if (handleMouseEvents != null) {
        options[$_set]("handleMouseEvents", handleMouseEvents);
      }
      if (readOnly != null) options[$_set]("readOnly", readOnly);
      if (addToHistory != null) options[$_set]("addToHistory", addToHistory);
      if (startStyle != null) options[$_set]("startStyle", startStyle);
      if (endStyle != null) options[$_set]("endStyle", endStyle);
      if (css != null) options[$_set]("css", css);
      if (title != null) options[$_set]("title", title);
      if (shared != null) options[$_set]("shared", shared);
      return new codemirror.TextMarker.new(js.JsObject.as(this.callArgs("markText", [from.toProxy(), to.toProxy(), js_utils.jsify(options)])));
    }
    setBookmark(pos, opts) {
      let widget = opts && 'widget' in opts ? opts.widget : null;
      let insertLeft = opts && 'insertLeft' in opts ? opts.insertLeft : null;
      let shared = opts && 'shared' in opts ? opts.shared : null;
      let options = new (IdentityMapOfStringL$dynamic()).new();
      if (widget != null) options[$_set]("widget", widget);
      if (insertLeft != null) options[$_set]("insertLeft", insertLeft);
      if (shared != null) options[$_set]("shared", shared);
      return new codemirror.TextMarker.new(js.JsObject.as(this.callArgs("setBookmark", [pos.toProxy(), js_utils.jsify(options)])));
    }
    findMarks(from, to) {
      let result = this.callArgs("findMarks", [from.toProxy(), to.toProxy()]);
      if (!core.List.is(result)) return JSArrayOfTextMarkerL().of([]);
      return ListOfTextMarkerL().from(core.Iterable.as(dart.dsend(result, 'map', [dart.fn(mark => new codemirror.TextMarker.new(js.JsObject.as(mark)), dynamicToTextMarkerL())])));
    }
    findMarksAt(pos) {
      let result = this.callArg("findMarksAt", pos.toProxy());
      if (!core.List.is(result)) return JSArrayOfTextMarkerL().of([]);
      return ListOfTextMarkerL().from(core.Iterable.as(dart.dsend(result, 'map', [dart.fn(mark => new codemirror.TextMarker.new(js.JsObject.as(mark)), dynamicToTextMarkerL())])));
    }
    getAllMarks() {
      let result = this.call("getAllMarks");
      if (!core.List.is(result)) return JSArrayOfTextMarkerL().of([]);
      return ListOfTextMarkerL().from(core.Iterable.as(dart.dsend(result, 'map', [dart.fn(mark => new codemirror.TextMarker.new(js.JsObject.as(mark)), dynamicToTextMarkerL())])));
    }
    getMode() {
      return this.call("getMode");
    }
    getModeName() {
      return core.String.as(dart.dsend(this.getMode(), '_get', ["name"]));
    }
    getModeAt(pos) {
      return this.getEditor().callArg("getModeAt", pos.toProxy());
    }
    getModeNameAt(pos) {
      return core.String.as(dart.dsend(this.getModeAt(pos), '_get', ["name"]));
    }
    getLineHandle(line) {
      return new codemirror.LineHandle.new(js.JsObject.as(this.callArg("getLineHandle", line)));
    }
    getLineNumber(handle) {
      return core.int.as(this.callArg("getLineNumber", handle.jsProxy));
    }
    get onChange() {
      return this.onEvent(dart.dynamic, "change", {argCount: 2});
    }
  };
  (codemirror.Doc.new = function(text, mode = null, firstLineNumber = null) {
    this[_editor] = null;
    codemirror.Doc.__proto__.new.call(this, codemirror.Doc._create(text, mode, firstLineNumber));
    ;
  }).prototype = codemirror.Doc.prototype;
  (codemirror.Doc.fromProxy = function(proxy) {
    this[_editor] = null;
    codemirror.Doc.__proto__.new.call(this, proxy);
    ;
  }).prototype = codemirror.Doc.prototype;
  dart.addTypeTests(codemirror.Doc);
  dart.addTypeCaches(codemirror.Doc);
  dart.setMethodSignature(codemirror.Doc, () => ({
    __proto__: dart.getMethods(codemirror.Doc.__proto__),
    getEditor: dart.fnType(codemirror.CodeMirror, []),
    getValue: dart.fnType(core.String, [], [core.String]),
    setValue: dart.fnType(dart.void, [core.String]),
    lineCount: dart.fnType(core.int, []),
    firstLine: dart.fnType(core.int, []),
    lastLine: dart.fnType(core.int, []),
    getLine: dart.fnType(core.String, [core.int]),
    eachLine: dart.fnType(dart.void, [dart.fnType(dart.void, [codemirror.LineHandle])], {end: core.int, start: core.int}, {}),
    somethingSelected: dart.fnType(core.bool, []),
    getSelection: dart.fnType(core.String, [], [core.String]),
    setSelection: dart.fnType(dart.void, [codemirror.Position], {head: codemirror.Position, options: core.Map}, {}),
    replaceSelection: dart.fnType(dart.void, [core.String], [core.String]),
    getSelections: dart.fnType(core.Iterable$(core.String), [], [core.String]),
    setSelections: dart.fnType(dart.void, [core.Iterable$(codemirror.Span)], {options: core.Map, primary: core.int}, {}),
    replaceSelections: dart.fnType(dart.void, [core.Iterable$(core.String)], {select: core.String}, {}),
    addSelection: dart.fnType(dart.void, [], {anchor: codemirror.Position, head: codemirror.Position}, {}),
    extendSelection: dart.fnType(dart.void, [codemirror.Position], [codemirror.Position, core.Map]),
    extendSelections: dart.fnType(dart.void, [core.List$(codemirror.Position)], [core.Map]),
    extendSelectionsBy: dart.fnType(dart.void, [dart.fnType(codemirror.Position, [codemirror.Span, core.int])], [core.Map]),
    setExtending: dart.fnType(dart.void, [core.bool]),
    getExtending: dart.fnType(core.bool, []),
    listSelections: dart.fnType(core.Iterable$(codemirror.Span), []),
    replaceRange: dart.fnType(dart.void, [core.String, codemirror.Position], [codemirror.Position, core.String]),
    markClean: dart.fnType(dart.void, []),
    changeGeneration: dart.fnType(core.int, [], [core.bool]),
    isClean: dart.fnType(core.bool, [], [core.int]),
    undo: dart.fnType(dart.void, []),
    redo: dart.fnType(dart.void, []),
    undoSelection: dart.fnType(dart.void, []),
    redoSelection: dart.fnType(dart.void, []),
    historySize: dart.fnType(core.Map$(core.String, core.int), []),
    clearHistory: dart.fnType(dart.void, []),
    getHistory: dart.fnType(js.JsObject, []),
    setHistory: dart.fnType(dart.void, [js.JsObject]),
    getCursor: dart.fnType(codemirror.Position, [], [core.String]),
    setCursor: dart.fnType(dart.void, [codemirror.Position], {options: core.Map}, {}),
    getRange: dart.fnType(core.String, [codemirror.Position, codemirror.Position], [core.String]),
    posFromIndex: dart.fnType(codemirror.Position, [core.int]),
    indexFromPos: dart.fnType(core.int, [codemirror.Position]),
    markText: dart.fnType(codemirror.TextMarker, [codemirror.Position, codemirror.Position], {addToHistory: core.bool, atomic: core.bool, className: core.String, clearOnEnter: core.bool, clearWhenEmpty: core.bool, collapsed: core.bool, css: core.String, endStyle: core.String, handleMouseEvents: core.bool, inclusiveLeft: core.bool, inclusiveRight: core.bool, readOnly: core.bool, replacedWith: html.Element, shared: core.bool, startStyle: core.String, title: core.String}, {}),
    setBookmark: dart.fnType(codemirror.TextMarker, [codemirror.Position], {insertLeft: core.bool, shared: core.bool, widget: html.Element}, {}),
    findMarks: dart.fnType(core.List$(codemirror.TextMarker), [codemirror.Position, codemirror.Position]),
    findMarksAt: dart.fnType(core.List$(codemirror.TextMarker), [codemirror.Position]),
    getAllMarks: dart.fnType(core.List$(codemirror.TextMarker), []),
    getMode: dart.fnType(dart.dynamic, []),
    getModeName: dart.fnType(core.String, []),
    getModeAt: dart.fnType(dart.dynamic, [codemirror.Position]),
    getModeNameAt: dart.fnType(core.String, [codemirror.Position]),
    getLineHandle: dart.fnType(codemirror.LineHandle, [core.int]),
    getLineNumber: dart.fnType(core.int, [codemirror.LineHandle])
  }));
  dart.setGetterSignature(codemirror.Doc, () => ({
    __proto__: dart.getGetters(codemirror.Doc.__proto__),
    onChange: async.Stream
  }));
  dart.setLibraryUri(codemirror.Doc, L0);
  dart.setFieldSignature(codemirror.Doc, () => ({
    __proto__: dart.getFields(codemirror.Doc.__proto__),
    [_editor]: dart.fieldType(codemirror.CodeMirror)
  }));
  var line$ = dart.privateName(codemirror, "Position.line");
  var ch$ = dart.privateName(codemirror, "Position.ch");
  codemirror.Position = class Position extends core.Object {
    get line() {
      return this[line$];
    }
    set line(value) {
      super.line = value;
    }
    get ch() {
      return this[ch$];
    }
    set ch(value) {
      super.ch = value;
    }
    toProxy() {
      return js_utils.jsify(new (IdentityMapOfStringL$intL()).from(["line", this.line, "ch", this.ch]));
    }
    _equals(other) {
      if (other == null) return false;
      return codemirror.Position.is(other) && this.line == other.line && this.ch == other.ch;
    }
    get hashCode() {
      return ((dart.notNull(this.line) << 8 | dart.notNull(this.ch)) >>> 0)[$hashCode];
    }
    compareTo(other) {
      codemirror.Position.as(other);
      if (this.line == other.line) return dart.notNull(this.ch) - dart.notNull(other.ch);
      return dart.notNull(this.line) - dart.notNull(other.line);
    }
    ['<'](other) {
      return dart.notNull(this.compareTo(other)) < 0;
    }
    ['<='](other) {
      return dart.notNull(this.compareTo(other)) <= 0;
    }
    ['>='](other) {
      return dart.notNull(this.compareTo(other)) >= 0;
    }
    ['>'](other) {
      return dart.notNull(this.compareTo(other)) > 0;
    }
    toString() {
      return "[" + dart.str(this.line) + ":" + dart.str(this.ch) + "]";
    }
  };
  (codemirror.Position.new = function(line, ch) {
    this[line$] = line;
    this[ch$] = ch;
    ;
  }).prototype = codemirror.Position.prototype;
  (codemirror.Position.fromProxy = function(obj) {
    this[line$] = core.int.as(dart.dsend(obj, '_get', ["line"]));
    this[ch$] = core.int.as(dart.dsend(obj, '_get', ["ch"]));
    ;
  }).prototype = codemirror.Position.prototype;
  dart.addTypeTests(codemirror.Position);
  dart.addTypeCaches(codemirror.Position);
  codemirror.Position[dart.implements] = () => [core.Comparable$(codemirror.Position)];
  dart.setMethodSignature(codemirror.Position, () => ({
    __proto__: dart.getMethods(codemirror.Position.__proto__),
    toProxy: dart.fnType(js.JsObject, []),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object]),
    '<': dart.fnType(core.bool, [codemirror.Position]),
    '<=': dart.fnType(core.bool, [codemirror.Position]),
    '>=': dart.fnType(core.bool, [codemirror.Position]),
    '>': dart.fnType(core.bool, [codemirror.Position])
  }));
  dart.setLibraryUri(codemirror.Position, L0);
  dart.setFieldSignature(codemirror.Position, () => ({
    __proto__: dart.getFields(codemirror.Position.__proto__),
    line: dart.finalFieldType(core.int),
    ch: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(codemirror.Position, ['_equals', 'compareTo', 'toString']);
  dart.defineExtensionAccessors(codemirror.Position, ['hashCode']);
  codemirror.ModeInfo = class ModeInfo extends codemirror.ProxyHolder {
    static new(proxy) {
      return proxy == null ? null : new codemirror.ModeInfo.__(proxy);
    }
    get name() {
      return core.String.as(this.jsProxy._get("name"));
    }
    get mime() {
      return core.String.as(this.jsProxy._get("mime"));
    }
    get mimes() {
      return ListOfStringL().as(dart.test(this.jsProxy.hasProperty("mimes")) ? this.jsProxy._get("mimes") : JSArrayOfStringL().of([this.mime]));
    }
    get mode() {
      return core.String.as(this.jsProxy._get("mode"));
    }
    get ext() {
      return ListOfStringL().from(core.Iterable.as(this.jsProxy._get("ext")));
    }
    get alias() {
      return ListOfStringL().as(dart.test(this.jsProxy.hasProperty("alias")) ? this.jsProxy._get("alias") : JSArrayOfStringL().of([]));
    }
  };
  (codemirror.ModeInfo.__ = function(proxy) {
    codemirror.ModeInfo.__proto__.new.call(this, proxy);
    ;
  }).prototype = codemirror.ModeInfo.prototype;
  dart.addTypeTests(codemirror.ModeInfo);
  dart.addTypeCaches(codemirror.ModeInfo);
  dart.setGetterSignature(codemirror.ModeInfo, () => ({
    __proto__: dart.getGetters(codemirror.ModeInfo.__proto__),
    name: core.String,
    mime: core.String,
    mimes: core.List$(core.String),
    mode: core.String,
    ext: core.List$(core.String),
    alias: core.List$(core.String)
  }));
  dart.setLibraryUri(codemirror.ModeInfo, L0);
  var head$ = dart.privateName(codemirror, "Span.head");
  var anchor$ = dart.privateName(codemirror, "Span.anchor");
  codemirror.Span = class Span extends core.Object {
    get head() {
      return this[head$];
    }
    set head(value) {
      super.head = value;
    }
    get anchor() {
      return this[anchor$];
    }
    set anchor(value) {
      super.anchor = value;
    }
    toProxy() {
      return js_utils.jsify(new (IdentityMapOfStringL$JsObjectL()).from(["head", this.head.toProxy(), "anchor", this.anchor.toProxy()]));
    }
    _equals(other) {
      if (other == null) return false;
      return codemirror.Span.is(other) && dart.equals(this.head, other.head) && dart.equals(this.anchor, other.anchor);
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this.head)) ^ dart.notNull(dart.hashCode(this.anchor))) >>> 0;
    }
    toString() {
      return dart.str(this.head) + "=>" + dart.str(this.anchor) + "]";
    }
  };
  (codemirror.Span.new = function(head, anchor) {
    this[head$] = head;
    this[anchor$] = anchor;
    ;
  }).prototype = codemirror.Span.prototype;
  (codemirror.Span.fromProxy = function(obj) {
    this[head$] = new codemirror.Position.fromProxy(dart.dsend(obj, '_get', ["head"]));
    this[anchor$] = new codemirror.Position.fromProxy(dart.dsend(obj, '_get', ["anchor"]));
    ;
  }).prototype = codemirror.Span.prototype;
  dart.addTypeTests(codemirror.Span);
  dart.addTypeCaches(codemirror.Span);
  dart.setMethodSignature(codemirror.Span, () => ({
    __proto__: dart.getMethods(codemirror.Span.__proto__),
    toProxy: dart.fnType(js.JsObject, [])
  }));
  dart.setLibraryUri(codemirror.Span, L0);
  dart.setFieldSignature(codemirror.Span, () => ({
    __proto__: dart.getFields(codemirror.Span.__proto__),
    head: dart.finalFieldType(codemirror.Position),
    anchor: dart.finalFieldType(codemirror.Position)
  }));
  dart.defineExtensionMethods(codemirror.Span, ['_equals', 'toString']);
  dart.defineExtensionAccessors(codemirror.Span, ['hashCode']);
  codemirror.TextMarker = class TextMarker extends codemirror.ProxyHolder {
    clear() {
      return this.call("clear");
    }
    find() {
      let result = this.call("find");
      if (!js.JsObject.is(result)) return null;
      try {
        if (dart.dtest(dart.dsend(result, 'hasProperty', ["from"]))) {
          return JSArrayOfPositionL().of([new codemirror.Position.fromProxy(dart.dsend(result, '_get', ["from"])), new codemirror.Position.fromProxy(dart.dsend(result, '_get', ["to"]))]);
        } else {
          return JSArrayOfPositionL().of([new codemirror.Position.fromProxy(result)]);
        }
      } catch (e$) {
        let e = dart.getThrown(e$);
        return null;
      }
    }
    findStart() {
      let positions = this.find();
      return positions == null || dart.test(positions[$isEmpty]) ? null : positions[$first];
    }
    changed() {
      return this.call("changed");
    }
  };
  (codemirror.TextMarker.new = function(jsProxy) {
    codemirror.TextMarker.__proto__.new.call(this, jsProxy);
    ;
  }).prototype = codemirror.TextMarker.prototype;
  dart.addTypeTests(codemirror.TextMarker);
  dart.addTypeCaches(codemirror.TextMarker);
  dart.setMethodSignature(codemirror.TextMarker, () => ({
    __proto__: dart.getMethods(codemirror.TextMarker.__proto__),
    clear: dart.fnType(dart.void, []),
    find: dart.fnType(core.List$(codemirror.Position), []),
    findStart: dart.fnType(codemirror.Position, []),
    changed: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(codemirror.TextMarker, L0);
  codemirror.LineWidget = class LineWidget extends codemirror.ProxyHolder {
    clear() {
      return this.call("clear");
    }
    changed() {
      return this.call("changed");
    }
  };
  (codemirror.LineWidget.new = function(jsProxy) {
    codemirror.LineWidget.__proto__.new.call(this, jsProxy);
    ;
  }).prototype = codemirror.LineWidget.prototype;
  dart.addTypeTests(codemirror.LineWidget);
  dart.addTypeCaches(codemirror.LineWidget);
  dart.setMethodSignature(codemirror.LineWidget, () => ({
    __proto__: dart.getMethods(codemirror.LineWidget.__proto__),
    clear: dart.fnType(dart.void, []),
    changed: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(codemirror.LineWidget, L0);
  codemirror.LineHandle = class LineHandle extends codemirror.ProxyHolder {
    get height() {
      return core.num.as(this.jsProxy._get("height"));
    }
    get text() {
      return core.String.as(this.jsProxy._get("text"));
    }
  };
  (codemirror.LineHandle.new = function(jsProxy) {
    codemirror.LineHandle.__proto__.new.call(this, jsProxy);
    ;
  }).prototype = codemirror.LineHandle.prototype;
  dart.addTypeTests(codemirror.LineHandle);
  dart.addTypeCaches(codemirror.LineHandle);
  dart.setGetterSignature(codemirror.LineHandle, () => ({
    __proto__: dart.getGetters(codemirror.LineHandle.__proto__),
    height: core.num,
    text: core.String
  }));
  dart.setLibraryUri(codemirror.LineHandle, L0);
  codemirror.ScrollInfo = class ScrollInfo extends codemirror.ProxyHolder {
    get left() {
      return core.num.as(this.jsProxy._get("left"));
    }
    get top() {
      return core.num.as(this.jsProxy._get("top"));
    }
    get width() {
      return core.num.as(this.jsProxy._get("width"));
    }
    get height() {
      return core.num.as(this.jsProxy._get("height"));
    }
    get clientWidth() {
      return core.num.as(this.jsProxy._get("clientWidth"));
    }
    get clientHeight() {
      return core.num.as(this.jsProxy._get("clientHeight"));
    }
  };
  (codemirror.ScrollInfo.new = function(jsProxy) {
    codemirror.ScrollInfo.__proto__.new.call(this, jsProxy);
    ;
  }).prototype = codemirror.ScrollInfo.prototype;
  dart.addTypeTests(codemirror.ScrollInfo);
  dart.addTypeCaches(codemirror.ScrollInfo);
  dart.setGetterSignature(codemirror.ScrollInfo, () => ({
    __proto__: dart.getGetters(codemirror.ScrollInfo.__proto__),
    left: core.num,
    top: core.num,
    width: core.num,
    height: core.num,
    clientWidth: core.num,
    clientHeight: core.num
  }));
  dart.setLibraryUri(codemirror.ScrollInfo, L0);
  var start = dart.privateName(codemirror, "Token.start");
  var end = dart.privateName(codemirror, "Token.end");
  var string = dart.privateName(codemirror, "Token.string");
  var type = dart.privateName(codemirror, "Token.type");
  var state = dart.privateName(codemirror, "Token.state");
  codemirror.Token = class Token extends core.Object {
    get start() {
      return this[start];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end];
    }
    set end(value) {
      super.end = value;
    }
    get string() {
      return this[string];
    }
    set string(value) {
      super.string = value;
    }
    get type() {
      return this[type];
    }
    set type(value) {
      super.type = value;
    }
    get state() {
      return this[state];
    }
    set state(value) {
      super.state = value;
    }
    toString() {
      return this.string;
    }
  };
  (codemirror.Token.fromProxy = function(obj) {
    this[start] = core.int.as(dart.dsend(obj, '_get', ["start"]));
    this[end] = core.int.as(dart.dsend(obj, '_get', ["end"]));
    this[string] = core.String.as(dart.dsend(obj, '_get', ["string"]));
    this[type] = core.String.as(dart.dsend(obj, '_get', ["type"]));
    this[state] = js.JsObject.as(dart.dsend(obj, '_get', ["state"]));
    ;
  }).prototype = codemirror.Token.prototype;
  dart.addTypeTests(codemirror.Token);
  dart.addTypeCaches(codemirror.Token);
  dart.setLibraryUri(codemirror.Token, L0);
  dart.setFieldSignature(codemirror.Token, () => ({
    __proto__: dart.getFields(codemirror.Token.__proto__),
    start: dart.finalFieldType(core.int),
    end: dart.finalFieldType(core.int),
    string: dart.finalFieldType(core.String),
    type: dart.finalFieldType(core.String),
    state: dart.finalFieldType(js.JsObject)
  }));
  dart.defineExtensionMethods(codemirror.Token, ['toString']);
  dart.trackLibraries("packages/codemirror/codemirror", {
    "package:codemirror/codemirror.dart": codemirror
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["codemirror.dart"],"names":[],"mappings":"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","file":"codemirror.ddc.js"}');
  // Exports:
  return {
    codemirror: codemirror
  };
});

//# sourceMappingURL=codemirror.ddc.js.map
