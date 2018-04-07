
import { AutocompleteText } from "./view/AutocompleteText/AutocompleteText";
import { LargeModal } from "./view/modal/LargeModal/LargeModal";

import * as ko from "knockout";

export class Application {

    private largeModal: LargeModal | null;

    constructor() {
        this.largeModal = null;
    }

    public start(): void {

        console.log("$=%o", $);
        let autocomplete = new AutocompleteText();

        const _callback = (x: any, y: any) => {
            console.log("start(): x=%o, y=%o, $=%o", x, y, $);

            this.largeModal = new LargeModal();

            autocomplete.initialize();

            console.log("context=%o", this);
            ko.applyBindings(this);
        };
        const callback = _callback.bind(this);
        $(_callback);
    }
}
