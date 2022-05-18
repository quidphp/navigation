/******/
(function () {
  // webpackBootstrap

  /******/
  var __webpack_modules__ = {
    /***/
    "../javascript/node_modules/process/browser.js":
    /*!*****************************************************!*\
      !*** ../javascript/node_modules/process/browser.js ***!
      \*****************************************************/

    /***/
    function javascriptNode_modulesProcessBrowserJs(module) {
      // shim for using process in browser
      var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
      // don't break things.  But we need to wrap it in a try catch in case it is
      // wrapped in strict mode code which doesn't define any globals.  It's inside a
      // function because try/catches deoptimize in certain engines.

      var cachedSetTimeout;
      var cachedClearTimeout;

      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
      }

      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
      }

      (function () {
        try {
          if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }

        try {
          if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();

      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
        } // if setTimeout wasn't available but was latter defined


        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }

        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }

      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
        } // if clearTimeout wasn't available but was latter defined


        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }

        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
          }
        }
      }

      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;

      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }

        draining = false;

        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }

        if (queue.length) {
          drainQueue();
        }
      }

      function drainQueue() {
        if (draining) {
          return;
        }

        var timeout = runTimeout(cleanUpNextTick);
        draining = true;
        var len = queue.length;

        while (len) {
          currentQueue = queue;
          queue = [];

          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }

          queueIndex = -1;
          len = queue.length;
        }

        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }

      process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);

        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }

        queue.push(new Item(fun, args));

        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      }; // v8 likes predictible objects


      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }

      Item.prototype.run = function () {
        this.fun.apply(null, this.array);
      };

      process.title = 'browser';
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = ''; // empty string to avoid regexp issues

      process.versions = {};

      function noop() {}

      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;

      process.listeners = function (name) {
        return [];
      };

      process.binding = function (name) {
        throw new Error('process.binding is not supported');
      };

      process.cwd = function () {
        return '/';
      };

      process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
      };

      process.umask = function () {
        return 0;
      };
      /***/

    },

    /***/
    "../browser/index.js":
    /*!***************************!*\
      !*** ../browser/index.js ***!
      \***************************/

    /***/
    function browserIndexJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Arr": function Arr() {
          return (
            /* reexport safe */
            quidphp_javascript__WEBPACK_IMPORTED_MODULE_0__.Arr
          );
        },

        /* harmony export */
        "ArrLike": function ArrLike() {
          return (
            /* reexport safe */
            quidphp_javascript__WEBPACK_IMPORTED_MODULE_0__.ArrLike
          );
        },

        /* harmony export */
        "Bool": function Bool() {
          return (
            /* reexport safe */
            quidphp_javascript__WEBPACK_IMPORTED_MODULE_0__.Bool
          );
        },

        /* harmony export */
        "Browser": function Browser() {
          return (
            /* reexport safe */
            _src_browser_js__WEBPACK_IMPORTED_MODULE_1__["default"]
          );
        },

        /* harmony export */
        "Component": function Component() {
          return (
            /* reexport safe */
            quidphp_javascript__WEBPACK_IMPORTED_MODULE_0__.Component
          );
        },

        /* harmony export */
        "Datetime": function Datetime() {
          return (
            /* reexport safe */
            quidphp_javascript__WEBPACK_IMPORTED_MODULE_0__.Datetime
          );
        },

        /* harmony export */
        "Debug": function Debug() {
          return (
            /* reexport safe */
            quidphp_javascript__WEBPACK_IMPORTED_MODULE_0__.Debug
          );
        },

        /* harmony export */
        "Doc": function (_Doc) {
          function Doc() {
            return _Doc.apply(this, arguments);
          }

          Doc.toString = function () {
            return _Doc.toString();
          };

          return Doc;
        }(function () {
          return (
            /* binding */
            Doc
          );
        }),

        /* harmony export */
        "Dom": function Dom() {
          return (
            /* reexport safe */
            _src_dom_js__WEBPACK_IMPORTED_MODULE_2__["default"]
          );
        },

        /* harmony export */
        "Ele": function (_Ele) {
          function Ele() {
            return _Ele.apply(this, arguments);
          }

          Ele.toString = function () {
            return _Ele.toString();
          };

          return Ele;
        }(function () {
          return (
            /* binding */
            Ele
          );
        }),

        /* harmony export */
        "Env": function Env() {
          return (
            /* reexport safe */
            quidphp_javascript__WEBPACK_IMPORTED_MODULE_0__.Env
          );
        },

        /* harmony export */
        "Evt": function (_Evt) {
          function Evt() {
            return _Evt.apply(this, arguments);
          }

          Evt.toString = function () {
            return _Evt.toString();
          };

          return Evt;
        }(function () {
          return (
            /* binding */
            Evt
          );
        }),

        /* harmony export */
        "Factory": function Factory() {
          return (
            /* reexport safe */
            quidphp_javascript__WEBPACK_IMPORTED_MODULE_0__.Factory
          );
        },

        /* harmony export */
        "Func": function Func() {
          return (
            /* reexport safe */
            quidphp_javascript__WEBPACK_IMPORTED_MODULE_0__.Func
          );
        },

        /* harmony export */
        "HistoryState": function HistoryState() {
          return (
            /* reexport safe */
            _src_historyState_js__WEBPACK_IMPORTED_MODULE_3__["default"]
          );
        },

        /* harmony export */
        "Html": function Html() {
          return (
            /* reexport safe */
            quidphp_javascript__WEBPACK_IMPORTED_MODULE_0__.Html
          );
        },

        /* harmony export */
        "Integer": function Integer() {
          return (
            /* reexport safe */
            quidphp_javascript__WEBPACK_IMPORTED_MODULE_0__.Integer
          );
        },

        /* harmony export */
        "Json": function Json() {
          return (
            /* reexport safe */
            quidphp_javascript__WEBPACK_IMPORTED_MODULE_0__.Json
          );
        },

        /* harmony export */
        "Nav": function Nav() {
          return (
            /* reexport safe */
            quidphp_javascript__WEBPACK_IMPORTED_MODULE_0__.Nav
          );
        },

        /* harmony export */
        "Nod": function Nod() {
          return (
            /* binding */
            _Nod
          );
        },

        /* harmony export */
        "Num": function Num() {
          return (
            /* reexport safe */
            quidphp_javascript__WEBPACK_IMPORTED_MODULE_0__.Num
          );
        },

        /* harmony export */
        "Obj": function Obj() {
          return (
            /* reexport safe */
            quidphp_javascript__WEBPACK_IMPORTED_MODULE_0__.Obj
          );
        },

        /* harmony export */
        "Pojo": function Pojo() {
          return (
            /* reexport safe */
            quidphp_javascript__WEBPACK_IMPORTED_MODULE_0__.Pojo
          );
        },

        /* harmony export */
        "Request": function Request() {
          return (
            /* reexport safe */
            _src_request_js__WEBPACK_IMPORTED_MODULE_4__["default"]
          );
        },

        /* harmony export */
        "Scalar": function Scalar() {
          return (
            /* reexport safe */
            quidphp_javascript__WEBPACK_IMPORTED_MODULE_0__.Scalar
          );
        },

        /* harmony export */
        "Shortcut": function Shortcut() {
          return (
            /* reexport safe */
            quidphp_javascript__WEBPACK_IMPORTED_MODULE_0__.Shortcut
          );
        },

        /* harmony export */
        "Str": function Str() {
          return (
            /* reexport safe */
            quidphp_javascript__WEBPACK_IMPORTED_MODULE_0__.Str
          );
        },

        /* harmony export */
        "Target": function Target() {
          return (
            /* binding */
            _Target
          );
        },

        /* harmony export */
        "Test": function Test() {
          return (
            /* reexport safe */
            quidphp_javascript__WEBPACK_IMPORTED_MODULE_0__.Test
          );
        },

        /* harmony export */
        "TestSuite": function TestSuite() {
          return (
            /* reexport safe */
            quidphp_javascript__WEBPACK_IMPORTED_MODULE_0__.TestSuite
          );
        },

        /* harmony export */
        "Tool": function Tool() {
          return (
            /* reexport safe */
            quidphp_javascript__WEBPACK_IMPORTED_MODULE_0__.Tool
          );
        },

        /* harmony export */
        "Uri": function Uri() {
          return (
            /* reexport safe */
            _src_uri_js__WEBPACK_IMPORTED_MODULE_5__["default"]
          );
        },

        /* harmony export */
        "Validate": function Validate() {
          return (
            /* reexport safe */
            quidphp_javascript__WEBPACK_IMPORTED_MODULE_0__.Validate
          );
        },

        /* harmony export */
        "Vari": function Vari() {
          return (
            /* reexport safe */
            quidphp_javascript__WEBPACK_IMPORTED_MODULE_0__.Vari
          );
        },

        /* harmony export */
        "Win": function (_Win) {
          function Win() {
            return _Win.apply(this, arguments);
          }

          Win.toString = function () {
            return _Win.toString();
          };

          return Win;
        }(function () {
          return (
            /* binding */
            Win
          );
        }),

        /* harmony export */
        "Xhr": function Xhr() {
          return (
            /* reexport safe */
            _src_xhr_js__WEBPACK_IMPORTED_MODULE_6__["default"]
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var quidphp_javascript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! quidphp-javascript */
      "../javascript/index.js");
      /* harmony import */


      var _src_browser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./src/browser.js */
      "../browser/src/browser.js");
      /* harmony import */


      var _src_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./src/dom.js */
      "../browser/src/dom.js");
      /* harmony import */


      var _src_historyState_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./src/historyState.js */
      "../browser/src/historyState.js");
      /* harmony import */


      var _src_request_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./src/request.js */
      "../browser/src/request.js");
      /* harmony import */


      var _src_uri_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./src/uri.js */
      "../browser/src/uri.js");
      /* harmony import */


      var _src_xhr_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./src/xhr.js */
      "../browser/src/xhr.js");
      /* harmony import */


      var _src_data_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./src/data.js */
      "../browser/src/data.js");
      /* harmony import */


      var _src_doc_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./src/doc.js */
      "../browser/src/doc.js");
      /* harmony import */


      var _src_ele_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./src/ele.js */
      "../browser/src/ele.js");
      /* harmony import */


      var _src_evt_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./src/evt.js */
      "../browser/src/evt.js");
      /* harmony import */


      var _src_handler_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./src/handler.js */
      "../browser/src/handler.js");
      /* harmony import */


      var _src_listener_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./src/listener.js */
      "../browser/src/listener.js");
      /* harmony import */


      var _src_nod_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./src/nod.js */
      "../browser/src/nod.js");
      /* harmony import */


      var _src_selector_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./src/selector.js */
      "../browser/src/selector.js");
      /* harmony import */


      var _src_target_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./src/target.js */
      "../browser/src/target.js");
      /* harmony import */


      var _src_win_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./src/win.js */
      "../browser/src/win.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/browser/blob/master/LICENSE
       */
      // index
      // entry file for the module
      // import quidphp-javascript


      var Factory = quidphp_javascript__WEBPACK_IMPORTED_MODULE_0__.Factory,
          Shortcut = quidphp_javascript__WEBPACK_IMPORTED_MODULE_0__.Shortcut,
          Tool = quidphp_javascript__WEBPACK_IMPORTED_MODULE_0__.Tool; // simple import
      // type import
      // build

      var Evt = Factory(Tool.Type, _src_evt_js__WEBPACK_IMPORTED_MODULE_10__["default"]);
      var Win = Factory(_src_target_js__WEBPACK_IMPORTED_MODULE_15__["default"], _src_data_js__WEBPACK_IMPORTED_MODULE_7__["default"], _src_handler_js__WEBPACK_IMPORTED_MODULE_11__["default"], _src_listener_js__WEBPACK_IMPORTED_MODULE_12__["default"], _src_nod_js__WEBPACK_IMPORTED_MODULE_13__.EleWinTarget, _src_win_js__WEBPACK_IMPORTED_MODULE_16__["default"]);
      var Doc = Factory(_src_target_js__WEBPACK_IMPORTED_MODULE_15__["default"], _src_data_js__WEBPACK_IMPORTED_MODULE_7__["default"], _src_handler_js__WEBPACK_IMPORTED_MODULE_11__["default"], _src_listener_js__WEBPACK_IMPORTED_MODULE_12__["default"], _src_selector_js__WEBPACK_IMPORTED_MODULE_14__["default"], _src_nod_js__WEBPACK_IMPORTED_MODULE_13__.NodTarget, _src_nod_js__WEBPACK_IMPORTED_MODULE_13__.EleDocTarget, _src_doc_js__WEBPACK_IMPORTED_MODULE_8__["default"]);
      var Ele = Factory(_src_target_js__WEBPACK_IMPORTED_MODULE_15__["default"], _src_data_js__WEBPACK_IMPORTED_MODULE_7__["default"], _src_handler_js__WEBPACK_IMPORTED_MODULE_11__["default"], _src_listener_js__WEBPACK_IMPORTED_MODULE_12__["default"], _src_selector_js__WEBPACK_IMPORTED_MODULE_14__["default"], _src_nod_js__WEBPACK_IMPORTED_MODULE_13__.NodTarget, _src_nod_js__WEBPACK_IMPORTED_MODULE_13__.EleWinTarget, _src_nod_js__WEBPACK_IMPORTED_MODULE_13__.EleDocTarget, _src_ele_js__WEBPACK_IMPORTED_MODULE_9__["default"], Tool.ArrLoop);

      var _Nod = Factory(_src_target_js__WEBPACK_IMPORTED_MODULE_15__["default"], _src_data_js__WEBPACK_IMPORTED_MODULE_7__["default"], _src_handler_js__WEBPACK_IMPORTED_MODULE_11__["default"], _src_listener_js__WEBPACK_IMPORTED_MODULE_12__["default"], _src_selector_js__WEBPACK_IMPORTED_MODULE_14__["default"], _src_nod_js__WEBPACK_IMPORTED_MODULE_13__.NodTarget);

      var _Target = Factory(_src_target_js__WEBPACK_IMPORTED_MODULE_15__["default"], _src_data_js__WEBPACK_IMPORTED_MODULE_7__["default"], _src_handler_js__WEBPACK_IMPORTED_MODULE_11__["default"], _src_listener_js__WEBPACK_IMPORTED_MODULE_12__["default"]); // shortcut


      Shortcut.getAttr = Ele.getAttr.bind(Ele);
      Shortcut.setAttr = Ele.setAttr.bind(Ele);
      Shortcut.toggleAttr = Ele.toggleAttr.bind(Ele);
      Shortcut.setCss = Ele.setCss.bind(Ele);
      Shortcut.toggleClass = Ele.toggleClass.bind(Ele);
      Shortcut.getHtml = Ele.getHtml.bind(Ele);
      Shortcut.setHtml = Ele.setHtml.bind(Ele);
      Shortcut.qs = _Nod.scopedQuery.bind(_Nod);
      Shortcut.qsa = _Nod.scopedQueryAll.bind(_Nod);
      Shortcut.getProp = _Target.getProp.bind(_Target);
      Shortcut.setProp = _Target.setProp.bind(_Target);
      Shortcut.getData = _Target.getData.bind(_Target);
      Shortcut.setData = _Target.setData.bind(_Target);
      Shortcut.setHdlr = _Target.setHandler.bind(_Target);
      Shortcut.setHdlrs = _Target.setsHandler.bind(_Target);
      Shortcut.allHdlr = _Target.allHandler.bind(_Target);
      Shortcut.trigHdlr = _Target.triggerHandler.bind(_Target);
      Shortcut.trigHdlrs = _Target.triggersHandler.bind(_Target);
      Shortcut.ael = _Target.addListener.bind(_Target);
      Shortcut.aelDelegate = _Target.addDelegatedListener.bind(_Target);
      Shortcut.aelPassive = _Target.addPassiveListener.bind(_Target);
      Shortcut.aelOnce = _Target.addListenerOnce.bind(_Target);
      Shortcut.rel = _Target.removeListener.bind(_Target);
      Shortcut.trigEvt = _Target.triggerNoBubble.bind(_Target);
      Shortcut.trigBubble = _Target.triggerBubble.bind(_Target);
      Shortcut.trigSetup = _Target.triggerSetup.bind(_Target);
      Shortcut.trigTeardown = _Target.triggerTeardown.bind(_Target); // export

      /***/
    },

    /***/
    "../browser/src/browser.js":
    /*!*********************************!*\
      !*** ../browser/src/browser.js ***!
      \*********************************/

    /***/
    function browserSrcBrowserJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../browser/index.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/browser/blob/master/LICENSE
       */
      // browser
      // script with a some functions related to browsers detection
      // import
      // export

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = {
        // isOldIe
        // retourne vrai si le navigateur est une vieille version de IE (IE 10 ou moins)
        isOldIe: function isOldIe() {
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Str["in"]('MSIE ', window.navigator.userAgent);
        },
        // isIe11
        // retourne vrai si le navigateur est ie11
        isIe11: function isIe11() {
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Str["in"]('Trident/', window.navigator.userAgent);
        },
        // isIe
        // retourne vrai si le navigateur est internet explorer
        isIe: function isIe() {
          return this.isOldIe() || this.isIe11();
        },
        // isUnsupported
        // retourne vrai si le navigateur est insupporté (donc vieux ie11)
        // si onlyEdge est true alors IE11 est aussi non supporté
        isUnsupported: function isUnsupported(onlyEdge) {
          return onlyEdge === true && this.isIe11() ? true : this.isOldIe();
        },
        // allowsCookie
        // retourne vrai si les cookies sont activés
        allowsCookie: function allowsCookie() {
          return navigator.cookieEnabled;
        }
      };
      /***/
    },

    /***/
    "../browser/src/data.js":
    /*!******************************!*\
      !*** ../browser/src/data.js ***!
      \******************************/

    /***/
    function browserSrcDataJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../browser/index.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/browser/blob/master/LICENSE
       */
      // dataTarget
      // script for storing datas within targets
      // import
      // export 

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = {
        // hasData
        // retourne vrai si la node a les données
        hasData: function hasData(node, value) {
          return this.getData(node, value) !== undefined;
        },
        // getDataKey
        // retourne la clé de date
        getDataKey: function getDataKey() {
          return '_quid_';
        },
        // allData
        // retourne toutes les données liés à la node
        // peut créer l'objet si inexistant
        allData: function allData(node, create) {
          var r = undefined;
          this.typecheck(node);
          var dataKey = this.getDataKey();

          var isPojo = _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(node[dataKey]);

          if (!isPojo && create === true) {
            isPojo = true;
            node[dataKey] = {};
          }

          if (isPojo === true) r = node[dataKey];
          return r;
        },
        // getData
        // permet de retourner une data d'une node
        // envoie une exception si plus d'une node
        getData: function getData(node, key) {
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(key);

          var data = this.allData(node);
          return data != null ? _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.get(key, data) : undefined;
        },
        // flashData
        // retourne la data et efface l'entrée de la node
        flashData: function flashData(node, key) {
          var r = this.getData(node, key);
          this.removeData(node, key);
          return r;
        },
        // setData
        // change de la data sur une ou plusieurs nodes
        // ceci n'affecte pas le dom, seulement stocké dans l'objet
        // si undefined efface la data
        setData: function setData(nodes, key, value) {
          nodes = this.toArray(nodes);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(key, true);

          var $inst = this;

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
            var data = $inst.allData(ele, true);
            if (value === undefined) _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.unsetRef(key, data);else _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.setRef(key, value, data);
          });
        },
        // removeData
        // enlève une donnée de la ou les nodes
        removeData: function removeData(nodes, key) {
          return this.setData(nodes, key, undefined);
        },
        // getOrSetData
        // crée une data dans une node si la valeur est présenement inexistante
        // sinon retourne la data de la node
        getOrSetData: function getOrSetData(node, key, value) {
          var r = undefined;
          var current = this.getData(node, key);

          if (current == null && value != null) {
            this.setData(node, key, value);
            r = value;
          } else r = current;

          return r;
        }
      };
      /***/
    },

    /***/
    "../browser/src/doc.js":
    /*!*****************************!*\
      !*** ../browser/src/doc.js ***!
      \*****************************/

    /***/
    function browserSrcDocJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../browser/index.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/browser/blob/master/LICENSE
       */
      // doc
      // object for document and document fragment targets
      // import
      // export

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = {
        // is
        // retourne vrai si la valeur est un document, un fragment de document ou un template
        is: function is(value) {
          return this.isCurrent(value) || this.isFragment(value) || this.isTemplate(value);
        },
        // is
        // retourne vrai si la valeur est le document courant
        isCurrent: function isCurrent(value) {
          return value === document;
        },
        // isFragment
        // retourne vrai si la valeur est un fragment de document
        isFragment: function isFragment(value) {
          return value instanceof DocumentFragment;
        },
        // getDimension
        // retourne la dimension du document, c'est à dire la dimension des premiers enfants du document
        getDimension: function getDimension(value) {
          this.typecheck(value);
          var r = {
            width: 0,
            height: 0
          };

          if (this.isCurrent(value)) {
            r.width = _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.round(document.documentElement.scrollWidth);
            r.height = _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.round(document.documentElement.scrollHeight);
          } else {
            var children = this.children(value);

            _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(children, function (ele) {
              var dimension = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getDimension(ele);

              r.width += dimension.width;
              r.height += dimension.height;
            });
          }

          return r;
        }
      };
      /***/
    },

    /***/
    "../browser/src/dom.js":
    /*!*****************************!*\
      !*** ../browser/src/dom.js ***!
      \*****************************/

    /***/
    function browserSrcDomJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../browser/index.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/browser/blob/master/LICENSE
       */
      // dom
      // script with functions related to html and dom
      // import
      // export

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = {
        // selectorInput
        // retourne un selector commun à utiliser pour les inputs
        selectorInput: function selectorInput(all) {
          var r = 'input,select,textarea,button';
          r += all !== true ? "[type='submit']" : '';
          return r;
        },
        // htmlStr
        // prend un maximum d'input et retourne une string html
        htmlStr: function htmlStr(value) {
          var r = '';
          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(value)) r = value;else if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.is(value)) r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.cast(value);else if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.is(value)) r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.getHtml(value);else if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.is(value)) r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getOuterHtml(value);else if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.are(value)) r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getOuterHtml(value);
          return r;
        },
        // htmlNodes
        // prend un maximum d'input et retourne un tableau de nodes
        // possible de cloner
        htmlNodes: function htmlNodes(value, clone) {
          var r = [];
          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(value)) r = this.parse(value);else if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.is(value)) {
            value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.realNode(value);
            r.push(clone === true ? _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.clone(value) : value);
          } else if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.are(value)) r = clone === true ? _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.clones(value) : value;else if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.is(value)) r.push(clone === true ? _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.clone(value) : value);
          return r;
        },
        // safeHtml
        // fait quelques modifications à une string html pour éviter des injections
        safeHtml: function safeHtml(html) {
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(html);

          html = html.replace(/<\!DOCTYPE[^>]*>/i, '');
          html = html.replace(/<(html|head|body)([\s\>])/gi, '<div data-tag="$1"$2');
          html = html.replace(/<\/(html|head|body)\>/gi, '</div>');
          html = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.trim(html);
          return html;
        },
        // parse
        // parse une string html, retourne un tableau avec les nodes
        // utilise l'élément template de document
        // retourne un tableau
        parse: function parse(html) {
          var r = [];
          html = this.safeHtml(html);
          var template = document.createElement('template');
          template.innerHTML = html;
          var fragment = template.content;
          r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.children(fragment, null, true);
          return r;
        },
        // parseOne
        // comme parse mais retourne seulement la première node du tableau
        parseOne: function parseOne(html) {
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.valueFirst(this.parse(html));
        },
        // querySelector
        // comme parse one, mais cherche pour en enfant via query selector
        // retourne le html de cette node
        querySelector: function querySelector(value, html) {
          var r = undefined;

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(value);

          var nodes = this.parse(html);

          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isNotEmpty(nodes)) {
            var finds = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.mergedQsa(nodes, value);

            if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isNotEmpty(finds)) {
              var find = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.valueFirst(finds);

              r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getHtml(find);
            }
          }

          return r;
        },
        // doc
        // prend une string html
        // retourne un objet avec les différents éléments d'un document décortiqués
        doc: function doc(html) {
          var r = {
            doc: this.parse(html),
            docEle: [],
            html: null,
            htmlAttr: null,
            head: null,
            headAttr: null,
            title: '?',
            titleHtml: '?',
            meta: null,
            body: null,
            bodyAttr: null
          };

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.accumulate(r.docEle, r.doc, function (ele) {
            return _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.is(ele) ? ele : null;
          });

          r.html = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.find(r.docEle, "[data-tag='html']") || _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.valueFirst(r.docEle);

          if (r.html != null) {
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.removeAttr(r.html, 'data-tag');

            r.htmlAttr = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.attr(r.html);
            r.head = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.scopedQuery(r.html, "[data-tag='head']");
            r.body = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.scopedQuery(r.html, "[data-tag='body']");

            if (r.head != null) {
              var title = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.scopedQuery(r.head, "title");

              var titleReplace = {
                '<': '&lt;',
                '>': '&gt;',
                ' & ': ' &amp; '
              };

              _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.removeAttr(r.head, 'data-tag');

              r.headAttr = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.attr(r.head);
              r.title = title != null ? _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getText(title) : '?';
              r.titleHtml = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.replace(titleReplace, r.title);
              r.meta = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.scopedQueryAll(r.head, "meta");
            }
          }

          if (r.body != null) {
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.removeAttr(r.body, 'data-tag');

            r.bodyAttr = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.attr(r.body);
          } else {
            var _html = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getOuterHtml(r.doc);

            var newBody = _index_js__WEBPACK_IMPORTED_MODULE_0__.Html.div(_html, {
              dataTag: 'body'
            });

            r.body = this.parseOne(newBody);
          }

          return r;
        }
      };
      /***/
    },

    /***/
    "../browser/src/ele.js":
    /*!*****************************!*\
      !*** ../browser/src/ele.js ***!
      \*****************************/

    /***/
    function browserSrcEleJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../browser/index.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/browser/blob/master/LICENSE
       */
      // eleTarget
      // script with many functions related to element nodes
      // import
      // export

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = {
        // is
        // retourne vrai si la valeur est une node
        is: function is(value) {
          return value instanceof HTMLElement;
        },
        // isVisible
        // retourne vrai si la node est visible
        isVisible: function isVisible(value) {
          return this.is(value) ? !!(value.offsetWidth || value.offsetHeight) : false;
        },
        // isHidden
        // retourne vrai si la node est invisible
        isHidden: function isHidden(value) {
          return this.is(value) ? !this.isVisible(value) : false;
        },
        // isTag
        // retourne vrai si la tag est celle donnée en argument
        isTag: function isTag(node, value) {
          return this.is(node) && this.tag(node) === value;
        },
        // isFocused
        // retourne vrai si la node a présentement le focus
        isFocused: function isFocused(node) {
          return node === document.activeElement;
        },
        // isFocusable
        // retourne vrai si la node peut recevoir le focus
        isFocusable: function isFocusable(node) {
          var r = false;

          if (this.is(node)) {
            var tag = this.tag(node);
            var tags = ['input', 'textarea', 'select', 'a', 'button'];
            var dimension = this.getDimension(node);

            if (this.match(node, '[tabindex]') || _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr["in"](tag, tags)) {
              if (dimension.width > 0 && dimension.height > 0) r = true;
            }
          }

          return r;
        },
        // isScrollable
        // retourne vrai si la node est scrollable dans un axis ou n'importe quel axis
        // retourne toujours faux si overflow est visible
        isScrollable: function isScrollable(node, axis) {
          var r = false;

          if (this.is(node)) {
            var overflow = this.getCss(node, 'overflow');

            if (overflow !== 'visible') {
              var scroll = this.getScroll(node);
              if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr["in"](axis, ['x', 'horizontal'])) r = scroll.scrollableX;else if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr["in"](axis, ['y', 'vertical'])) r = scroll.scrollableY;else r = scroll.scrollableX === true ? scroll.scrollableX : scroll.scrollableY;
            }
          }

          return r;
        },
        // hasAttr
        // retourne vrai si la node a l'attribut
        hasAttr: function hasAttr(node, value) {
          return this.is(node) && _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(value) ? node.hasAttribute(value) : false;
        },
        // hasClass
        // retourne vrai si la node a la classe
        hasClass: function hasClass(node, value) {
          return this.is(node) && _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(value) ? node.classList.contains(value) : false;
        },
        // tag
        // retourne le nom de la tag en lowerCase
        tag: function tag(node) {
          var r = null;
          var tag = this.getProp(node, 'tagName');
          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(tag)) r = tag.toLowerCase();
          return r;
        },
        // css
        // retourne un objet contenant toutes les règles css
        css: function css(node, start, pseudo) {
          var r = {};
          this.typecheck(node);
          var style = window.getComputedStyle(node, pseudo);

          for (var i = 0; i < style.length; i++) {
            var value = style.item(i);
            if (start == null || _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isStart(start, value)) r[value] = style.getPropertyValue(value);
          }

          return r;
        },
        // getCss
        // permet de retourner une valeur css
        getCss: function getCss(node, key, cast, pseudo) {
          var r = undefined;
          this.typecheck(node);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(key); // fix pour ie11 qui retourne mauvais computed style pour width/height (box-model)


          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Browser.isIe11() && _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr["in"](key, ['width', 'height'])) {
            var dimension = this.getDimension(node);
            r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil(dimension[key]) + "px";
          } else {
            var style = window.getComputedStyle(node, pseudo);
            r = style.getPropertyValue(key);
          }

          r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.cast(r, cast);
          return r;
        },
        // attr
        // retourne un objet contenant tous les attributs d'une balise
        attr: function attr(node, start) {
          var r = {};
          this.typecheck(node);
          var attr = node.attributes;

          _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.each(attr, function (value) {
            var name = value.name;
            if (start == null || _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isStart(start, name)) r[name] = value.value;
          });

          return r;
        },
        // attrStr
        // retourne les attributs d'une node sous forme de string
        attrStr: function attrStr(node, start) {
          var r = null;
          var attr = this.attr(node, start);
          if (attr != null) r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.str(attr, '=', ' ', true);
          return r;
        },
        // getAttr
        // retourne un attribut
        // possible de retourner la valeur json décodé, ou forcer un int/bool
        getAttr: function getAttr(node, key, cast) {
          var r = undefined;
          this.typecheck(node);

          if (this.hasAttr(node, key)) {
            r = node.getAttribute(key);
            r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.cast(r, cast);
          }

          return r;
        },
        // dataAttr
        // retourne un objet contenant tous les data-attributs d'une balise
        dataAttr: function dataAttr(node) {
          return this.attr(node, 'data-');
        },
        // getValue
        // retourne la valeur pour une node, surtout pour les formulaires
        // la valeur retourné peut être trim
        getValue: function getValue(node, trim, cast) {
          var r = undefined;
          this.typecheck(node);
          r = node.value;
          r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.cast(r);
          if (trim === true) r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.trim(r);
          if (cast != null) r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.cast(r, cast);
          return r;
        },
        // getDimension
        // retourne la dimension de la node
        // il est possible de retourner la dimension si on change de façon temporaire le display
        getDimension: function getDimension(node, display) {
          this.typecheck(node);
          display = display === true ? 'block' : display;

          var displayToggle = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(display);

          var currentDisplay, currentWidth, currentHeight;

          if (displayToggle) {
            currentDisplay = node.style.display;
            currentWidth = node.style.width;
            currentHeight = node.style.height;
            node.style.display = display;
            node.style.width = 'auto';
            node.style.height = 'auto';
          }

          var rect = this.getBoundingRect(node);

          if (displayToggle) {
            node.style.display = currentDisplay;
            node.style.width = currentWidth;
            node.style.height = currentHeight;
          }

          return {
            width: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil(rect.width),
            height: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil(rect.height)
          };
        },
        // getBoundingRect
        // retourne l'objet bounding rect pour la node
        getBoundingRect: function getBoundingRect(node) {
          this.typecheck(node);
          return node.getBoundingClientRect();
        },
        // getScroll
        // retourne un object avec les données pour le scroll
        // retourne aussi les dimensions externes et internes, ainsi qu'un bool indiquant si une direction est scrollable
        getScroll: function getScroll(node) {
          var r = null;
          this.typecheck(node);
          var tag = this.tag(node); // scrollTop n'est pas sur la tag HTML dans IE

          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr["in"](tag, ['html', 'body'])) r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Win.getScroll();else {
            var rect = this.getBoundingRect(node);
            r = {
              top: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil(node.scrollTop),
              left: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil(node.scrollLeft),
              width: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil(node.scrollWidth),
              height: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil(node.scrollHeight),
              innerWidth: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil(rect.width),
              innerHeight: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil(rect.height),
              scrollableX: false,
              scrollableY: false
            };

            if (r.innerWidth > 0 && r.innerHeight > 0) {
              if (r.width > r.innerWidth) r.scrollableX = true;
              if (r.height > r.innerHeight) r.scrollableY = true;
            }
          }
          return r;
        },
        // getOffset
        // retourne tous les offsets de la node (par rapport au parent, au document et à la window)
        getOffset: function getOffset(node) {
          return {
            parent: this.getOffsetParent(node),
            doc: this.getOffsetDoc(node),
            win: this.getOffsetWin(node)
          };
        },
        // getOffsetParent
        // retourne un objet avec les données pour le offset de la node (par rapport à son parent scrollable)
        getOffsetParent: function getOffsetParent(node) {
          this.typecheck(node);
          return {
            top: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil(node.offsetTop),
            left: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil(node.offsetLeft)
          };
        },
        // getOffsetDoc
        // retourne un objet avec les données pour le offset de la node (par rapport au document)
        getOffsetDoc: function getOffsetDoc(node) {
          var rect = this.getBoundingRect(node);

          var scroll = _index_js__WEBPACK_IMPORTED_MODULE_0__.Win.getScroll();

          return {
            top: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil(rect.top + scroll.top),
            left: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil(rect.left + scroll.left)
          };
        },
        // getOffsetWin
        // retourne un objet avec les données pour le offset de la node (par rapport à la window)
        getOffsetWin: function getOffsetWin(node) {
          var rect = this.getBoundingRect(node);
          return {
            top: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil(rect.top),
            left: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil(rect.left)
          };
        },
        // setAttr
        // change un attribut sur une ou plusieurs nodes
        // si undefined, efface l'attribut
        setAttr: function setAttr(nodes, key, value) {
          nodes = this.toArray(nodes);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(key, true);

          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.is(value)) value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Json.encode(value);
          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.is(value)) value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.toInt(value);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
            if (value === undefined) ele.removeAttribute(key);else ele.setAttribute(key, value);
          });
        },
        // removeAttr
        // enlève un attribut sur une ou plusieurs nodes
        removeAttr: function removeAttr(nodes, key) {
          return this.setAttr(nodes, key, undefined);
        },
        // toggleAttr
        // permet d'ajouter ou enlever un attribut sur une ou plusieurs nodes
        // l'atttribut est toujours présent, si true ou inexistant valeur est 1, sinon valeur est 0
        toggleAttr: function toggleAttr(nodes, key, bool) {
          nodes = this.toArray(nodes);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(key, true);

          var $inst = this;
          var defaultValue = _index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.is(bool) ? _index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.toInt(bool) : null;

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
            var value = defaultValue;

            if (value == null) {
              value = $inst.getAttr(ele, key, 'int');
              value = value === 1 ? false : true;
            }

            $inst.setAttr(ele, key, value);
          });
        },
        // setsAttr
        // remplace tous les attributs d'une ou plusieurs nodes, il faut fournir un plain object
        // possible de retirer les attributs existants
        setsAttr: function setsAttr(nodes, value) {
          nodes = this.toArray(nodes);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.typecheck(value);

          var $inst = this;

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.each(value, function (v, k) {
              $inst.setAttr(ele, k, v);
            });
          });
        },
        // emptyAttr
        // permet de retirer tous les attributs à une ou plusieurs nodes
        emptyAttr: function emptyAttr(nodes) {
          nodes = this.toArray(nodes);
          var $inst = this;

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
            _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.each(ele.attributes, function (value) {
              if (value != null) $inst.removeAttr(ele, value.name);
            });
          });
        },
        // addId
        // ajoute un id aux éléments contenus dans l'objet qui n'en ont pas
        addId: function addId(nodes, value) {
          nodes = this.toArray(nodes);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(value);

          var $inst = this;

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
            if (!$inst.match(ele, "[id]")) {
              var newId = value + _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.unique();

              $inst.setProp(ele, 'id', newId);
            }
          });
        },
        // setCss
        // permet de changer une valeur inline du css
        setCss: function setCss(node, key, value) {
          this.typecheck(node);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(key);

          key = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.toCamelCase('-', key);
          if (value == null) value = '';
          node.style[key] = value;
        },
        // setValue
        // permet de changer la valeur d'une node
        // si la valeur est un objet, encode en json
        setValue: function setValue(node, value) {
          this.typecheck(node);
          value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.cast(value, true);
          node.value = value;
        },
        // toggleClass
        // permet d'ajouter ou enlever une classe sur une ou plusieurs nodes
        toggleClass: function toggleClass(nodes, value, bool) {
          nodes = this.toArray(nodes);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(value, true);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
            ele.classList.toggle(value, bool);
          });
        },
        // setDimension
        // permet de changer la largeur et hauteur de la node
        setDimension: function setDimension(node, width, height) {
          this.typecheck(node);

          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.is(width)) {
            width = width === true ? this.getDimension(node, width).width : width;
            width = width === false ? undefined : width;
            width = _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.is(width) ? width + "px" : width;
            this.setCss(node, 'width', width);
          }

          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.is(height)) {
            height = height === true ? this.getDimension(node, height).height : height;
            height = height === false ? undefined : height;
            height = _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.is(height) ? height + "px" : height;
            this.setCss(node, 'height', height);
          }
        },
        // setScroll
        // permet de changer les valeurs du scroll
        setScroll: function setScroll(node, top, left) {
          this.typecheck(node);
          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.is(top)) node.scrollTop = top > 0 ? top : 0;
          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.is(left)) node.scrollLeft = left > 0 ? left : 0;
        },
        // focus
        // permet de mettre le focus sur une node
        // possible de tenter de prevent le scroll
        focus: function focus(node, preventScroll) {
          this.typecheck(node);

          if (preventScroll === true) {
            var scroll = _index_js__WEBPACK_IMPORTED_MODULE_0__.Win.getScroll();

            node.focus();

            _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.timeout(0, function () {
              _index_js__WEBPACK_IMPORTED_MODULE_0__.Win.setScroll(scroll.top, scroll.left);
            });
          } else node.focus();
        },
        // getUri
        // retourne l'uri à partir d'une node
        getUri: function getUri(node) {
          var r = undefined;
          var tag = this.tag(node);
          if (tag === 'form') r = this.getAttr(node, "action");else r = this.getAttr(node, "href") || this.getAttr(node, 'data-href');
          return r;
        },
        // serialize
        // permet de serializer une ou plusieurs nodes
        // il faut spécifier la prop pour clé et celle pour value
        serialize: function serialize(nodes, keyProp, valueProp) {
          var r = '';
          nodes = this.toArray(nodes);

          var query = _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.makeQuery();

          keyProp = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(keyProp) ? keyProp : 'name';
          valueProp = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(valueProp) ? valueProp : 'value';
          var $inst = this;

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
            var key = $inst.getProp(ele, keyProp);
            var value = $inst.getProp(ele, valueProp);
            query.append(key, value);
          });

          r = query.toString();
          return r;
        },
        // prepend
        // ajout une ou plusieurs nodes comme premiers enfant de la node
        prepend: function prepend(node, value) {
          this.typecheck(node);
          value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Dom.htmlNodes(value);
          node.prepend.apply(node, value);
        },
        // append
        // ajoute du contenu html comme dernier enfant de la node
        append: function append(node, value) {
          this.typecheck(node);
          value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Dom.htmlNodes(value);
          node.append.apply(node, value);
        },
        // insertBefore
        // permet d'insérer une ou plusieurs node avant une autre
        insertBefore: function insertBefore(node, value) {
          this.typecheck(node);
          value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Dom.htmlNodes(value);
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.accumulate([], value, function (ele) {
            return node.insertAdjacentElement('beforebegin', ele);
          });
        },
        // insertAfter
        // permet d'insérer une ou plusieurs node après une autre
        insertAfter: function insertAfter(node, value) {
          this.typecheck(node);
          value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Dom.htmlNodes(value);
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.accumulate([], value, function (ele) {
            return node.insertAdjacentElement('afterend', ele);
          });
        },
        // wrapAll
        // permet d'enrobber un groupe de node dans une une nouvelle balise html
        wrapAll: function wrapAll(nodes, value) {
          var r = null;
          nodes = this.toArray(nodes, true);
          value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Dom.htmlNodes(value);

          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isNotEmpty(value)) {
            r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.valueFirst(value);

            var firstNode = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.valueFirst(nodes);

            this.insertBefore(firstNode, value);
            this.append(r, nodes);
          }

          return r;
        }
      };
      /***/
    },

    /***/
    "../browser/src/evt.js":
    /*!*****************************!*\
      !*** ../browser/src/evt.js ***!
      \*****************************/

    /***/
    function browserSrcEvtJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../browser/index.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/browser/blob/master/LICENSE
       */
      // event
      // script containing event management functions
      // import
      // export

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = {
        // specialKeyCode
        // code de clavier spécial
        specialKeyCode: [9, 10, 13, 16, 17, 18, 19, 20, 27, 32, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 91, 92, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 144, 145],
        // support
        // retourne un objet indiquant si le browser support passive et once
        support: function () {
          var support = {
            passive: false,
            once: false
          };

          try {
            var options = {
              get passive() {
                support.passive = true;
                return false;
              },

              get once() {
                support.once = true;
                return false;
              }

            };
            window.addEventListener("test-support", null, options);
            window.removeEventListener("test-support", null, options);
          } catch (err) {
            support.passive = false;
            support.once = false;
          }

          return support;
        }(),
        // is
        // retourne vrai si la valeur est un événement
        is: function is(value) {
          return value instanceof Event;
        },
        // isSpecialKeyCode
        // retourne vrai si l'event a un keyCode considéré comme spécial (non printable)
        isSpecialKeyCode: function isSpecialKeyCode(event) {
          var r = false;
          this.typecheck(event);
          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(event.keyCode) && _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr["in"](event.keyCode, this.specialKeyCode)) r = true;
          return r;
        },
        // preventStop
        // permet de faire un prevent default et stop propagation à un événement
        preventStop: function preventStop(event, immediate) {
          this.typecheck(event);
          event.preventDefault();
          if (immediate === true) event.stopImmediatePropagation();else event.stopPropagation();
          return false;
        },
        // nameFromType
        // retourne event ou custom event selon le type
        // un nom de type avec un . ou : est custom
        nameFromType: function nameFromType(type) {
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(type, true);

          var r = 'event';
          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str["in"]('.', type) || _index_js__WEBPACK_IMPORTED_MODULE_0__.Str["in"](':', type)) r = 'customEvent';
          return r;
        },
        // createFromType
        // crée l'objet event à partir d'un type
        createFromType: function createFromType(type, option) {
          var r = null;
          var name = this.nameFromType(type);
          if (name === 'customEvent') r = new CustomEvent(type, option);else if (name === 'event') r = new Event(type, option);
          return r;
        },
        // getTriggerTarget
        // retourne la trigger target, en lien avec les bindings delegate
        // créés la propirété triggerTarget sur l'objet event
        getTriggerTarget: function getTriggerTarget(event) {
          var r = null;
          this.typecheck(event);

          if (event.target) {
            if (event.triggerTarget != null) r = event.triggerTarget;else r = event.target;
          }

          return r;
        }
      };
      /***/
    },

    /***/
    "../browser/src/handler.js":
    /*!*********************************!*\
      !*** ../browser/src/handler.js ***!
      \*********************************/

    /***/
    function browserSrcHandlerJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../browser/index.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/browser/blob/master/LICENSE
       */
      // handler
      // script for handler management (functions stored in targets)
      // import
      // export

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = {
        // isTriggerHandlerEqual
        // retourne vrai si la handler de chaque node retourne la valeur donné en argument
        isTriggerHandlerEqual: function isTriggerHandlerEqual(nodes, type, equal) {
          nodes = this.toArray(nodes);

          var args = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.merge([type], _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.sliceStart(3, arguments));

          var $inst = this;
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.every(nodes, function (ele) {
            var funcArgs = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.merge([ele], args);

            var result = $inst.triggerHandler.apply($inst, funcArgs);
            return result === equal;
          });
        },
        // allHandler
        // retourne de l'objet avec toutes les handler lié à la node
        // possible de créer l'objet si non existant
        // envoie une erreur si plusieurs nodes
        allHandler: function allHandler(node, create) {
          this.typecheck(node);
          return this.getOrSetData(node, '_handler_', create === true ? {} : undefined);
        },
        // getHandler
        // méthode qui retourne un handler emmagasiné dans une node
        // envoie une erreur si plusieurs nodes
        getHandler: function getHandler(node, type) {
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(type);

          var handlers = this.allHandler(node);
          return handlers != null ? _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.get(type, handlers) : undefined;
        },
        // setHandler
        // permet d'emmagasiné une handler dans chaque node fournit en argument
        setHandler: function setHandler(nodes, type, handler) {
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(type, true);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(handler);

          nodes = this.toArray(nodes);
          var $inst = this;

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
            var all = $inst.allHandler(ele, true);

            _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.setRef(type, handler, all);
          });
        },
        // setsHandler
        // permet d'ajouter plusieurs handlers à partir d'un objet
        setsHandler: function setsHandler(nodes, typeStart, obj) {
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(typeStart, true);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.typecheck(obj);

          var $inst = this;

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.each(obj, function (value, key) {
            var type = typeStart + key;
            $inst.setHandler(nodes, type, value);
          });
        },
        // removeHandler
        // permet de retirer un handler emmagasiné dans une ou plusiuers node
        removeHandler: function removeHandler(nodes, type) {
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(type, true);

          nodes = this.toArray(nodes);
          var $inst = this;

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
            var all = $inst.allHandler(ele, true);

            _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.unsetRef(type, all);
          });
        },
        // triggerHandler
        // permet de lancer le handler sur la première node donnée en argument
        // retourne le résultat de la méthode ou undefined
        triggerHandler: function triggerHandler(node, type) {
          var r = undefined;
          this.typecheck(node);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(type, true);

          var handler = this.getHandler(node, type);

          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Func.is(handler)) {
            var args = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.sliceStart(2, arguments);

            r = handler.apply(node, args);
          }

          return r;
        },
        // triggersHandler
        // permet de lancer un handler sur plusieurs nodes
        // retorne un tableau avec tous les résultats
        triggersHandler: function triggersHandler(nodes, type) {
          nodes = this.toArray(nodes);
          var $inst = this;

          var args = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.sliceStart(2, arguments);

          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.accumulate([], nodes, function (ele) {
            return $inst.triggerHandler.apply($inst, _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.merge([ele, type], args));
          });
        }
      };
      /***/
    },

    /***/
    "../browser/src/historyState.js":
    /*!**************************************!*\
      !*** ../browser/src/historyState.js ***!
      \**************************************/

    /***/
    function browserSrcHistoryStateJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../browser/index.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/browser/blob/master/LICENSE
       */
      // historyState
      // script with functions related to the history states
      // import
      // export

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = {
        // is
        // retourne vrai si la valeur est un objet compatible pour un état d'historique
        is: function is(state) {
          var r = false;
          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(state) && _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(state.url) && _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.is(state.timestamp)) r = true;
          return r;
        },
        // isChangeValid
        // retourne vrai si le changement de state est valide
        isChangeValid: function isChangeValid(state, previous, differentPathQuery) {
          var r = false;

          if (this.is(state) && this.is(previous)) {
            var isInternal = _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.isInternal(state.url, previous.url);

            var hasExtension = _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.hasExtension(state.url);

            var isHashChange = _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.isHashChange(state.url, previous.url);

            var isSameWithHash = _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.isSameWithHash(state.url, previous.url);

            if (isInternal === true && hasExtension === false && isHashChange === false && isSameWithHash === false) {
              if (!differentPathQuery || _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.isSamePathQuery(state.url, previous.url) === false) r = true;
            }
          }

          return r;
        },
        // make
        // retourne un objet état d'historique (avec url absolute, title et timestamp)
        make: function make(value, title, noEmptyHash) {
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(value);

          var uri = _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.absolute(value, true);

          var valueEndsHash = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isEnd('#', value);

          var uriEndsHash = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isEnd('#', uri);

          if (noEmptyHash === true && uriEndsHash === true) uri = uri.slice(0, -1);else if (noEmptyHash !== true && valueEndsHash === true && uriEndsHash === false) uri += "#";
          return {
            url: uri,
            title: title || null,
            timestamp: _index_js__WEBPACK_IMPORTED_MODULE_0__.Datetime.now()
          };
        }
      };
      /***/
    },

    /***/
    "../browser/src/listener.js":
    /*!**********************************!*\
      !*** ../browser/src/listener.js ***!
      \**********************************/

    /***/
    function browserSrcListenerJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../browser/index.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/browser/blob/master/LICENSE
       */
      // listener
      // script containing event listeners functions for target elements
      // import
      // export

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = new function () {
        // addListener
        // méthode qui permet d'ajouter un nouveau listener d'événement
        // retourne un tableau avec les paramètres pour retirer le listener
        this.addListener = function (nodes, type, func, register, delegate, option) {
          var r = null;

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(type, true);

          nodes = this.toArray(nodes);
          var $inst = this;

          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isNotEmpty(nodes)) {
            option = Object.assign({
              capture: false,
              once: false
            }, option);
            var thirdArg = _index_js__WEBPACK_IMPORTED_MODULE_0__.Evt.support.once === true ? option : option.capture;
            var handler = addListenerHandler.call(this, type, func, delegate, thirdArg, option);

            _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
              ele.addEventListener(type, handler, thirdArg);
              if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(register) || register === true) $inst.registerListener(ele, register, type, handler, thirdArg);
            });

            r = [type, handler, thirdArg];
          }

          return r;
        }; // registerListener
        // permet d'enregistrer un event listener dans la node
        // ceci permet de le retirer par la suite


        this.registerListener = function (node, register, type, handler, option) {
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(type, true);

          register = register === true ? type : register;

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(register, true);

          var data = this.getOrSetData(node, 'rel', {});
          var entry = [type, handler, option];

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.setRef(register, entry, data);
        }; // addListenerOnce
        // comme ael, mais le listener ne peut être déclenché qu'une seule fois


        this.addListenerOnce = function (node, type, func, register, delegate, option) {
          return this.addListener(node, type, func, register, delegate, Object.assign({}, option, {
            once: true
          }));
        }; // addDelegatedListener
        // permet d'ajouter un event listener qui se trigge seulement selon le delegate


        this.addDelegatedListener = function (node, type, delegate, func, register, option) {
          return this.addListener(node, type, func, register, delegate, option);
        }; // addPassiveListener
        // permet d'ajouter un event listener passif, utile pour scroll


        this.addPassiveListener = function (node, type, func, register, delegate, option) {
          return this.addListener(node, type, func, register, delegate, Object.assign({}, option, {
            passive: true
          }));
        }; // removeListener
        // permet de retirer un event listener
        // args est le tableau retournée par addListener (contient type, handler et option)


        this.removeListener = function (nodes, args) {
          nodes = this.toArray(nodes);
          var $inst = this;

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
            if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(args)) {
              var key = args;
              var data = $inst.getData(ele, 'rel');

              if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(data)) {
                args = _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.get(key, data);

                _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.unsetRef(key, data);
              }
            }

            if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(args)) ele.removeEventListener.apply(ele, args);
          });
        }; // trigger
        // utilisé par triggerBubble et triggerNoBubble pour envoyer des événements


        this.trigger = function (nodes, type, option) {
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(type, true);

          nodes = this.toArray(nodes);

          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isNotEmpty(nodes)) {
            var event = _index_js__WEBPACK_IMPORTED_MODULE_0__.Evt.createFromType(type, option);

            _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
              ele.dispatchEvent(event);
            });
          }
        }; // triggerBubble
        // permet de lancer des événements sur chaque node
        // ces événements bubble


        this.triggerBubble = function (nodes, type) {
          var data = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.sliceStart(2, arguments);

          var option = {
            bubbles: true,
            cancelable: true,
            detail: data
          };
          return this.trigger(nodes, type, option);
        }; // triggerNoBubble
        // permet de lancer des événements sur chaque node
        // ces événements ne bubble pas


        this.triggerNoBubble = function (nodes, type) {
          var data = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.sliceStart(2, arguments);

          var option = {
            bubbles: false,
            cancelable: true,
            detail: data
          };
          return this.trigger(nodes, type, option);
        }; // triggerSetup
        // fonction utilisé pour lancer le setup sur un component
        // lance component:ready après le setup
        // ces événements ne bubble pas


        this.triggerSetup = function (nodes) {
          var sliced = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.sliceStart(1, arguments);

          var args = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.merge([nodes, 'component:setup'], sliced);

          this.triggerNoBubble.apply(this, args);
          args = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.merge([nodes, 'component:ready'], sliced);
          this.triggerNoBubble.apply(this, args);
        }; // triggerTeardown
        // fonction utilisé pour lancer le démontange d'un component
        // ces événements ne bubble pas


        this.triggerTeardown = function (nodes) {
          var args = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.merge([nodes, 'component:teardown'], _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.sliceStart(1, arguments));

          return this.triggerNoBubble.apply(this, args);
        }; // addListenerHandler
        // retourne le handler utilisé par addListener
        // ajoute le support pour once si non supporté par le navigateur


        var addListenerHandler = function addListenerHandler(type, func, delegate, thirdArg, option) {
          var $inst = this;

          var handler = function handler(event) {
            var go = delegate == null;
            var context = this;
            if (option.once === true && _index_js__WEBPACK_IMPORTED_MODULE_0__.Evt.support.once === false) $inst.removeListener(event.target, [type, handler, thirdArg]);

            if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(delegate) && event.target != null) {
              go = prepareDelegate.call(this, event, delegate);
              context = event.triggerTarget;
            }

            if (go === true) {
              var args = [event];
              var detail = event.detail;
              args = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.merge(args, detail);
              func.apply(context, args);
            }
          };

          return handler;
        }; // prepareDelegate
        // handlertion protégé
        // gère la délégation et le changement à l'objet event


        var prepareDelegate = function prepareDelegate(event, delegate) {
          var r = false;
          var context = event.target;

          var nodes = _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.scopedQueryAll(this, delegate);

          var delegateTarget = this;
          var triggerTarget = context;
          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr["in"](context, nodes)) r = true;else {
            r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.some(nodes, function (node) {
              if (node.contains(context)) {
                triggerTarget = _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.closest(context, delegate);
                return true;
              }
            });
          }
          event.delegateTarget = delegateTarget;
          event.triggerTarget = triggerTarget;
          return r;
        };
      }();
      /***/

    },

    /***/
    "../browser/src/nod.js":
    /*!*****************************!*\
      !*** ../browser/src/nod.js ***!
      \*****************************/

    /***/
    function browserSrcNodJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EleDocTarget": function EleDocTarget() {
          return (
            /* binding */
            _EleDocTarget
          );
        },

        /* harmony export */
        "EleWinTarget": function EleWinTarget() {
          return (
            /* binding */
            _EleWinTarget
          );
        },

        /* harmony export */
        "NodTarget": function NodTarget() {
          return (
            /* binding */
            _NodTarget
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../browser/index.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/browser/blob/master/LICENSE
       */
      // nod
      // object for element, text and document nodes
      // import
      // nodTarget
      // méthodes pour un grand ensemble de nodes


      var _NodTarget = {
        // is
        // retourne vrai si la valeur est un element, un textNode ou un document
        is: function is(value) {
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.is(value) || _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.is(value) || this.isText(value) || this.isDoctype(value);
        },
        // isText
        // retourne vrai si c'est une texte node
        isText: function isText(value) {
          return value != null && value.nodeType === Node.TEXT_NODE;
        },
        // isDoctype
        // retourne vrai si c'est une node doctype
        isDoctype: function isDoctype(value) {
          return value != null && value.nodeType === Node.DOCUMENT_TYPE_NODE;
        },
        // isTemplate
        // retourne vrai si la valeur est un élément template
        isTemplate: function isTemplate(value) {
          return value instanceof HTMLTemplateElement;
        },
        // realNode
        // retourne la vrai node
        // utilisé pour les méthodes du sélecteur
        realNode: function realNode(value) {
          var r = value;
          if (this.isTemplate(value)) r = value.content;
          return r;
        },
        // getText
        // retourne le text contenu dans une node et ses enfants
        // ne retourne aucune balise html
        getText: function getText(node) {
          this.typecheck(node);
          return node.textContent != null ? node.textContent : undefined;
        },
        // setText
        // permet de changer contenu texte d'une balise
        setText: function setText(node, value) {
          this.typecheck(node);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(value, false);

          if (node.textContent != null) {
            value = value == null ? '' : value;
            node.textContent = value;
          }
        },
        // clone
        // clone une node ou un document
        clone: function clone(value) {
          this.typecheck(value);
          return value.cloneNode(true);
        },
        // clones
        // permet de cloner un tableau de nodes ou document
        clones: function clones(value) {
          var $inst = this;
          var nodes = this.toArray(value);
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.accumulate([], value, function (ele) {
            return $inst.clone(ele);
          });
        },
        // remove
        // permet d'effacer une ou plusieurs nodes du dom
        // utilise arguments
        remove: function remove(value) {
          var nodes = this.toArray(value);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
            ele.remove();
          });
        }
      }; // eleDocTarget
      // objet pour les nodes qui contiennent du html (element + doc seulement)

      var _EleDocTarget = {
        // isEmpty
        // retourne vrai si la valeur est une node et qu'elle est vide
        isEmpty: function isEmpty(value) {
          return this.is(value) ? _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isEmpty(this.getHtml(value)) : false;
        },
        // isNotEmpty
        // retourne vrai si la valeur est une node et qu'elle n'est pas vide
        isNotEmpty: function isNotEmpty(value) {
          return this.is(value) ? _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(this.getHtml(value)) : false;
        },
        // getHtml
        // retourne le html dans la node ou le document
        getHtml: function getHtml(value) {
          var r = '';

          var children = _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.children(value, null, true);

          r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getOuterHtml(children);
          return r;
        },
        // setHtml
        // permet de changer le html dans la node ou le document
        // efface tous les enfants et ajoute la ou les nouvelles nodes
        setHtml: function setHtml(node, value, clone) {
          this.typecheck(node);
          node = this.realNode(node);

          var children = _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.children(node, null, true);

          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(value)) value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Json.encode(value);
          value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Dom.htmlNodes(value, clone);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.remove(children);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(value, function (ele) {
            node.appendChild(ele);
          });
        },
        // replaceHtml
        // comme setHtml, mais le html est seulement remplacer si différent
        // utilise une balise pour avoir le même encodage que la string
        // il faut absolument fournir une string
        // retourne vrai si le html a été changé
        replaceHtml: function replaceHtml(node, value) {
          var r = false;

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(value);

          var current = this.getHtml(node);
          var newElement = document.createElement('div');
          this.setHtml(newElement, value);
          var newValue = this.getHtml(newElement);

          if (current !== newValue) {
            r = true;
            this.setHtml(node, value);
          }

          return r;
        },
        // getOuterHtml
        // retourne le outerHtml d'une ou plusieurs nodes
        getOuterHtml: function getOuterHtml(nodes) {
          nodes = _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.toArray(nodes);
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.accumulate('', nodes, function (ele) {
            var content = '';
            if (ele.outerHTML != null) content = ele.outerHTML;else if (ele.textContent != null) content = ele.textContent;
            return content;
          });
        }
      }; // eleWinTarget 
      // objet pour les méthodes communes entre node et window

      var _EleWinTarget = {
        // blur
        // permet de retirer le focus d'une node ou window
        blur: function blur(node) {
          this.typecheck(node);
          node.blur();
        }
      }; // export

      /***/
    },

    /***/
    "../browser/src/request.js":
    /*!*********************************!*\
      !*** ../browser/src/request.js ***!
      \*********************************/

    /***/
    function browserSrcRequestJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../browser/index.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/browser/blob/master/LICENSE
       */
      // request
      // script with functions related to the current request
      // import
      // export

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = {
        // relative
        // retourne l'uri relative courante
        // possible d'inclure le hash
        relative: function relative(hash) {
          var r = window.location.pathname + window.location.search;
          if (hash === true && window.location.hash) r += _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.makeHash(window.location.hash, true);
          return r;
        },
        // absolute
        // retourne l'uri absolute courante
        absolute: function absolute() {
          return window.location.href;
        },
        // scheme
        // retourne le scheme courant
        // possible de retourne avec ou sans le :
        scheme: function scheme(twoDot) {
          var r = location.protocol;
          if (twoDot !== true) r = r.substring(0, _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.pos(':', r));
          return r;
        },
        // host
        // retourne le host courante
        host: function host() {
          return location.hostname;
        },
        // schemeHost
        // retourne le schemeHost courant
        schemeHost: function schemeHost() {
          return location.origin;
        },
        // fragment
        // retourne le fragment de l'uri sans le hash
        fragment: function fragment() {
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.makeHash(window.location.hash);
        },
        // parse
        // retourne un objet avec les différentes parties de l'uri courante séparés
        parse: function parse() {
          return new URL(this.absolute());
        }
      };
      /***/
    },

    /***/
    "../browser/src/selector.js":
    /*!**********************************!*\
      !*** ../browser/src/selector.js ***!
      \**********************************/

    /***/
    function browserSrcSelectorJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../browser/index.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/browser/blob/master/LICENSE
       */
      // selector
      // script with methods related to selecting and matching nodes
      // import
      // export

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = {
        // scopedQuery
        // méthode utilisé pour faire une recherche et retourner le premier enfant d'une target qui match le selector
        // possible de faire un typecheck (ele non vide) si le dernier argument est true
        scopedQuery: function scopedQuery(node, selector, typecheck) {
          var r = null;
          node = this.realNode(node);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.typecheck(node);

          if (node != null) {
            selector = _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.is(node) ? selector : ":scope " + selector;
            r = node.querySelector(selector);
          }

          if (typecheck === true) _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.typecheck(r);
          return r;
        },
        // scopedQueryAll
        // méthode utilisé pour faire une recherche et retourner les enfants d'une target qui match le selector
        // doit retourner un array, pas une node list
        // possible de faire un typecheck (eles non vide) si le dernier argument est true
        scopedQueryAll: function scopedQueryAll(node, selector, typecheck) {
          var r = null;
          node = this.realNode(node);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.typecheck(node);

          if (node != null) {
            selector = _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.is(node) ? selector : ":scope " + selector;
            r = node.querySelectorAll(selector);
            if (r instanceof NodeList) r = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.toArray(r);
          }

          if (typecheck === true) _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.typechecks(r, true);
          return r;
        },
        // mergedQsa
        // permet de faire un querySelectorAll sur plusieurs nodes
        // retourne un array avec les résultats merged
        mergedQsa: function mergedQsa(nodes, selector, typecheck) {
          var r = null;
          var $inst = this;
          nodes = this.toArray(nodes);

          if (nodes != null) {
            r = [];

            _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
              _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.mergeRef(r, $inst.scopedQueryAll(ele, selector));
            });
          }

          if (typecheck === true) _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.typechecks(r, true);
          return r;
        },
        // closest
        // retourne la node ou le parent le plus proche de la node qui retourne vrai au pattern
        closest: function closest(node, value) {
          node = this.realNode(node);
          this.typecheck(node);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(value);

          return node.closest(value);
        },
        // closestParent
        // retourne le parent le plus proche de la node qui retourne vrai au pattern
        closestParent: function closestParent(node, value) {
          var parent = this.parent(node);
          return parent != null ? this.closest(parent, value) : null;
        },
        // match
        // retourne vrai si la node match le pattern
        match: function match(node, value) {
          node = this.realNode(node);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.typecheck(node);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(value);

          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.is(node) ? false : node.matches(value);
        },
        // some
        // retourne vrai si au moins une node retourne vrai au pattern
        some: function some(nodes, value) {
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(value);

          nodes = this.toArray(nodes);
          var $inst = this;
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.some(nodes, function (ele) {
            return $inst.match(ele, value);
          });
        },
        // every
        // retourne vrai si toutes les nodes retournent vrai au pattern
        every: function every(nodes, value) {
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(value);

          nodes = this.toArray(nodes);
          var $inst = this;
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.every(nodes, function (ele) {
            return $inst.match(ele, value);
          });
        },
        // filter
        // permet de filtrer les nodes d'un tableau qui match le pattern
        filter: function filter(nodes, value) {
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(value);

          nodes = this.toArray(nodes);
          var $inst = this;
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.filter(nodes, function (ele) {
            return $inst.match(ele, value);
          });
        },
        // find
        // retourne la première valeur d'un tableau qui match le pattern
        find: function find(nodes, value) {
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(value);

          nodes = this.toArray(nodes);
          var $inst = this;
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.find(nodes, function (ele) {
            return $inst.match(ele, value);
          });
        },
        // parent
        // retourne le parent de la node, le parent peut être valider contre un sélecteur
        parent: function parent(node, value) {
          var r = null;
          node = this.realNode(node);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.typecheck(node);

          var parent = node.parentNode;

          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.is(parent)) {
            if (value == null || _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.match(parent, value)) r = parent;
          }

          return r;
        },
        // parents
        // permet de retourner tous les parents d'une node
        // possible d'arrêter à un point
        parents: function parents(node, value, until) {
          var r = [];
          node = this.realNode(node);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.typecheck(node);

          while (node = _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.parent(node)) {
            if (until != null && _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.match(node, until)) break;
            if (value == null || _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.match(node, value)) r.push(node);
          }

          return r;
        },
        // prev
        // retourne l'élément précédant la node
        prev: function prev(node, value) {
          var r = null;
          node = this.realNode(node);
          this.typecheck(node);
          var sibling = node.previousElementSibling;

          if (this.is(sibling)) {
            if (value == null || this.match(sibling, value)) r = sibling;
          }

          return r;
        },
        // prevs
        // retourne tous les éléments précédant la node
        // possible d'arrêter à un point
        prevs: function prevs(node, value, until) {
          var r = [];
          node = this.realNode(node);
          this.typecheck(node);

          while (node = this.prev(node)) {
            if (until != null && this.match(node, until)) break;
            if (value == null || this.match(node, value)) r.push(node);
          }

          return r;
        },
        // next
        // retourne l'élément suivant la node
        next: function next(node, value) {
          var r = null;
          node = this.realNode(node);
          this.typecheck(node);
          var sibling = node.nextElementSibling;

          if (this.is(sibling, true)) {
            if (value == null || this.match(sibling, value)) r = sibling;
          }

          return r;
        },
        // nexts
        // retourne tous les éléments suivant la node
        // possible d'arrêter à un point
        nexts: function nexts(node, value, until) {
          var r = [];
          node = this.realNode(node);
          this.typecheck(node);

          while (node = this.next(node)) {
            if (until != null && this.match(node, until)) break;
            if (value == null || this.match(node, value)) r.push(node);
          }

          return r;
        },
        // children
        // retourne les enfants de la node
        // possible de seulement retourner les enfants valides avec le sélecteur
        // méthode plus complexe pour gérer le fait que document n'a pas de propriété children sur ie11
        children: function children(node, value, withTextNodes) {
          var r = null;
          node = this.realNode(node);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.typecheck(node);

          var hasChildren = node.children != null;
          var childs;
          if (withTextNodes === true) childs = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.toArray(node.childNodes);else {
            if (hasChildren === true) childs = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.toArray(node.children);else {
              childs = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.accumulate([], node.childNodes, function (value) {
                return _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.is(value) ? value : null;
              });
            }
          }
          if (value == null) r = childs;else r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.filter(childs, value);
          return r;
        },
        // realNode
        // permet de remplacer la node pour les méthodes du sélector
        // à étendre
        realNode: function realNode(node) {
          return node;
        }
      };
      /***/
    },

    /***/
    "../browser/src/target.js":
    /*!********************************!*\
      !*** ../browser/src/target.js ***!
      \********************************/

    /***/
    function browserSrcTargetJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../browser/index.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/browser/blob/master/LICENSE
       */
      // target
      // script with basic functions related to event targets elements
      // import
      // export

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = {
        // is
        // retourne vrai si la valeur est une node, un document, un fragment de document ou window
        is: function is(value) {
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.is(value) || _index_js__WEBPACK_IMPORTED_MODULE_0__.Win.is(value);
        },
        // are
        // retourne vrai si la valeur est une collection de node non vide
        are: function are(value) {
          var $inst = this;
          value = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.toArray(value);
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(value) ? _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.every(value, function (v) {
            return $inst.is(v);
          }) : false;
        },
        // typecheck
        // envoie une exception si la valeur n'est pas une node
        typecheck: function typecheck(value, type) {
          var error = false;
          var is = this.is(value);
          if (!(is || type === false && value == null)) error = true;
          if (error === true) throw new Error(value);
          return value;
        },
        // typechecks
        // envoie une exception si la valeur n'est pas un tableau de nodes
        typechecks: function typechecks(value, type) {
          var error = false;
          var are = this.are(value);
          if (!are || are === true && type === true && _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEmpty(value)) error = true;
          if (error === true) throw new Error(value);
          return value;
        },
        // getProp
        // retourne une propriété d'une node
        getProp: function getProp(node, key) {
          this.typecheck(node);
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.get(key, node);
        },
        // setProp
        // permet de changer la propriété sur une node ou plusieurs node
        setProp: function setProp(nodes, key, value) {
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(key);

          nodes = this.toArray(nodes);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.setRef(key, value, ele);
          });
        },
        // propStr
        // prend un ensemble de node et retourne une string concatené pour une même prop
        // un séparateur peut être fourni, sinon utilise -
        propStr: function propStr(nodes, prop, separator) {
          nodes = this.toArray(nodes);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(prop, true);

          separator = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(separator) ? separator : '-';
          var $inst = this;
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.reduce('', nodes, function (r, ele) {
            r += r.length ? separator : "";
            return r += $inst.getProp(ele, prop);
          });
        },
        // propObj
        // permet de retourner un objet à partir de plusieurs nodes
        // il faut spécifier une prop pour clé et une autre pour valeur
        propObj: function propObj(nodes, propKey, propValue) {
          var r = {};
          nodes = this.toArray(nodes);
          var $inst = this;

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(propKey, true);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(propValue, true);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
            var key = $inst.getProp(ele, propKey);
            var value = $inst.getProp(ele, propValue);
            r[key] = value;
          });

          return r;
        },
        // toArray
        // wrap une node ou un node-like dans un array, si ce n'est pas un array
        // transforme une arr like en array
        // transform null en array vide
        // envoie automatiquement dans le typecheck
        // les array vide passent le typecheck
        toArray: function toArray(value) {
          if (this.is(value)) value = [value];else if (_index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.is(value)) value = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.toArray(value);else if (value == null) value = [];
          return this.typechecks.call(this, value);
        }
      };
      /***/
    },

    /***/
    "../browser/src/uri.js":
    /*!*****************************!*\
      !*** ../browser/src/uri.js ***!
      \*****************************/

    /***/
    function browserSrcUriJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../browser/index.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/browser/blob/master/LICENSE
       */
      // uri
      // script with a set of helper functions related to uri management
      // import
      // export

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = {
        // isInternal
        // retourne vrai si l'uri et la comparaison ont le même scheme et host
        isInternal: function isInternal(uri, compare) {
          var r = false;

          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(uri)) {
            compare = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(compare) ? this.parse(compare) : _index_js__WEBPACK_IMPORTED_MODULE_0__.Request.parse();
            var parse = this.parse(uri);
            if (parse.protocol === compare.protocol && parse.host === compare.host) r = true;
          }

          return r;
        },
        // isExternal
        // retourne vrai si l'uri et la comparaison n'ont pas le même scheme et host
        isExternal: function isExternal(uri, compare) {
          return this.isInternal(uri, compare) ? false : true;
        },
        // hasExtension
        // retourne vrai si l'uri a une extension
        hasExtension: function hasExtension(uri) {
          return this.extension(uri) != null;
        },
        // hasFragment
        // retourne vrai si l'uri a un hash
        hasFragment: function hasFragment(uri) {
          var r = false;

          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(uri)) {
            var parse = this.parse(uri);
            if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(parse.hash)) r = true;
          }

          return r;
        },
        // isOnlyHash
        // retourne vrai si l'uri est seulement un hash
        isOnlyHash: function isOnlyHash(value) {
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.length(value) > 1 && _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isStart('#', value);
        },
        // isSamePathQuery
        // retourne vrai si l'uri est la même que la comparaison
        // compare path et query
        isSamePathQuery: function isSamePathQuery(uri, compare) {
          var r = false;

          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(uri)) {
            compare = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(compare) ? this.parse(compare) : _index_js__WEBPACK_IMPORTED_MODULE_0__.Request.parse();
            var parse = this.parse(uri);
            if (parse.pathname === compare.pathname && parse.search === compare.search) r = true;
          }

          return r;
        },
        // isSamePathQueryHash
        // retourne vrai si l'uri est la même que la comparaison
        // compare path, query et hash
        isSamePathQueryHash: function isSamePathQueryHash(uri, compare) {
          var r = false;

          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(uri)) {
            compare = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(compare) ? this.parse(compare) : _index_js__WEBPACK_IMPORTED_MODULE_0__.Request.parse();
            var parse = this.parse(uri);
            if (parse.pathname === compare.pathname && parse.search === compare.search && parse.hash === compare.hash) r = true;
          }

          return r;
        },
        // isHashChange
        // retourne vrai si l'uri est la même que la comparaison mais que le hash change
        isHashChange: function isHashChange(uri, compare) {
          var r = false;

          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(uri)) {
            compare = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(compare) ? this.parse(compare) : _index_js__WEBPACK_IMPORTED_MODULE_0__.Request.parse();
            var parse = this.parse(uri);

            if (parse.protocol === compare.protocol && parse.host === compare.host && parse.pathname === compare.pathname && parse.search === compare.search) {
              if ((_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(parse.hash) || _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(compare.hash)) && parse.hash !== compare.hash) r = true;
            }
          }

          return r;
        },
        // isSameWithHash
        // retourne vrai si l'uri est la même que la comparaison, que l'uri a un hash et que le hash est identique
        isSameWithHash: function isSameWithHash(uri, compare) {
          return this.hasFragment(uri) && uri === compare;
        },
        // relative
        // retourne une uri relative
        relative: function relative(uri, hash) {
          return this.build(this.parse(uri), false, hash);
        },
        // absolute
        // retourne une uri absolute
        absolute: function absolute(uri, hash) {
          return this.build(this.parse(uri), true, hash);
        },
        // path
        // retourne le pathname de l'uri
        path: function path(uri) {
          return this.parse(uri).pathname;
        },
        // query
        // retourne le query de l'uri sans le ?
        query: function query(uri) {
          return this.makeQuery(this.parse(uri).search).toString();
        },
        // fragment
        // retourne le hash de l'uri sans le symbole
        fragment: function fragment(uri) {
          return this.makeHash(this.parse(uri).hash, false);
        },
        // basename
        // retourne le basename du path de l'uri
        basename: function basename(uri) {
          var r = null;
          var path = this.path(uri);
          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(path)) r = path.substr(path.lastIndexOf("/") + 1);
          return r;
        },
        // filename
        // retourne le filename du path de l'uri
        filename: function filename(uri) {
          var r = null;
          var basename = this.basename(uri);
          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(basename)) r = basename.replace(/\.[^.$]+$/, '');
          return r;
        },
        // extension
        // retourne l'extension du path de l'uri
        extension: function extension(uri) {
          var r = null;
          var parse = this.parse(uri);
          var regex = /(?:\.([^.]+))?$/;
          var result = regex.exec(parse.pathname);
          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(result) && result.length === 2) r = result[1];
          return r;
        },
        // parse
        // retourne un objet avec les différentes parties d'une uri séparés
        // ne marche pas bien sur ie11
        parse: function parse(uri) {
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(uri);

          var schemeHost = _index_js__WEBPACK_IMPORTED_MODULE_0__.Request.schemeHost();

          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isStart("#", uri)) uri = _index_js__WEBPACK_IMPORTED_MODULE_0__.Request.relative() + uri;
          return new URL(uri, schemeHost);
        },
        // build
        // prend un objet parse et retourne une string uri
        // possible de retourner une string relative ou absolute
        // possible d'inclure ou non le hash
        build: function build(parse, absolute, hash) {
          var r = '';

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.typecheck(parse);

          if (absolute === true) {
            r += _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(parse.protocol) ? parse.protocol : _index_js__WEBPACK_IMPORTED_MODULE_0__.Request.scheme(true);
            r += "//";
            r += _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(parse.host) ? parse.host : _index_js__WEBPACK_IMPORTED_MODULE_0__.Request.host();
          }

          r += parse.pathname;

          if (parse.search) {
            var searchParams = parse.search instanceof URLSearchParams ? parse.search : this.makeQuery(parse.search);
            var query = searchParams.toString();
            if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(query)) r += "?" + query;
          }

          if (parse.hash && hash === true) r += this.makeHash(parse.hash, true);
          return r;
        },
        // makeQuery
        // permet de retourner un objet urlSearchParams à partir d'une string ou un object
        makeQuery: function makeQuery(value) {
          var r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(value) ? new URLSearchParams(value) : new URLSearchParams();

          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(value)) {
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.each(value, function (value, key) {
              value = value == null ? '' : value;
              r.append(key, value);
            });
          }

          return r;
        },
        // makeHash
        // permet de faire une hash avec ou sans le hash
        makeHash: function makeHash(value, symbol) {
          var r = '';

          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(value)) {
            r = value;

            var hasHash = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isStart('#', r);

            if (symbol === true) r = !hasHash ? "#" + r : r;else if (hasHash) r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.sub(1, true, r);
          } else if (symbol === true) r = '#';

          return r;
        },
        // getMailto
        // permet d'obtenir un email à partir d'un mailto (comme dans un href)
        getMailto: function getMailto(value) {
          var r = null;

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(value);

          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(value)) {
            var email = value.replace(/mailto:/, '');
            if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Validate.isEmail(email)) r = email;
          }

          return r;
        }
      };
      /***/
    },

    /***/
    "../browser/src/win.js":
    /*!*****************************!*\
      !*** ../browser/src/win.js ***!
      \*****************************/

    /***/
    function browserSrcWinJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../browser/index.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/browser/blob/master/LICENSE
       */
      // win
      // object for window target
      // import
      // export

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = {
        // is
        // retourne vrai si la valeur est une window ou une window proxy
        is: function is(value) {
          return this.isCurrent(value) || this.isProxy(value);
        },
        // isCurrent
        // retourne vrai si la valeur est la window courante
        isCurrent: function isCurrent(value) {
          return value instanceof Window;
        },
        // isProxy
        // retourne vrai si la valeur est une window proxy
        isProxy: function isProxy(value) {
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.is(value) && !(value instanceof Window) && value.window === value;
        },
        // hasHistoryApi
        // retourne vrai si le navigateur courant supporte history API
        hasHistoryApi: function hasHistoryApi() {
          var r = false;

          if (window.history && window.history.pushState && window.history.replaceState) {
            if (!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/)) r = true;
          }

          return r;
        },
        // isScrollable
        // retourne vrai si la fenêtre est scrollable dans un axis, ou n'importe quel axis
        isScrollable: function isScrollable(axis) {
          var r = false;
          var scroll = this.getScroll();
          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr["in"](axis, ['x', 'horizontal'])) r = scroll.scrollableX;else if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr["in"](axis, ['y', 'vertical'])) r = scroll.scrollableY;else r = scroll.scrollableX === true ? scroll.scrollableX : scroll.scrollableY;
          return r;
        },
        // getScroll
        // retourne le scroll de la window
        // retourne aussi les dimensions externes et internes, ainsi qu'un bool indiquant si une direction est scrollable
        getScroll: function getScroll() {
          var r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.replace({
            top: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.round(window.pageYOffset),
            left: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.round(window.pageXOffset),
            width: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.round(document.documentElement.scrollWidth),
            height: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.round(document.documentElement.scrollHeight),
            innerWidth: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.round(window.innerWidth),
            innerHeight: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.round(window.innerHeight),
            scrollableX: false,
            scrollableY: false
          });

          if (r.innerWidth > 0 && r.innerHeight > 0) {
            // ajout de 1px à cause d'un problème sur Safari
            if (r.width > r.innerWidth + 1) r.scrollableX = true;
            if (r.height > r.innerHeight + 1) r.scrollableY = true;
          }

          return r;
        },
        // setScroll
        // permet de changer le scroll de la window, sans animation
        setScroll: function setScroll(top, left) {
          left = left > 0 ? left : 0;
          top = top > 0 ? top : 0;
          window.scrollTo(left, top);
        },
        // focus
        // permet de mettre le focus sur une window
        focus: function focus(node) {
          this.typecheck(node);
          node.focus();
        },
        // getDimension
        // retourne la dimension interne de la fênetre
        getDimension: function getDimension() {
          return {
            width: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.round(window.innerWidth),
            height: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.round(window.innerHeight)
          };
        }
      };
      /***/
    },

    /***/
    "../browser/src/xhr.js":
    /*!*****************************!*\
      !*** ../browser/src/xhr.js ***!
      \*****************************/

    /***/
    function browserSrcXhrJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../browser/index.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/browser/blob/master/LICENSE
       */
      // xhr
      // script with some logic for ajax calls and xhr object
      // import
      // export

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = new function () {
        // inst
        var $inst = this; // isStatusSuccess
        // retourne vrai si le statut est un succès

        this.isStatusSuccess = function (value) {
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(value) && value >= 200 && value < 400;
        }; // isResponseJson
        // retourne vrai si la réponse du xhr a un content type de json


        this.isResponseJson = function (xhr) {
          var r = false;

          if (xhr instanceof XMLHttpRequest) {
            var contentType = xhr.getResponseHeader('Content-Type');
            if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str["in"]('/json', contentType)) r = true;
          }

          return r;
        }; // trigger
        // fonction utilisé pour lancer une requête ajax
        // retourne null ou un objet promise ajax


        this.trigger = function (config, extraEvents) {
          config = prepareConfig.call(this, config);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(config.url, true);

          var xhr = new XMLHttpRequest();
          xhr.open(config.method, config.url, true);
          xhr.timeout = config.timeout;
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

          xhr.ontimeout = function () {
            callEvent('error', xhr, config, extraEvents);
          };

          xhr.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE) {
              var isSuccess = $inst.isStatusSuccess(this.status);
              if (isSuccess === false) callEvent('error', xhr, config, extraEvents);else if (isSuccess === true) callEvent('success', xhr, config, extraEvents);
              callEvent('complete', xhr, config, extraEvents);
            }
          };

          if (xhr.upload != null) {
            xhr.upload.addEventListener("progress", function (event) {
              if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Func.is(config.progress) && event.lengthComputable === true) {
                var percent = parseInt(event.loaded / event.total * 100);
                callEvent('progress', xhr, config, extraEvents, percent, event);
              }
            });
          } // before


          callEvent('before', xhr, config, extraEvents);
          xhr.send(config.data);
          return xhr;
        }; // configFromString
        // retounre un tableau avec la string comme url


        this.configFromString = function (value) {
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(value, true);

          return {
            url: value
          };
        }; // callEvent
        // function utilisé pour faire les appels aux callbacks de la requête ajax
        // pour les callbacks, this est xhr mais xhr est aussi envoyé en dernier argument


        var callEvent = function callEvent(type, xhr, config, extraEvents) {
          var configCallback = _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.get(type, config);

          var extraCallback = _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(extraEvents) ? _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.get(type, extraEvents) : null;

          var args = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.sliceStart(4, arguments);

          args.push(xhr);
          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Func.is(configCallback)) configCallback.apply(xhr, args);
          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Func.is(extraCallback)) extraCallback.apply(xhr, args);
        }; // defaultConfig
        // retourne la configuration par défaut pour une requête ajax


        var defaultConfig = function defaultConfig() {
          return {
            url: undefined,
            method: undefined,
            data: undefined,
            timeout: 10000
          };
        }; // prepareConfig
        // dernière préparation à la configuration ajax


        var prepareConfig = function prepareConfig(config) {
          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(config) && _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(config.uri)) config.url = config.uri;
          config = _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.replace(defaultConfig(), config);
          if (!_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(config.method)) config.method = 'get';
          config.method = config.method.toUpperCase();

          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(config.data)) {
            if (config.method === 'POST') config.data = this.pojoToFormData(config.data);else {
              var parse = _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.parse(config.url);

              var query = _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.makeQuery(config.data).toString();

              parse.search = query;
              config.url = parse.toString();
            }
          }

          if (!config.data instanceof FormData) config.data = null;
          return config;
        }; // configFromNode
        // met à jour le tableau de config à partir de la tag
        // retourne null si ajax:confirm est false


        this.configFromNode = function (node, config, events) {
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.typecheck(node);

          var r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(config) ? config : {};

          var tagName = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.tag(node);

          if (r.method == null) r = configNodeMethod(r, node, tagName);
          r = configNodeUrl(r, node, tagName);
          if (r.data == null) r = configNodeData(r, node, tagName);
          if (events === true) r = this.configNodeEvents(node, r);
          r = prepareConfig.call(this, r);
          return r;
        }; // configNodeEvents
        // fait la configuration des événements à envoyer à la node pour la requête ajax


        this.configNodeEvents = function (node, config) {
          var $this = this;

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.typecheck(node);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.typecheck(config);

          config.before = function (xhr) {
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Target.triggerHandler(node, 'ajax:before', xhr);
          };

          config.progress = function (percent, event, xhr) {
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Target.triggerHandler(node, 'ajax:progress', percent, event, xhr);
          };

          config.success = function (xhr) {
            var responseText = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(xhr.responseText) && $this.isResponseJson(xhr) ? _index_js__WEBPACK_IMPORTED_MODULE_0__.Json.decode(xhr.responseText) : xhr.responseText;

            _index_js__WEBPACK_IMPORTED_MODULE_0__.Target.triggerHandler(node, 'ajax:success', responseText, xhr);
          };

          config.error = function (xhr) {
            var parsedError = $inst.parseError(xhr.responseText);

            _index_js__WEBPACK_IMPORTED_MODULE_0__.Target.triggerHandler(node, 'ajax:error', parsedError, xhr);
          };

          config.complete = function (xhr) {
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Target.triggerHandler(node, 'ajax:complete', xhr);
          };

          return config;
        }; // pojoToFormData
        // permet de transformer un pojo en formData


        this.pojoToFormData = function (value) {
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.typecheck(value);

          var r = new FormData();

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.each(value, function (val, key) {
            r.append(key, val);
          });

          return r;
        }; // parseError
        // cette méthode gère l'affichage pour un xhr en erreur


        this.parseError = function (responseText) {
          var r = '';

          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(responseText)) {
            r = responseText;
            var html;

            var parse = _index_js__WEBPACK_IMPORTED_MODULE_0__.Dom.parseOne(responseText);

            if (parse != null) {
              var ajaxParse = _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.scopedQuery(parse, ".ajax-parse-error");

              if (ajaxParse != null) html = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getOuterHtml(ajaxParse);

              if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isEmpty(html)) {
                var body = _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.scopedQuery(parse, "body,[data-tag='body']");

                if (body != null) html = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getHtml(body);
              }

              if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(html)) r = html;
            }
          }

          return r;
        }; // configNodeUrl
        // fait la configuration de l'url pour une node
        // pour un form get, ajoute les données du formulaire comme query


        var configNodeUrl = function configNodeUrl(r, node, tagName) {
          if (r.url == null) r.url = _index_js__WEBPACK_IMPORTED_MODULE_0__.Target.triggerHandler(node, 'ajax:getUrl');
          if (r.url == null) r.url = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getUri(node);

          if (r.url != null && tagName === 'form' && _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.icompare(r.method, 'get')) {
            var query = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.triggerHandler(node, 'form:serialize');

            var parse = _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.parse(r.url);

            if (query != null && parse != null) {
              parse.search = query;
              r.url = _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.build(parse);
            }
          }

          return r;
        }; // configNodeMethod
        // fait la configuration de la méthode pour une node


        var configNodeMethod = function configNodeMethod(r, node, tagName) {
          r.method = _index_js__WEBPACK_IMPORTED_MODULE_0__.Target.triggerHandler(node, 'ajax:getMethod');

          if (r.method == null) {
            if (tagName === 'form') r.method = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getAttr(node, "method") || 'get';else r.method = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getAttr(node, 'data-method') || 'get';
          }

          return r;
        }; // configNodeData
        // fait la configuration des datas pour une node
        // pour un formulaire seulement si c'est post


        var configNodeData = function configNodeData(r, node, tagName) {
          r.data = _index_js__WEBPACK_IMPORTED_MODULE_0__.Target.triggerHandler(node, 'ajax:getData');

          if (r.data == null && tagName === 'form' && _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.icompare(r.method, 'post')) {
            var formData = new FormData(node);

            var clicked = _index_js__WEBPACK_IMPORTED_MODULE_0__.Target.triggerHandler(node, 'form:getClickedSubmit');

            if (clicked != null) {
              var clickedName = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getAttr(clicked, 'name');

              if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(clickedName)) {
                var clickedVal = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getValue(clicked);

                formData.append(clickedName, clickedVal);
              }
            }

            r.data = formData;
          }

          return r;
        };
      }();
      /***/

    },

    /***/
    "../browser/test/browser.js":
    /*!**********************************!*\
      !*** ../browser/test/browser.js ***!
      \**********************************/

    /***/
    function browserTestBrowserJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Arr": function Arr() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr
          );
        },

        /* harmony export */
        "ArrLike": function ArrLike() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike
          );
        },

        /* harmony export */
        "Bool": function Bool() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Bool
          );
        },

        /* harmony export */
        "Browser": function Browser() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Browser
          );
        },

        /* harmony export */
        "Component": function Component() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Component
          );
        },

        /* harmony export */
        "Datetime": function Datetime() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Datetime
          );
        },

        /* harmony export */
        "Debug": function Debug() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Debug
          );
        },

        /* harmony export */
        "Doc": function Doc() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc
          );
        },

        /* harmony export */
        "Dom": function Dom() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Dom
          );
        },

        /* harmony export */
        "Ele": function Ele() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele
          );
        },

        /* harmony export */
        "Env": function Env() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Env
          );
        },

        /* harmony export */
        "Evt": function Evt() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Evt
          );
        },

        /* harmony export */
        "Factory": function Factory() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Factory
          );
        },

        /* harmony export */
        "Func": function Func() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Func
          );
        },

        /* harmony export */
        "HistoryState": function HistoryState() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.HistoryState
          );
        },

        /* harmony export */
        "Html": function Html() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Html
          );
        },

        /* harmony export */
        "Integer": function Integer() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer
          );
        },

        /* harmony export */
        "Json": function Json() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Json
          );
        },

        /* harmony export */
        "Nav": function Nav() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Nav
          );
        },

        /* harmony export */
        "Nod": function Nod() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod
          );
        },

        /* harmony export */
        "Num": function Num() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Num
          );
        },

        /* harmony export */
        "Obj": function Obj() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Obj
          );
        },

        /* harmony export */
        "Pojo": function Pojo() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo
          );
        },

        /* harmony export */
        "Request": function Request() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Request
          );
        },

        /* harmony export */
        "Scalar": function Scalar() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar
          );
        },

        /* harmony export */
        "Shortcut": function Shortcut() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Shortcut
          );
        },

        /* harmony export */
        "Str": function Str() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Str
          );
        },

        /* harmony export */
        "Target": function Target() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Target
          );
        },

        /* harmony export */
        "Test": function Test() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Test
          );
        },

        /* harmony export */
        "TestSuite": function TestSuite() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.TestSuite
          );
        },

        /* harmony export */
        "Tool": function Tool() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Tool
          );
        },

        /* harmony export */
        "Uri": function Uri() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri
          );
        },

        /* harmony export */
        "Validate": function Validate() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Validate
          );
        },

        /* harmony export */
        "Vari": function Vari() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Vari
          );
        },

        /* harmony export */
        "Win": function Win() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Win
          );
        },

        /* harmony export */
        "Xhr": function Xhr() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Xhr
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../browser/index.js");
      /* harmony import */


      var quidphp_javascript_test_javascript_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! quidphp-javascript/test/javascript.js */
      "../javascript/test/javascript.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/browser/blob/master/LICENSE
       */
      // browser
      // script to test the browser module
      // import


      var Arr = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr,
          ArrLike = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike,
          Bool = _index_js__WEBPACK_IMPORTED_MODULE_0__.Bool,
          Env = _index_js__WEBPACK_IMPORTED_MODULE_0__.Env,
          Func = _index_js__WEBPACK_IMPORTED_MODULE_0__.Func,
          Html = _index_js__WEBPACK_IMPORTED_MODULE_0__.Html,
          Integer = _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer,
          Num = _index_js__WEBPACK_IMPORTED_MODULE_0__.Num,
          Obj = _index_js__WEBPACK_IMPORTED_MODULE_0__.Obj,
          Pojo = _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo,
          Shortcut = _index_js__WEBPACK_IMPORTED_MODULE_0__.Shortcut,
          Str = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str,
          Browser = _index_js__WEBPACK_IMPORTED_MODULE_0__.Browser,
          Doc = _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc,
          Dom = _index_js__WEBPACK_IMPORTED_MODULE_0__.Dom,
          Ele = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele,
          Evt = _index_js__WEBPACK_IMPORTED_MODULE_0__.Evt,
          HistoryState = _index_js__WEBPACK_IMPORTED_MODULE_0__.HistoryState,
          Nod = _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod,
          Request = _index_js__WEBPACK_IMPORTED_MODULE_0__.Request,
          Target = _index_js__WEBPACK_IMPORTED_MODULE_0__.Target,
          Uri = _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri,
          Win = _index_js__WEBPACK_IMPORTED_MODULE_0__.Win,
          Xhr = _index_js__WEBPACK_IMPORTED_MODULE_0__.Xhr;
      var d = Shortcut.d,
          assert = Shortcut.assert,
          logError = Shortcut.logError,
          setData = Shortcut.setData; // browser

      quidphp_javascript_test_javascript_js__WEBPACK_IMPORTED_MODULE_1__.Test.Browser = function () {
        var r = true;

        try {
          if (Env.isBrowser()) {
            // prepare
            var newHtml = Html.start('form', null, {
              action: '/ok',
              method: 'post'
            });
            newHtml += Html.input(2, {
              type: 'text',
              name: 'test-suite',
              data: {
                required: true,
                pattern: '^[0-9\-]+$'
              }
            });
            newHtml += Html.input(null, {
              type: 'submit',
              name: 'test-submit3'
            });
            newHtml += Html.input(null, {
              type: 'submit',
              name: 'test-submit2'
            });
            newHtml += Html.input(null, {
              type: 'submit',
              name: 'test-submit'
            });
            newHtml += Html.div("test <span>what</span>", {
              "class": "ok"
            });
            newHtml += Html.end("form");
            newHtml += Html.div(null, {
              "class": 'content',
              style: 'width: 25px; height: 25px; margin: 10px; padding: 5px; border: 5px solid green; box-sizing: content-box; border-image: none;'
            });
            newHtml += Html.div(null, {
              "class": 'border',
              style: 'width: 25px; height: 25px; margin: 10px; padding: 5px; border: 5px solid green; box-sizing: border-box; border-image: none;'
            });
            newHtml += Html.div('LOL', {
              "class": 'hidden',
              myattr: "L'article",
              style: "display: none; padding: 3px;"
            });
            var htmlNode = Doc.scopedQuery(document, 'html');
            var selectorOne = htmlNode.querySelector("body");
            var selectorAll = htmlNode.querySelectorAll("body");
            var htmlStr = Ele.getOuterHtml(htmlNode);
            var isEmpty = Str.isEmpty.bind(Str);
            var bodyNode = Ele.scopedQuery(htmlNode, 'body');
            Ele.prepend(bodyNode, newHtml);
            var formNode = Ele.scopedQuery(bodyNode, "> form");
            var formInput = Ele.scopedQueryAll(formNode, Dom.selectorInput());
            var divNode = Ele.scopedQuery(formNode, "> div");
            var inputNode = Ele.scopedQuery(formNode, "> input[type='text']");
            var submitNode = Ele.scopedQuery(formNode, "> input[name='test-submit']");
            var textNode = divNode.firstChild;
            var contentBox = Ele.scopedQuery(bodyNode, "> div.content");
            var borderBox = Ele.scopedQuery(bodyNode, "> div.border");
            var fragment = document.createDocumentFragment();
            var template = document.createElement('template');
            var hiddenNode = Ele.scopedQuery(bodyNode, ".hidden");
            Ele.setHtml(template, newHtml);
            Doc.setHtml(fragment, newHtml);
            var formTemplate = Doc.children(template.content, 'form'); // browser

            assert(Bool.is(Browser.isOldIe()));
            assert(Bool.is(Browser.isIe11()));
            assert(Bool.is(Browser.isIe()));
            assert(Bool.is(Browser.isUnsupported()));
            assert(Bool.is(Browser.allowsCookie())); // data
            // doc

            assert(Doc.is(document));
            assert(Doc.is(fragment));
            assert(Doc.isCurrent(document));
            assert(!Doc.is(window));
            assert(!Doc.is(htmlNode));
            assert(!Doc.isFragment(document));
            assert(Doc.isFragment(fragment));
            assert(Doc.isFragment(Ele.parent(formTemplate[0])));
            assert(Doc.isTemplate(template));
            assert(Num.is(Doc.getDimension(document).width));
            assert(Num.is(Doc.getDimension(document).height));
            assert(Doc.realNode(document) === document);
            assert(Doc.realNode(fragment) === fragment);
            assert(Doc.realNode(template) === template.content);
            assert(Pojo.isEqual(Doc.getDimension(fragment), {
              width: 0,
              height: 0
            }));
            assert(Str.isStart('<html', Doc.getHtml(document)));
            assert(Str.isStart('<form', Doc.getHtml(fragment)));
            assert(Doc.setHtml(fragment, '<div>ok</div>') === undefined);
            assert(Doc.getHtml(fragment) === '<div>ok</div>');
            assert(Str.isStart('<form', Doc.getHtml(template)));
            assert(Doc.setHtml(template, '<div>ok</div>') === undefined);
            assert(Doc.getHtml(template) === '<div>ok</div>');
            Doc.setHtml(template, newHtml);
            assert(Str.isStart('<form', Doc.getHtml(template)));
            assert(Doc.getHtml(fragment) === '<div>ok</div>');
            Doc.setHtml(template, fragment, true);
            assert(Doc.getHtml(template) === '<div>ok</div>');
            Doc.setHtml(template, newHtml, true);
            assert(Doc.getHtml(fragment) === '<div>ok</div>');
            Doc.setHtml(fragment, template, true);
            assert(Str.isStart('<form', Doc.getHtml(fragment)));
            assert(Str.isStart('<form', Doc.getHtml(template)));
            assert(Doc.typecheck(document) === document);
            assert(Doc.are([document, fragment]));
            assert(Arr.length(Doc.scopedQueryAll(fragment, "input")) === 4);
            assert(Arr.length(Doc.scopedQueryAll(template, "input")) === 4);
            assert(Arr.length(Doc.scopedQueryAll(document, "input")) === 4);
            Doc.setHtml(template, Html.div('<span>OK</span>'));
            Doc.setHtml(fragment, Html.div('<span>OK</span>'));
            assert(Arr.length(Doc.scopedQueryAll(fragment, "div")) === 1);
            assert(Arr.length(Doc.scopedQueryAll(template, "span")) === 1);
            assert(Ele.tag(Doc.children(template)[0]) === 'div');
            assert(Ele.tag(Doc.children(fragment)[0]) === 'div');
            assert(Ele.tag(Doc.children(document)[0]) === 'html');
            assert(Doc.parent(template) === null);
            assert(Doc.parent(fragment) === null);
            assert(Arr.isNotEmpty(Ele.children(template)));
            Doc.setHtml(template, newHtml); // dom

            assert(Dom.htmlStr(2) === '2');
            assert(Dom.htmlStr(htmlNode) === Dom.htmlStr([htmlNode]));
            assert(Arr.is(Dom.parse(htmlStr)));
            assert(Ele.is(Dom.parseOne(htmlStr)));
            assert(Dom.querySelector("div[data-success]", htmlStr) === Html.span("JavaScript: </span><span>Idle"));
            assert(Obj.length(Dom.doc(htmlStr)) === 11);
            assert(Dom.selectorInput() === "input,select,textarea,button[type='submit']");
            assert(Dom.selectorInput(true) === "input,select,textarea,button"); // ele

            assert(Arr.isEqual(Ele.typechecks([]), []));
            assert(Ele.hasData(divNode, 'what') === false);
            assert(Ele.getData(divNode, 'what') === undefined);
            assert(Ele.allData(divNode) === undefined);
            assert(!Ele.is(textNode));
            assert(!Ele.is(window));
            assert(!Ele.is(document));
            assert(!Ele.is(window));
            assert(!Ele.is(document));
            assert(Ele.is(htmlNode));
            assert(Ele.are([selectorOne]));
            assert(Ele.are(selectorAll));
            assert(!Ele.are([htmlNode, true]));
            assert(!Ele.are(htmlNode));
            assert(!Ele.isEmpty(selectorOne));
            assert(!Ele.isEmpty(window));
            assert(Ele.isNotEmpty(selectorOne));
            assert(Ele.isVisible(htmlNode));
            assert(Ele.isVisible(borderBox));
            assert(!Ele.isHidden(htmlNode));
            assert(Ele.isTag(htmlNode, 'html'));
            assert(!Ele.isFocused(htmlNode));
            assert(!Ele.isFocusable(htmlNode));
            assert(Ele.isFocusable(inputNode));
            assert(Ele.some([htmlNode, divNode], 'html'));
            assert(!Ele.some([htmlNode, divNode], 'body'));
            assert(!Ele.every([htmlNode, divNode], 'html'));
            assert(Ele.every(htmlNode, 'html'));
            assert(Ele.tag(htmlNode) === 'html');
            assert(Str.isNotEmpty(Ele.getOuterHtml(htmlNode)));
            assert(Obj.isNotEmpty(Ele.getBoundingRect(htmlNode)));
            assert(Num.is(Ele.getDimension(htmlNode).width));
            assert(Num.is(Ele.getDimension(htmlNode).height));
            assert(Ele.getDimension(contentBox).width > 40);
            assert(Ele.getDimension(borderBox).width === 25);
            assert(Pojo.length(Ele.getScroll(htmlNode)) === 8);
            assert(Pojo.is(Ele.attr(htmlNode)));
            assert(Ele.hasAttr(htmlNode, 'data-error'));
            assert(!Ele.hasAttr(htmlNode, 'data-errorz'));
            assert(Ele.getAttr(htmlNode, 'data-error') === 'none');
            assert(Ele.getAttr(htmlNode, 'data-errorz') == null);
            assert(Num.isNan(Ele.getAttr(htmlNode, 'data-error', 'int')));
            assert(Ele.getAttr(htmlNode, 'data-error', 'bool') === null);
            assert(Str.isNotEmpty(Ele.attrStr(htmlNode)));
            assert(Pojo.is(Ele.dataAttr(htmlNode)));
            assert(Ele.getAttr(htmlNode, 'data-error') === 'none');
            assert(Str.isNotEmpty(Ele.getHtml(htmlNode)));
            assert(Str.isNotEmpty(Ele.getHtml(selectorOne)));
            assert(Ele.getHtml(divNode) === 'test <span>what</span>');
            assert(Ele.getText(divNode) === 'test what');
            assert(Ele.getProp(divNode, 'textContent') === 'test what');
            assert(Ele.getProp(divNode, 'textContent') === 'test what');
            assert(!Ele.hasClass(divNode, 'test'));
            assert(Pojo.length(Ele.getOffset(divNode)) === 3);
            assert(Ele.getOffsetParent(divNode).left === 8);
            assert(Ele.getOffsetDoc(divNode).left === 8);
            assert(Ele.getOffsetWin(divNode).left === 8);
            assert(Pojo.length(Ele.getOffsetDoc(divNode)) === 2);
            Ele.setHandler(htmlNode, 'what', function (value) {
              setData(this, 'OK', value);
              return true;
            });
            assert(Ele.getData(htmlNode, 'OK') == null);
            assert(!Ele.hasData(htmlNode, 'test'));
            assert(Ele.setData(htmlNode, 'test', 2) === undefined);
            assert(Ele.hasData(htmlNode, 'test'));
            assert(Ele.getData(htmlNode, 'test') === 2);
            assert(Ele.flashData(htmlNode, 'test') === 2);
            assert(!Ele.hasData(htmlNode, 'test'));
            assert(Ele.flashData(htmlNode, 'test', 2) === undefined);
            assert(Pojo.isNotEmpty(Ele.allData(htmlNode)));
            assert(Func.is(Ele.getHandler(htmlNode, 'what')));
            assert(Ele.isTriggerHandlerEqual([htmlNode], 'what', true, 'james'));
            assert(Ele.isTriggerHandlerEqual(htmlNode, 'what', true, 'james'));
            assert(!Ele.isTriggerHandlerEqual(htmlNode, 'what', false, 'james'));
            assert(Ele.getData(htmlNode, 'OK') == 'james');
            assert(Ele.triggerHandler(htmlNode, 'what', 'no') === true);
            assert(Ele.triggerHandler(htmlNode, 'what', 'yes') === true);
            assert(Ele.getData(htmlNode, 'OK') === 'yes');
            Ele.setHandler(htmlNode, 'what', function () {
              return false;
            });
            assert(Ele.triggerHandler(htmlNode, 'what') === false);
            Ele.removeHandler(htmlNode, 'what');
            assert(Ele.getHandler(htmlNode, 'what') === undefined);
            assert(Ele.is(Ele.scopedQuery(htmlNode, "body")));
            assert(Ele.scopedQuery(htmlNode, "james") == null);
            assert(Arr.isNotEmpty(Ele.scopedQueryAll(htmlNode, "body")));
            assert(Arr.isEmpty(Ele.scopedQueryAll(htmlNode, "james")));
            assert(Ele.closest(bodyNode, 'html') === htmlNode);
            assert(Arr.isEqual(Ele.filter([htmlNode, bodyNode], "body"), [bodyNode]));
            assert(Ele.parent(bodyNode) === htmlNode);
            assert(Ele.parent(htmlNode) === document);
            assert(Arr.isEqual(Ele.children(htmlNode, 'body'), [bodyNode]));
            assert(Arr.isEmpty(Ele.children(htmlNode, 'div')));
            assert(Ele.next(submitNode, 'div') === divNode);
            assert(Ele.prev(divNode) === submitNode);
            assert(Ele.prev(divNode, 'span') === null);
            assert(Arr.length(Ele.nexts(submitNode)) === 1);
            assert(Arr.isEmpty(Ele.nexts(divNode)));
            assert(Arr.length(Ele.prevs(divNode)) === 4);
            assert(Arr.length(Ele.prevs(divNode, "input[type='submit']")) === 3);
            assert(Arr.length(Ele.prevs(divNode, "input[type='text']")) === 1);
            assert(Arr.length(Ele.prevs(divNode, 'input', "input[type='text']")) === 3);
            Ele.replaceHtml(divNode, 'text ok bla <span>what</span>');
            assert(Arr.length(Ele.children(divNode)) === 1);
            assert(Arr.length(Doc.children(document)) === 1); // ie va avoir besoin d'un polyfill

            assert(Arr.length(Ele.parents(divNode)) === 4);
            assert(Arr.length(Ele.parents(divNode, 'body')) === 1);
            assert(Arr.length(Ele.parents(divNode, 'body', 'html')) === 1);
            assert(Arr.isEmpty(Ele.parents(divNode, 'html', 'body')));
            assert(Arr.isEmpty(Ele.parents(divNode, 'html', 'html')));
            assert(Ele.is(Doc.scopedQuery(template.content, 'input')));
            assert(Arr.length(formTemplate) === 1);
            assert(Pojo.length(Ele.css(borderBox, 'position')) === 1);
            assert(Pojo.length(Ele.css(borderBox)) > 250);
            assert(Ele.getCss(borderBox, 'height') === '25px');
            assert(Ele.getCss(borderBox, 'height', 'int') === 25);
            assert(Ele.getCss(borderBox, 'height', 'bool') === null);
            assert(Ele.getCss(borderBox, 'margin-top') === '10px');
            assert(!Ele.hasAttr(divNode, 'what'));
            Ele.setAttr(divNode, 'what', 'ok');
            assert(Ele.hasAttr(divNode, 'what'));
            assert(Ele.getAttr(divNode, 'what') === 'ok');
            Ele.removeAttr(divNode, 'what');
            assert(!Ele.hasAttr(divNode, 'what'));
            assert(!Ele.hasAttr(divNode, 'toggle'));
            Ele.toggleAttr(divNode, 'toggle');
            assert(Ele.hasAttr(divNode, 'toggle'));
            assert(Ele.getAttr(divNode, 'toggle') === '1');
            assert(Ele.getAttr(divNode, 'toggle', 'int') === 1);
            Ele.toggleAttr(divNode, 'toggle');
            assert(Ele.getAttr(divNode, 'toggle', 'int') === 0);
            Ele.toggleAttr(divNode, 'toggle', false);
            assert(Ele.getAttr(divNode, 'toggle', 'int') === 0);
            assert(Ele.getAttr(hiddenNode, 'myattr') === "L'article");
            Ele.toggleAttr(divNode, 'toggle', true);
            assert(Ele.getAttr(divNode, 'toggle', 'int') === 1);
            Ele.setHtml(divNode, 'what <span>ok</span>');
            assert(Ele.getHtml(divNode) === 'what <span>ok</span>');
            Ele.setText(divNode, 'what <span>ok</span>');
            assert(Ele.getHtml(divNode) === 'what <span>ok</span>');
            assert(Ele.setValue(inputNode, [1, 2, 3]) === undefined);
            assert(inputNode.value === Ele.getValue(inputNode));
            assert(Ele.getValue(inputNode) === '[1,2,3]');
            assert(Ele.toggleClass(divNode, 'test', true) === undefined);
            assert(Ele.hasClass(divNode, 'test'));
            Ele.toggleClass(divNode, 'test', false);
            assert(!Ele.hasClass(divNode, 'test'));
            Ele.toggleClass(divNode, 'test');
            assert(Ele.hasClass(divNode, 'test'));
            Ele.toggleClass(divNode, 'test');
            assert(!Ele.hasClass(divNode, 'test'));
            assert(Ele.getHtml(template) !== newHtml);
            assert(Str.length(Ele.getHtml(template)) === 726); // ie11 ajoute border-image: none pour une raison

            assert(Ele.getCss(divNode, 'margin-top') === '0px');
            Ele.setCss(divNode, 'margin-top', '10px');
            assert(Ele.getCss(divNode, 'margin-top') === '10px');
            assert(Ele.getCss(divNode, 'margin-top', 'int') === 10);
            assert(Ele.getCss(borderBox, 'height') === '25px');
            Ele.setDimension(borderBox, 20, 40);
            assert(!Ele.isScrollable(htmlNode));
            assert(Ele.getDimension(borderBox).height === 40);
            assert(Ele.getCss(borderBox, 'height') === '40px');
            assert(Ele.setScroll(htmlNode, 0, 0) === undefined);
            Ele.setHtml(divNode, 'OK');
            assert(Ele.getHtml(divNode) === 'OK');
            Ele.append(divNode, '<div>test</div>');
            assert(Ele.getHtml(divNode) === 'OK<div>test</div>');
            assert(Ele.getUri(formNode) === '/ok');
            assert(Pojo.length(Ele.propObj(formInput, 'name', 'value')) === 4);
            assert(Ele.propStr(formInput, 'name') === 'test-suite-test-submit3-test-submit2-test-submit');
            assert(Ele.propStr(formInput, 'name', '|') === 'test-suite|test-submit3|test-submit2|test-submit');
            assert(Ele.serialize(formInput) === 'test-suite=%5B1%2C2%2C3%5D&test-submit3=&test-submit2=&test-submit=');
            assert(Ele.getDimension(hiddenNode).width === 0);
            assert(Ele.getDimension(hiddenNode, true).width > 0);
            assert(Pojo.isEqual(Ele.getDimension(hiddenNode, 'block'), Ele.getDimension(hiddenNode, true)));
            assert(Ele.getDimension(hiddenNode, 'inline').width < Ele.getDimension(hiddenNode, true).width);
            assert(Ele.getDimension(hiddenNode).width === 0);
            assert(Ele.oddEven([hiddenNode], function (value) {
              assert(value === hiddenNode);
            })); // evt

            assert(Evt.nameFromType('ok') === 'event');
            assert(Evt.nameFromType('ok:what') === 'customEvent');
            assert(Evt.createFromType('ok') instanceof Event);
            assert(Evt.createFromType('ok:what') instanceof CustomEvent); // handler
            // historyState

            assert(HistoryState.is({
              url: 'test',
              timestamp: 1234
            }));
            assert(HistoryState.isChangeValid({
              url: 'test',
              timestamp: 1234
            }, HistoryState.make('what', 'bleh')));
            assert(Obj.length(HistoryState.make('what', 'bleh')) === 3);
            assert(Str.isEnd("/#what", HistoryState.make('#what', 'bleh').url));
            assert(HistoryState.make('http://google.com/ok#', 'bleh').url === 'http://google.com/ok#');
            assert(HistoryState.make('http://google.com/ok#', 'bleh', true).url === 'http://google.com/ok');
            assert(Str.isEnd('/#', HistoryState.make("#").url));
            assert(!Str.isEnd('/#', HistoryState.make("#", null, true).url)); // listener
            // nod

            assert(Nod.is(document));
            assert(!Nod.is(window));
            assert(Nod.is(textNode));
            assert(Nod.are([document, htmlNode]));
            assert(!Nod.are([document, window]));
            assert(Nod.getText(textNode) === 'test '); // request

            assert(Str.isNotEmpty(Request.relative()));
            assert(Str.isNotEmpty(Request.relative(true)));
            assert(Request.absolute() !== Request.relative());
            assert(Str.isNotEmpty(Request.scheme()));
            assert(Request.scheme() !== Request.scheme(true));
            assert(Str.is(Request.fragment()) || Request.fragment() === null);
            assert(Obj.is(Request.parse()));
            assert(Str.isNotEmpty(Request.parse().hostname));
            assert(Str.isNotEmpty(Request.schemeHost())); // selector
            // target

            assert(Target.is(document));
            assert(Target.is(fragment));
            assert(Target.is(window));
            assert(Target.is(divNode));
            assert(Target.are([window, document]));
            assert(Target.is(textNode));
            assert(Target.typecheck(fragment) === fragment);
            var arrFragment = [fragment];
            assert(Target.typechecks(arrFragment) === arrFragment);
            assert(Arr.length(Target.toArray(selectorAll)) === 1);
            assert(Target.toArray(arrFragment) === arrFragment);
            assert(Arr.length(Target.toArray(htmlNode)) === 1);
            assert(Integer.is(Target.getProp(window, 'outerHeight'))); // uri

            assert(Uri.isInternal("http://google.com/test", "http://google.com/test2"));
            assert(Uri.isInternal("/test", "/test2"));
            assert(!Uri.isInternal("http://google.com/test", "/test2"));
            assert(Uri.isExternal("http://googlez.com/test", "http://google.com/test2"));
            assert(!Uri.isExternal("/test", "/test2"));
            assert(!Uri.hasExtension("http://googlez.com/test"));
            assert(Uri.hasExtension("http://googlez.com/test.jpg"));
            assert(!Uri.hasFragment("http://googlez.com/test.jpg"));
            assert(Uri.hasFragment("http://googlez.com/test.jpg#james"));
            assert(Uri.hasFragment("/test.jpg#james"));
            assert(!Uri.isOnlyHash('what'));
            assert(Uri.isOnlyHash('#what'));
            assert(!Uri.isOnlyHash('#'));
            assert(Uri.isSamePathQuery("/test.jpg?v=2", "http://google.com/test.jpg?v=2#ok"));
            assert(!Uri.isSamePathQuery("/test.jpg?v=2", "http://google.com/test.jpg?v=3#ok"));
            assert(Uri.isSamePathQueryHash("/test.jpg?v=2#ok", "http://google.com/test.jpg?v=2#ok"));
            assert(!Uri.isSamePathQueryHash("/test.jpg?v=2#ok", "http://google.com/test.jpg?v=3#ok1"));
            assert(Uri.isHashChange("/test.jpg?v=2#ok", "/test.jpg?v=2#ok2"));
            assert(!Uri.isHashChange("/test.jpg?v=2#ok", "/testz.jpg?v=2#ok2"));
            assert(!Uri.isHashChange("/test.jpg?v=2#ok", "/test.jpg?v=2#ok"));
            assert(!Uri.isHashChange("/test.jpg?v=2", "/test.jpg?v=2"));
            assert(Uri.isSameWithHash("http://goog.com/test.jpg?v=2#ok", "http://goog.com/test.jpg?v=2#ok"));
            assert(!Uri.isSameWithHash("/test.jpg?v=2", "/test.jpg?v=2"));
            assert(Uri.relative("http://google.com/ok?v=2#what") === '/ok?v=2');
            assert(Uri.relative("http://google.com/ok?v=2#what", true) === '/ok?v=2#what');
            assert(Str.isEnd("#james", Uri.absolute("#james", true)));
            assert(Str.isEnd("/testok.php", Uri.absolute("testok.php")));
            assert(!Str.isEnd("#james", Uri.absolute("testok.php#james")));
            assert(Str.isEnd("#james", Uri.absolute("testok.php#james", true)));
            assert(Uri.absolute("http://google.com/testok.php") === "http://google.com/testok.php");
            assert(Uri.path("http://google.com/testok.php?ok=2#meh") === '/testok.php');
            assert(Uri.query("http://google.com/testok.php?ok=2#meh") === 'ok=2');
            assert(Uri.query("http://google.com/testok.php") === '');
            assert(Uri.fragment("http://google.com/testok.php?ok=2#meh") === 'meh');
            assert(Uri.fragment("http://google.com/testok.php") === '');
            assert(Uri.extension("http://google.com/ok.jpg?v=2#what") === 'jpg');
            assert(Uri.basename("http://ok.com/james.jpg") === 'james.jpg');
            assert(Uri.basename("james.jpg") === 'james.jpg');
            assert(Uri.basename("/james.jpg") === 'james.jpg');
            assert(Uri.filename("http://ok.com/james.jpg") === 'james');
            assert(Uri.filename("/james.jpg") === 'james');
            assert(Uri.build(Uri.parse("/test.ok?t=2#hash"), false, true) === '/test.ok?t=2#hash');
            assert(Uri.build(Uri.parse("hash"), false, true) === '/hash');
            assert(Uri.build(Uri.parse("https://google.com/ok?v=2#what"), true, true) === "https://google.com/ok?v=2#what");
            assert(Uri.build(Uri.parse("https://google.com/ok?v=2#what"), true, false) === "https://google.com/ok?v=2");
            assert(Uri.build(Uri.parse("https://google.com/ok?v=2#what"), false, false) === "/ok?v=2");
            assert(Uri.build(Uri.parse("https://google.com/ok?v=2#what"), false, true) === "/ok?v=2#what");
            assert(Uri.build({
              pathname: "/testd",
              search: {
                james: "OKé",
                test: 3
              }
            }) === '/testd?james=OK%C3%A9&test=3');
            assert(Uri.build({
              pathname: "/testd",
              search: "james=OKé&test=3"
            }) === '/testd?james=OK%C3%A9&test=3');
            assert(Uri.build({
              pathname: "/testd",
              search: Uri.makeQuery({
                james: "OKé",
                test: 3
              })
            }) === '/testd?james=OK%C3%A9&test=3');
            assert(Uri.build({
              pathname: "/meh",
              hash: "OK"
            }, true, true) !== '/meh#OK');
            assert(Uri.build({
              pathname: "/meh",
              hash: "OK"
            }, false, true) === '/meh#OK');
            var query = Uri.makeQuery('?q=URLUtils.searchéParams&topic=api');
            var query2 = Uri.makeQuery({
              q: 'oké',
              what: 2
            });
            var query3 = Uri.makeQuery({
              q: "la vi+e est bèlle"
            });
            assert(query instanceof URLSearchParams);
            assert(query.toString() === 'q=URLUtils.search%C3%A9Params&topic=api');
            assert(query2.toString() === 'q=ok%C3%A9&what=2');
            assert(query3.toString() === 'q=la+vi%2Be+est+b%C3%A8lle');
            assert(Uri.makeHash(undefined, true) === '#');
            assert(Uri.makeHash(undefined, false) === '');
            assert(Uri.makeHash("james", true) === '#james');
            assert(Uri.makeHash("#james", true) === '#james');
            assert(Uri.makeHash("james") === 'james');
            assert(Uri.makeHash("#james") === 'james');
            assert(Uri.getMailto('mailto:test@test.com') === 'test@test.com');
            assert(Uri.getMailto('test@test.com') === 'test@test.com');
            assert(Uri.getMailto('mailto:testtest.com') === null); // win

            assert(Win.hasHistoryApi());
            assert(Win.is(window));
            assert(!Win.is(document));
            assert(Win.isCurrent(window));
            assert(!Win.isProxy(window));
            assert(Bool.is(Win.isScrollable()));
            assert(Bool.is(Win.isScrollable('x')));
            assert(Pojo.length(Win.getScroll()) === 8);
            assert(Win.getDimension().width > 0);
            assert(Win.getDimension().height > 0);
            assert(Win.are([window, window])); // xhr

            var formData = new FormData(formNode);
            assert(Xhr.isStatusSuccess(200));
            assert(!Xhr.isStatusSuccess(404));
            assert(!ArrLike.is(formData));
            assert(Pojo.length(Xhr.configFromNode(htmlNode)) === 4);
            assert(Pojo.length(Xhr.configFromNode(htmlNode, null, true)) === 9);
            assert(Xhr.pojoToFormData({
              test: "ok",
              hjames: 3
            }) instanceof FormData);
            assert(Xhr.parseError('<html><body><div>TEST</div></body></html>', 'error') === '<div>TEST</div>');
            assert(Xhr.parseError('<html><body><div class="ajax-parse-error"><div>TEST</div></div></body></html>', 'error') === '<div class="ajax-parse-error"><div>TEST</div></div>');
            assert(Xhr.parseError('') === '');
            assert(Pojo.length(Xhr.configFromString("/test/ok")) === 1); // cleanup

            Ele.remove([formNode, contentBox, contentBox, borderBox]);
          }
        } catch (e) {
          r = false;
          logError(e);
        }

        return r;
      }; // export

      /***/

    },

    /***/
    "../javascript/index.js":
    /*!******************************!*\
      !*** ../javascript/index.js ***!
      \******************************/

    /***/
    function javascriptIndexJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Arr": function (_Arr) {
          function Arr() {
            return _Arr.apply(this, arguments);
          }

          Arr.toString = function () {
            return _Arr.toString();
          };

          return Arr;
        }(function () {
          return (
            /* binding */
            Arr
          );
        }),

        /* harmony export */
        "ArrLike": function ArrLike() {
          return (
            /* binding */
            _ArrLike
          );
        },

        /* harmony export */
        "Bool": function Bool() {
          return (
            /* binding */
            _Bool
          );
        },

        /* harmony export */
        "Component": function (_Component) {
          function Component() {
            return _Component.apply(this, arguments);
          }

          Component.toString = function () {
            return _Component.toString();
          };

          return Component;
        }(function () {
          return (
            /* binding */
            Component
          );
        }),

        /* harmony export */
        "Datetime": function Datetime() {
          return (
            /* reexport safe */
            _src_datetime_js__WEBPACK_IMPORTED_MODULE_0__["default"]
          );
        },

        /* harmony export */
        "Debug": function Debug() {
          return (
            /* reexport safe */
            _src_debug_js__WEBPACK_IMPORTED_MODULE_1__["default"]
          );
        },

        /* harmony export */
        "Env": function Env() {
          return (
            /* reexport safe */
            _src_env_js__WEBPACK_IMPORTED_MODULE_2__["default"]
          );
        },

        /* harmony export */
        "Factory": function Factory() {
          return (
            /* reexport safe */
            _src_factory_js__WEBPACK_IMPORTED_MODULE_3__["default"]
          );
        },

        /* harmony export */
        "Func": function (_Func) {
          function Func() {
            return _Func.apply(this, arguments);
          }

          Func.toString = function () {
            return _Func.toString();
          };

          return Func;
        }(function () {
          return (
            /* binding */
            Func
          );
        }),

        /* harmony export */
        "Html": function Html() {
          return (
            /* reexport safe */
            _src_html_js__WEBPACK_IMPORTED_MODULE_4__["default"]
          );
        },

        /* harmony export */
        "Integer": function Integer() {
          return (
            /* binding */
            _Integer
          );
        },

        /* harmony export */
        "Json": function Json() {
          return (
            /* reexport safe */
            _src_json_js__WEBPACK_IMPORTED_MODULE_5__["default"]
          );
        },

        /* harmony export */
        "Nav": function Nav() {
          return (
            /* reexport safe */
            _src_nav_js__WEBPACK_IMPORTED_MODULE_6__["default"]
          );
        },

        /* harmony export */
        "Num": function Num() {
          return (
            /* binding */
            _Num
          );
        },

        /* harmony export */
        "Obj": function (_Obj) {
          function Obj() {
            return _Obj.apply(this, arguments);
          }

          Obj.toString = function () {
            return _Obj.toString();
          };

          return Obj;
        }(function () {
          return (
            /* binding */
            Obj
          );
        }),

        /* harmony export */
        "Pojo": function (_Pojo) {
          function Pojo() {
            return _Pojo.apply(this, arguments);
          }

          Pojo.toString = function () {
            return _Pojo.toString();
          };

          return Pojo;
        }(function () {
          return (
            /* binding */
            Pojo
          );
        }),

        /* harmony export */
        "Scalar": function Scalar() {
          return (
            /* binding */
            _Scalar
          );
        },

        /* harmony export */
        "Shortcut": function Shortcut() {
          return (
            /* binding */
            _Shortcut
          );
        },

        /* harmony export */
        "Str": function (_Str) {
          function Str() {
            return _Str.apply(this, arguments);
          }

          Str.toString = function () {
            return _Str.toString();
          };

          return Str;
        }(function () {
          return (
            /* binding */
            Str
          );
        }),

        /* harmony export */
        "Test": function Test() {
          return (
            /* binding */
            _Test
          );
        },

        /* harmony export */
        "TestSuite": function TestSuite() {
          return (
            /* reexport safe */
            _src_testSuite_js__WEBPACK_IMPORTED_MODULE_7__["default"]
          );
        },

        /* harmony export */
        "Tool": function Tool() {
          return (
            /* binding */
            _Tool
          );
        },

        /* harmony export */
        "Validate": function Validate() {
          return (
            /* reexport safe */
            _src_validate_js__WEBPACK_IMPORTED_MODULE_8__["default"]
          );
        },

        /* harmony export */
        "Vari": function Vari() {
          return (
            /* reexport safe */
            _src_vari_js__WEBPACK_IMPORTED_MODULE_9__["default"]
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _src_datetime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./src/datetime.js */
      "../javascript/src/datetime.js");
      /* harmony import */


      var _src_debug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./src/debug.js */
      "../javascript/src/debug.js");
      /* harmony import */


      var _src_env_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./src/env.js */
      "../javascript/src/env.js");
      /* harmony import */


      var _src_factory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./src/factory.js */
      "../javascript/src/factory.js");
      /* harmony import */


      var _src_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./src/html.js */
      "../javascript/src/html.js");
      /* harmony import */


      var _src_json_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./src/json.js */
      "../javascript/src/json.js");
      /* harmony import */


      var _src_nav_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./src/nav.js */
      "../javascript/src/nav.js");
      /* harmony import */


      var _src_testSuite_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./src/testSuite.js */
      "../javascript/src/testSuite.js");
      /* harmony import */


      var _src_validate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./src/validate.js */
      "../javascript/src/validate.js");
      /* harmony import */


      var _src_vari_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./src/vari.js */
      "../javascript/src/vari.js");
      /* harmony import */


      var _src_arr_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./src/arr.js */
      "../javascript/src/arr.js");
      /* harmony import */


      var _src_arrLike_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./src/arrLike.js */
      "../javascript/src/arrLike.js");
      /* harmony import */


      var _src_bool_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./src/bool.js */
      "../javascript/src/bool.js");
      /* harmony import */


      var _src_func_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./src/func.js */
      "../javascript/src/func.js");
      /* harmony import */


      var _src_integer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./src/integer.js */
      "../javascript/src/integer.js");
      /* harmony import */


      var _src_num_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./src/num.js */
      "../javascript/src/num.js");
      /* harmony import */


      var _src_obj_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./src/obj.js */
      "../javascript/src/obj.js");
      /* harmony import */


      var _src_pojo_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./src/pojo.js */
      "../javascript/src/pojo.js");
      /* harmony import */


      var _src_scalar_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./src/scalar.js */
      "../javascript/src/scalar.js");
      /* harmony import */


      var _src_str_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./src/str.js */
      "../javascript/src/str.js");
      /* harmony import */


      var _src_type_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./src/type.js */
      "../javascript/src/type.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/javascript/blob/master/LICENSE
       */
      // index
      // entry file for the module
      // simple import
      // type import
      // build


      var Arr = (0, _src_factory_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_src_type_js__WEBPACK_IMPORTED_MODULE_20__["default"], _src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjBase, _src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjKeyValue, _src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjEach, _src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjCopyFilterMap, _src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjWrite, _src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjWriteSelf, _src_arr_js__WEBPACK_IMPORTED_MODULE_10__.ArrBase, _src_arr_js__WEBPACK_IMPORTED_MODULE_10__.ArrWriteSelf, _src_arr_js__WEBPACK_IMPORTED_MODULE_10__.ArrLoop);

      var _ArrLike = (0, _src_factory_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_src_type_js__WEBPACK_IMPORTED_MODULE_20__["default"], _src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjBase, _src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjKeyValue, _src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjEach, _src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjCopyFilterMap, _src_arr_js__WEBPACK_IMPORTED_MODULE_10__.ArrBase, _src_arrLike_js__WEBPACK_IMPORTED_MODULE_11__["default"], _src_arr_js__WEBPACK_IMPORTED_MODULE_10__.ArrLoop);

      var _Bool = (0, _src_factory_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_src_type_js__WEBPACK_IMPORTED_MODULE_20__["default"], _src_bool_js__WEBPACK_IMPORTED_MODULE_12__["default"]);

      var Func = (0, _src_factory_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_src_type_js__WEBPACK_IMPORTED_MODULE_20__["default"], _src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjBase, _src_func_js__WEBPACK_IMPORTED_MODULE_13__["default"]);

      var _Integer = (0, _src_factory_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_src_type_js__WEBPACK_IMPORTED_MODULE_20__["default"], _src_num_js__WEBPACK_IMPORTED_MODULE_15__.NumPrimitive, _src_integer_js__WEBPACK_IMPORTED_MODULE_14__["default"]);

      var _Num = (0, _src_factory_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_src_type_js__WEBPACK_IMPORTED_MODULE_20__["default"], _src_num_js__WEBPACK_IMPORTED_MODULE_15__.NumPrimitive, _src_num_js__WEBPACK_IMPORTED_MODULE_15__.NumFormat);

      var Obj = (0, _src_factory_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_src_type_js__WEBPACK_IMPORTED_MODULE_20__["default"], _src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjBase, _src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjKeyValue, _src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjEach, _src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjCopyFilterMap, _src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjWrite, _src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjWriteSelf, _src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjProto);
      var Pojo = (0, _src_factory_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_src_type_js__WEBPACK_IMPORTED_MODULE_20__["default"], _src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjBase, _src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjKeyValue, _src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjEach, _src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjCopyFilterMap, _src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjWrite, _src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjWriteSelf, _src_pojo_js__WEBPACK_IMPORTED_MODULE_17__["default"]);

      var _Scalar = (0, _src_factory_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_src_type_js__WEBPACK_IMPORTED_MODULE_20__["default"], _src_scalar_js__WEBPACK_IMPORTED_MODULE_18__["default"]);

      var Str = (0, _src_factory_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_src_type_js__WEBPACK_IMPORTED_MODULE_20__["default"], _src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjBase, _src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjKeyValue, _src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjEach, _src_str_js__WEBPACK_IMPORTED_MODULE_19__["default"]);
      var _Tool = {
        Type: _src_type_js__WEBPACK_IMPORTED_MODULE_20__["default"],
        ArrLoop: _src_arr_js__WEBPACK_IMPORTED_MODULE_10__.ArrLoop
      };
      var _Test = {};
      var Component = {}; // shortcut

      var d = console.log;

      var assert = _src_debug_js__WEBPACK_IMPORTED_MODULE_1__["default"].assertThrow.bind(_src_debug_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

      var logError = _src_debug_js__WEBPACK_IMPORTED_MODULE_1__["default"].logError.bind(_src_debug_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

      var _Shortcut = {
        d: d,
        assert: assert,
        logError: logError
      }; // export

      /***/
    },

    /***/
    "../javascript/src/arr.js":
    /*!********************************!*\
      !*** ../javascript/src/arr.js ***!
      \********************************/

    /***/
    function javascriptSrcArrJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ArrBase": function ArrBase() {
          return (
            /* binding */
            _ArrBase
          );
        },

        /* harmony export */
        "ArrLoop": function ArrLoop() {
          return (
            /* binding */
            _ArrLoop
          );
        },

        /* harmony export */
        "ArrWriteSelf": function ArrWriteSelf() {
          return (
            /* binding */
            _ArrWriteSelf
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../javascript/index.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/javascript/blob/master/LICENSE
       */
      // arr
      // script with some objects related to array manipulation
      // import
      // arrBase
      // fonctions relatives à la lecture de tableau


      var _ArrBase = {
        // is
        // retourne vrai si la valeur est un tableau
        is: function is(value) {
          return Array.isArray(value);
        },
        // in
        // retourne vrai si la valeur est dans le tableau
        // retourne un boolean
        "in": function _in(value, array) {
          return this.is(array) ? Array.prototype.includes.call(array, value) : null;
        },
        // keys
        // retourne un tableau avec clés du présent tableau
        keys: function keys(array) {
          this.typecheck(array);
          return Array.from(Array.prototype.keys.call(array));
        },
        // valueFirst
        // retourne le première valeur dans le tableau
        valueFirst: function valueFirst(array) {
          this.typecheck(array);
          return array.length ? array[0] : undefined;
        },
        // valueLast 
        // retourne la dernière valeur dans le tableau
        valueLast: function valueLast(array) {
          this.typecheck(array);
          return array.length ? array[array.length - 1] : undefined;
        },
        // keyFirst
        // retourne la première clé d'un tableau
        keyFirst: function keyFirst(array) {
          this.typecheck(array);
          return array.length ? 0 : undefined;
        },
        // keyLast
        // retourne la dernière clé d'un tableau
        keyLast: function keyLast(array) {
          this.typecheck(array);
          return array.length ? array.length - 1 : undefined;
        },
        // search
        // retourne l'index de la valeur dans le tableau
        search: function search(value, array) {
          var r = null;
          this.typecheck(array);
          r = Array.prototype.indexOf.call(array, value);
          r = r === -1 ? null : r;
          return r;
        },
        // slice
        // fait un slice sur un tableau avec un start et un end
        slice: function slice(start, end, array) {
          var r = null;
          this.typecheck(array);
          start = _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(start) ? start : 0;
          end = _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(end) ? end : undefined;
          r = Array.prototype.slice.call(array, start, end);
          return r;
        },
        // sliceStart
        // fait un slice à partir du début d'un tableau
        sliceStart: function sliceStart(start, array) {
          return this.slice(start, true, array);
        },
        // merge
        // retourne un nouveau tableau avec le contenu de tous les tableaux merged (concat)
        merge: function merge(array) {
          var r = null;
          this.typecheck(array);

          var args = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.sliceStart(1, arguments);

          r = Array.prototype.concat.apply(array, args);
          return r;
        },
        // clean
        // retourne un nouveau tableau avec les valeurs vides retirés
        clean: function clean(array) {
          return this.filter(array, function (ele) {
            return _index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isNotReallyEmpty(ele);
          });
        },
        // valueStrip
        // permet de retourner un nouveau tableau sans la valeur donné en argument
        valueStrip: function valueStrip(value, array) {
          return this.filter(array, function (v) {
            return v === value ? false : true;
          });
        },
        // find
        // retourne la première valeur de l'objet dont le callback retourne true, utilise la méthode du prototype
        find: function find(array, callback) {
          this.typecheck(array);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(callback);

          return Array.prototype.find.call(array, callback);
        },
        // some
        // vérifie qu'au moins une entrée du tableau passe le test de la fonction anonyme
        some: function some(array, callback) {
          this.typecheck(array);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(callback);

          return Array.prototype.some.call(array, callback);
        },
        // every
        // vérifie que toutes les entrée du tableau passe le test de la fonction anonyme
        every: function every(array, callback) {
          this.typecheck(array);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(callback);

          return Array.prototype.every.call(array, callback);
        },
        // map
        // permet de créer un nouvel objet avec les valeurs changés selon la fonction de rappel, utilise la méthode du prototype
        map: function map(array, callback) {
          this.typecheck(array);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(callback);

          return Array.prototype.map.call(array, callback);
        },
        // filter
        // permet de créer un nouvel objet avec seulement les entrées qui retournent true, utilise la méthode du prototype
        filter: function filter(array, callback) {
          this.typecheck(array);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(callback);

          return Array.prototype.filter.call(array, callback);
        },
        // reduce
        // retourne une valeur simple à partir d'un tableau
        // changement de l'ordre des arguments, de même la clé est envoyé au callback en troisième argument
        reduce: function reduce(r, array, callback) {
          this.typecheck(array);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(callback);

          return Array.prototype.reduce.call(array, callback, r);
        },
        // column
        // retourne un tableau avec une seule propriété de chaque pojo dans le tableau
        column: function column(prop, array) {
          var r = [];

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(prop, true);

          this.each(array, function (value) {
            if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(value) && _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.keyExists(prop, value)) r.push(value[prop]);
          });
          return r;
        },
        // new
        // retourne la cible pour la copie
        "new": function _new() {
          return [];
        }
      }; // arrWriteSelf
      // fonctions relatives à l'écriture sur des tableaux (en référence)

      var _ArrWriteSelf = {
        // mergeRef
        // permet de fusionner plusieurs tableaux dans le premier tableau
        // le premier tableau est modifié
        mergeRef: function mergeRef(array) {
          this.typecheck(array);
          var r = array;
          var inst = this;

          var args = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.sliceStart(1, arguments);

          this.each(args, function (value) {
            if (!_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(value)) value = [value];
            Array.prototype.push.apply(r, value);
          });
          return r;
        },
        // reverseRef
        // permet de renverser le tableau courant
        reverseRef: function reverseRef(array) {
          this.typecheck(array);
          return array.reverse();
        },
        // spliceValue
        // permet de retourner le même tableau sans la valeur donné en argument
        // retourne la valeur splice
        spliceValue: function spliceValue(value, array, replace) {
          var r = null;
          var index = this.search(value, array);
          this.typecheck(array);
          var args = [index, 1];
          if (typeof replace !== 'undefined') args.push(replace);
          r = Array.prototype.splice.apply(array, args);
          return r;
        }
      }; // arrLoop
      // fonctions relatives à certains loops spéciaux

      var _ArrLoop = {
        // timeouts
        // permet de lancer un callback sur chaque element du tableau avec timeout différent (selon index)
        timeouts: function timeouts(array, timeout, indexTimeout, callback) {
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.typecheck(timeout);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.typecheck(indexTimeout);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(callback);

          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(array, function (value, index) {
            var funcTimeout = timeout + index * indexTimeout;

            var funcWrap = function funcWrap() {
              callback(value, index, funcTimeout);
            };

            _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.timeout(funcTimeout, funcWrap);
          });
        },
        // oddEven
        // permet d'appeler une méthode de callback différents selon si l'élément est odd ou even
        oddEven: function oddEven(array, funcOdd, funcEven) {
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typechecks([funcOdd, funcEven], false);

          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(array, function (value, index) {
            var key = index + 1;

            if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.isOdd(key)) {
              if (funcOdd != null) funcOdd(value, index);
            } else if (funcEven != null) funcEven(value, index);
          });
        }
      }; // export

      /***/
    },

    /***/
    "../javascript/src/arrLike.js":
    /*!************************************!*\
      !*** ../javascript/src/arrLike.js ***!
      \************************************/

    /***/
    function javascriptSrcArrLikeJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../javascript/index.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/javascript/blob/master/LICENSE
       */
      // arrLike
      // script with some functions related to array like management
      // import
      // export

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = {
        // is
        // retourne vrai si la variable est comme un tableau (array-like)
        // retourne faux si la valeur est un array
        is: function is(value) {
          var r = false;

          if (!_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(value) && !_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.is(value) && !_index_js__WEBPACK_IMPORTED_MODULE_0__.Func.is(value) && !_index_js__WEBPACK_IMPORTED_MODULE_0__.Env.isWindow(value)) {
            var type = _index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.type(value);

            var length = !!value && "length" in value && value.length;
            r = type === 'array' || length === 0 || typeof length === "number" && length > 0 && length - 1 in value;
          }

          return r;
        },
        // toArray
        // retourne la même valeur si c'est un tableau, sinon converti le array like
        // moins stricte que le toArray de obj
        toArray: function toArray(value) {
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(value) ? value : this.is(value) ? Array.from(value) : null;
        }
      };
      /***/
    },

    /***/
    "../javascript/src/bool.js":
    /*!*********************************!*\
      !*** ../javascript/src/bool.js ***!
      \*********************************/

    /***/
    function javascriptSrcBoolJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/javascript/blob/master/LICENSE
       */
      // bool
      // methods for bool primitive type
      // export

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = {
        // is
        // retourne vrai si la valeur est une fonction
        is: function is(value) {
          return typeof value === 'boolean';
        },
        // toInt
        // retourne un numéro à partir d'un boolean
        toInt: function toInt(value) {
          var r = null;
          this.typecheck(value);
          if (value === true) r = 1;else if (value === false) r = 0;
          return r;
        },
        // toggle
        // permet de faire un toggle sur une valeur boolean
        toggle: function toggle(value) {
          var r = null;
          this.typecheck(value);
          if (value === true) r = false;else if (value === false) r = true;
          return r;
        }
      };
      /***/
    },

    /***/
    "../javascript/src/datetime.js":
    /*!*************************************!*\
      !*** ../javascript/src/datetime.js ***!
      \*************************************/

    /***/
    function javascriptSrcDatetimeJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../javascript/index.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/javascript/blob/master/LICENSE
       */
      // datetime
      // script with functions related to date and time
      // import
      // export

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = {
        // now
        // retourne le timestamp courant
        now: function now() {
          return new Date().getTime();
        },
        // localeFormat
        // méthode de base pour formatter une date
        // locale doit être fourni en premier argumnet
        localeFormat: function localeFormat(locale, date, option) {
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(locale);

          date = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(date) ? new Date(date) : new Date();
          return date.toLocaleString(locale, option);
        },
        // year
        // retourne l'année courante
        year: function year() {
          return new Date().getFullYear();
        },
        // ymd
        // retourne le format en ymd
        // possible de spécifier le year, month et day
        ymd: function ymd(timestamp, year, month, day) {
          var r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(timestamp) ? new Date(timestamp * 1000) : new Date();
          r.setHours(0, 0, 0);
          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(day)) r.setDate(day);
          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(month)) r.setMonth(month - 1);
          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(year)) r.setFullYear(year);
          return r.toISOString().substr(0, 10);
        },
        // his
        // retourne le temps en format hh:mm:ss
        his: function his(timestamp) {
          var date = _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(timestamp) ? new Date(timestamp * 1000) : new Date();
          var dateText = date.toTimeString();
          return dateText.split(' ')[0];
        }
      };
      /***/
    },

    /***/
    "../javascript/src/debug.js":
    /*!**********************************!*\
      !*** ../javascript/src/debug.js ***!
      \**********************************/

    /***/
    function javascriptSrcDebugJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../javascript/index.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/javascript/blob/master/LICENSE
       */
      // debug
      // script with functions related to debugging
      // import
      // export

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = new function () {
        // status debug, peut être scalar
        var debug = false; // status
        // active ou désactive le débogagge

        this.status = function () {
          return function (value) {
            if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.is(value)) debug = value;
            return debug;
          };
        }(); // is
        // retourne vrai si la valeur pour le débogagge est le même


        this.is = function (value) {
          return debug === true || debug === value;
        }; // assertThrow
        // comme assert mais lance une erreur


        this.assertThrow = function (value) {
          if (value !== true) throw new Error();
        }, // logError
        // permet de logger une erreur
        this.logError = function (value) {
          console.error('Catched', value);
        };
      }();
      /***/

    },

    /***/
    "../javascript/src/env.js":
    /*!********************************!*\
      !*** ../javascript/src/env.js ***!
      \********************************/

    /***/
    function javascriptSrcEnvJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../javascript/index.js");
      /* provided dependency */


      var process = __webpack_require__(
      /*! process/browser.js */
      "../javascript/node_modules/process/browser.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/javascript/blob/master/LICENSE
       */
      // env
      // methods related to javascript environnement
      // import
      // export

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = {
        // isNode
        // retourne vrai si l'environnement courant est dans node
        isNode: function isNode() {
          return typeof process !== 'undefined' && typeof process.release !== 'undefined' && process.release.name === 'node';
        },
        // isBrowser
        // retourne vrai si l'environnement courant est dans le navigateur
        isBrowser: function isBrowser() {
          return !this.isNode();
        },
        // isWindow
        // retourne vrai si la variable est un window ou un proxy
        isWindow: function isWindow(value) {
          var r = false;
          if (this.isBrowser() && _index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.is(value)) r = value instanceof Window || value.window === value;
          return r;
        },
        // isTarget
        // retourne vrai si la variable est est un target html
        // soit window, document, element, textNode, doctype
        isTarget: function isTarget(value) {
          var r = false;
          if (this.isBrowser() && _index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.is(value)) r = value instanceof HTMLElement || value instanceof HTMLTemplateElement || value instanceof DocumentFragment || value === document || this.isWindow(value) || _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr["in"](value.nodeType, [Node.TEXT_NODE, Node.DOCUMENT_TYPE_NODE]);
          return r;
        }
      };
      /***/
    },

    /***/
    "../javascript/src/factory.js":
    /*!************************************!*\
      !*** ../javascript/src/factory.js ***!
      \************************************/

    /***/
    function javascriptSrcFactoryJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* export default binding */
            __WEBPACK_DEFAULT_EXPORT__
          );
        }
        /* harmony export */

      });
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/javascript/blob/master/LICENSE
       */
      // factory
      // script with a method to create the objects with prototype
      // export

      /* harmony default export */


      function __WEBPACK_DEFAULT_EXPORT__(prototype) {
        var r = Object.create(prototype === true ? {} : prototype || null);
        var args = Array.prototype.slice.call(arguments, 1);
        Object.assign.apply(null, [r].concat(args));
        return r;
      }
      /***/

    },

    /***/
    "../javascript/src/func.js":
    /*!*********************************!*\
      !*** ../javascript/src/func.js ***!
      \*********************************/

    /***/
    function javascriptSrcFuncJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../javascript/index.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/javascript/blob/master/LICENSE
       */
      // handler
      // script with methods related to functions
      // import
      // export

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = {
        // is
        // retourne vrai si la valeur est une fonction
        is: function is(value) {
          return typeof value === "function" && typeof value.nodeType !== "number";
        },
        // noop
        // retourne une fonction vide
        noop: function noop() {
          return function () {};
        },
        // async
        // comme timeout, mais la durée est automatiquement 0
        async: function async(func, context) {
          return this.timeout(0, func, context);
        },
        // timeout
        // permet d'appeler une fois après un timeout
        // si timeout n'est pas integer, utlise 0
        // retourne le timeout
        timeout: function timeout(delay, func, context) {
          this.typecheck(func);
          if (!_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(delay)) delay = 0;
          return setTimeout(func.bind(context), delay);
        },
        // debounce
        // permet d'appeler une fonction une seule fois après le délai spécifié par le timeout
        // retourne une nouvelle fonction
        debounce: function debounce(delay, func) {
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.typecheck(delay);

          this.typecheck(func);
          var $inst = this;
          var timeout;
          return function () {
            var $this = this;
            var args = arguments;
            if (timeout) clearTimeout(timeout);
            timeout = $inst.timeout(delay, function () {
              func.apply($this, args);
            });
          };
        },
        // debounceOnce
        // comme debounce mais la function ne pourra être appelé qu'une fois
        debounceOnce: function debounceOnce(delay, func) {
          var once = false;
          Func.typecheck(func);
          return this.debounce(delay, function () {
            var args = arguments;

            if (once === false) {
              func.apply(this, args);
              once = true;
            }
          });
        },
        // throttle
        // permet de limiter le rythme d'appel à une fonction
        // retourne une nouvelle fonction
        throttle: function throttle(delay, func) {
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.typecheck(delay);

          this.typecheck(func);
          var $inst = this;
          var canCall = true;
          return function () {
            var $this = this;

            if (canCall === true) {
              func.apply($this, arguments);
              canCall = false;
              $inst.timeout(delay, function () {
                canCall = true;
              });
            }
          };
        }
      };
      /***/
    },

    /***/
    "../javascript/src/html.js":
    /*!*********************************!*\
      !*** ../javascript/src/html.js ***!
      \*********************************/

    /***/
    function javascriptSrcHtmlJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../javascript/index.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/javascript/blob/master/LICENSE
       */
      // html
      // script containing event listeners functions for target elements
      // import
      // export

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = {
        // valueAttr
        // retourne l'attribut à utiliser pour la valeur d'un tag selflcosing
        valueAttr: {
          br: 'data-value',
          hr: 'data-value',
          img: 'src',
          meta: 'content',
          link: 'href',
          input: 'value'
        },
        // htmlEscapes
        // convertiseur pour les caractères html à escape
        htmlEscapes: {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;'
        },
        // isSelfClosing
        // retourne vrai si la balise se ferme dans l'ouverture
        isSelfClosing: function isSelfClosing(tag) {
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr["in"](tag, ['br', 'hr', 'img', 'meta', 'link', 'input']);
        },
        // escape
        // permet de faire un escape des caractères html dangereux sur une string
        // transforme < > ' " &
        escape: function escape(value) {
          var r = null;
          var $inst = this;

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(value);

          return value.replace(/[&<>"']/g, function (value) {
            return $inst.htmlEscapes[value];
          });
        },
        // start
        // ouvre une tag html
        start: function start(tag, value, attr) {
          var r = '';

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(tag, true);

          var isSelfClosing = this.isSelfClosing(tag);
          var attrStr = this.attr(attr, tag, value);
          r += "<";
          r += tag;

          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(attrStr)) {
            r += " ";
            r += attrStr;
          }

          if (isSelfClosing === true) r += "/>";else {
            r += ">";
            r += this.value(value);
          }
          return r;
        },
        // end
        // ferme une tag html
        end: function end(tag) {
          var r = '';

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(tag, true);

          var isSelfClosing = this.isSelfClosing(tag);

          if (isSelfClosing === false) {
            r += "</";
            r += tag;
            r += ">";
          }

          return r;
        },
        // value
        // permet de préparer la valeur du input
        value: function value(_value, isAttr) {
          if (_value === true) _value = isAttr === true ? 1 : '&nbsp;';else if (_value === false) _value = isAttr === true ? 0 : '';

          if (isAttr !== true) {
            if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(_value)) _value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.values(_value);
            if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(_value)) _value = _value.join(', ');
          }

          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.cast(_value, true);
        },
        // attr
        // génère la string d'attribut pour la balise
        // possible de fournir une tag et une valeur
        attr: function attr(_attr, tag, value) {
          var r = '';
          var isSelfClosing = this.isSelfClosing(tag);
          _attr = this.attrToPojo(_attr);

          if (isSelfClosing === true && _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.keyExists(tag, this.valueAttr)) {
            var valueAttr = _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.get(tag, this.valueAttr);

            if (valueAttr != null) {
              var current = _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.get(valueAttr, _attr);

              if (current == null || value != null) _attr[valueAttr] = this.value(value, true);
            }
          }

          _attr = this.prepareAttr(_attr);
          r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.str(_attr, "=", " ", true);
          return r;
        },
        // attrToPojo
        // permet de transformer un argument attr en pojo
        attrToPojo: function attrToPojo(attr) {
          var r = {};
          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(attr)) r = {
            "class": attr
          };
          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(attr)) r = attr;
          return r;
        },
        // prepareAttr
        // utilisé pour préparer un objet attr
        // remplace les clés camelcase
        // gestion de la clé data contenant un objet
        // gestion des classes en tableau
        prepareAttr: function prepareAttr(attr) {
          var r = {};

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.typecheck(attr);

          var defaultKeyValue = function defaultKeyValue(key, value) {
            return {
              key: _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.fromCamelCase('-', key),
              value: _index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.is(value) ? _index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.toInt(value) : value
            };
          };

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.each(attr, function (value, key) {
            var keyValue = defaultKeyValue(key, value);
            key = keyValue.key;
            value = keyValue.value;
            if (key === 'class' && _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(value)) value = value.join(' ');else if (key === 'data' && _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(value)) {
              _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.each(value, function (value2, key2) {
                var keyValue2 = defaultKeyValue(key2, value2);
                var newKey = 'data-' + keyValue2.key;
                r[newKey] = keyValue2.value;
              });

              value = null;
            }
            if (value != null) r[key] = value;
          });

          return r;
        },
        // tag
        // ouvre et ferme une tag avec contenu et attribut
        tag: function tag(_tag, value, attr) {
          return this.start(_tag, value, attr) + this.end(_tag);
        },
        // tagCond
        // ouvre et ferme une tag avec contenu et attribut seulement si la valeur n'est pas vide
        tagCond: function tagCond(tag, value, attr) {
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isNotEmpty(this.value(value)) ? this.tag(tag, value, attr) : '';
        },
        // div
        // ouvre et ferme une tag div avec contenu et attribut
        div: function div(value, attr) {
          return this.tag('div', value, attr);
        },
        // span
        // ouvre et ferme une tag span avec contenu et attribut
        span: function span(value, attr) {
          return this.tag('span', value, attr);
        },
        // ul
        // ouvre et ferme une tag ul avec contenu et attribut
        ul: function ul(value, attr) {
          return this.tag('ul', value, attr);
        },
        // li
        // ouvre et ferme une tag li avec contenu et attribut
        li: function li(value, attr) {
          return this.tag('li', value, attr);
        },
        // input
        // ouvre et ferme une tag input avec valeur et attribut
        input: function input(value, attr) {
          return this.tag('input', value, _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.replace({
            type: 'text'
          }, this.attrToPojo(attr)));
        },
        // button
        // ouvre et ferme une tag button avec contenu et attribut
        button: function button(value, attr) {
          return this.tag('button', value, _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.replace({
            type: 'button'
          }, this.attrToPojo(attr)));
        }
      };
      /***/
    },

    /***/
    "../javascript/src/integer.js":
    /*!************************************!*\
      !*** ../javascript/src/integer.js ***!
      \************************************/

    /***/
    function javascriptSrcIntegerJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../javascript/index.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/javascript/blob/master/LICENSE
       */
      // integer
      // methods related to integer numbers
      // import
      // export

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = {
        // is
        // retourne vrai si la valeur est un int
        is: function is(value) {
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.is(value) && parseInt(value) === value;
        },
        // cast
        // retourne le nombre sous forme de int
        cast: function cast(value) {
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.isNotBool(value) && value !== '' ? parseInt(value) : null;
        },
        // toBool
        // retourne un booléean à partir d'un int
        toBool: function toBool(value) {
          var r = null;
          this.typecheck(value);
          if (value === 1) r = true;else if (value === 0) r = false;
          return r;
        },
        // toggle
        // toggle des valeurs primaires (1/0)
        toggle: function toggle(value) {
          var r = null;
          this.typecheck(value);
          if (value === 1) r = 0;else if (value === 0) r = 1;
          return r;
        },
        // range
        // retourne un tableau range
        range: function range(min, max, inc) {
          var r = null;
          min = min == null ? 1 : min;
          inc = inc == null ? 1 : inc;

          if (this.isPositive(min, true) && this.isPositive(max, true) && this.isPositive(inc)) {
            var length = Math.floor((max - min) / inc) + 1;
            var arr = Array(length).fill(min);
            r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.map(arr, function (x, y) {
              return x + y * inc;
            });
          }

          return r;
        },
        // unique
        // retourne un int jamais utilisé, utile pour générer des ids unique
        unique: function (value) {
          var i = 0;
          return function () {
            return i++;
          };
        }()
      };
      /***/
    },

    /***/
    "../javascript/src/json.js":
    /*!*********************************!*\
      !*** ../javascript/src/json.js ***!
      \*********************************/

    /***/
    function javascriptSrcJsonJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../javascript/index.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/javascript/blob/master/LICENSE
       */
      // json
      // script with methods related to json format
      // import
      // export

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = {
        // encode
        // encode une valeur en json
        encode: function encode(value) {
          return JSON.stringify(value);
        },
        // decode
        // decode une valeur à partir d'un json
        decode: function decode(value) {
          return JSON.parse(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(value));
        },
        // recode
        // encode et decode une valeur
        // permet de faire des copies complêtes
        recode: function recode(value) {
          return this.decode(this.encode(value));
        }
      };
      /***/
    },

    /***/
    "../javascript/src/nav.js":
    /*!********************************!*\
      !*** ../javascript/src/nav.js ***!
      \********************************/

    /***/
    function javascriptSrcNavJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../javascript/index.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/javascript/blob/master/LICENSE
       */
      // nav
      // script with helper functions related to navigation and pagination
      // import
      // export

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = {
        // isFirst
        // retourne vrai si la valeur est la première
        isFirst: function isFirst(value, max) {
          return value === this.getFirst(max);
        },
        // hasPrev
        // retourne vrai s'il y a une valeur précédente
        hasPrev: function hasPrev(value, max, loop) {
          return this.getPrev(value, max, loop) != null;
        },
        // hasNext
        // retourne vrai s'il y a une valeur suivante
        hasNext: function hasNext(value, max, loop) {
          return this.getNext(value, max, loop) != null;
        },
        // isLast
        // retourne vrai si la valeur est la dernière
        isLast: function isLast(value, max) {
          return value === this.getLast(max);
        },
        // isIndex
        // retourne vrai si la valeur est comprise dans le maximum
        isIndex: function isIndex(value, max) {
          return this.getIndex(value, max) === value;
        },
        // getFirst
        // retourne la premier valeur
        getFirst: function getFirst(max) {
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.isPositive(max) ? 0 : null;
        },
        // getPrev
        // retourne la valeur précédente
        getPrev: function getPrev(value, max, loop) {
          var r = null;

          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.isPositive(max)) {
            var last = max - 1;
            value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(value) ? value : last;
            var newVal = value - 1;

            if (newVal < 0) {
              if (loop === true) r = last;
            } else r = newVal;
          }

          return r;
        },
        // getNext
        // retourne la valeur suivante
        getNext: function getNext(value, max, loop) {
          var r = null;

          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.isPositive(max)) {
            var last = max - 1;
            value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(value) ? value : -1;
            var newVal = value + 1;

            if (newVal > last) {
              if (loop === true) r = 0;
            } else r = newVal;
          }

          return r;
        },
        // getLast
        // retourne la dernière valeur
        getLast: function getLast(max) {
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.isPositive(max) ? max - 1 : null;
        },
        // getIndex
        // retourne la valeur si elle elle comprise dans le maximum
        getIndex: function getIndex(value, max) {
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(value) && value >= 0 && _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.isPositive(max) && value < max ? value : null;
        },
        // index
        // retourne l'index du nouvel élément
        index: function index(value, current, max, loop) {
          var r = null;

          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.isPositive(max)) {
            if (value === 'first') r = this.getFirst(max);else if (value === 'last') r = this.getLast(max);else if (value === 'prev') r = this.getPrev(current, max, loop);else if (value === 'next') r = this.getNext(current, max, loop);else if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(value)) r = this.getIndex(value, max);
          }

          return r;
        },
        // indexObj
        // retourne l'objet de l'index du nouvel élément
        indexObj: function indexObj(value, current, objs, loop) {
          var r = null;

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.typechecks(objs, false);

          if (objs != null) {
            var max = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.length(objs);

            if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.is(value)) value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.search(value, objs);
            if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.is(current)) current = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.search(current, objs);
            var index = this.index(value, current, max, loop);
            if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(index)) r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.get(index, objs);
          }

          return r;
        }
      };
      /***/
    },

    /***/
    "../javascript/src/num.js":
    /*!********************************!*\
      !*** ../javascript/src/num.js ***!
      \********************************/

    /***/
    function javascriptSrcNumJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NumFormat": function NumFormat() {
          return (
            /* binding */
            _NumFormat
          );
        },

        /* harmony export */
        "NumPrimitive": function NumPrimitive() {
          return (
            /* binding */
            _NumPrimitive
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../javascript/index.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/javascript/blob/master/LICENSE
       */
      // num
      // script with functions related to numbers
      // import
      // numPrimitive
      // méthodes pour des valeurs numériques


      var _NumPrimitive = {
        // is
        // retourne vrai si la valeur est un nombre
        is: function is(value) {
          var r = false;

          var type = _index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.type(value);

          if (type === "number" || type === "string") r = !isNaN(value - parseFloat(value));
          return r;
        },
        // isEmpty
        // retourne vrai si c'est une variable numérique vide
        isEmpty: function isEmpty(value) {
          return this.is(value) ? _index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isEmpty(this.cast(value)) : false;
        },
        // isNotEmpty
        // retourne vrai si c'est une variable numérique non-vide
        isNotEmpty: function isNotEmpty(value) {
          return this.is(value) ? _index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isNotEmpty(this.cast(value)) : false;
        },
        // isPositive
        // retourne vrai si c'est une variable numérique positive (> 0)
        // si allowZero est true, retourne true si zero
        isPositive: function isPositive(value, allowZero) {
          var r = false;

          if (this.is(value)) {
            value = this.cast(value);
            if (value > 0 || allowZero === true && value === 0) r = true;
          }

          return r;
        },
        // isNegative
        // retourne vrai si c'est une variable numérique positive (< 0)
        // si allowZero est true, retourne true si zero
        isNegative: function isNegative(value, allowZero) {
          var r = false;

          if (this.is(value)) {
            value = this.cast(value);
            if (value < 0 || allowZero === true && value === 0) r = true;
          }

          return r;
        },
        // isOdd
        // vérifie que la valeur est un chiffre impair
        isOdd: function isOdd(value) {
          return this.is(value) && !_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(value / 2);
        },
        // isEven
        // vérifie que la valeur est un chiffre pair
        isEven: function isEven(value) {
          return this.is(value) && _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(value / 2);
        },
        // isNan
        // retourne vrai si la valeur est nan
        isNan: function isNan(value) {
          return isNaN(value);
        },
        // cast
        // retourne la variable sous forme de nombre
        cast: function cast(value) {
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.isNotBool(value) && value !== '' ? parseFloat(value) : null;
        },
        // str
        // retourne le nombre sous forme de string
        str: function str(value) {
          this.typecheck(value);
          return Number(value).toString();
        }
      }; // numFormat
      // contient des méthodes pour formatter un chiffre

      var _NumFormat = {
        // decimal
        // permet de formatter un nombre en forçant le nombre de décimal
        decimal: function decimal(value, _decimal) {
          this.typecheck(value);
          _decimal = _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(_decimal) ? _decimal : 2;
          return value.toFixed(_decimal);
        },
        // round
        // arrondi le nombre sous forme de int
        round: function round(value) {
          value = this.cast(value);
          this.typecheck(value);
          return Math.round(value);
        },
        // floor
        // amène le nombre au int plus petit
        floor: function floor(value) {
          value = this.cast(value);
          this.typecheck(value);
          return Math.floor(value);
        },
        // ceil
        // amène le nombre au int plus grand
        ceil: function ceil(value) {
          value = this.cast(value);
          this.typecheck(value);
          return Math.ceil(value);
        }
      }; // export

      /***/
    },

    /***/
    "../javascript/src/obj.js":
    /*!********************************!*\
      !*** ../javascript/src/obj.js ***!
      \********************************/

    /***/
    function javascriptSrcObjJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ObjBase": function ObjBase() {
          return (
            /* binding */
            _ObjBase
          );
        },

        /* harmony export */
        "ObjCopyFilterMap": function ObjCopyFilterMap() {
          return (
            /* binding */
            _ObjCopyFilterMap
          );
        },

        /* harmony export */
        "ObjEach": function ObjEach() {
          return (
            /* binding */
            _ObjEach
          );
        },

        /* harmony export */
        "ObjFactory": function ObjFactory() {
          return (
            /* binding */
            _ObjFactory
          );
        },

        /* harmony export */
        "ObjKeyValue": function ObjKeyValue() {
          return (
            /* binding */
            _ObjKeyValue
          );
        },

        /* harmony export */
        "ObjProto": function ObjProto() {
          return (
            /* binding */
            _ObjProto
          );
        },

        /* harmony export */
        "ObjWrite": function ObjWrite() {
          return (
            /* binding */
            _ObjWrite
          );
        },

        /* harmony export */
        "ObjWriteSelf": function ObjWriteSelf() {
          return (
            /* binding */
            _ObjWriteSelf
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../javascript/index.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/javascript/blob/master/LICENSE
       */
      // obj
      // script with a set of helper functions related to objects
      // import
      // objBase
      // base methods for objects


      var _ObjBase = {
        // is
        // retourne vrai si c'est un objet
        is: function is(value) {
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.type(value) === 'object';
        },
        // isEqual
        // compare plusieurs objets (ou array)
        // retourne vrai si les valeurs contenus sont égales
        isEqual: function isEqual() {
          var r = false;
          var args = Array.from(arguments);
          if (args.length > 1 && this.is(args[0])) r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isEqual.apply(null, args);
          return r;
        },
        // length
        // retourne la longueur de l'objet
        length: function length(value) {
          this.typecheck(value);
          var keys = Object.keys(value);
          return keys.length;
        }
      }; // objKeyValue
      // method related to keys and values within an object

      var _ObjKeyValue = {
        // isKey
        // retourne vrai si la valeur est une clé de propriété valide
        isKey: function isKey(prop) {
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.isNotBool(prop);
        },
        // keyExists
        // retourne vrai si l'objet a la propriété, ne cherche pas dans le prototype
        keyExists: function keyExists(prop, obj) {
          return this.isKey(prop) && this.is(obj) ? obj.hasOwnProperty(prop) : false;
        },
        // keys
        // retourne les clés de l'objet
        keys: function keys(obj) {
          this.typecheck(obj);
          return Object.keys(obj);
        },
        // values
        // retourne les valeurs de l'objet
        values: function values(obj) {
          this.typecheck(obj);
          return Object.values(obj);
        },
        // get
        // permet de retourner la valeur d'une propriété d'un objet
        get: function get(prop, obj) {
          this.typecheck(obj);
          return this.keyExists(prop, obj) ? obj[prop] : undefined;
        },
        // toArray
        // retourne un array à partir de la valeur
        toArray: function toArray(value) {
          this.typecheck(value);
          return Array.from(this.values(value));
        },
        // valueFirst
        // retourne le première valeur dans l'object
        valueFirst: function valueFirst(obj) {
          var r = undefined;
          var keys = this.keys(obj);

          if (keys != null) {
            var key = keys[0];
            r = obj[key];
          }

          return r;
        },
        // valueLast 
        // retourne la dernière valeur dans l'objet
        valueLast: function valueLast(obj) {
          var r = undefined;
          var keys = this.keys(obj);

          if (keys != null) {
            var key = keys[keys.length - 1];
            r = obj[key];
          }

          return r;
        },
        // find
        // retourne la première valeur de l'objet dont le callback retourne true
        find: function find(loop, callback) {
          var r = undefined;

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(callback);

          this.each(loop, function (value, key) {
            var result = callback(value, key);

            if (result) {
              r = value;
              return false;
            }
          });
          return r;
        },
        // findKey
        // retourne la première clé dont la valeur remplit la condition de la closure
        // la clé est envoyé en deuxième argument
        findKey: function findKey(loop, callback) {
          var r = null;

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(callback);

          this.each(loop, function (value, key) {
            if (callback(value, key)) {
              r = key;
              return false;
            }
          });
          return r;
        },
        // some
        // vérifie qu'au moins une entrée de l'objet passe le test de la fonction anonyme
        some: function some(loop, callback) {
          var r = false;

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(callback);

          this.each(loop, function (value, key) {
            if (callback(value, key)) {
              r = true;
              return false;
            }
          });
          return r;
        },
        // every
        // vérifie que toutes les entrée de l'objet passe le test de la fonction anonyme
        every: function every(loop, callback) {
          var r = true;

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(callback);

          this.each(loop, function (value, key) {
            if (!callback(value, key)) return r = false;
          });
          return r;
        },
        // reduce
        // retourne une valeur simple à partir d'un tableau
        reduce: function reduce(r, loop, callback) {
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(callback);

          this.each(loop, function (value, key) {
            r = callback(r, value, key);
          });
          return r;
        },
        // accumulate
        // comme reduce, mais le return est automatiquement append
        // si le callback retourne null, continue
        accumulate: function accumulate(r, loop, callback) {
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(callback);

          this.each(loop, function (value, key) {
            var result = callback(value, key);
            if (result == null) return true;else if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(r)) r.push(result);else if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(r)) r[key] = result;else r += result;
          });
          return r;
        },
        // str
        // permet de convertir un objet en string
        // possible de spécifier deux séparateurs
        // possible de quote les valeurs (à ce moment html escape est utilisé)
        str: function str(obj, separator, separator2, quote) {
          var $inst = this;
          separator = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(separator) ? separator : '=';
          separator2 = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(separator2) ? separator2 : ' ';
          return this.reduce('', obj, function (r, value, key) {
            if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(key)) {
              value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.cast(value, true);
              if (quote === true) value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.quote(value, false, true);
              if (r.length) r += separator2;
              r += key;
              r += separator;
              r += value;
              return r;
            }
          });
        },
        // climb
        // permet de grimper dans un objet à partir d'un tableau
        // si on passe une string ou divise par /
        climb: function climb(array, r) {
          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(array)) array = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.explode("/", array);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.typecheck(array);

          this.typecheck(r);
          var $inst = this;

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(array, function (value) {
            if ($inst.keyExists(value, r)) r = r[value];else {
              r = undefined;
              return false;
            }
          });

          return r;
        }
      }; // objEach
      // methods for looping over an object

      var _ObjEach = {
        // each
        // méthode utilisé pour faire un for each sur un array, array like, un objet ou une string
        // retourne true si le loop a complêté
        each: function each(loop, callback) {
          var r = true;

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(callback);

          var keys = this.keys(loop);
          var key;
          var value;
          var result;

          for (var i = 0; i < keys.length; i++) {
            key = keys[i];
            value = loop[key];
            result = callback(value, key);

            if (result === false) {
              r = false;
              break;
            }
          }

          return r;
        }
      }; // objCopyFilterMap
      // methods for copying, filtering and map an object

      var _ObjCopyFilterMap = {
        // copy
        // permet de copier un objet
        copy: function copy(value) {
          this.typecheck(value);
          return Object.assign(this["new"](), value);
        },
        // new
        // retourne la cible pour créer un nouvel objet du même type
        "new": function _new() {
          return {};
        },
        // filter
        // permet de créer un nouvel objet avec seulement les entrées qui retournent true
        filter: function filter(loop, callback) {
          var r = this["new"]();

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(callback);

          var keepKey = Array.isArray(r) ? false : true;
          this.each(loop, function (value, key) {
            var result = callback(value, key);
            key = keepKey === false ? r.length : key;
            if (result) r[key] = value;
          });
          return r;
        },
        // map
        // permet de créer un nouvel objet avec les valeurs changés selon la fonction de rappel
        map: function map(loop, callback) {
          var r = this["new"]();

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(callback);

          this.each(loop, function (value, key) {
            var result = callback(value, key);
            r[key] = result;
          });
          return r;
        }
      }; // objWrite
      // methods for written on a copy of the object

      var _ObjWrite = {
        // set
        // permet d'ajouter une nouvelle propriété à un objet
        // l'objet retourner est une copie
        set: function set(prop, value, obj) {
          var r = this.copy(obj);
          r[prop] = value;
          return r;
        },
        // unset
        // permet de retirer une propriété d'un objet
        // l'objet retourner est une copie
        unset: function unset(prop, obj) {
          var r = this.copy(obj);
          delete r[prop];
          return r;
        },
        // unsets
        // permet de retirer plusieurs propriétés d'un objet
        // l'objet retourner est une copie
        unsets: function unsets(props, obj) {
          var r = this.copy(obj);
          var $inst = this;

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(props, function (prop) {
            if ($inst.keyExists(prop, obj)) delete r[prop];
          });

          return r;
        },
        // replace
        // retourne un nouvel objet contenant le résultat d'un merge unidimensionnel de tous les objets données en argument
        replace: function replace() {
          var r = this["new"]();
          var args = Array.from(arguments);

          if (args.length > 0) {
            var $inst = this;

            _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(args, function (value) {
              $inst.typecheck(value, false);
              if (value != null) r = Object.assign(r, value);
            });
          }

          return r;
        }
      }; // objWriteSelf
      // methods for writing within the object without copying it

      var _ObjWriteSelf = {
        // setRef
        // permet d'ajouter une nouvelle propriété à un objet
        // l'objet retourner est le même (pas une copie)
        setRef: function setRef(prop, value, obj) {
          this.typecheck(obj);
          obj[prop] = value;
          return obj;
        },
        // unsetRef
        // permet de retirer une propriété d'un objet
        // l'objet retourner est le même (pas une copie)
        unsetRef: function unsetRef(prop, obj) {
          this.typecheck(obj);
          if (this.keyExists(prop, obj)) delete obj[prop];
          return obj;
        },
        // unsetsRef
        // permet de retirer plusieurs propriétés d'un objet
        // l'objet retourner est le même (pas une copie)
        unsetsRef: function unsetsRef(props, obj) {
          this.typecheck(obj);
          var $inst = this;

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(props, function (prop) {
            if ($inst.keyExists(prop, obj)) delete obj[prop];
          });

          return obj;
        }
      }; // objProto
      // methods related to object prototype

      var _ObjProto = {
        // keyExists
        // retourne vrai si l'objet a la propriété, cherche dans le protype
        keyExists: function keyExists(prop, obj) {
          return this.isKey(prop) && this.is(obj) ? prop in obj : false;
        }
      }; // objFactory
      // méthode pour merger plusieurs objets, avec support pour prototype

      var _ObjFactory = function ObjFactory(prototype) {
        var r = Object.create(prototype === true ? {} : prototype || null);
        var args = Array.prototype.slice.call(arguments, 1);
        Object.assign.apply(null, [r].concat(args));
        return r;
      }; // export

      /***/

    },

    /***/
    "../javascript/src/pojo.js":
    /*!*********************************!*\
      !*** ../javascript/src/pojo.js ***!
      \*********************************/

    /***/
    function javascriptSrcPojoJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../javascript/index.js");

      function _typeof(obj) {
        "@babel/helpers - typeof";

        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
          return typeof obj;
        } : function (obj) {
          return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, _typeof(obj);
      }
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/javascript/blob/master/LICENSE
       */
      // pojo
      // script with a set of helper functions related to plain objects
      // import
      // export

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = {
        // is
        // retourne vrai si c'est un objet plain
        is: function is(value) {
          return value != null && _typeof(value) === 'object' && Object.getPrototypeOf(value) === Object.prototype && value.toString() === '[object Object]';
        },
        // gets
        // permet de retourner un nouveau pojo avec seulement les propriétés donnés en premier argumnet
        gets: function gets(props, obj) {
          var r = {};
          this.typecheck(obj);
          var $inst = this;

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(props, function (prop) {
            r[prop] = $inst.keyExists(prop, obj) ? obj[prop] : undefined;
          });

          return r;
        },
        // replaceRecursive
        // retourne un nouvel objet contenant le résultat d'un merge multidimensionnel de tous les plain objets données en argument
        replaceRecursive: function replaceRecursive() {
          var r = null;
          var args = Array.from(arguments);

          if (args.length > 0) {
            r = this.copy(args[0]);
            var $inst = this;

            var loop = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.sliceStart(1, args);

            _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(loop, function (value) {
              if (value != null) {
                $inst.each(value, function (value2, key2) {
                  if ($inst.is(r[key2]) && $inst.keyExists(key2, r)) r[key2] = $inst.replaceRecursive(r[key2], value2);else r[key2] = value2;
                });
              }
            });
          }

          return r;
        }
      };
      /***/
    },

    /***/
    "../javascript/src/scalar.js":
    /*!***********************************!*\
      !*** ../javascript/src/scalar.js ***!
      \***********************************/

    /***/
    function javascriptSrcScalarJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../javascript/index.js");

      function _typeof(obj) {
        "@babel/helpers - typeof";

        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
          return typeof obj;
        } : function (obj) {
          return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, _typeof(obj);
      }
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/javascript/blob/master/LICENSE
       */
      // scalar
      // script with functions related to scalar values
      // import
      // export

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = {
        // is
        // retourne vrai si la valeur est scalar
        is: function is(value) {
          var r = false;

          var type = _typeof(value);

          if (type === 'boolean' || type === 'number' || type === 'string') r = true;
          return r;
        },
        // isNotBool
        // retourne vrai si scalar mais pas bool
        isNotBool: function isNotBool(value) {
          return this.is(value) && !_index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.is(value);
        },
        // cast
        // permet de cast une valeur selon un type donné en deuxième argument
        cast: function cast(r, type) {
          if (r != null && type != null) {
            if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr["in"](type, [true, 'json'])) r = Json.decode(r);else if (type === 'int') r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.cast(r);else if (type === 'num') r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.cast(r);else if (type === 'bool' && this.is(r)) r = this.toBool(r);
          }

          return r;
        },
        // toBool
        // retourne un booléean à partir d'un scalar
        toBool: function toBool(value) {
          var r = null;
          this.typecheck(value);
          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr["in"](value, [1, '1', true, 'true'])) r = true;else if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr["in"](value, [0, '0', false, 'false'])) r = false;
          return r;
        }
      };
      /***/
    },

    /***/
    "../javascript/src/str.js":
    /*!********************************!*\
      !*** ../javascript/src/str.js ***!
      \********************************/

    /***/
    function javascriptSrcStrJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../javascript/index.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/javascript/blob/master/LICENSE
       */
      // str
      // script with a set of helper functions related to strings
      // import
      // export

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = {
        // is
        // retourne vrai si la valeur est une string
        is: function is(value) {
          return typeof value === 'string';
        },
        // isStart
        // retourne vrai si la string commence par needle
        isStart: function isStart(needle, value) {
          return this.is(needle) && this.is(value) ? value.startsWith(needle) : null;
        },
        // isEnd
        // retourne vrai si la string finit par needle
        isEnd: function isEnd(needle, value) {
          return this.is(needle) && this.is(value) ? value.endsWith(needle) : null;
        },
        // isEqual
        // retourne vrai si les deux valeurs sont égales si comparés comme string
        isEqual: function isEqual(value, value2) {
          return this.cast(value) === this.cast(value2);
        },
        // in
        // retourne vrai si la valeur est dans la string
        // retourne un boolean
        "in": function _in(value, string) {
          return this.is(string) && this.is(value) ? string.includes(value) : null;
        },
        // icompare
        // compare deux string de façon insensible à la case
        icompare: function icompare(value, value2) {
          return this.is(value) && this.is(value2) ? value.toUpperCase() === value2.toUpperCase() : false;
        },
        // cast
        // retourne une valeur string
        // si la valeur est null retourne ''
        // si la valeur est objet, et que json est true -> envoie à json encode
        cast: function cast(value, json) {
          var r = '';

          if (value != null) {
            if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.is(value) && json === true) r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Json.encode(value);else r = String(value);
          }

          return r;
        },
        // toNum
        // retourne la string sous forme de nombre
        toNum: function toNum(value) {
          this.typecheck(value);
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.cast(value);
        },
        // toInt
        // retourne la string sous forme de integer
        toInt: function toInt(value) {
          this.typecheck(value);
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.cast(value);
        },
        // pos
        // retourne l'index de la valeur dans la string
        pos: function pos(value, string) {
          this.typecheck(string);
          var r = string.indexOf(value);
          r = r === -1 ? null : r;
          return r;
        },
        // lower
        // retourne la chaîne en lower case
        lower: function lower(value) {
          this.typecheck(value);
          return value.toLowerCase();
        },
        // lowerFirst
        // met la première lettre de la string lowercase
        lowerFirst: function lowerFirst(value) {
          this.typecheck(value);
          return this.isNotEmpty(value) ? value.charAt(0).toLowerCase() + value.slice(1) : null;
        },
        // upper
        // retourne la chaîne en uppercase
        upper: function upper(value) {
          this.typecheck(value);
          return value.toUpperCase();
        },
        // upperFirst
        // met la première lettre de la string uppercase
        upperFirst: function upperFirst(value) {
          this.typecheck(value);
          return this.isNotEmpty(value) ? value.charAt(0).toUpperCase() + value.slice(1) : null;
        },
        // trim
        // trim une string
        trim: function trim(value) {
          this.typecheck(value);
          return value.trim();
        },
        // quote
        // permet d'enrobber une string dans des quotes
        // possible de spécifier double ou non
        // possible de faire un escape html
        quote: function quote(value, _double, escape) {
          var r = null;
          this.typecheck(value);
          var quote = _double === true ? '"' : "'";
          if (escape === true) value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Html.escape(value);
          r = quote + value + quote;
          return r;
        },
        // sub
        // retourne une nouvelle sous chaîne
        sub: function sub(start, end, string) {
          this.typecheck(string);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.typecheck(start);

          return string.substring(start, end === true ? undefined : end);
        },
        // excerpt
        // retourne une nouvelle sous chaîne
        // peut ajouter un suffix si la chaîne a été coupé
        excerpt: function excerpt(limit, string, suffix) {
          var r = this.sub(0, limit, string);
          if (r !== string && this.isNotEmpty(suffix)) r += suffix;
          return r;
        },
        // explode
        // explode une chaîne
        // retourne un tableau dans tous les cas
        explode: function explode(delimiter, value, clean) {
          this.typechecks([delimiter, value]);
          var r = value.split(delimiter);
          if (clean === true) r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.clean(r);
          return r;
        },
        // explodeIndex
        // split une string et retourne l'index demandé en premier argument
        explodeIndex: function explodeIndex(index, delimiter, value) {
          var r = undefined;
          var x = this.explode(delimiter, value);
          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(index) && this.isNotEmpty(x[index])) r = x[index];
          return r;
        },
        // removeAllWhitespace
        // enlève tous les espaces blancs d'une string
        removeAllWhitespace: function removeAllWhitespace(string) {
          this.typecheck(string);
          return string.replace(/\s/g, "");
        },
        // fromCamelCase
        // transforme une string camelcase vers une string avec séparateur
        fromCamelCase: function fromCamelCase(delimiter, string) {
          this.typecheck(delimiter);
          string = this.trim(string);
          return string.replace(/[\w]([A-Z])/g, function (value) {
            return value[0] + delimiter + value[1];
          }).toLowerCase();
        },
        // toCamelCase
        // transforme une string avec séparateur en camelCase
        toCamelCase: function toCamelCase(delimiter, string) {
          var r = null;
          var $inst = this;
          string = this.trim(string);
          var array = this.explode(delimiter, string, true);
          array = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.map(array, function (word, index) {
            return index == 0 ? $inst.lower(word) : $inst.upperFirst(word);
          });
          r = array.join('');
          r = this.removeAllWhitespace(r);
          return r;
        },
        // slug
        // transforme une string en slug
        slug: function slug(string) {
          string = this.lower(string);
          return string.replace(/ /g, '-').replace(/[^\w-]+/g, '').replace(/--/g, '-');
        },
        // keepNumber
        // enleve tous les caractères non numérique
        keepNumber: function keepNumber(string) {
          this.typecheck(string);
          return string.replace(/[^0-9]/g, '');
        },
        // replace
        // permet de remplacer le contenu d'une string via un pojo
        replace: function replace(pojo, string) {
          this.typecheck(string);

          _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.each(pojo, function (value, key) {
            string = string.replace(key, value);
          });

          return string;
        }
      };
      /***/
    },

    /***/
    "../javascript/src/testSuite.js":
    /*!**************************************!*\
      !*** ../javascript/src/testSuite.js ***!
      \**************************************/

    /***/
    function javascriptSrcTestSuiteJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* export default binding */
            __WEBPACK_DEFAULT_EXPORT__
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../javascript/index.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/javascript/blob/master/LICENSE
       */
      // testSuite
      // script with a method to run a suite of tests
      // import
      // export

      /* harmony default export */


      function __WEBPACK_DEFAULT_EXPORT__(value) {
        return _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.each(value, function (suite, key) {
          return suite();
        });
      }
      /***/

    },

    /***/
    "../javascript/src/type.js":
    /*!*********************************!*\
      !*** ../javascript/src/type.js ***!
      \*********************************/

    /***/
    function javascriptSrcTypeJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../javascript/index.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/javascript/blob/master/LICENSE
       */
      // type
      // script with common methods for all variable types
      // import
      // export

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = {
        // is
        // retourne vrai si c'est une variable du type
        is: function is(value) {
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.type(value) !== 'object';
        },
        // are
        // retourne vrai si la valeur est un tableau contenant des variables du type
        are: function are(value) {
          var $inst = this;
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(value) ? _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(value, function (v) {
            return $inst.is(v);
          }) : false;
        },
        // isEmpty
        // retourne vrai si c'est une variable du type vide
        isEmpty: function isEmpty(value) {
          return this.is(value) ? _index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isEmpty(value) : false;
        },
        // isNotEmpty
        // retourne vrai si c'est une variable du type non-vide
        isNotEmpty: function isNotEmpty(value) {
          return this.is(value) ? _index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isNotEmpty(value) : false;
        },
        // typecheck
        // envoie une erreur si la valeur n'est pas du type
        // si type est true, doit être du type et non vide
        // si type est false, accepte null + undefined
        typecheck: function typecheck(value, type) {
          if ((type === true && !this.isNotEmpty(value) || type !== true && !this.is(value)) && !(type === false && value == null)) throw new Error(value);
          return value;
        },
        // typechecks
        // envoie une exception si la valeur n'est pas un tableau contenant des valeurs du type
        typechecks: function typechecks(value, type) {
          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(value)) {
            var $inst = this;

            _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(value, function (ele) {
              $inst.typecheck(ele, type);
            });
          } else throw new Error(value);

          return value;
        }
      };
      /***/
    },

    /***/
    "../javascript/src/validate.js":
    /*!*************************************!*\
      !*** ../javascript/src/validate.js ***!
      \*************************************/

    /***/
    function javascriptSrcValidateJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../javascript/index.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/javascript/blob/master/LICENSE
       */
      // validate
      // script with behaviours related to validation
      // import
      // export

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = {
        // isNumericDash
        // retourne vrai si la valeur contient seulement des caractères numérique ou -
        isNumericDash: function isNumericDash(value) {
          return this.regex(value, "^[0-9\-]+$");
        },
        // isEmail
        // retourne vrai si la valeur est un email
        isEmail: function isEmail(value) {
          return this.regex(value, /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{1,4})+$/);
        },
        // isRegexStr
        // retourne vrai si une valeur un regex ou instance de RegExp
        isRegexStr: function isRegexStr(value) {
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(value) || value instanceof RegExp;
        },
        // regex
        // permet de lancer un test d'expression régulière
        regex: function regex(value, exp) {
          var r = false;

          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(value) && this.isRegexStr(exp)) {
            var regex = new RegExp(exp);
            if (regex.test(value)) r = true;
          }

          return r;
        },
        // trigger
        // lance la validation required et ensuite pattern
        trigger: function trigger(value, required, pattern) {
          var r = this.required(value, required);
          if (r === true) r = this.pattern(value, pattern);
          return r;
        },
        // required
        // fait le test required sur la valeur
        required: function required(value, _required) {
          var r = true;
          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.is(_required)) _required = _index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.toInt(_required);

          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.isPositive(_required)) {
            value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.cast(value);
            value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.trim(value);
            if (!value.length) r = false;
          }

          return r;
        },
        // pattern
        // fait le test required sur la valeur
        pattern: function pattern(value, _pattern) {
          var r = true;

          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(_pattern)) {
            value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.cast(value);
            if (value.length && !this.regex(value, _pattern)) r = false;
          }

          return r;
        }
      };
      /***/
    },

    /***/
    "../javascript/src/vari.js":
    /*!*********************************!*\
      !*** ../javascript/src/vari.js ***!
      \*********************************/

    /***/
    function javascriptSrcVariJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../javascript/index.js");

      function _typeof(obj) {
        "@babel/helpers - typeof";

        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
          return typeof obj;
        } : function (obj) {
          return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, _typeof(obj);
      }
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/javascript/blob/master/LICENSE
       */
      // vari
      // script with a set of general functions related to variables
      // import
      // export

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = {
        // is
        // vrai si pas non défini
        is: function is(value) {
          return typeof value !== 'undefined';
        },
        // isEmpty
        // retourne vrai si la variable est vide
        isEmpty: function isEmpty(value) {
          var r = true;
          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(value) || _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(value)) r = value.length > 0 ? false : true;else if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.is(value)) r = !value;else if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Env.isTarget(value)) r = false;else if (value != null) {
            this.eachProto(value, function () {
              r = false;
              return false;
            });
          }
          return r;
        },
        // isNotEmpty
        // retourne vrai si la variable est non vide
        isNotEmpty: function isNotEmpty(value) {
          return !this.isEmpty(value);
        },
        // isReallyEmpty
        // retourne vrai si la variable est vraiment vide (conserve les numériques et bool)
        isReallyEmpty: function isReallyEmpty(value) {
          return !_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.is(value) && !_index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.is(value) && this.isEmpty(value);
        },
        // isNotReallyEmpty
        // retourne vrai si la variable n'est pas vraiment vide
        isNotReallyEmpty: function isNotReallyEmpty(value) {
          return !this.isReallyEmpty(value);
        },
        // isNull
        // retourne vrai si la valeur est null
        isNull: function isNull(value) {
          return value === null;
        },
        // isUndefined
        // retourne vrai si la valeur est undefined
        isUndefined: function isUndefined(value) {
          return value === undefined;
        },
        // isEqual
        // compare plusieurs variables
        // retourne vrai si les valeurs contenus sont égales
        isEqual: function isEqual() {
          var r = false;
          var json = null;
          var jsonOld = undefined;
          r = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.each(arguments, function (value) {
            json = _index_js__WEBPACK_IMPORTED_MODULE_0__.Json.encode(value);
            if (typeof jsonOld === 'undefined') jsonOld = json;else return json === jsonOld;
          });
          return r;
        },
        // isEqualStrict
        // comme isEqual, mais les objects et array doivent être les mêmes variables
        isEqualStrict: function isEqualStrict() {
          var r = false;
          var first = undefined;
          r = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.each(arguments, function (value) {
            if (typeof first === 'undefined') first = value;else return Object.is(first, value);
          });
          return r;
        },
        // type
        // retourne le vrai type d'une variable
        type: function type(value) {
          var r = _typeof(value);

          var obj = {};
          if (value == null) r = value + "";else if (r === 'function') {
            var str = obj.toString.call(value);
            r = obj[str] || "object";
          }
          return r;
        },
        // check
        // envoie une erreur si la valeur n'est pas égale à la deuxième
        check: function check(value, type) {
          if (value !== type) throw new Error([value, type]);
          return value;
        },
        // eachProto
        // fait un each en incluant les propriétés du prototype
        // retourne true si le loop a complêté
        eachProto: function eachProto(loop, callback) {
          var r = null;

          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Func.is(callback)) {
            r = true;
            var key;
            var value;
            var result;

            for (key in loop) {
              value = loop[key];
              result = callback.call(value, value, key, loop);

              if (result === false) {
                r = false;
                break;
              }
            }
          }

          return r;
        }
      };
      /***/
    },

    /***/
    "../javascript/test/javascript.js":
    /*!****************************************!*\
      !*** ../javascript/test/javascript.js ***!
      \****************************************/

    /***/
    function javascriptTestJavascriptJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Arr": function Arr() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr
          );
        },

        /* harmony export */
        "ArrLike": function ArrLike() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike
          );
        },

        /* harmony export */
        "Bool": function Bool() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Bool
          );
        },

        /* harmony export */
        "Component": function Component() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Component
          );
        },

        /* harmony export */
        "Datetime": function Datetime() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Datetime
          );
        },

        /* harmony export */
        "Debug": function Debug() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Debug
          );
        },

        /* harmony export */
        "Env": function Env() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Env
          );
        },

        /* harmony export */
        "Factory": function Factory() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Factory
          );
        },

        /* harmony export */
        "Func": function Func() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Func
          );
        },

        /* harmony export */
        "Html": function Html() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Html
          );
        },

        /* harmony export */
        "Integer": function Integer() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer
          );
        },

        /* harmony export */
        "Json": function Json() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Json
          );
        },

        /* harmony export */
        "Nav": function Nav() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Nav
          );
        },

        /* harmony export */
        "Num": function Num() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Num
          );
        },

        /* harmony export */
        "Obj": function Obj() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Obj
          );
        },

        /* harmony export */
        "Pojo": function Pojo() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo
          );
        },

        /* harmony export */
        "Scalar": function Scalar() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar
          );
        },

        /* harmony export */
        "Shortcut": function Shortcut() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Shortcut
          );
        },

        /* harmony export */
        "Str": function Str() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Str
          );
        },

        /* harmony export */
        "Test": function Test() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Test
          );
        },

        /* harmony export */
        "TestSuite": function TestSuite() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.TestSuite
          );
        },

        /* harmony export */
        "Tool": function Tool() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Tool
          );
        },

        /* harmony export */
        "Validate": function Validate() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Validate
          );
        },

        /* harmony export */
        "Vari": function Vari() {
          return (
            /* reexport safe */
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Vari
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index.js */
      "../javascript/index.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/javascript/blob/master/LICENSE
       */
      // node
      // script to test the node module
      // import


      var Arr = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr,
          ArrLike = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike,
          Bool = _index_js__WEBPACK_IMPORTED_MODULE_0__.Bool,
          Datetime = _index_js__WEBPACK_IMPORTED_MODULE_0__.Datetime,
          Env = _index_js__WEBPACK_IMPORTED_MODULE_0__.Env,
          Func = _index_js__WEBPACK_IMPORTED_MODULE_0__.Func,
          Html = _index_js__WEBPACK_IMPORTED_MODULE_0__.Html,
          Integer = _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer,
          Json = _index_js__WEBPACK_IMPORTED_MODULE_0__.Json,
          Nav = _index_js__WEBPACK_IMPORTED_MODULE_0__.Nav,
          Num = _index_js__WEBPACK_IMPORTED_MODULE_0__.Num,
          Obj = _index_js__WEBPACK_IMPORTED_MODULE_0__.Obj,
          Pojo = _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo,
          Scalar = _index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar,
          Shortcut = _index_js__WEBPACK_IMPORTED_MODULE_0__.Shortcut,
          Str = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str,
          Test = _index_js__WEBPACK_IMPORTED_MODULE_0__.Test,
          Validate = _index_js__WEBPACK_IMPORTED_MODULE_0__.Validate,
          Vari = _index_js__WEBPACK_IMPORTED_MODULE_0__.Vari;
      var d = Shortcut.d,
          assert = Shortcut.assert,
          logError = Shortcut.logError; // node

      Test.Node = function () {
        var _arguments = arguments;
        var r = true;

        try {
          var i;
          var i;

          (function () {
            // prepare
            var noop = function noop() {};

            var isEmpty = Str.isEmpty.bind(Str); // js

            assert(Object.getPrototypeOf(Obj) === Object.getPrototypeOf(Str));
            assert(Arr.is !== Obj.is);
            assert(Obj.each === Str.each);
            assert(!(false == null));
            assert(!(0 == null));
            assert(!('' == null));
            assert(null == null);
            assert(undefined == null);
            assert(!([] == true)); // arr

            assert(Arr.is([]));
            assert(!Arr.is({}));
            assert(!Arr.is(_arguments));
            assert(Arr["in"](null, [null]));
            assert(!Arr["in"](null, null));
            assert(!Arr["in"](true, [false]));
            assert(Arr.isEqual(Arr.keys([1, 2, 3]), [0, 1, 2]));
            assert(Arr.search(2, [1, 2, 3]) === 1);
            assert(Arr.isEqual(Arr.slice(1, 3, [2, 4, 6, 8, 10]), [4, 6]));
            assert(Arr.isEqual(Arr.slice(1, undefined, [2, 4, 6, 8, 10]), [4, 6, 8, 10]));
            assert(Arr.isEqual(Arr.slice(null, null, [2, 4, 6, 8, 10]), [2, 4, 6, 8, 10]));
            assert(Arr.isEqual(Arr.sliceStart(2, [2, 4, 6, 8, 10]), [6, 8, 10]));
            var spliceArr = [12, 3, 40];
            Arr.spliceValue(3, spliceArr);
            assert(Arr.isEqual(spliceArr, [12, 40]));
            assert(Arr.isEqual(Arr.spliceValue(40, spliceArr, 'ok'), [40]));
            assert(Arr.isEqual(spliceArr, [12, 'ok']));
            assert(Vari.isEqual(Arr.valueStrip(3, [3, 2, 3, 1, 5]), [2, 1, 5]));
            assert(Arr.isEmpty([]));
            assert(Arr.isNotEmpty([null]));
            assert(Arr.isNotEmpty([1, 2, 3]));
            assert(!Arr.isNotEmpty([]));
            assert(!Arr.isEmpty(''));
            assert(Arr.isEqual(Arr.typecheck([]), []));
            assert(Arr.isEqual(Arr.typecheck([1], true), [1]));
            assert(Arr.typecheck(undefined, false) === undefined);
            assert(Arr.isEqual([], []));
            assert(!Arr.isEqual({}, {}));
            var arr = [3, 2, 3, 1, 5];
            assert(Arr.valueFirst(arr) === 3);
            assert(Arr.valueLast(arr) === 5);
            assert(Arr.valueFirst([]) === undefined);
            assert(Arr.valueStrip('8', arr) !== arr);
            assert(Arr.keyFirst(arr) === 0);
            assert(Arr.keyLast(arr) === 4);
            assert(Arr.isEqual(Arr.valueStrip('8', arr), arr));
            var arrKey;
            assert(Vari.isEqual(Arr.copy([1, 2, 3]), [1, 2, 3]));
            var arrCopy = [1, 2, 3];
            assert(Arr.copy(arrCopy) !== arrCopy);
            assert(Arr.each([1, 2, 3], function (value, key) {
              assert(value !== this);
              arrKey = key;
            }));
            assert(arrKey === 2);
            assert(Arr.length([1, 2, 3]) === 3);
            assert(Arr.isEqual(Arr.set(1, 'z', ['a', 'b', 'c']), ['a', 'z', 'c']));
            assert(Arr.isEqual(arrCopy, [1, 2, 3]));
            assert(Arr.setRef(2, 4, arrCopy) === arrCopy);
            var mergeRef = [1, 2, 3];
            assert(Arr.mergeRef(mergeRef, 'what', [4, 5, 6], _arguments) === mergeRef);
            assert(Arr.isEqual(Arr.merge([1, 2, 3], 'what', [4, 5, 6], _arguments), mergeRef));
            assert(Arr.merge(mergeRef) !== mergeRef);
            assert(Arr.mergeRef(mergeRef) === mergeRef);
            assert(Arr.length(mergeRef) === 8);
            assert(Arr.isEqual(arrCopy, [1, 2, 4]));
            assert(Arr.length(Arr.merge([1, 2, 3], [4, 5, 6], _arguments)) === 7);
            assert(Arr.some([1, '2', 3], function (value, index, arr) {
              assert(Arr.is(arr));
              return Str.is(value);
            }));
            assert(!Arr.some([1, '2', 3], function (value, index, arr) {
              return Obj.is(value);
            }));
            assert(!Arr.every([1, '2', 3], function (value, index, arr) {
              assert(Arr.is(arr));
              return Str.is(value);
            }));
            assert(Arr.every([1, 2, 3], function (value, index, arr) {
              return Integer.is(value);
            }));
            assert(Arr.find([1, 2, 3], function (value, index, arr) {
              assert(Integer.is(value));
              assert(Integer.is(index));
              assert(Arr.is(arr));
              return value === 2;
            }) === 2);
            assert(Arr.isEqual(Arr.map([1, 2, 3], function (value, index, arr) {
              assert(Arr.is(arr));
              return index;
            }), [0, 1, 2]));
            assert(Arr.filter([1, 2, 3], function (value, key, array) {
              if (value === 1) assert(key === 0);
              assert(Arr.is(arr));
              return value === 2;
            }).length === 1);
            assert(Arr.reduce("", ['test', 'ok', 'what'], function (r, value, index, arr) {
              assert(Arr.is(arr));
              return r += index + value;
            }) === '0test1ok2what');
            assert(Arr.isEqual(Arr.replace([1, 2, 2], [4, 5], [0]), [0, 5, 2]));
            assert(Arr.isEqual(Arr.clean([null, undefined, 0, '0', [], {}, false, true, '', 1]), [0, '0', false, true, 1]));
            assert(Arr.timeouts([1, 2, 3], 20, 20, function (value) {
              assert(Integer.is(value));
            }));
            assert(Arr.oddEven([1, 2, 3], function (value) {
              assert(value !== 2);
            }, function (value) {
              assert(value === 2);
            }));
            assert(Arr.findKey([3, 4, 5], function (value, index, arr) {
              assert(arr == null);
              return value === 4;
            }) === 1);
            assert(Arr.accumulate(0, [2, 3, 4], function (value, index, arr) {
              assert(arr == null);
              return value;
            }) === 9);
            assert(Arr.accumulate('', ['eh', 'ok', 'what'], function (value, index) {
              return value;
            }) === 'ehokwhat');
            assert(Arr.isEqual(Arr.accumulate([], ['eh', 'ok', 'what'], function (value, index) {
              return index + value;
            }), ["0eh", "1ok", "2what"]));
            assert(Arr.isEqual(Arr.column('test', [{
              test: 'OK'
            }, {
              test2: 'WELL',
              test: 'OK2'
            }, {
              test2: 'NOP'
            }]), ['OK', 'OK2'])); // arrLike

            assert(!ArrLike.is([]));
            assert(!ArrLike.is({}));
            assert(!ArrLike.is(function () {}));
            assert(ArrLike.is(_arguments));
            assert(!ArrLike.is(2));
            assert(!ArrLike.is('str'));
            assert(!ArrLike.is(null));
            assert(ArrLike.isEmpty(_arguments));
            assert(!ArrLike.isNotEmpty(_arguments));
            assert(ArrLike.typecheck(_arguments) === _arguments);
            assert(ArrLike.typecheck(undefined, false) === undefined);
            assert(ArrLike.length(_arguments) === 0);
            assert(ArrLike.toArray(arrCopy) === arrCopy); // bool

            assert(!Bool.is('true'));
            assert(!Bool.is(function () {}));
            assert(!Bool.is(null));
            assert(!Bool.is(1));
            assert(Bool.is(true));
            assert(Bool.typecheck(true));
            assert(Bool.typecheck(false) === false);
            assert(Bool.toggle(false) === true);
            assert(Bool.isEmpty(false));
            assert(!Bool.isEmpty(0));
            assert(Bool.isNotEmpty(true));
            assert(Bool.toInt(true) === 1);
            assert(Bool.toInt(false) === 0);
            assert(Bool.typecheck(null, false) === null);
            assert(Bool.typecheck(false) === false);
            assert(Bool.typecheck(true, false) === true); // datetime

            assert(Num.is(Datetime.now()));
            assert(Num.is(Datetime.year()));
            assert(Str.length(Datetime.localeFormat('fr-CA')) >= 19);
            assert(Datetime.ymd(null, 2010, 2, 3) === "2010-02-03");
            assert(Datetime.ymd(1519241542) === "2018-02-21");
            assert(Datetime.his(1519241542) === "14:32:22"); // debug
            // env

            if (typeof window === 'undefined') {
              assert(Env.isNode());
              assert(!Env.isBrowser());
              assert(!Env.isWindow('test'));
              assert(!Env.isTarget('test'));
            } else {
              assert(!Env.isNode());
              assert(Env.isBrowser());
              assert(Env.isWindow(window));
              assert(Env.isTarget(window));
              assert(Env.isTarget(document));
              var html = document.querySelector("html");
              assert(Env.isTarget(html));
            } // factory
            // func


            assert(!Func.is('test'));
            assert(Func.is(noop));
            assert(Func.length(noop) === 0);
            Func.typecheck(noop);
            Func.typecheck(null, false);
            Func.timeout(null, function () {
              assert(true);
            });
            assert(Func.is(Func.debounce(2, function () {})));
            assert(Func.is(Func.throttle(2, function () {})));
            var debounceFunc = Func.debounce(100, function (arg) {
              assert(arg === 99);
            });

            for (i = 0; i < 100; i++) {
              debounceFunc(i);
            }

            var throttleFunc = Func.throttle(50, function (arg) {
              assert(Integer.is(arg));
            });

            var _loop = function _loop() {
              var arg = i;
              Func.timeout(arg, function () {
                throttleFunc(arg);
              });
            };

            for (i = 0; i < 100; i++) {
              _loop();
            } // html


            assert(Html.isSelfClosing('br'));
            assert(!Html.isSelfClosing('div'));
            assert(Html.escape("L'arti\"cle") === "L&#39;arti&quot;cle");
            assert(Html.escape("<test>ok</test>") === "&lt;test&gt;ok&lt;/test&gt;");
            assert(Html.start('div', 'james') === '<div>james');
            assert(Html.start('img', null, {
              src: "james.jpg"
            }) === "<img src='james.jpg'/>");
            assert(Html.start('img', 'bleh.jpg', {
              src: "james.jpg"
            }) === "<img src='bleh.jpg'/>");
            assert(Html.start('div', 'james', {
              "class": "ok",
              dataTest: "ok2"
            }) === "<div class='ok' data-test='ok2'>james");
            assert(Html.end('div') === '</div>');
            assert(Html.end('input') === '');
            assert(Html.value(2) === '2');
            assert(Html.attr({
              src: "james.jpg"
            }) === "src='james.jpg'");
            assert(Html.attr({
              src: "james.jpg"
            }, 'input', 'what') === "src='james.jpg' value='what'");
            assert(Html.tag('span', 'ok', {
              id: "test"
            }) === "<span id='test'>ok</span>");
            assert(Html.tag('input', 'ok', {
              value: "test",
              name: "NOé"
            }) === "<input value='ok' name='NOé'/>");
            assert(Html.tagCond('ul', false, 'ok') === '');
            assert(Html.tagCond('ul', '', 'ok') == '');
            assert(Html.tagCond('ul', null, 'ok') == '');
            assert(Html.tagCond('ul', 0, 'ok') === "<ul class='ok'>0</ul>");
            assert(Html.tagCond('ul', '0', 'ok') === "<ul class='ok'>0</ul>");
            assert(Html.tagCond('ul', true, 'ok') === "<ul class='ok'>&nbsp;</ul>");
            assert(Html.div('well', {
              myattr: "L'article",
              myattr2: 'L"article'
            }) === "<div myattr='L&#39;article' myattr2='L&quot;article'>well</div>");
            assert(Html.span({
              tag: "2",
              well: "OK"
            }) === '<span>2, OK</span>');
            assert(Html.ul('meh') === '<ul>meh</ul>');
            assert(Html.li(null, {
              "class": ['test', 'test2']
            }) === "<li class='test test2'></li>");
            assert(Html.span(null, {
              a: '',
              b: true,
              c: false,
              d: null,
              e: ['1', '2']
            }) === "<span a='' b='1' c='0' e='[&quot;1&quot;,&quot;2&quot;]'></span>");
            assert(Html.span(false, {
              test: 3,
              data: {
                test: 2,
                ok: 'WHAT',
                james: [1, 2],
                james2: {
                  ok: 'Mé'
                }
              }
            }) === "<span test='3' data-test='2' data-ok='WHAT' data-james='[1,2]' data-james2='{&quot;ok&quot;:&quot;Mé&quot;}'></span>");
            assert(Html.button(true) === "<button type='button'>&nbsp;</button>");
            assert(Html.button({
              test: "OKÉÉÉ",
              ble: 'MEH'
            }) === "<button type='button'>OKÉÉÉ, MEH</button>");
            assert(Html.button([1, 2, 3]) === "<button type='button'>1, 2, 3</button>");
            assert(Html.input(true, {
              type: 'email'
            }) === "<input type='email' value='1'/>");
            assert(Html.input(false, {
              type: 'text'
            }) === "<input type='text' value='0'/>");
            assert(Html.input(null, {
              type: 'text'
            }) === "<input type='text' value=''/>");
            assert(Html.div('ok', 'whatEscape') === "<div class='whatEscape'>ok</div>");
            assert(Html.button("ok", "james") === "<button type='button' class='james'>ok</button>"); // integer

            assert(!Integer.is('2'));
            assert(Integer.is(2));
            assert(!Integer.is(2.2));
            assert(Integer.cast(true) === null);
            assert(Integer.cast('2.3') === 2);
            assert(Integer.cast('2.6') === 2);
            assert(Integer.cast('25px') === 25);
            assert(Integer.cast(4) === 4);
            assert(Integer.cast(2.3) === 2);
            assert(Integer.cast('') === null);
            assert(Integer.toBool(1) === true);
            assert(Integer.toBool(0) === false);
            assert(Integer.toggle(1) === 0);
            assert(Integer.toggle(2) === null);
            assert(Integer.is(Integer.unique()));
            assert(Integer.unique() !== Integer.unique());
            assert(Integer.str(40) === '40');
            assert(Integer.isEmpty(0));
            assert(!Integer.isEmpty('0'));
            assert(!Integer.isNotEmpty('1'));
            assert(Integer.isNotEmpty(1));
            assert(Integer.isNotEmpty(-1));
            assert(Integer.isPositive(2));
            assert(!Integer.isPositive(0));
            assert(Integer.isPositive(0, true));
            assert(!Integer.isPositive('2'));
            assert(!Integer.isPositive(-1));
            assert(Integer.isNegative(-1));
            assert(!Integer.isNegative(0));
            assert(Integer.isNegative(0, true));
            assert(Integer.typecheck(1) === 1);
            assert(Integer.typecheck(0) === 0);
            assert(Integer.typecheck(null, false) === null);
            assert(Arr.length(Integer.range(0, 100, 1)) === 101);
            assert(Arr.length(Integer.range(1, 100, 1)) === 100);
            assert(Arr.length(Integer.range(2, 18, 3)) === 6); // json

            assert(Json.encode({
              ok: 2
            }) === '{"ok":2}');
            assert(Pojo.isEqual(Json.decode('{"ok":2}'), {
              ok: 2
            }));
            var jObj = {
              ok: 2
            };
            assert(Json.recode(jObj) !== jObj);
            assert(Pojo.isEqual(Json.recode(jObj), jObj)); // nav

            assert(Nav.isFirst(0, 10));
            assert(!Nav.isFirst(2, 10));
            assert(Nav.hasPrev(0, 10, true));
            assert(!Nav.hasPrev(0, 10));
            assert(Nav.hasPrev(2, 10));
            assert(Nav.hasNext(2, 10));
            assert(Nav.hasNext(8, 10));
            assert(!Nav.hasNext(9, 10));
            assert(Nav.hasNext(9, 10, true));
            assert(Nav.isLast(9, 10));
            assert(!Nav.isLast(10, 10));
            assert(Nav.isIndex(2, 10));
            assert(!Nav.isIndex(-2, 10));
            assert(Nav.getFirst(10) === 0);
            assert(Nav.getPrev(1, 10) === 0);
            assert(Nav.getNext(9, 10, true) === 0);
            assert(Nav.getLast(10) === 9);
            assert(Nav.getIndex(0, 10) === 0);
            assert(Nav.getIndex(20, 10) === null);
            assert(Nav.index('first', 2, 10) === 0);
            assert(Nav.index('last', 2, 10) === 9);
            assert(Nav.index('prev', 2, 10) === 1);
            assert(Nav.index('next', 2, 10) === 3);
            assert(Nav.index('next', 9, 10) === null);
            assert(Nav.index('next', 9, 10, true) === 0);
            assert(Nav.index('prev', 0, 10) === null);
            assert(Nav.index('prev', 0, 10, true) === 9);
            assert(Nav.index(2, 0, 10, true) === 2);
            assert(Nav.index(0, 0, 10, true) === 0);
            assert(Nav.index(11, 0, 10, true) === null); // num

            assert(!Num.is('what'));
            assert(!Num.is('2 px'));
            assert(Num.is('2'));
            assert(Num.is('2.3'));
            assert(Num.is(2));
            assert(Num.is(2.2));
            assert(!Num.isNan(2));
            assert(Num.cast('1.2') === 1.2);
            assert(Num.cast('1,2') === 1);
            assert(Num.cast(1) === 1);
            assert(Num.cast(1.2) === 1.2);
            assert(Num.cast(null) === null);
            assert(Num.cast([]) === null);
            assert(Num.str('2.3') === '2.3');
            assert(Num.cast("4.3px") === 4.3);
            assert(Num.str(4) === '4');
            assert(Num.str(2.3) === '2.3');
            assert(Num.isEmpty('0'));
            assert(Num.isEmpty(0));
            assert(!Num.isEmpty(true));
            assert(Num.isNotEmpty('1.1'));
            assert(Num.isNotEmpty(1.1));
            assert(Num.isPositive('2.2'));
            assert(!Num.isPositive('0'));
            assert(Num.isPositive('0', true));
            assert(Num.isNegative('-2.2'));
            assert(Num.typecheck('0') === '0');
            assert(Num.typecheck(2.1, true) === 2.1);
            assert(Num.isOdd(1));
            assert(!Num.isEven(1));
            assert(Num.isEven(2));
            assert(Num.isOdd(11));
            assert(!Num.isOdd(0));
            assert(Num.isEven(0));
            assert(Num.decimal(2) === '2.00');
            assert(Num.decimal(2.034) === '2.03');
            assert(Num.decimal(2.034, 3) === '2.034');
            assert(Num.decimal(2.034, 0) === '2');
            assert(Num.round("4.2") === 4);
            assert(Num.round(4.2) === 4);
            assert(Num.round(4) === 4);
            assert(Num.ceil("4.2") === 5);
            assert(Num.ceil(4.2) === 5);
            assert(Num.ceil(4) === 4);
            assert(Num.floor("4.2") === 4);
            assert(Num.floor(4.2) === 4);
            assert(Num.floor(4) === 4); // obj

            assert(Obj.is({}));
            assert(Obj.is([]));
            assert(Obj.is(_arguments));
            assert(Obj.is(function () {}));
            assert(!Obj.is('test'));
            assert(!Obj.is(null));
            assert(!Obj.is(undefined));
            assert(!Obj.is(true));
            assert(Obj.length({
              test: 2,
              ok: 3
            }) === 2);
            assert(Obj.length({}) === 0);
            assert(Obj.length([1, 2, 3]) === 3);
            assert(Obj.length({
              test: 2
            }) === 1);
            assert(Obj.isEqual([], []));
            assert(!Obj.isEqual({}, []));
            assert(!Obj.isEqual({}, {}, []));
            assert(Obj.isEqual({}, {}, {}));
            assert(Obj.isEqual([2], [2], [2]));
            assert(!Obj.isEqual([2], [2], [1]));
            assert(Obj.isEqual({
              test: 2
            }, {
              test: 2
            }));
            assert(!Obj.isEqual({
              test: 2
            }, {
              test: 3
            }));
            assert(!Obj.isEqual('test', 'test'));
            assert(!Obj.isEqual('test', 'testz'));
            assert(!Obj.isEqual(3, 3));
            assert(!Obj.isEqual(3, 4));
            assert(!Obj.isEqual(null, null));
            assert(!Obj.isEqual(null, undefined));
            var objGetSet = {
              test: 3
            };
            assert(Obj.get('test', objGetSet) === 3);
            assert(Obj.set('test', 4, objGetSet) !== objGetSet);
            assert(Obj.get('test', objGetSet) === 3);
            assert(Obj.unset('test', objGetSet) !== objGetSet);
            assert(Obj.str({
              str: 2,
              what: 'ok',
              loop: [1, 2],
              meh: {
                what: 2
              }
            }) === 'str=2 what=ok loop=[1,2] meh={"what":2}');
            assert(Obj.str({
              str: 2,
              what: 'ok',
              loop: [1, 2],
              meh: {
                what: 2
              }
            }, '!') === 'str!2 what!ok loop![1,2] meh!{"what":2}');
            assert(Obj.str({
              str: 2,
              what: 'ok',
              loop: [1, 2],
              meh: {
                what: 2
              }
            }, '=', ' ', true) === "str='2' what='ok' loop='[1,2]' meh='{&quot;what&quot;:2}'");
            assert(Obj.str({
              str: 2,
              what: 'ok',
              loop: [1, 2],
              meh: {
                what: 2
              }
            }, '=', true, true) === "str='2' what='ok' loop='[1,2]' meh='{&quot;what&quot;:2}'");
            var objCopy = {
              test: 3
            };
            assert(Obj.copy(objCopy) !== objCopy);
            assert(Obj.isEqual(Obj["new"](), {}));
            assert(Obj.length(Obj.replace(objCopy, {
              test2: 4
            })) === 2);
            assert(Obj.isEmpty({}));
            assert(Obj.isEmpty([]));
            assert(Obj.isEmpty(function () {}));
            assert(!Obj.isEmpty({
              ok: 2
            }));
            assert(!Obj.isEmpty([2]));
            assert(!Obj.isEmpty(null));
            assert(!Obj.isEmpty(false));
            assert(!Obj.isEmpty(undefined));
            assert(Obj.isEmpty(function () {
              return 2;
            }));
            assert(Obj.isNotEmpty({
              ok: 2
            }));
            assert(Obj.isNotEmpty([2]));
            assert(!Obj.isNotEmpty(2));
            assert(!Obj.isNotEmpty(null));
            assert(Obj.length({
              test: 2,
              ok: 3
            }) === 2);
            var objKey;
            var objVal;
            assert(Obj.each({
              test: 'ok',
              what: 3
            }, function (value, key) {
              assert(value !== this);
              objKey = key;
              objVal = value;
            }));
            assert(objKey === 'what');
            assert(objVal === 3);
            assert(Obj.each({
              test: 'ok',
              what: 3
            }, function (value, key) {
              objKey = key;
              objVal = value;
              return false;
            }) === false);
            assert(objKey === 'test');
            assert(objVal === 'ok');
            var variVal;
            assert(Obj.each({
              ok: 2
            }, function (value) {
              variVal = value;
            }));
            assert(variVal === 2);
            var length = 0; // pojo

            assert(Pojo.is({}));
            assert(!Pojo.is([]));
            assert(!Pojo.is(_arguments));
            assert(!Pojo.is(function () {}));
            assert(!Pojo.is('test'));
            assert(!Pojo.is(null));
            assert(!Pojo.is(undefined));
            var replace = {
              test: 2,
              ok: {
                what: true
              }
            };
            var pojoGetSet = {};
            assert(Pojo.isEqual(Pojo.replaceRecursive({
              test: 2,
              ok: {
                what: true
              }
            }, null, {
              ok: {
                james: false
              }
            }), {
              test: 2,
              ok: {
                what: true,
                james: false
              }
            }));
            assert(Pojo.isEqual(Pojo.replaceRecursive({
              test: 2
            }, {
              test: {
                ok: 3
              }
            }, {
              test: {
                ok: {
                  ok: 1
                },
                ok2: [1, 2, 3]
              }
            }), {
              test: {
                ok: {
                  ok: 1
                },
                ok2: [1, 2, 3]
              }
            }));
            assert(Pojo.climb(['test', 'what'], {
              test: {
                what: 'LOL'
              }
            }) === 'LOL');
            assert(Pojo.climb(['test', 'whatz'], {
              test: {
                what: 'LOL'
              }
            }) === undefined);
            assert(Pojo.climb('test/what', {
              test: {
                what: 'LOL'
              }
            }) === 'LOL');
            assert(Pojo.isEqual(Pojo.replace(replace, {
              ok: {
                james: false
              }
            }), {
              test: 2,
              ok: {
                james: false
              }
            }));
            assert(Pojo.isEqual(replace, {
              test: 2,
              ok: {
                what: true
              }
            }));
            assert(Pojo.set('meh', 2, pojoGetSet) !== pojoGetSet);
            assert(Pojo.isEqual(Pojo.set('meh', 2, pojoGetSet), {
              meh: 2
            }));
            assert(Pojo.setRef('meh', 2, pojoGetSet) === pojoGetSet);
            assert(Pojo.get('meh', pojoGetSet) === 2);
            assert(Pojo.isEqual(Pojo.gets(['meh', 'ok', 'what'], {
              ok: 3,
              meh: 4,
              whatz: 'LOL'
            }), {
              meh: 4,
              ok: 3,
              what: undefined
            }));
            assert(Pojo.isEmpty(Pojo.unsets(['meh'], pojoGetSet)));
            assert(Pojo.unset('meh', pojoGetSet) !== pojoGetSet);
            assert(Pojo.isEqual(Pojo.unset('meh', pojoGetSet), {}));
            assert(Pojo.unsetRef('meh', pojoGetSet) === pojoGetSet);
            pojoGetSet.meh = 2;
            assert(Pojo.unsetsRef(['meh', 'test'], pojoGetSet) === pojoGetSet);
            assert(Pojo.isEmpty(pojoGetSet));
            assert(Pojo.get('meh', pojoGetSet) === undefined);
            assert(Pojo.isEqual(Pojo.copy(replace), replace));
            assert(Pojo.copy(replace) !== replace);
            assert(Pojo.isEmpty({}));
            assert(!Pojo.isEmpty([]));
            assert(!Pojo.isNotEmpty({}));
            assert(Pojo.isNotEmpty({
              test: 2
            }));
            assert(!Pojo.isEqual([], []));
            assert(Pojo.isEqual({
              ok: 2
            }, {
              ok: 2
            }));
            assert(!Pojo.isEqual({
              ok: 2
            }, {
              ok: 3
            }));
            assert(Pojo.isKey(2));
            assert(Pojo.keyExists('test', {
              test: 2
            }));
            assert(!Pojo.keyExists('test', {
              testz: 2
            }));
            assert(Pojo.valueFirst(replace) === 2);
            assert(Pojo.valueLast(replace) === replace.ok);
            assert(Pojo.get('what', pojoGetSet) === undefined);
            var pojoMapFilter = {
              test: 3,
              ok: 'what',
              james: {
                lol: true
              },
              "final": null,
              undef: undefined
            };
            assert(Pojo.length(Pojo.filter(pojoMapFilter, function (value) {
              return Pojo.is(value) ? false : true;
            })) === 4);
            assert(Pojo.length(pojoMapFilter) === 5);
            assert(Pojo.map(pojoMapFilter, function (value) {
              return Pojo.is(value) ? false : true;
            })['final'] === true);
            assert(Pojo.isEqual(Pojo.find(pojoMapFilter, function (value, key) {
              return Pojo.is(value);
            }), {
              lol: true
            }));
            assert(Arr.length(Pojo.toArray(pojoMapFilter)) === 5);
            assert(Pojo.findKey({
              james: 3,
              test: '4'
            }, function (value, index) {
              return Str.is(value);
            }) === 'test');
            assert(Pojo.isEqual(Pojo.accumulate({}, {
              james: 3,
              test: '4'
            }, function (value, index) {
              return index;
            }), {
              james: 'james',
              test: 'test'
            }));
            assert(!Pojo.some({
              james: 3,
              james2: 'ok'
            }, function (value) {
              return Arr.is(value);
            }));
            assert(Pojo.some({
              james: 3,
              james2: 'ok'
            }, function (value) {
              return Str.is(value);
            }));
            assert(!Pojo.every({
              james: 3,
              james2: 'ok'
            }, function (value) {
              return Str.is(value);
            }));
            assert(Pojo.every({
              james: 3,
              james2: 4
            }, function (value, key) {
              return Integer.is(value) && Str.is(key);
            }));
            assert(Pojo.reduce("", {
              james: 'test',
              ok: 'OK'
            }, function (r, value, key) {
              return r += value + key;
            }) === 'testjamesOKok'); // scalar

            assert(Scalar.is('test'));
            assert(Scalar.is(2));
            assert(Scalar.is(true));
            assert(Scalar.is(false));
            assert(!Scalar.is(null));
            assert(Scalar.isNotBool(1));
            assert(!Scalar.isNotBool(false));
            assert(!Scalar.isEmpty(1));
            assert(Scalar.isEmpty(false));
            assert(Scalar.isNotEmpty(1));
            assert(!Scalar.isNotEmpty(false));
            assert(Scalar.typecheck('') === '');
            assert(Scalar.typecheck(true, true) === true);
            assert(Scalar.typecheck(false) === false);
            assert(Scalar.typecheck(null, false) === null);
            assert(Scalar.cast('2.4', 'int') === 2);
            assert(Scalar.cast('1', 'bool') === true);
            assert(Scalar.cast('2.4', 'num') === 2.4);
            assert(Scalar.cast('5d', 'int') === 5);
            assert(Scalar.cast('5d', 'bool') === null);
            assert(Scalar.toBool(1) === true);
            assert(Scalar.toBool('true') === true);
            assert(Scalar.toBool(0) === false);
            assert(Scalar.toBool(false) === false); // str

            assert(Str.is('WHAT'));
            assert(Str.is(''));
            assert(!Str.is([]));
            assert(!Str.is(null));
            assert(Str.are(['test', 'ok']));
            assert(Arr.length(Str.typechecks(['test', 'ok', null], false)) === 3);
            assert(Str.isStart('a', 'as'));
            assert(!Str.isStart(3, '3s'));
            assert(Str.isEnd('s', 'as'));
            assert(!Str.isEnd('a', 'as'));
            assert(Str.isEqual('test', 'test'));
            assert(Str.isEqual('2', 2));
            assert(Str.isEqual(true, 'true'));
            assert(Str.isEqual(undefined, ''));
            assert(Str.isEqual(undefined, null));
            assert(Str["in"]('a', 'as') === true);
            assert(Str["in"]('é', 'aÉè') === false);
            assert(Str.icompare('E', 'e'));
            assert(Str.icompare('e', 'e'));
            assert(Str.icompare('éÈ', 'Éè'));
            assert(!Str.icompare('2', 2));
            assert(Str.cast(2) === '2');
            assert(Str.cast(false) === 'false');
            assert(Str.cast(true) === 'true');
            assert(Str.cast(null) === '');
            assert(Str.cast(undefined) === '');
            assert(Str.pos('a', 'as') === 0);
            assert(Str.pos('é', 'aéè') === 1);
            assert(Str.pos('é', 'aÉè') === null);
            assert(Str.lower('AE') === 'ae');
            assert(Str.lowerFirst('as') === 'as');
            assert(Str.lowerFirst('As') === 'as');
            assert(Str.lowerFirst('És') === 'és');
            assert(Str.upper('ae') === 'AE');
            assert(Str.upperFirst('as') === 'As');
            assert(Str.upperFirst('As') === 'As');
            assert(Str.trim(' As ') === 'As');
            assert(Str.quote('what', true) === '"what"');
            assert(Str.quote('what') === "'what'");
            assert(Str.quote("L'article\"de", false, true) === "'L&#39;article&quot;de'");
            assert(Str.sub(2, true, 'what') === 'at');
            assert(Str.sub(2, true, 'éèà') === 'à');
            assert(Str.excerpt(3, 'okkkkk', '...') === 'okk...');
            assert(Str.excerpt(12, 'okkkkk', '...') === 'okkkkk');
            assert(Obj.isEqual(Str.explode('-', 'la-vie-ok'), ['la', 'vie', 'ok']));
            assert(Str.explodeIndex(2, '-', 'la-vie-ok') === 'ok');
            assert(Str.explodeIndex('2', '-', 'la-vie-ok') === undefined);
            assert(Str.explodeIndex(3, '-', 'la-vie-ok') === undefined);
            assert(!Str.isEmpty('WHAT'));
            assert(Str.isEmpty(''));
            assert(!Str.isEmpty('as'));
            assert(isEmpty(''));
            assert(!Str.isNotEmpty(''));
            assert(Str.isNotEmpty('as'));
            assert(Str.typecheck('ok') === 'ok');
            assert(Str.typecheck('') === '');
            assert(Str.typecheck(null, false) === null);
            assert(Str.typecheck(undefined, false) === undefined);
            assert(Str.typecheck('', false) === '');
            var val = null;
            assert(Str.each('abcde', function (value) {
              assert(value !== this);
              val = value;
            }));
            assert(Arr.isEqual(Str.keys('whaé'), ['0', '1', '2', '3']));
            assert(Arr.isEqual(Str.values('whaé'), ['w', 'h', 'a', 'é']));
            assert(Str.length('whaé') === 4);
            assert(val === 'e');
            assert(Str.each('abcde', function (value) {
              val = value;
              return value === 'c' ? false : true;
            }) === false);
            assert(val === 'c');
            var strVal = 'wéè';
            assert(Str.get(1, strVal) === 'é');
            assert(Str.valueFirst('éèè') === 'é');
            assert(Str.find('john', function (ele) {
              return ele != 'j';
            }) === 'o');
            assert(Arr.length(Str.toArray('what')) === 4);
            assert(Str.removeAllWhitespace(' ads das sda ') === 'adsdassda');
            assert(Str.fromCamelCase('-', 'data') === 'data');
            assert(Str.fromCamelCase('-', 'marginTopRight') === 'margin-top-right');
            assert(Str.fromCamelCase('|', 'marginTopRight') === 'margin|top|right');
            assert(Str.toCamelCase('-', 'margin-top-right') === 'marginTopRight');
            assert(Str.toCamelCase(' ', ' margin top right ') === 'marginTopRight');
            assert(Str.toCamelCase('_', ' margin top right ') === 'margintopright');
            assert(Str.toCamelCase('-', '-margin--top--right-') === 'marginTopRight');
            assert(Str.every("aaaa", function (value, key) {
              return value === 'a' && Num.is(key);
            }));
            assert(Str.reduce("", "aaaa", function (r, value, key) {
              return r += value + key;
            }) === 'a0a1a2a3');
            assert(Str.toNum("30MB") === 30);
            assert(Str.toNum("1,4") === 1);
            assert(Str.toNum("1.4") === 1.4);
            assert(Str.toInt("1,4") === 1);
            assert(Str.slug("OK LA VIE EST BONNE") === 'ok-la-vie-est-bonne');
            assert(Str.slug("OK-LAé À@#?& VIE EST BONNE") === 'ok-la-vie-est-bonne');
            assert(Str.keepNumber("(515) 509-1502 #poste 12345") === '515509150212345');
            assert(Str.replace({
              '[test]': 'OK',
              what: 'well'
            }, "tout va [test] what WHAT!") === "tout va OK well WHAT!"); // validate

            assert(Validate.isNumericDash("213-123"));
            assert(Validate.isNumericDash("213123"));
            assert(!Validate.isNumericDash("213_123"));
            assert(Validate.isEmail("test@test.com"));
            assert(!Validate.isEmail("testtest.com"));
            assert(Validate.isEmail('bla@bla.zzzzzzz'));
            assert(Validate.isRegexStr("bla"));
            assert(Validate.isRegexStr(new RegExp("/asd/")));
            assert(Validate.regex("212", "^[0-9\-]+$"));
            assert(!Validate.trigger('test', true, "^[0-9\-]+$"));
            assert(!Validate.trigger('abc-de', true, "^[0-9\-]+$"));
            assert(!Validate.trigger('', 1, "^[0-9\-]+$"));
            assert(Validate.trigger('', false, "^[0-9\-]+$"));
            assert(Validate.required('test', true));
            assert(!Validate.required('', true));
            assert(Validate.required('test', 1));
            assert(Validate.required('test', 0));
            assert(!Validate.required('', 1));
            assert(Validate.required('', 0));
            assert(Validate.pattern('', "^[0-9\-]+$"));
            assert(Validate.pattern('01-2', "^[0-9\-]+$"));
            assert(!Validate.pattern('abc', "^[0-9\-]+$")); // vari

            assert(Vari.is(null));
            assert(!Vari.is(undefined));
            assert(Vari.isEmpty(null));
            assert(Vari.isEmpty({}));
            assert(Vari.isEmpty(false));
            assert(!Vari.isEmpty(true));
            assert(Vari.isEmpty(''));
            assert(Vari.isEmpty([]));
            assert(!Vari.isEmpty('0'));
            assert(Vari.isEmpty(0));
            assert(!Vari.isEmpty(1));
            assert(Vari.isEmpty(undefined));
            assert(Vari.isNotEmpty(2));
            assert(!Vari.isNotEmpty(null));
            assert(!Vari.isReallyEmpty(0));
            assert(Vari.isNotReallyEmpty(0));
            assert(Vari.isNull(null));
            assert(!Vari.isNull(undefined));
            assert(!Vari.isUndefined(null));
            assert(Vari.isUndefined(undefined));
            assert(Vari.isEqual('test', 'test'));
            assert(!Vari.isEqual('test', 'testz'));
            assert(Vari.isEqual(3, 3));
            assert(!Vari.isEqual(3, 4));
            assert(Vari.isEqual(null, null));
            assert(!Vari.isEqual(null, undefined));
            assert(Vari.isEqualStrict(null, null));
            assert(Vari.isEqualStrict('test', 'test'));
            assert(!Vari.isEqualStrict([], []));
            assert(Vari.type('test') === 'string');
            assert(Vari.type({}) === 'object');
            assert(Vari.type([]) === 'object');
            assert(Vari.type(function () {}) === 'object');
            assert(Vari.type(2) === 'number');
            assert(Vari.type(2.3) === 'number');
            assert(Vari.type(null) === 'null');
            assert(Vari.type(true) === 'boolean');
            assert(Vari.type(undefined) === 'undefined');
          })();
        } catch (e) {
          r = false;
          logError(e);
        }

        return r;
      }; // export

      /***/

    },

    /***/
    "./index.js":
    /*!******************!*\
      !*** ./index.js ***!
      \******************/

    /***/
    function indexJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Arr": function Arr() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Arr
          );
        },

        /* harmony export */
        "ArrLike": function ArrLike() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.ArrLike
          );
        },

        /* harmony export */
        "Bool": function Bool() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Bool
          );
        },

        /* harmony export */
        "Browser": function Browser() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Browser
          );
        },

        /* harmony export */
        "Component": function Component() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Component
          );
        },

        /* harmony export */
        "Datetime": function Datetime() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Datetime
          );
        },

        /* harmony export */
        "Debug": function Debug() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Debug
          );
        },

        /* harmony export */
        "Doc": function Doc() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Doc
          );
        },

        /* harmony export */
        "Dom": function Dom() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Dom
          );
        },

        /* harmony export */
        "Ele": function Ele() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Ele
          );
        },

        /* harmony export */
        "Env": function Env() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Env
          );
        },

        /* harmony export */
        "Evt": function Evt() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Evt
          );
        },

        /* harmony export */
        "Factory": function Factory() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Factory
          );
        },

        /* harmony export */
        "Func": function Func() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Func
          );
        },

        /* harmony export */
        "HistoryState": function HistoryState() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.HistoryState
          );
        },

        /* harmony export */
        "Html": function Html() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Html
          );
        },

        /* harmony export */
        "Integer": function Integer() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Integer
          );
        },

        /* harmony export */
        "Json": function Json() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Json
          );
        },

        /* harmony export */
        "Nav": function Nav() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Nav
          );
        },

        /* harmony export */
        "Nod": function Nod() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Nod
          );
        },

        /* harmony export */
        "Num": function Num() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Num
          );
        },

        /* harmony export */
        "Obj": function Obj() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Obj
          );
        },

        /* harmony export */
        "Pojo": function Pojo() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Pojo
          );
        },

        /* harmony export */
        "Request": function Request() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Request
          );
        },

        /* harmony export */
        "Scalar": function Scalar() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Scalar
          );
        },

        /* harmony export */
        "Shortcut": function Shortcut() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Shortcut
          );
        },

        /* harmony export */
        "Str": function Str() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Str
          );
        },

        /* harmony export */
        "Target": function Target() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Target
          );
        },

        /* harmony export */
        "Test": function Test() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Test
          );
        },

        /* harmony export */
        "TestSuite": function TestSuite() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.TestSuite
          );
        },

        /* harmony export */
        "Tool": function Tool() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Tool
          );
        },

        /* harmony export */
        "Uri": function Uri() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Uri
          );
        },

        /* harmony export */
        "Validate": function Validate() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Validate
          );
        },

        /* harmony export */
        "Vari": function Vari() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Vari
          );
        },

        /* harmony export */
        "Win": function Win() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Win
          );
        },

        /* harmony export */
        "Xhr": function Xhr() {
          return (
            /* reexport safe */
            quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Xhr
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var quidphp_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! quidphp-browser */
      "../browser/index.js");
      /* harmony import */


      var _src_doc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./src/doc.js */
      "./src/doc.js");
      /* harmony import */


      var _src_history_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./src/history.js */
      "./src/history.js");
      /* harmony import */


      var _src_windowUnload_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./src/windowUnload.js */
      "./src/windowUnload.js");
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/navigation/blob/master/LICENSE
       */
      // index
      // entry file for the module
      // import quidphp-browser


      var Component = quidphp_browser__WEBPACK_IMPORTED_MODULE_0__.Component; // simple import
      // component

      Component.Doc = _src_doc_js__WEBPACK_IMPORTED_MODULE_1__["default"];
      Component.History = _src_history_js__WEBPACK_IMPORTED_MODULE_2__["default"];
      Component.WindowUnload = _src_windowUnload_js__WEBPACK_IMPORTED_MODULE_3__["default"]; // export

      /***/
    },

    /***/
    "./src/doc.js":
    /*!********************!*\
      !*** ./src/doc.js ***!
      \********************/

    /***/
    function srcDocJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* export default binding */
            __WEBPACK_DEFAULT_EXPORT__
          );
        }
        /* harmony export */

      });
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/front/blob/master/LICENSE
       */
      // doc
      // root component for a document node
      // export

      /* harmony default export */


      function __WEBPACK_DEFAULT_EXPORT__(option) {
        // document node
        Vari.check(this, document); // option

        var $option = Pojo.replace({
          mountTimeout: 0,
          routeWrap: "> .route-wrap",
          scrollTop: true,
          contentType: 'html'
        }, option); // components

        Component.History.call(this, $option); // handler

        setHdlrs(this, 'doc:', {
          // retourne la node html
          getHtml: function getHtml() {
            return qs(this, 'html', true);
          },
          // retourne la node head
          getHead: function getHead() {
            return qs(this, 'head', true);
          },
          // retourne la node body
          getBody: function getBody() {
            return qs(this, 'body', true);
          },
          // retourne un tableau avec les nodes html et body
          getHtmlBody: function getHtmlBody() {
            return [trigHdlr(this, 'doc:getHtml'), trigHdlr(this, 'doc:getBody')];
          },
          // retourne la node du route wrap
          // seul le contenu dans cette node est remplacé au chargement d'une nouvelle page
          getRouteWrap: function getRouteWrap() {
            var r = trigHdlr(this, 'doc:getBody');
            if ($option.routeWrap) r = qs(r, $option.routeWrap, true);
            return r;
          },
          // getAttr
          // permet d'obtenir un attribut de la balise html
          getAttr: function (_getAttr) {
            function getAttr(_x, _x2) {
              return _getAttr.apply(this, arguments);
            }

            getAttr.toString = function () {
              return _getAttr.toString();
            };

            return getAttr;
          }(function (key, cast) {
            var html = trigHdlr(this, 'doc:getHtml');
            return getAttr(html, key, cast);
          }),
          // setAttr
          // permet de changer un attribut de la balise html
          setAttr: function (_setAttr) {
            function setAttr(_x3, _x4) {
              return _setAttr.apply(this, arguments);
            }

            setAttr.toString = function () {
              return _setAttr.toString();
            };

            return setAttr;
          }(function (key, value) {
            var html = trigHdlr(this, 'doc:getHtml');
            setAttr(html, key, value);
          }),
          // removeAttr
          // permet de retirer un attribut de la balise html
          removeAttr: function removeAttr(key) {
            var html = trigHdlr(this, 'doc:getHtml');
            Ele.removeAttr(html, key);
          },
          // setError
          // permettre de mettre un type d'erreur dans l'attribut
          setError: function setError(value) {
            trigHdlr(this, 'doc:setAttr', 'data-error', value);
          },
          // getTitle
          // retourne le titre courant en string
          getTitle: function getTitle() {
            return this.title;
          },
          // setTitle
          // permet de changer le titre de la page
          setTitle: function setTitle(value) {
            value = Str.is(value) ? value : '';
            var node = qs(this, 'head title');
            document.title = value; // node

            if (node != null) setHtml(node, value);
          },
          // getData
          // retourne le dernier objet de data
          getData: function (_getData) {
            function getData() {
              return _getData.apply(this, arguments);
            }

            getData.toString = function () {
              return _getData.toString();
            };

            return getData;
          }(function () {
            return getData(this, 'data-doc');
          }),
          // met le statut de la balise html à loading
          setStatusLoading: function setStatusLoading() {
            trigHdlr(this, 'doc:setAttr', 'data-status', 'loading');
          },
          // met le statut de la balise html à ready
          setStatusReady: function setStatusReady() {
            trigHdlr(this, 'doc:setAttr', 'data-status', 'ready');
          },
          // désactive le scrollTop lors du prochain chargement de page seulement
          skipNextScrollTop: function skipNextScrollTop() {
            $option.scrollTop = null;
          },
          // lance les évènements pour monter le document dans le bon order
          mount: function mount(initial, isError) {
            trigEvt(this, 'doc:mountImmediate', initial, isError);
            Func.timeout($option.mountTimeout, function () {
              docMount.call(this, initial, isError);
              trigHdlr(this, 'doc:setStatusReady');
            }, this);
          },
          // lance les évènements pour démonter le document dans le bon order
          unmount: function unmount() {
            docUnmount.call(this);
          },
          // permet de faire les bindings common sur une node
          mountNodeCommon: function mountNodeCommon(node) {
            trigEvt(this, 'doc:mountNode', node);
            trigEvt(this, 'doc:mountCommon', node);
          },
          // prépare le document, les attributs de html, le head, les attributs de body
          makeMeta: function makeMeta(htmlAttr, title, meta, bodyAttr, routeWrapAttr) {
            docMetaMake.call(this, htmlAttr, title, meta, bodyAttr, routeWrapAttr);
          },
          // prépare le document à paritr d'un objet doc
          makeMetaFromDoc: function makeMetaFromDoc(doc) {
            Pojo.typecheck(doc);
            docMetaMake.call(this, doc.htmlAttr, doc.title, doc.meta, doc.bodyAttr, doc.routeWrapAttr);
          },
          // crée le document à partir d'un objet doc, passé dans dom.parse
          makeHtml: function makeHtml(doc) {
            return docMakeHtml.call(this, doc);
          },
          // démonte la page courante, crée et monte la nouvelle page html
          makeHtmlMount: function makeHtmlMount(doc, isError) {
            docMakeMount.call(this, 'html', 'doc:makeHtml', doc, isError);
          },
          // crée le document à partir d'un objet json
          makeJson: function makeJson(json) {
            return docMakeJson.call(this, json);
          },
          // démonte la page courante, crée et monte la nouvelle page json
          makeJsonMount: function makeJsonMount(json, isError) {
            docMakeMount.call(this, 'json', 'doc:makeJson', json, isError);
          }
        }); // event

        ael(this, 'doc:initAjax', function () {
          trigHdlr(this, 'doc:setStatusLoading');
        }); // setup

        aelOnce(this, 'component:setup', function () {
          trigHdlr(this, 'doc:mount', true);
        }); // manageScrollTop

        var manageScrollTop = function manageScrollTop() {
          if ($option.scrollTop === true) Win.setScroll(0);
          if ($option.scrollTop == null) $option.scrollTop = true;
        }; // docMakeMount


        var docMakeMount = function docMakeMount(type, handler, parsedData, isError) {
          Str.typecheck(handler, true);
          Pojo.typecheck(parsedData);

          if ($option.contentType === true || $option.contentType === type) {
            trigHdlr(this, 'doc:unmount');
            trigHdlr(this, handler, parsedData);
            setData(this, 'data-doc', parsedData);
            trigHdlr(this, 'doc:mount', false, isError);
            manageScrollTop.call(this);
          } else {
            trigHdlr(this, 'doc:setError', 'content-type');
            trigHdlr(this, 'doc:setStatusReady');
            if (parsedData.body) trigHdlr(this, 'doc:makeHtml', parsedData);
            throw new Error($option.contentType);
          }
        }; // docMakeHtml


        var docMakeHtml = function docMakeHtml(doc) {
          Pojo.typecheck(doc); // routeWrapAttr

          doc.routeWrapAttr = getRouteWrapAttr.call(this, doc.body); // metaMake

          trigHdlr(this, 'doc:makeMetaFromDoc', doc); // routeWrap

          docRouteWrapMake.call(this, doc.body);
        }; // docMakeJson


        var docMakeJson = function docMakeJson(json) {
          Pojo.typecheck(json); // metaMake

          trigHdlr(this, 'doc:makeMetaFromDoc', json.doc); // emit

          trigEvt(this, 'doc:makeJsonResponse', json);
        }; // docMetaMake


        var docMetaMake = function docMetaMake(htmlAttr, title, meta, bodyAttr, routeWrapAttr) {
          var html = trigHdlr(this, 'doc:getHtml');
          var head = trigHdlr(this, 'doc:getHead');
          var body = trigHdlr(this, 'doc:getBody');
          var routeWrap = trigHdlr(this, 'doc:getRouteWrap'); // htmlAttr
          // les attributs de html sont remplacés (les attributs existants ne sont pas effacés)

          if (Pojo.isNotEmpty(htmlAttr)) Ele.setsAttr(html, htmlAttr); // title

          if (!Str.is(title) || !title) title = '?';
          trigHdlr(this, 'doc:setTitle', title); // meta

          if (meta != null) {
            var oldMeta = qsa(head, 'meta');
            Ele.remove(oldMeta);
            if (Str.isNotEmpty(meta)) meta = Dom.parse(meta);
            if (Arr.isNotEmpty(meta)) Ele.prepend(head, meta);
          } // body
          // les attributs de body sont effacés et remplacés


          Ele.emptyAttr(body);
          if (Pojo.isNotEmpty(bodyAttr)) Ele.setsAttr(body, bodyAttr); // routeWrap

          if (routeWrapAttr != null) {
            Ele.emptyAttr(routeWrap);
            Ele.setsAttr(routeWrap, routeWrapAttr);
          }
        }; // getRouteWrapTarget


        var getRouteWrapTarget = function getRouteWrapTarget(contentTarget, onlyRouteWrap) {
          var r = null;

          if (contentTarget != null) {
            var routeWrap = trigHdlr(this, 'doc:getRouteWrap');

            if ($option.routeWrap && routeWrap != null && !Ele.match(routeWrap, "body")) {
              var routeWrapTarget = qs(contentTarget, $option.routeWrap);
              if (routeWrapTarget != null) r = routeWrapTarget;
            }

            if (r == null && onlyRouteWrap !== true) r = contentTarget;
          }

          return r;
        }; // getRouteWrapAttr


        var getRouteWrapAttr = function getRouteWrapAttr(contentTarget) {
          var r = null;
          contentTarget = getRouteWrapTarget.call(this, contentTarget, true);
          if (contentTarget != null) r = Ele.attr(contentTarget);
          return r;
        }; // docRouteWrapMake


        var docRouteWrapMake = function docRouteWrapMake(contentTarget) {
          var routeWrap = trigHdlr(this, 'doc:getRouteWrap');
          contentTarget = getRouteWrapTarget.call(this, contentTarget);
          var contentHtml = '';
          if (contentTarget != null) contentHtml = getHtml(contentTarget);
          setHtml(routeWrap, contentHtml);
        }; // docMount


        var docMount = function docMount(initial, isError) {
          var routeWrap = trigHdlr(this, 'doc:getRouteWrap');
          var body = trigHdlr(this, 'doc:getBody');
          if (body != null && initial === true) trigEvt(this, 'doc:mountInitial', body, isError);

          if (routeWrap != null) {
            trigEvt(this, 'doc:mountCommon', routeWrap, isError);
            trigEvt(this, 'doc:mountPage', routeWrap, isError, initial);

            if (isError !== true) {
              var uri = trigHdlr(this, 'doc:getAttr', "data-uri");
              var group = trigHdlr(this, 'doc:getAttr', "data-group");
              if (Str.isNotEmpty(group)) trigEvt(this, 'group:' + group, routeWrap, uri);
              var route = trigHdlr(this, 'doc:getAttr', "data-route");
              if (Str.isNotEmpty(route)) trigEvt(this, 'route:' + route, routeWrap, uri);
            }

            trigEvt(this, 'doc:mountedPage', routeWrap, isError);
          }
        }; // docUnmount


        var docUnmount = function docUnmount() {
          var body = trigHdlr(this, 'doc:getBody');
          var routeWrap = trigHdlr(this, 'doc:getRouteWrap');

          if (routeWrap != null) {
            trigEvt(this, 'doc:unmountCommon', routeWrap);
            trigEvt(this, 'doc:unmountPage', routeWrap);
            var uri = trigHdlr(this, 'doc:getAttr', "data-uri");
            var group = trigHdlr(this, 'doc:getAttr', "data-group");
            if (Str.isNotEmpty(group)) trigEvt(this, 'group:' + group + ':unmount', routeWrap, uri);
            var route = trigHdlr(this, 'doc:getAttr', "data-route");
            if (Str.isNotEmpty(route)) trigEvt(this, 'route:' + route + ':unmount', routeWrap, uri);
            trigEvt(this, 'doc:unmounted', routeWrap);
          }
        };

        return this;
      }
      /***/

    },

    /***/
    "./src/history.js":
    /*!************************!*\
      !*** ./src/history.js ***!
      \************************/

    /***/
    function srcHistoryJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* export default binding */
            __WEBPACK_DEFAULT_EXPORT__
          );
        }
        /* harmony export */

      });
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/front/blob/master/LICENSE
       */
      // history
      // component managing site navigation with the HistoryAPI
      // export

      /* harmony default export */


      function __WEBPACK_DEFAULT_EXPORT__(option) {
        // document node
        Vari.check(this, document); // option

        var $option = Pojo.replace({
          anchor: "a:not([target='_blank']):not([data-navigation='0']):not([data-modal]):not([href^='mailto:'])",
          form: "form:not([data-navigation='0'])",
          responseUrl: 'QUID-URI',
          timeout: 20000,
          attrTriggered: "data-triggered",
          headerNavigation: 'Quid-Navigation'
        }, option); // component

        Component.WindowUnload.call(window); // variable

        var $history = Win.hasHistoryApi() ? window.history : null;
        var $initial = HistoryState.make(location.href, this.title);
        var $previous = $initial; // handler

        setHdlrs(this, 'history:', {
          // retourne vrai si history api est activé
          hasApi: function hasApi() {
            return $history != null;
          },
          // retourne l'état initial
          getInitialState: function getInitialState() {
            return $initial;
          },
          // retourne l'état précédent
          getPreviousState: function getPreviousState() {
            return $previous;
          },
          // fait une redirection dure vers une nouvelle uri
          redirect: function redirect(uri) {
            location.href = uri;
          },
          // retourne vrai si le chargement de la navigation est présentement active
          isLoading: function isLoading() {
            var r = false;
            var ajax = getData(this, 'doc-ajax');
            if (ajax != null && ajax.readyState < 4) r = true;
            return r;
          },
          // retourne vrai si l'url de l'état est la même que l'url courante
          isCurrentStateUrl: function isCurrentStateUrl(state) {
            var current = trigHdlr(this, 'history:getCurrentState');
            return state.url === current.url;
          },
          // retourne l'état courant
          getCurrentState: function getCurrentState() {
            return HistoryState.make(location.href, this.title);
          },
          // annule et détruit l'objet ajax si existant
          cancelAjax: function cancelAjax() {
            var r = false;

            if (trigHdlr(this, 'history:isLoading') === true) {
              var ajax = getData(this, 'doc-ajax');
              ajax.onreadystatechange = Func.noop();
              ajax.abort();
            }

            Doc.removeData(this, 'doc-ajax');
            return r;
          },
          // replace l'état courant par une nouvelle uri
          // le premier argument peut être une uri ou un objet state
          // retourne null ou le nouveau state
          replaceState: function replaceState(uriState, title) {
            var r = null;
            uriState = prepareState(uriState, title);

            if ($history != null && uriState != null) {
              $history.replaceState(uriState, uriState.title, uriState.url);
              r = uriState;
            }

            return r;
          },
          // ajoute un élément à l'historique
          // le premier argument peut être une uri ou un objet state
          // retourne null ou le nouveau state
          pushState: function pushState(uriState, title) {
            var r = null;
            uriState = prepareState(uriState, title);

            if ($history != null && uriState != null && !trigHdlr(this, 'history:isCurrentStateUrl', uriState)) {
              $history.pushState(uriState, uriState.title, uriState.url);
              r = uriState;
            }

            return r;
          },
          // permet de faire un replaceState avec un nouveau hash
          // retourne null ou le nouveau state
          replaceHash: function replaceHash(value, title) {
            Str.typecheck(value);
            value = Uri.makeHash(value, true);
            return trigHdlr(this, 'history:replaceState', value, title);
          },
          // permet de faire un pushState avec un nouveau hash
          // retourne null ou le nouveau state, si null va faire le changement via window.location
          pushHash: function pushHash(value, title) {
            Str.typecheck(value);
            value = Uri.makeHash(value, true);
            return trigHdlr(this, 'history:pushState', value, title);
          },
          // gère une nouvelle entrée à l'historique à partir d'un event
          event: function event(srcEvent) {
            return historyEvent.call(this, srcEvent);
          },
          // gère une nouvelle entrée à l'historique à partir d'une node
          // possible de fournir un event ou un string type en deuxième argument
          node: function node(_node, eventOrType) {
            return historyNode.call(this, _node, eventOrType);
          },
          // gère une nouvelle entrée à l'historique à partir d'un href
          // possible de soumettre une node ou un event en deuxième argument
          href: function href(_href, nodeOrEvent) {
            return historyHref.call(this, _href, nodeOrEvent);
          }
        }); // setup
        // setup seulement s'il y a un historique

        aelOnce(this, 'component:setup', function () {
          if ($history) {
            $history.scrollRestoration = 'manual';
            bindDocument.call(this);
            bindWindow.call(this);
          }
        }); // prepareState
        // utilisé par push et replaceHash
        // utilse no emptyHash (donc si finit par # retire)

        var prepareState = function prepareState(uriState, title) {
          var r = null;

          if (Pojo.is(uriState)) {
            title = uriState.title || title;
            uriState = uriState.url;
          }

          if (Str.is(uriState)) r = HistoryState.make(uriState, title, true);
          return r;
        }; // bindDocument
        // applique les bindings permanents sur le document, via delegate


        var bindDocument = function bindDocument() {
          // anchor click
          aelDelegate(this, 'click', $option.anchor, function (event) {
            var r = true;
            trigHdlr(document, 'history:event', event);
            if (event.defaultPrevented === true) r = false;
            return r;
          }); // submit

          aelDelegate(this, 'submit', $option.form, function (event) {
            var r = true;
            trigHdlr(document, 'history:event', event);
            if (event.defaultPrevented === true) r = false;
            return r;
          });
        }; // bindWindow
        // applique les bindings permanents sur la window, pour le popstate


        var bindWindow = function bindWindow() {
          ael(window, 'popstate', function (event) {
            var state = event.state || trigHdlr(document, 'history:getCurrentState');
            var isValid = HistoryState.isChangeValid(state, $previous, true);

            if (isValid === true) {
              if (trigHdlr(this, 'windowUnload:isValid') === true) makeAjax.call(document, state, event);else trigHdlr(this, 'history:pushState', $previous);
            } // hash change
            else if (Uri.isSamePathQuery(state.url, $previous.url) && (Uri.hasFragment(state.url) || Uri.hasFragment($previous.url))) {
              $previous = state;
              trigEvt(window, 'hashChange:history', true);
            }
          });
        }; // isValidEvent
        // retourne vrai si l'événement est valide pour l'historique


        var isValidEvent = function isValidEvent(srcEvent) {
          var r = false;

          if (srcEvent instanceof Event) {
            var type = srcEvent.type;
            var node = Evt.getTriggerTarget(srcEvent);

            if (node != null) {
              if (type === 'click') r = !(srcEvent.which > 1 || srcEvent.metaKey || srcEvent.ctrlKey || srcEvent.shiftKey || srcEvent.altKey);else r = true;
            }
          }

          return r;
        }; // isValidNode
        // retourne vrai si la node est valide pour l'historique


        var isValidNode = function isValidNode(node, type) {
          var r = false;
          var href = Ele.getUri(node);

          if (Str.isNotEmpty(href)) {
            if (type === 'submit') r = Ele.match(node, $option.form);else r = Ele.match(node, $option.anchor);
          }

          return r;
        }; // historyEvent
        // gère une nouvelle entrée à l'historique à partir d'un event


        var historyEvent = function historyEvent(srcEvent) {
          var r = false;

          if (isValidEvent.call(this, srcEvent)) {
            var node = Evt.getTriggerTarget(srcEvent);
            r = historyNode.call(this, node, srcEvent);
          }

          return r;
        }; // historyNode
        // gère une nouvelle entrée à l'historique à partir d'une node
        // event type peut être un event, ou un type, par défaut utilise le type click


        var historyNode = function historyNode(node, eventOrType) {
          var r = false;
          var nodeOrEvent = node;
          var type = Ele.isTag(node, 'form') ? 'submit' : 'click';

          if (eventOrType instanceof Event) {
            nodeOrEvent = eventOrType;
            type = event.type;
          } else if (Str.isNotEmpty(eventOrType)) type = eventOrType;

          if (isValidNode.call(this, node, type)) {
            var href = Ele.getUri(node);
            r = historyHref.call(this, href, nodeOrEvent);
          }

          return r;
        }; // historyHref
        // gère une nouvelle entrée à l'historique à partir d'un href avec possiblement un event
        // le deuxième argument peut être une node ou un event


        var historyHref = function historyHref(href, nodeOrEvent) {
          var r = false;
          var srcEvent = nodeOrEvent instanceof Event ? nodeOrEvent : null;

          if (trigHdlr(this, 'history:isLoading') === false) {
            if (Uri.isExternal(href)) trigHdlr(document, 'history:redirect', href);else if (Uri.isInternal(href)) {
              var htmlNavigation = trigHdlr(document, 'doc:getAttr', 'data-navigation', 'int');
              var current = trigHdlr(this, 'history:getCurrentState');
              var state = HistoryState.make(href);
              var isValid = HistoryState.isChangeValid(state, current);
              var isHashChange = Uri.isHashChange(state.url, current.url);

              if (isValid === true) {
                if (trigHdlr(window, 'windowUnload:isValid') === true) {
                  if (htmlNavigation === 0) trigHdlr(document, 'history:redirect', href);else r = makeAjax.call(this, state, nodeOrEvent) != null;
                } else r = true;
              } // hash change
              else if (isHashChange === true) {
                r = true;
                trigHdlr(this, 'history:pushState', state);
                $previous = state;
                trigEvt(window, 'hashChange:history');
              }

              if (r === true) {
                if ($option.attrTriggered && isHashChange === false) {
                  var targetsTriggered = getTargetsTriggered.call(this, nodeOrEvent);
                  if (targetsTriggered != null) toggleAttr(targetsTriggered, $option.attrTriggered, true);
                }

                if (srcEvent != null) Evt.preventStop(srcEvent);
              }
            }
          } else if (srcEvent != null) Evt.preventStop(srcEvent);

          return r;
        }; // getTargetsTriggered
        // retourne un tableau avec les targets triggered à partir d'une node ou un event


        var getTargetsTriggered = function getTargetsTriggered(nodeOrEvent) {
          var r = null;

          if (nodeOrEvent != null) {
            var node = Ele.is(nodeOrEvent) ? nodeOrEvent : Evt.getTriggerTarget(nodeOrEvent);
            var tag = Ele.tag(node);

            if (tag != null) {
              if (tag === 'form') r = trigHdlr(node, 'form:getClickedSubmits');else r = [node];
            }
          }

          return r;
        }; // makeHistoryType
        // retourne le type d'historique, met à jour l'objet config si c'est form
        // le deuxième argument peut être une node ou un event


        var makeHistoryType = function makeHistoryType(config, nodeOrEvent) {
          var r = 'push';

          if (nodeOrEvent != null) {
            if (nodeOrEvent instanceof Event && nodeOrEvent.type === 'popstate') r = 'popstate';else {
              var node = Ele.is(nodeOrEvent) ? nodeOrEvent : Evt.getTriggerTarget(nodeOrEvent);
              var tag = Ele.tag(node);

              if (tag === 'form') {
                Xhr.configFromNode(node, config);
                if (trigHdlr(node, 'form:hasFiles')) config.timeout = 0;
                r = 'form';
              }
            }
          }

          return r;
        }; // makeAjax
        // crée et retourne l'objet ajax


        var makeAjax = function makeAjax(state, nodeOrEvent) {
          var r = null;

          if (HistoryState.is(state)) {
            trigEvt(this, 'doc:initAjax');
            var config = {
              url: state.url,
              timeout: $option.timeout,
              before: function before(xhr) {
                setAjaxHeaders.call(this, xhr);
              },
              progress: function progress(percent, event, xhr) {
                trigEvt(document, 'doc:ajaxProgress', percent, event);
              },
              success: function success(xhr) {
                afterAjax.call(document, type, state, xhr, false);
              },
              error: function error(xhr) {
                afterAjax.call(document, type, state, xhr, true);
              }
            };
            var type = makeHistoryType(config, nodeOrEvent);
            r = Xhr.trigger(config);
            trigHdlr(this, 'history:cancelAjax');
            if (r != null) setData(this, 'doc-ajax', r);
          }

          return r;
        }; // setAjaxHeaders
        // permet d'ajouter un header d'en-tête


        var setAjaxHeaders = function setAjaxHeaders(xhr) {
          if ($option.headerNavigation) xhr.setRequestHeader($option.headerNavigation, '1');
        }; // afterAjax
        // callback après le ajax


        var afterAjax = function afterAjax(type, state, xhr, isError) {
          if (Str.isNotEmpty(type) && HistoryState.is(state) && Obj.is(xhr)) {
            var data = xhr.responseText || '';
            var contentType = xhr.getResponseHeader('content-type');
            var isHtml = Str.isStart('text/html', contentType);
            var isJson = Str.isStart('text/json', contentType);
            var parsedData = {};
            if (isHtml === true) parsedData = Dom.doc(data);else if (isJson === true) parsedData = Json.decode(data);
            var title = parsedData.title || '?';
            var current = trigHdlr(this, 'history:getCurrentState');
            var currentUri = Str.isNotEmpty($option.responseUrl) ? xhr.getResponseHeader($option.responseUrl) : null;

            if (type === 'push' || type === 'form') {
              state = HistoryState.make(state.url, title);

              if (state.url !== current.url) {
                if (type === 'push' || !Uri.isSamePathQuery(current.url, currentUri)) trigHdlr(this, 'history:pushState', state);
              }
            }

            if (Str.is(currentUri) && state.url !== currentUri) {
              if (!Uri.isSamePathQuery(state.url, currentUri)) {
                var replaceUri = Uri.relative(currentUri, true);
                state = trigHdlr(this, 'history:replaceState', replaceUri, state.title);
              }
            }

            if (isHtml === true) afterAjaxHtml.call(this, parsedData, isError);else if (isJson === true) afterAjaxJson.call(this, parsedData, isError);
            $previous = state;
          }
        }; // afterAjaxHtml


        var afterAjaxHtml = function afterAjaxHtml(doc, isError) {
          Pojo.typecheck(doc);
          trigHdlr(this, 'doc:makeHtmlMount', doc, isError);
        }; // afterAjaxJson


        var afterAjaxJson = function afterAjaxJson(json, isError) {
          Pojo.typecheck(json);
          trigHdlr(this, 'doc:makeJsonMount', json, isError);
        };

        return this;
      }
      /***/

    },

    /***/
    "./src/windowUnload.js":
    /*!*****************************!*\
      !*** ./src/windowUnload.js ***!
      \*****************************/

    /***/
    function srcWindowUnloadJs(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* export default binding */
            __WEBPACK_DEFAULT_EXPORT__
          );
        }
        /* harmony export */

      });
      /*
       * This file is part of the QuidPHP package <https://quidphp.com>
       * Author: Pierre-Philippe Emond <emondpph@gmail.com>
       * License: https://github.com/quidphp/front/blob/master/LICENSE
       */
      // windowUnload
      // component to manage the unload notification with the window object
      // export

      /* harmony default export */


      function __WEBPACK_DEFAULT_EXPORT__(type, timeout) {
        // une node
        Vari.check(this, window); // handler

        setHdlrs(this, 'windowUnload:', {
          isValid: function isValid() {
            var r = false;
            var unload = trigHdlr(this, 'windowUnload:getText');
            if (!Str.isNotEmpty(unload) || confirm(unload)) r = true;
            return r;
          },
          addNode: function addNode(node) {
            node = Ele.toArray(node, false);
            var nodes = trigHdlr(this, 'windowUnload:getNodes');
            Arr.accumulate(nodes, node, function (ele) {
              return ele;
            });
          },
          removeNode: function removeNode(node) {
            node = Ele.toArray(node, false);
            var nodes = trigHdlr(this, 'windowUnload:getNodes');
            Arr.each(node, function (ele) {
              Arr.spliceValue(ele, nodes);
            });
          },
          getNodes: function getNodes(node) {
            return Win.getOrSetData(this, 'window-unload-nodes', []);
          },
          getText: function getText() {
            var r = null;
            var nodes = trigHdlr(this, 'windowUnload:getNodes');
            Arr.each(nodes, function (ele) {
              r = trigHdlr(ele, 'windowUnload:getText');
              if (Str.isNotEmpty(r)) return false;
            });
            return r;
          }
        }); // event

        ael(this, 'beforeunload', function (event) {
          var r = undefined;
          event = event || window.event;
          var text = trigHdlr(this, 'windowUnload:getText');

          if (Str.isNotEmpty(text)) {
            r = text;
            event.returnValue = r;
          }

          return r;
        });
        ael(this, 'unload', function () {
          trigHdlr(document, 'doc:unmount');
        });
        return this;
      }
      /***/

    }
    /******/

  };
  /************************************************************************/

  /******/
  // The module cache

  /******/

  var __webpack_module_cache__ = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/
    // Check if module is in cache

    /******/
    var cachedModule = __webpack_module_cache__[moduleId];
    /******/

    if (cachedModule !== undefined) {
      /******/
      return cachedModule.exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = __webpack_module_cache__[moduleId] = {
      /******/
      // no module.id needed

      /******/
      // no module.loaded needed

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/

    /******/
    // Return the exports of the module

    /******/


    return module.exports;
    /******/
  }
  /******/

  /************************************************************************/

  /******/

  /* webpack/runtime/define property getters */

  /******/


  (function () {
    /******/
    // define getter functions for harmony exports

    /******/
    __webpack_require__.d = function (exports, definition) {
      /******/
      for (var key in definition) {
        /******/
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/

      }
      /******/

    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/hasOwnProperty shorthand */

  /******/


  (function () {
    /******/
    __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/make namespace object */

  /******/


  (function () {
    /******/
    // define __esModule on exports

    /******/
    __webpack_require__.r = function (exports) {
      /******/
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/


      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/

  })();
  /******/

  /************************************************************************/


  var __webpack_exports__ = {}; // This entry need to be wrapped in an IIFE because it need to be in strict mode.

  (function () {
    "use strict";
    /*!****************************!*\
      !*** ./test/navigation.js ***!
      \****************************/

    __webpack_require__.r(__webpack_exports__);
    /* harmony export */


    __webpack_require__.d(__webpack_exports__, {
      /* harmony export */
      "Arr": function Arr() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr
        );
      },

      /* harmony export */
      "ArrLike": function ArrLike() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike
        );
      },

      /* harmony export */
      "Bool": function Bool() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Bool
        );
      },

      /* harmony export */
      "Browser": function Browser() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Browser
        );
      },

      /* harmony export */
      "Component": function Component() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Component
        );
      },

      /* harmony export */
      "Datetime": function Datetime() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Datetime
        );
      },

      /* harmony export */
      "Debug": function Debug() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Debug
        );
      },

      /* harmony export */
      "Doc": function Doc() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc
        );
      },

      /* harmony export */
      "Dom": function Dom() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Dom
        );
      },

      /* harmony export */
      "Ele": function Ele() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele
        );
      },

      /* harmony export */
      "Env": function Env() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Env
        );
      },

      /* harmony export */
      "Evt": function Evt() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Evt
        );
      },

      /* harmony export */
      "Factory": function Factory() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Factory
        );
      },

      /* harmony export */
      "Func": function Func() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Func
        );
      },

      /* harmony export */
      "HistoryState": function HistoryState() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.HistoryState
        );
      },

      /* harmony export */
      "Html": function Html() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Html
        );
      },

      /* harmony export */
      "Integer": function Integer() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer
        );
      },

      /* harmony export */
      "Json": function Json() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Json
        );
      },

      /* harmony export */
      "Nav": function Nav() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Nav
        );
      },

      /* harmony export */
      "Nod": function Nod() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod
        );
      },

      /* harmony export */
      "Num": function Num() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Num
        );
      },

      /* harmony export */
      "Obj": function Obj() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Obj
        );
      },

      /* harmony export */
      "Pojo": function Pojo() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo
        );
      },

      /* harmony export */
      "Request": function Request() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Request
        );
      },

      /* harmony export */
      "Scalar": function Scalar() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar
        );
      },

      /* harmony export */
      "Shortcut": function Shortcut() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Shortcut
        );
      },

      /* harmony export */
      "Str": function Str() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Str
        );
      },

      /* harmony export */
      "Target": function Target() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Target
        );
      },

      /* harmony export */
      "Test": function Test() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Test
        );
      },

      /* harmony export */
      "TestSuite": function TestSuite() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.TestSuite
        );
      },

      /* harmony export */
      "Tool": function Tool() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Tool
        );
      },

      /* harmony export */
      "Uri": function Uri() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri
        );
      },

      /* harmony export */
      "Validate": function Validate() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Validate
        );
      },

      /* harmony export */
      "Vari": function Vari() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Vari
        );
      },

      /* harmony export */
      "Win": function Win() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Win
        );
      },

      /* harmony export */
      "Xhr": function Xhr() {
        return (
          /* reexport safe */
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Xhr
        );
      }
      /* harmony export */

    });
    /* harmony import */


    var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../index.js */
    "./index.js");
    /* harmony import */


    var quidphp_browser_test_browser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! quidphp-browser/test/browser.js */
    "../browser/test/browser.js");
    /*
     * This file is part of the QuidPHP package <https://quidphp.com>
     * Author: Pierre-Philippe Emond <emondpph@gmail.com>
     * License: https://github.com/quidphp/browser/blob/master/LICENSE
     */
    // navigation
    // script to test the navigation module
    // import


    var Env = _index_js__WEBPACK_IMPORTED_MODULE_0__.Env,
        Shortcut = _index_js__WEBPACK_IMPORTED_MODULE_0__.Shortcut;
    var d = Shortcut.d,
        assert = Shortcut.assert,
        logError = Shortcut.logError,
        setData = Shortcut.setData; // browser

    quidphp_browser_test_browser_js__WEBPACK_IMPORTED_MODULE_1__.Test.Navigation = function () {
      var r = true;

      try {
        if (Env.isBrowser()) {// prepare
          // doc
          // history
          // windowUnload
        }
      } catch (e) {
        r = false;
        logError(e);
      }

      return r;
    }; // export

  })();

  window.Quid = __webpack_exports__;
  /******/
})();
