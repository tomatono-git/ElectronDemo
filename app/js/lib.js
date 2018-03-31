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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/renderer/Application.ts");
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

// // import * as a from "jquery";
// // import * as b from "bootstrap";
Object.defineProperty(exports, "__esModule", { value: true });
class Application {
    static start() {
        // // window.$ = JQueryStatic;
        // const $ = JQueryStatic;
        // // window.Bootstrap = Bootstrap;
        // // window.$ = window.jQuery = jquery;
        // // window.Tether = Tether;
        // // window.Bootstrap = typeof Bootstrap;
        // // let x = Bootstrap.ModalOptions.$();
        // // let xx = new x();
        // console.log("JQueryStatic=%o", JQueryStatic);
        console.log("$=%o", $);
        // $(() => {
        const callback = (x, y) => {
            // require('bootstrap/dist/js/bootstrap');
            console.log("start(): x=%o, y=%o, $=%o", x, y, $);
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
        };
        $(callback.bind(this));
    }
}
exports.Application = Application;
// Application.start();


/***/ })

/******/ });
//# sourceMappingURL=lib.js.map