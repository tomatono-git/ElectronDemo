import * as jquery from "jquery";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "typeahead.js/dist/typeahead.jquery";

// import * as Bloodhound from "typeahead.js/dist/bloodhound";

declare const window: Window & {
    $: JQueryStatic<HTMLElement>,
    jQuery: JQueryStatic<HTMLElement>,
    // Bloodhound: Bloodhound<T>,
    Bloodhound: any,
};

// const jquery = jQuery
// window.$ = window.jQuery = jquery;
window.$ = window.jQuery = require("jquery");
window.Bloodhound = require("typeahead.js/dist/typeahead.jquery");

// interface Window {
//     $: JQueryStatic<HTMLElement>;
//     jQuery: JQueryStatic<HTMLElement>;
//     // Bloodhound: Bloodhound<T>;
//     Bloodhound: any;
// }

// const jquery = require('jquery');
// window.$ = window.jQuery = jquery;

// // require("bootstrap");
