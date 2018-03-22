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

export class Application {

    public static start(): void {
        // window.$ = window.jQuery = jquery;
        // window.Tether = Tether;
        // window.Bootstrap = typeof Bootstrap;

        // let x = Bootstrap.ModalOptions.$();
        // let xx = new x();

        console.log($);

        $(() => {
            console.log("start()");
        });
    }
}

Application.start();
