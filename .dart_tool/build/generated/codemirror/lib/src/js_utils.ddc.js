define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const js = dart_sdk.js;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var js_utils = Object.create(dart.library);
  var dynamicAnddynamicAnddynamic__ToNullN = () => (dynamicAnddynamicAnddynamic__ToNullN = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  var dynamicAnddynamicAnddynamicToNullN = () => (dynamicAnddynamicAnddynamicToNullN = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic, dart.dynamic])))();
  var dynamicAnddynamicToNullN = () => (dynamicAnddynamicToNullN = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  var dynamicToNullN = () => (dynamicToNullN = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var VoidToNullN = () => (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  var L0 = "package:codemirror/src/js_utils.dart";
  var _controller = dart.privateName(js_utils, "_controller");
  var _callback = dart.privateName(js_utils, "_callback");
  var _proxy$ = dart.privateName(js_utils, "_proxy");
  var _name$ = dart.privateName(js_utils, "_name");
  const _is_JsEventListener_default = Symbol('_is_JsEventListener_default');
  var cvtEvent$ = dart.privateName(js_utils, "JsEventListener.cvtEvent");
  var argCount$ = dart.privateName(js_utils, "JsEventListener.argCount");
  js_utils.JsEventListener$ = dart.generic(T => {
    var StreamControllerOfTL = () => (StreamControllerOfTL = dart.constFn(async.StreamController$(T)))();
    class JsEventListener extends core.Object {
      get cvtEvent() {
        return this[cvtEvent$];
      }
      set cvtEvent(value) {
        super.cvtEvent = value;
      }
      get argCount() {
        return this[argCount$];
      }
      set argCount(value) {
        super.argCount = value;
      }
      get stream() {
        this[_controller] == null ? this[_controller] = StreamControllerOfTL().broadcast({onListen: dart.fn(() => {
            if (this.argCount === 4) {
              this[_callback] = js.JsFunction.as(this[_proxy$].callMethod("on", [this[_name$], dart.fn((obj, a, b, c) => {
                  let t2, t1, t0;
                  this[_controller].add(T.as(this.cvtEvent == null ? a : (t0 = a, t1 = b, t2 = c, dart.dsend(this, 'cvtEvent', [t0, t1, t2]))));
                }, dynamicAnddynamicAnddynamic__ToNullN())]));
            } else if (this.argCount === 3) {
              this[_callback] = js.JsFunction.as(this[_proxy$].callMethod("on", [this[_name$], dart.fn((obj, a, b) => {
                  let t1, t0;
                  this[_controller].add(T.as(this.cvtEvent == null ? a : (t0 = a, t1 = b, dart.dsend(this, 'cvtEvent', [t0, t1]))));
                }, dynamicAnddynamicAnddynamicToNullN())]));
            } else if (this.argCount === 2) {
              this[_callback] = js.JsFunction.as(this[_proxy$].callMethod("on", [this[_name$], dart.fn((obj, a) => {
                  let t0;
                  this[_controller].add(T.as(this.cvtEvent == null ? a : (t0 = a, dart.dsend(this, 'cvtEvent', [t0]))));
                }, dynamicAnddynamicToNullN())]));
            } else {
              this[_callback] = js.JsFunction.as(this[_proxy$].callMethod("on", [this[_name$], dart.fn(obj => {
                  let t0;
                  this[_controller].add(T.as(this.cvtEvent == null ? null : (t0 = obj, dart.dsend(this, 'cvtEvent', [t0]))));
                }, dynamicToNullN())]));
            }
          }, VoidToNullN()), onCancel: dart.fn(() => {
            this[_proxy$].callMethod("off", [this[_name$], this[_callback]]);
            this[_callback] = null;
          }, VoidToNullN()), sync: true}) : null;
        return this[_controller].stream;
      }
      dispose() {
        if (this[_controller] == null) return async.Future.value();
        return this[_controller].close();
      }
    }
    (JsEventListener.new = function(_proxy, _name, opts) {
      let cvtEvent = opts && 'cvtEvent' in opts ? opts.cvtEvent : null;
      let argCount = opts && 'argCount' in opts ? opts.argCount : 1;
      this[_controller] = null;
      this[_callback] = null;
      this[_proxy$] = _proxy;
      this[_name$] = _name;
      this[cvtEvent$] = cvtEvent;
      this[argCount$] = argCount;
      ;
    }).prototype = JsEventListener.prototype;
    dart.addTypeTests(JsEventListener);
    JsEventListener.prototype[_is_JsEventListener_default] = true;
    dart.addTypeCaches(JsEventListener);
    dart.setMethodSignature(JsEventListener, () => ({
      __proto__: dart.getMethods(JsEventListener.__proto__),
      dispose: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(JsEventListener, () => ({
      __proto__: dart.getGetters(JsEventListener.__proto__),
      stream: async.Stream$(T)
    }));
    dart.setLibraryUri(JsEventListener, L0);
    dart.setFieldSignature(JsEventListener, () => ({
      __proto__: dart.getFields(JsEventListener.__proto__),
      [_proxy$]: dart.finalFieldType(js.JsObject),
      [_name$]: dart.finalFieldType(core.String),
      cvtEvent: dart.finalFieldType(core.Function),
      argCount: dart.finalFieldType(core.int),
      [_controller]: dart.fieldType(async.StreamController$(T)),
      [_callback]: dart.fieldType(js.JsFunction)
    }));
    return JsEventListener;
  });
  js_utils.JsEventListener = js_utils.JsEventListener$();
  dart.addTypeTests(js_utils.JsEventListener, _is_JsEventListener_default);
  js_utils.jsify = function jsify(object) {
    return js.JsObject.jsify(object);
  };
  js_utils.mapify = function mapify(obj) {
    if (obj == null) return null;
    return core.Map.as(convert.jsonDecode(core.String.as(js_utils._jsJSON.callMethod("stringify", [obj]))));
  };
  js_utils.keys = function keys(obj) {
    return core.List.as(js_utils._Object.callMethod("keys", [obj]));
  };
  dart.defineLazy(js_utils, {
    /*js_utils._jsJSON*/get _jsJSON() {
      return js.JsObject.as(js.context._get("JSON"));
    },
    /*js_utils._Object*/get _Object() {
      return js.JsObject.as(js.context._get("Object"));
    }
  }, true);
  dart.trackLibraries("packages/codemirror/src/js_utils", {
    "package:codemirror/src/js_utils.dart": js_utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["js_utils.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;MAiCiB;;;;;;MACL;;;;;;;AAiDO,QApCf,AAAY,qBAAA,OAAZ,oBAAiC,4CACnB;AACR,gBAAI,AAAS,kBAAG;AAMZ,gCALF,iBAAY,AAAO,yBAAW,MAAM,CAClC,cACA,SAAC,KAAK,GAAG,GAAG;;AAC+C,kBAAzD,AAAY,sBAAqB,KAAjB,AAAS,iBAAG,OAAO,CAAC,SAAY,CAAC,OAAE,CAAC,OAAE,CAAC,EAAR,WAAR;;kBAGtC,KAAI,AAAS,kBAAG;AAMnB,gCALF,iBAAY,AAAO,yBAAW,MAAM,CAClC,cACA,SAAC,KAAK,GAAG;;AAC+C,kBAAtD,AAAY,sBAAqB,KAAjB,AAAS,iBAAG,OAAO,CAAC,SAAY,CAAC,OAAE,CAAC,EAAL,WAAR;;kBAGtC,KAAI,AAAS,kBAAG;AAMnB,gCALF,iBAAY,AAAO,yBAAW,MAAM,CAClC,cACA,SAAC,KAAK;;AAC+C,kBAAnD,AAAY,sBAAqB,KAAjB,AAAS,iBAAG,OAAO,CAAC,SAAY,CAAC,EAAF,WAAR;;;AASzC,gCALF,iBAAY,AAAO,yBAAW,MAAM,CAClC,cACA,QAAC;;AACyD,kBAAxD,AAAY,sBAAqB,KAAjB,AAAS,iBAAG,OAAO,aAAgB,GAAG,EAAJ,WAAR;;;uCAKxC;AACoC,YAA5C,AAAO,yBAAW,OAAO,CAAC,cAAO;AACjB,YAAhB,kBAAY;mCAER,SApCE;AAqCZ,cAAO,AAAY;MACrB;;AAGE,YAAI,AAAY,qBAAG,MAAM,MAAc;AACvC,cAAO,AAAY;MACrB;;oCAlDO,QACA;UACA;UACA;MAPa;MACT;MAGJ;MACA;MACA;MACA;;IACL;;;;;;;;;;;;;;;;;;;;;;;;;;kCA7BW;AAAW,UAAS,mBAAM,MAAM;EAAC;oCAG5B;AAClB,QAAI,AAAI,GAAD,IAAI,MAAM,MAAO;AACxB,uBAAO,kCAAW,AAAQ,4BAAW,aAAa,CAAC,GAAG;EACxD;gCAGmB;AAAQ,wBAAA,AAAQ,4BAAW,QAAQ,CAAC,GAAG;EAAE;;MAb7C,gBAAO;4BAAG,AAAO,gBAAC;;MAClB,gBAAO;4BAAG,AAAO,gBAAC","file":"js_utils.ddc.js"}');
  // Exports:
  return {
    src__js_utils: js_utils
  };
});

//# sourceMappingURL=js_utils.ddc.js.map
