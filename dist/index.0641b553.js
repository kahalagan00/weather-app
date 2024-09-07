// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gbXMy":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bNKaB":[function(require,module,exports) {
/**
 * @author Joshmar Morales
 */ var _weatherControllerJs = require("./controllers/weatherController.js");
const init = function() {
    console.log("Start application");
    (0, _weatherControllerJs.setupWeather)();
};
init();

},{"./controllers/weatherController.js":"hXAJ9"}],"hXAJ9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setupWeather", ()=>setupWeather);
var _weatherModelJs = require("../models/weatherModel.js");
var _configJs = require("../utils/config.js");
var _weatherViewJs = require("../views/weatherView.js");
var _weatherViewJsDefault = parcelHelpers.interopDefault(_weatherViewJs);
const controlHeader = async function() {
    try {
        // Use default coordinates if the user doesn't want their location shared
        let lat = (0, _configJs.DEFAULT_LATITUDE);
        let long = (0, _configJs.DEFAULT_LONGITUDE);
        // Grab user's coordinates from the beginning
        if (navigator.geolocation) navigator.geolocation.getCurrentPosition((position)=>{
            lat = position.coords.latitude;
            long = position.coords.longitude;
        });
        const url = `http://api.positionstack.com/v1/reverse?access_key=${(0, _configJs.POSITION_STACK_API_KEY)}&query=${lat},${long}`;
        console.log(url);
        const res = await fetch(url);
        const { data } = await res.json();
        console.log(data[0]);
        const city = data[0].locality ? data[0].locality : data[0].region;
        const country = data[0].country;
        // Loads the forecast for the specified location
        await _weatherModelJs.loadForecast(lat, long, city, country);
        // Renders the new information on the page
        (0, _weatherViewJsDefault.default).render(_weatherModelJs.state);
        if (!res.ok) throw new Error("City does not exist in the world");
    } catch (err) {
        console.error(`${err} \u{1F3AE}`);
    }
};
const controlSearch = async function(city) {
    try {
        if (!city) throw new Error("City is undefined");
        const res = await fetch(`${(0, _configJs.POSITION_STACK_API_URL)}forward?access_key=${(0, _configJs.POSITION_STACK_API_KEY)}&query=${city}'`);
        if (!res.ok) throw new Error("City does not exist in the world");
        const { data } = await res.json();
        console.log(data[0]);
        const lat = data[0].latitude;
        const long = data[0].longitude;
        const country = data[0].country;
        // Loads the forecast for the specified location
        await _weatherModelJs.loadForecast(lat, long, city, country);
        // Renders the new information on the page
        (0, _weatherViewJsDefault.default).update(_weatherModelJs.state);
    } catch (err) {
        console.error(`${err} \u{1F579}\u{FE0F}`);
    }
};
const setupWeather = function() {
    (0, _weatherViewJsDefault.default).addHandlerRender(controlHeader);
    (0, _weatherViewJsDefault.default).addHandlerSearch(controlSearch);
};

},{"../views/weatherView.js":"aihG3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../models/weatherModel.js":"9Pbre","../utils/config.js":"4LaEY"}],"aihG3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class WeatherView {
    _data;
    _headerEl = document.querySelector(".card__header");
    _bodyItem1 = document.querySelector(".card__body-item-1");
    _bodyItem2 = document.querySelector(".card__body-item-2");
    _bodyItem3 = document.querySelector(".card__body-item-3");
    _bodyItem4 = document.querySelector(".card__body-item-4");
    _bodyItem5 = document.querySelector(".card__body-item-5");
    _bodyItem6 = document.querySelector(".card__body-item-6");
    _bodyItem7 = document.querySelector(".card__body-item-7");
    _bodyItem8 = document.querySelector(".card__body-item-8");
    _searchBox = document.querySelector(".card__search-box");
    _searchBtn = document.querySelector(".card__search-btn");
    _errorMessage = "Unable to output header content";
    addHandlerRender(handler) {
        handler();
    }
    addHandlerSearch(handler) {
        this._searchBtn.addEventListener("click", (e)=>{
            e.preventDefault();
            const city = this.capitalizeCity(this._searchBox.value);
            this._searchBox.value = "";
            handler(city);
        });
        this._searchBox.addEventListener("keydown", (e)=>{
            if (e.key === "Enter") {
                const city = this.capitalizeCity(this._searchBox.value);
                this._searchBox.value = "";
                handler(city);
            }
        });
    }
    render(data) {
        this._data = data;
        this._generateMarkup();
    }
    update(data) {
        this._data = data;
        this._headerEl.removeChild(this._headerEl.lastElementChild);
        for(let i = 0; i < 2; ++i)this._clearMarkup();
        this._generateMarkup();
    }
    capitalizeCity(city) {
        const formattedCity = city.toLowerCase().split(" ").map((s)=>s.charAt(0).toUpperCase() + s.substring(1)).join(" ");
        return formattedCity;
    }
    _clearMarkup() {
        this._headerEl.removeChild(this._headerEl.lastElementChild);
        this._bodyItem1.removeChild(this._bodyItem1.lastElementChild);
        this._bodyItem2.removeChild(this._bodyItem2.lastElementChild);
        this._bodyItem3.removeChild(this._bodyItem3.lastElementChild);
        this._bodyItem4.removeChild(this._bodyItem4.lastElementChild);
        this._bodyItem5.removeChild(this._bodyItem5.lastElementChild);
        this._bodyItem6.removeChild(this._bodyItem6.lastElementChild);
        this._bodyItem7.removeChild(this._bodyItem7.lastElementChild);
        this._bodyItem8.removeChild(this._bodyItem8.lastElementChild);
    }
    _generateMarkup() {
        const headerMarkup = `
      <p class="paragraph-1">${this._data.city}, ${this._data.country}</p>
      <h2 class="heading-2">${this._data.forecast.temperature}</h2>
      <p class="paragraph-1">L: ${this._data.forecast.minTemperature} &nbsp; H: ${this._data.forecast.maxTemperature}</p>
    `;
        this._headerEl.insertAdjacentHTML("beforeend", headerMarkup);
        let bodyMarkup = `
      <p class="card__forecast-value">${this._data.forecast.cloudCoverage}</p>
      <p class="card__forecast-title">Cloud Coverage</p>
    `;
        this._bodyItem1.insertAdjacentHTML("beforeend", bodyMarkup);
        bodyMarkup = `
      <p class="card__forecast-value">${this._data.forecast.humidity}</p>
      <p class="card__forecast-title">Humidity</p>
    `;
        this._bodyItem2.insertAdjacentHTML("beforeend", bodyMarkup);
        bodyMarkup = `
      <p class="card__forecast-value">${this._data.forecast.precipitation}</p>
      <p class="card__forecast-title">Precipitation</p>
    `;
        this._bodyItem3.insertAdjacentHTML("beforeend", bodyMarkup);
        bodyMarkup = `
      <p class="card__forecast-value">${this._data.forecast.uvIndex}</p>
      <p class="card__forecast-title">UV Index</p>
    `;
        this._bodyItem4.insertAdjacentHTML("beforeend", bodyMarkup);
        bodyMarkup = `
      <p class="card__forecast-value">${this._data.forecast.windSpeed}</p>
      <p class="card__forecast-title">Wind Speeds</p>
    `;
        this._bodyItem5.insertAdjacentHTML("beforeend", bodyMarkup);
        bodyMarkup = `
      <p class="card__forecast-value">${this._data.forecast.snowfall}</p>
      <p class="card__forecast-title">Snowfall</p>
    `;
        this._bodyItem6.insertAdjacentHTML("beforeend", bodyMarkup);
        bodyMarkup = `
      <p class="card__forecast-value">${this._data.forecast.sunrise}</p>
      <p class="card__forecast-title">Sunrise</p>
    `;
        this._bodyItem7.insertAdjacentHTML("beforeend", bodyMarkup);
        bodyMarkup = `
      <p class="card__forecast-value">${this._data.forecast.sunset}</p>
      <p class="card__forecast-title">Sunset</p>
    `;
        this._bodyItem8.insertAdjacentHTML("beforeend", bodyMarkup);
    }
}
exports.default = new WeatherView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9Pbre":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadForecast", ()=>loadForecast);
var _configJs = require("../utils/config.js");
const state = {
    image: "",
    city: "",
    country: "",
    forecast: {}
};
/**
 * Change the time format from military to standard
 * @param {Date} date
 * @returns {string}
 */ const changeToStandardTime = function(date) {
    let hours, minutes, format;
    hours = date.getHours();
    minutes = date.getMinutes();
    format = hours >= 12 ? "PM" : "AM";
    hours = hours % 12; // AM - PM format
    hours = hours ? hours : 0; // Displays 0 as 12 for noon
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes + " " + format;
};
/**
 * Creates forecast object to store in the state
 * @param {Object} data
 */ const createForecast = function(data) {
    // TEMPERATURES
    const temperatureUnits = data.current_units.apparent_temperature;
    const avgTemp = `${Math.round(data.current.apparent_temperature)}${temperatureUnits}`;
    const maxTemp = Math.round(Math.max(...data.daily.apparent_temperature_max)) + temperatureUnits;
    const minTemp = Math.round(Math.max(...data.daily.apparent_temperature_min)) + temperatureUnits;
    // OTHER FORECAST PROPERTIES
    const cloudCover = `${data.current.cloud_cover}${data.current_units.cloud_cover}`;
    const precip = `${data.current.precipitation}${data.current_units.precipitation.slice(0, 2)}`;
    const humid = `${data.current.relative_humidity_2m}${data.current_units.relative_humidity_2m}`;
    const uv = Math.max(...data.daily.uv_index_max) + "";
    const wind = Math.max(...data.daily.wind_speed_10m_max) + data.daily_units.wind_speed_10m_max;
    const snow = `${data.current.snowfall}${data.current_units.snowfall.slice(0, 2)}`;
    // Set sunrise and sunset hours to 12 hour format
    const sunriseOne = changeToStandardTime(new Date(data.daily.sunrise[0]));
    const sunsetOne = changeToStandardTime(new Date(data.daily.sunset[0]));
    state.forecast = {
        temperature: avgTemp,
        cloudCoverage: cloudCover,
        precipitation: precip,
        humidity: humid,
        maxTemperature: maxTemp,
        minTemperature: minTemp,
        sunrise: sunriseOne,
        sunset: sunsetOne,
        uvIndex: uv,
        windSpeed: wind,
        snowfall: snow
    };
};
const loadForecast = async function(lat, long, city = "Las Vegas", country = "United States") {
    try {
        const url = `${(0, _configJs.WEATHER_API_URL)}?latitude=${lat}&longitude=${long}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,snowfall,cloud_cover&daily=apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,wind_speed_10m_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=auto`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Error in extracting data from URL");
        const data = await res.json();
        console.log(data);
        state.city = city;
        state.country = country;
        createForecast(data);
        console.log(state.forecast);
    } catch (err) {
        console.error(`${err} \u{1F354}`);
    }
};

},{"../utils/config.js":"4LaEY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4LaEY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WEATHER_API_URL", ()=>WEATHER_API_URL);
parcelHelpers.export(exports, "POSITION_STACK_API_KEY", ()=>POSITION_STACK_API_KEY);
parcelHelpers.export(exports, "POSITION_STACK_API_URL", ()=>POSITION_STACK_API_URL);
parcelHelpers.export(exports, "DEFAULT_LATITUDE", ()=>DEFAULT_LATITUDE);
parcelHelpers.export(exports, "DEFAULT_LONGITUDE", ()=>DEFAULT_LONGITUDE);
const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";
const POSITION_STACK_API_KEY = "f637a10485c8ec7c1a8d57c0c1d3b6a9";
const POSITION_STACK_API_URL = "http://api.positionstack.com/v1/";
const DEFAULT_LATITUDE = 36.1716;
const DEFAULT_LONGITUDE = -115.1391;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["gbXMy","bNKaB"], "bNKaB", "parcelRequirebbde")

//# sourceMappingURL=index.0641b553.js.map
