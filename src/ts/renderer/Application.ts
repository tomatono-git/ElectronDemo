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

import * as JQueryStatic from "jquery";

// import * as Bootstrap from "bootstrap/dist/js/bootstrap";
/*tslint:disable:no-var-requires*/
// require("bootstrap/dist/js/bootstrap");
/*tslint:enable:no-var-requires*/

// /*tslint:disable:no-var-requires*/
// require("bootstrap");
// /*tslint:enable:no-var-requires*/
import * as Bootstrap from "bootstrap";
// import * as Bloodhound from "typeahead";

// import { Bloodhound } from "typeahead";
// import * as Twitter from "typeahead.js";

declare const window: Window & { $: JQueryStatic<HTMLElement> };

export class Application {

    public static start(): void {
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
        const callback = (x: any, y: any) => {
            // require('bootstrap/dist/js/bootstrap');

            type Item = { value: string };

            console.log("start(): x=%o, y=%o, $=%o", x, y, $);
            let engine = new Bloodhound<Item>({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                local: [
                    { value: "aaa" },
                    { value: "abb" },
                    { value: "acc" }
                ],
            });
            engine.initialize();

            let optios: Twitter.Typeahead.Options = {
                highlight: true,
                classNames: {
                    menu: "tt-menu tt-menu-ex"
                    // input: "input-value"
                },
            };
            let dataSet: Twitter.Typeahead.Dataset<Item> = {
                source: engine,
                display: (item) => {
                    return item.value;
                },
                templates: {
                    notFound: "なし",
                    // header: `<div>ヘッダー</div>`,
                    // footer: `<div>フッター</div>`,
                    // suggestion: (suggestion: Item) => {
                    //     return `${suggestion.value}`;
                    //     // return `<div stype="color:red;">${suggestion.value}</div>`;
                    // }
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

Application.start();
