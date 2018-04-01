
declare const window: Window & {
    $: JQueryStatic<HTMLElement>,
    jQuery: JQueryStatic<HTMLElement>,
    // Bloodhound: Bloodhound<T>,
    Bloodhound: any,
};
window.$ = window.jQuery = require("jquery");
window.Bloodhound = require("typeahead.js/dist/bloodhound");
import "typeahead.js/dist/typeahead.jquery";

import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
