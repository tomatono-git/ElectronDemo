import { Autocomplete } from "./view/autocomplete/Autocomplete";

import * as JQueryStatic from "jquery";

declare const window: Window & { $: JQueryStatic<HTMLElement> };

import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.css';

export class Application {

    public static start(): void {

        console.log("$=%o", $);

        const callback = (x: any, y: any) => {
            console.log("start(): x=%o, y=%o, $=%o", x, y, $);

            let autocomplete = new Autocomplete();
            autocomplete.initialize();
        };
        $(callback.bind(this));
    }
}

// Application.start();
