/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/renderer/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/renderer/Application.ts":
/*!****************************************!*\
  !*** ./src/ts/renderer/Application.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Autocomplete_1 = __webpack_require__(/*! ./view/autocomplete/Autocomplete */ "./src/ts/renderer/view/autocomplete/Autocomplete.ts");
class Application {
    static start() {
        console.log("$=%o", $);
        const callback = (x, y) => {
            console.log("start(): x=%o, y=%o, $=%o", x, y, $);
            let autocomplete = new Autocomplete_1.Autocomplete();
            autocomplete.initialize();
        };
        $(callback.bind(this));
    }
}
exports.Application = Application;
// Application.start();


/***/ }),

/***/ "./src/ts/renderer/index.ts":
/*!**********************************!*\
  !*** ./src/ts/renderer/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Application_1 = __webpack_require__(/*! ./Application */ "./src/ts/renderer/Application.ts");
// declare const window: Window & {
//     $: JQueryStatic<HTMLElement>,
//     jQuery: JQueryStatic<HTMLElement>,
//     // Bloodhound: Bloodhound<T>,
//     Bloodhound: any,
// };
// const jquery = require('jquery');
// window.$ = window.jQuery = jquery;
// require("bootstrap");
// // require("typeahead.js/dist/typeahead.bundle.js");
// const Bloodhound = require("typeahead.js/dist/bloodhound.js");
// window.Bloodhound = Bloodhound;
// const typeahead = require("typeahead.js/dist/typeahead.js");
Application_1.Application.start();
// // import * as a from "jquery";
// // import * as b from "bootstrap";
// // import * as $ from "jquery";
// // import * as Bootstrap from "bootstrap";
// // import jQuery
// // import * as jquery from "jquery";
// // import * as Tether from "tether";
// // import * as Bootstrap from "bootstrap";
// /*tslint:disable:no-var-requires*/
// const jquery = require("jquery");
// const Tether = require("tether");
// const Bootstrap = require("bootstrap");
// /*tslint:enable:no-var-requires*/
// /*tslint:disable:interface-name*/
// interface Window {
//     $: JQueryStatic<HTMLElement>;
//     jQuery: JQueryStatic<HTMLElement>;
//     Tether: typeof Tether;
//     Bootstrap: typeof Bootstrap;
// }
// declare var window: Window;
// /*tslint:enable:interface-name*/
// import * as Bootstrap from "bootstrap";
// const r = require("app/js/renderer");
// const jQuery = require("jquery");
// const $ = jQuery;
// import * as Bootstrap from "bootstrap/dist/js/bootstrap";
/*tslint:disable:no-var-requires*/
// require("bootstrap/dist/js/bootstrap");
/*tslint:enable:no-var-requires*/
// /*tslint:disable:no-var-requires*/
// require("bootstrap");
// /*tslint:enable:no-var-requires*/
// import * as Bootstrap from "bootstrap";
// import * as Bloodhound from "typeahead";
// import { Bloodhound } from "typeahead";
// import * as Twitter from "typeahead.js";


/***/ }),

/***/ "./src/ts/renderer/view/autocomplete/Autocomplete.ts":
/*!***********************************************************!*\
  !*** ./src/ts/renderer/view/autocomplete/Autocomplete.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// import * as Bloodhound from "bloodhound";
Object.defineProperty(exports, "__esModule", { value: true });
class Autocomplete {
    initialize() {
        let engine = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: [
                { value: "aaa" },
                { value: "abb" },
                { value: "acc" }
            ],
        });
        engine.initialize();
        let optios = {
            highlight: true,
            classNames: {
                menu: "tt-menu tt-menu-ex"
                // input: "input-value"
            },
        };
        let dataSet = {
            source: engine,
            display: (item) => {
                return item.value;
            },
            templates: {
                notFound: "なし",
            },
        };
        let autocompleteTarget = $(".autocomplete");
        autocompleteTarget.typeahead(optios, dataSet);
        // typeahead: active
        // autocompleteTarget.on("typeahead:active", (event, args) => {
        //     console.log("on('typeahead:active'): event=%o, args=%o", event, args);
        //     console.log("on('typeahead:active'): event.target=%o", event.target);
        //     let target = $(event.target);
        //     let menu = $(".tt-menu");
        //     let offset = target.offset();
        //     if (offset != null) {
        //         let height = target.innerHeight();
        //         let top = offset.top + (height != null ? height : 0);
        //         let left = offset.left;
        //         console.log("on('typeahead:active'): top=%o, left=%o, height=%o", top, left, height);
        //         menu.offset({
        //             top: top,
        //             left: left,
        //         });
        //     }
        // });
        autocompleteTarget.on("typeahead:open", (event, args) => {
            console.log("on('typeahead:open'): event=%o, args=%o", event, args);
            console.log("on('typeahead:open'): event.target=%o", event.target);
            let target = $(event.target);
            let menu = $(".tt-menu");
            let offset = target.offset();
            if (offset != null) {
                let height = target.innerHeight();
                let top = offset.top + (height != null ? height : 0);
                let left = offset.left;
                console.log("on('typeahead:open'): top=%o, left=%o, height=%o", top, left, height);
                menu.offset({
                    top: top,
                    left: left,
                });
            }
        });
        // "typeahead:open"
    }
}
exports.Autocomplete = Autocomplete;


/***/ })

/******/ });
//# sourceMappingURL=index.js.map