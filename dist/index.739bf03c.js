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
})({"b3anl":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
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
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
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

},{}],"ebWYT":[function(require,module,exports) {
var _wildberriesModel = require("./wildberriesModel");
var _wildberriesView = require("./wildberriesView");
var _wildberriesController = require("./wildberriesController");
const model = new (0, _wildberriesModel.WildberriesModel)();
const view = new (0, _wildberriesView.WildberriesView)();
const controller = new (0, _wildberriesController.WildberriesController)(model, view);
addEventListener("DOMContentLoaded", controller.start());

},{"./wildberriesModel":"9EU6N","./wildberriesView":"4TmYR","./wildberriesController":"9m4RG"}],"9EU6N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WildberriesModel", ()=>WildberriesModel);
var _helpers = require("./helpers");
var _requests = require("./requests");
class WildberriesModel {
    constructor(){
        const { products, cart } = (0, _helpers.getSavedData)();
        this._products = products;
        this.amountOfProducts = 0;
        this.searchText = "";
        this.discoutRate = 10;
        this.openedModalProductId = null;
        this._cart = cart;
    }
    getInitialModelData = async ()=>{
        const { users, products } = await (0, _requests.getWildberriesData)();
        const multiplier = products.length / users.length;
        const productsNew = products.map((el, index)=>({
                ...el,
                seller: users[Math.floor(index / multiplier)]
            }));
        this.products = productsNew;
    };
    get products() {
        let filteredProducts = this._getProductsBySearchText(this._products);
        filteredProducts = filteredProducts.map((el)=>this._addAdditionalProductsFields(el, this.discoutRate));
        return filteredProducts;
    }
    set products(value) {
        (0, _helpers.saveProducts)(value);
        this._products = value;
    }
    get productModalInfo() {
        const element = this._products.find(({ id })=>this.openedModalProductId === id);
        return element ? this._addAdditionalProductsFields(element, this.discoutRate) : null;
    }
    openModal(id) {
        this.openedModalProductId = id;
    }
    closeModal() {
        this.openedModalProductId = null;
    }
    _addAdditionalProductsFields(element, discount = 0) {
        return {
            ...element,
            discount,
            priceWithDiscount: this.calcucatePriceWithDiscount(element.price, discount),
            poductAmountInCart: this._cart[element.id]
        };
    }
    _getProductsBySearchText(products) {
        if (!this.searchText) return products;
        const productsFiltered = products.filter((el)=>el.title.toLowerCase().includes(this.searchText.toLocaleLowerCase()));
        return productsFiltered;
    }
    addToCart(id) {
        if (this._cart[id]) this._cart[id] += 1;
        else this._cart[id] = 1;
        (0, _helpers.saveCart)(this._cart);
    }
    deleteFromCart(id) {
        if (this._cart[id] > 1) this._cart[id] -= 1;
        else delete this._cart[id];
        (0, _helpers.saveCart)(this._cart);
    }
    get cart() {
        const cartElements = Object.entries(this._cart).map(([id, amount])=>{
            const productElement = this._products.find((element)=>String(element.id) === String(id));
            if (productElement) return {
                ...productElement,
                amount,
                totalPrice: Number((this.calcucatePriceWithDiscount(productElement.price, this.discoutRate) * amount).toFixed(2)),
                disabledIncreaseButton: false,
                disabledDecreaseButton: amount === 0
            };
            else return null;
        });
        const totalPrice = cartElements.reduce((acc, el)=>{
            if (el) return acc + el.totalPrice;
            else return acc;
        }, 0);
        return {
            cartElements,
            totalPrice
        };
    }
    get cartAmount() {
        return Object.entries(this._cart).reduce((acc, [_, amount])=>acc + amount, 0);
    }
    calcucatePriceWithDiscount(priceWithoutDiscount, discount) {
        return Number((priceWithoutDiscount - priceWithoutDiscount * discount / 100).toFixed(2));
    }
}

},{"./helpers":"hGI1E","./requests":"gUqKo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clickOutside", ()=>clickOutside);
parcelHelpers.export(exports, "getSavedData", ()=>getSavedData);
parcelHelpers.export(exports, "saveCart", ()=>saveCart);
parcelHelpers.export(exports, "saveProducts", ()=>saveProducts);
const clickOutside = function(handleClickOutside, ...element) {
    window.addEventListener("click", function(e) {
        if (element.every((el)=>{
            return !el.contains(e.target);
        })) handleClickOutside(e);
    });
};
const wildberiesKey = "wildberries_Inna_Knilko";
const getSavedData = ()=>{
    const defaultValues = {
        products: [],
        cart: {}
    };
    try {
        const dataJSON = localStorage.getItem(wildberiesKey);
        if (dataJSON) {
            const data = JSON.parse(dataJSON);
            return {
                products: data.products || defaultValues.products,
                cart: data.cart || defaultValues.cart
            };
        }
        throw null;
    } catch (e) {
        return defaultValues;
    }
};
const saveCart = (cart)=>{
    const data = getSavedData();
    localStorage.setItem(wildberiesKey, JSON.stringify({
        ...data,
        cart
    }));
};
const saveProducts = (products)=>{
    const data = getSavedData();
    localStorage.setItem(wildberiesKey, JSON.stringify({
        ...data,
        products
    }));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gUqKo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getWildberriesData", ()=>getWildberriesData);
const getWildberriesData = async ()=>{
    const products = await fetch("https://fakestoreapi.com/products").then((response)=>response.json());
    const users = await fetch("https://fakestoreapi.com/users").then((response)=>response.json());
    return {
        products,
        users
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4TmYR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WildberriesView", ()=>WildberriesView);
class WildberriesView {
    constructor(){
        this.productsSection = document.querySelector(".products__container");
        this.searchInput = document.querySelector(".search-input");
        this.slider = document.querySelector(".slider");
        this.productModalWraper = document.querySelector(".product-modal__wrapper");
        this.cartMenu = document.querySelector(".cart__menu");
        this.cartBtn = document.querySelector(".cart-btn");
        this.cartTotal = document.querySelector(".cart__number-of-items");
    }
    createCardElement(elementType, ...classes) {
        const element = document.createElement(elementType);
        for (let item of classes)element.classList.add(item);
        return element;
    }
    renderModalProductCardsElements(productInfo, { handleCloseModal, handleAddButton } = {}) {
        this.productModalWraper.innerHTML = "";
        this.productModal = null;
        if (productInfo) {
            const productCardModal = this.createCardElement("div", "product-modal");
            const productCardModalContainer = this.createCardElement("div", "product-modal__container");
            const productDescr = this.createCardElement("div", "product-modal__description");
            const image = this.createCardElement("img", "product-modal__img");
            image.setAttribute("src", productInfo.image);
            image.setAttribute("alt", "product image");
            const seller = this.createCardElement("span", "seller");
            seller.textContent = productInfo.seller.username + " / ";
            const description = this.createCardElement("span", "description");
            description.textContent = productInfo.title;
            const productsPrice = this.createCardElement("div", "product-modal__price");
            const reducedPrice = this.createCardElement("span", "reduced-price");
            reducedPrice.textContent = productInfo.priceWithDiscount + " \u0440.";
            const initialPrice = this.createCardElement("span", "initial-price");
            initialPrice.textContent = productInfo.price + " \u0440.";
            const addToCartButton = this.createCardElement("button", "add-to-cart-btn");
            const addCardButtonText = productInfo.poductAmountInCart ? `\u{414}\u{43E}\u{431}\u{430}\u{432}\u{43B}\u{435}\u{43D}\u{43E}: ${productInfo.poductAmountInCart}. \u{414}\u{43E}\u{431}\u{430}\u{432}\u{438}\u{442}\u{44C} \u{435}\u{449}\u{435}.` : "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443";
            addToCartButton.textContent = addCardButtonText;
            productsPrice.append(reducedPrice, initialPrice);
            productDescr.append(seller, description, productsPrice, addToCartButton);
            productCardModalContainer.append(image, productDescr);
            productCardModal.append(productCardModalContainer);
            this.productModalWraper.append(productCardModal);
            productCardModal.onclick = (event)=>event.target === productCardModal ? handleCloseModal() : undefined;
            addToCartButton.onclick = ()=>handleAddButton(productInfo.id);
        }
    }
    createProductCardElements(productInfo, { handleShowButton, handleAddButton } = {}) {
        const productCard = this.createCardElement("div", "products__card");
        const imageBlock = this.createCardElement("div", "image-block");
        const image = this.createCardElement("img", "products__image");
        image.setAttribute("src", productInfo.image);
        image.setAttribute("alt", "product image");
        const quickShowButton = this.createCardElement("button", "quick-show");
        quickShowButton.textContent = "\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440";
        const discountElement = this.createCardElement("span", "discount");
        discountElement.textContent = "- " + productInfo.discount + " %";
        const addToCartButton = this.createCardElement("button", "add-to-cart-btn");
        const addCardButtonText = productInfo.poductAmountInCart ? `\u{414}\u{43E}\u{431}\u{430}\u{432}\u{43B}\u{435}\u{43D}\u{43E}: ${productInfo.poductAmountInCart}. \u{414}\u{43E}\u{431}\u{430}\u{432}\u{438}\u{442}\u{44C} \u{435}\u{449}\u{435}.` : "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443";
        addToCartButton.textContent = addCardButtonText;
        const productsPrice = this.createCardElement("div", "products__price");
        const reducedPrice = this.createCardElement("span", "reduced-price");
        reducedPrice.textContent = productInfo.priceWithDiscount + " \u0440.";
        const initialPrice = this.createCardElement("span", "initial-price");
        initialPrice.textContent = productInfo.price + " \u0440.";
        const productDescr = this.createCardElement("div", "products__description");
        const seller = this.createCardElement("p", "seller");
        seller.textContent = productInfo.seller.username;
        const description = this.createCardElement("p", "description");
        description.textContent = productInfo.title;
        imageBlock.append(image, quickShowButton, discountElement, addToCartButton);
        productsPrice.append(reducedPrice, initialPrice);
        productDescr.append(seller, description);
        productCard.append(imageBlock, productsPrice, productDescr);
        quickShowButton.onclick = handleShowButton;
        addToCartButton.onclick = handleAddButton;
        return productCard;
    }
    createCartMenuListItem({ title, id, image, amount, totalPrice, disabledIncreaseButton, disabledDecreaseButton }, { handleIncreaseBtnClick, handleDecreaseBtnClick }) {
        const cartListItem = this.createCardElement("div", "cart__list-item");
        const cartListItemImg = this.createCardElement("img", "cart__img");
        cartListItemImg.setAttribute("src", image);
        const cartListItemName = this.createCardElement("span", "cart__list-item__title");
        cartListItemName.textContent = title;
        const cartActionsBlock = this.createCardElement("div", "cart-actions");
        const cartListAddBtn = this.createCardElement("button", "cart-actions__btn");
        cartListAddBtn.textContent = "+";
        const cartListItemAmount = this.createCardElement("div", "cart-actions__amount");
        cartListItemAmount.textContent = amount;
        const cartListDeleteBtn = this.createCardElement("button", "cart-actions__btn");
        cartListDeleteBtn.textContent = "\u2013";
        const cartTotalPrice = this.createCardElement("div", "cart__total-price");
        cartTotalPrice.textContent = totalPrice;
        if (disabledIncreaseButton) cartListAddBtn.classList.add("cart-actions__btn--disable");
        if (disabledDecreaseButton) cartListDeleteBtn.classList.add("cart-actions__btn--disable");
        cartListAddBtn.onclick = !disabledIncreaseButton ? ()=>handleIncreaseBtnClick(id) : undefined;
        cartListDeleteBtn.onclick = !disabledDecreaseButton ? ()=>handleDecreaseBtnClick(id) : undefined;
        cartActionsBlock.append(cartListDeleteBtn, cartListItemAmount, cartListAddBtn);
        cartListItem.append(cartListItemImg, cartListItemName, cartActionsBlock, cartTotalPrice);
        return cartListItem;
    }
    changeNumberOfItems(amount) {
        const numberOfItems = document.querySelector(".number-of-items");
        numberOfItems.textContent = amount;
    }
    createTotalPriceElement(totalPrice) {
        const cartListTotal = this.createCardElement("div", "cart__list-item", "cart__total");
        const cartListItemTitle = this.createCardElement("span", "cart__list-item__title");
        cartListItemTitle.textContent = "\u0418\u0442\u043E\u0433\u043E";
        const cartListTotalPrice = this.createCardElement("div", "cart__total-price");
        cartListTotalPrice.textContent = totalPrice;
        cartListTotal.append(cartListItemTitle, cartListTotalPrice);
        return cartListTotal;
    }
    renderCart({ cartElements, totalPrice }, totalElements, handlers) {
        this.cartMenu.innerHTML = "";
        const cartHTMLElements = cartElements.map((element)=>this.createCartMenuListItem(element, handlers));
        const totalPriceElement = this.createTotalPriceElement(totalPrice);
        this.cartMenu.append(...cartHTMLElements, totalPriceElement);
        this.cartTotal.textContent = totalElements;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9m4RG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WildberriesController", ()=>WildberriesController);
var _helpers = require("./helpers");
class WildberriesController {
    constructor(model, view){
        this.model = model;
        this.view = view;
    }
    searchProduct = (event)=>{
        this.view.slider.style.display = "none";
        this.model.searchText = event.target.value;
        if (event.target.value === "") this.view.slider.style.display = "block";
        this.start();
    };
    handleClicks() {
        this.view.searchInput.addEventListener("input", this.searchProduct);
        (0, _helpers.clickOutside)(this.closeCart.bind(this), this.view.cartMenu, this.view.cartBtn);
        this.view.cartBtn.addEventListener("click", this.openCart.bind(this));
    }
    closeModal() {
        this.model.closeModal();
        this.renderModal();
    }
    openModal(id) {
        this.model.openModal(id);
        this.renderModal();
    }
    renderModal() {
        const handleCloseModal = this.closeModal.bind(this);
        this.view.renderModalProductCardsElements(this.model.productModalInfo, {
            handleCloseModal,
            handleAddButton: this.addToCart.bind(this)
        });
    }
    openCart() {
        if (this.model.cartAmount > 0) this.view.cartMenu.classList.remove("cart__menu--hidden");
    }
    closeCart() {
        this.view.cartMenu.classList.add("cart__menu--hidden");
    }
    renderCards() {
        this.view.productsSection.innerHTML = "";
        const cards = this.model.products.map((el)=>{
            const handleAddButton = ()=>{
                this.addToCart(el.id);
            };
            const handleShowButton = ()=>{
                this.openModal(el.id);
            };
            return this.view.createProductCardElements(el, {
                handleShowButton,
                handleAddButton
            });
        });
        this.view.productsSection.append(...cards);
    }
    addToCart(id) {
        this.model.addToCart(id);
        this.renderCart();
        this.renderCards();
        this.renderModal();
    }
    deleteFromCart(id) {
        this.model.deleteFromCart(id);
        if (this.model.cartAmount === 0) this.closeCart();
        this.renderCart();
        this.renderModal();
        this.renderCards();
    }
    renderCart() {
        this.view.renderCart(this.model.cart, this.model.cartAmount, {
            handleIncreaseBtnClick: this.addToCart.bind(this),
            handleDecreaseBtnClick: this.deleteFromCart.bind(this)
        });
    }
    getDataFromServer = async ()=>{
        try {
            await this.model.getInitialModelData();
            this.renderCards();
            this.renderCart();
        } catch (e) {}
    };
    start = async function() {
        this.renderCards();
        this.renderCart();
        this.handleClicks();
        this.getDataFromServer();
    };
}

},{"./helpers":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["b3anl","ebWYT"], "ebWYT", "parcelRequire71d7")

//# sourceMappingURL=index.739bf03c.js.map
