
import { AutocompleteText } from "./view/AutocompleteText/AutocompleteText";
import { LargeModal } from "./view/modal/LargeModal/LargeModal";
import { FSComponent } from "./view/FSComponent/FSComponent";

import * as ko from "knockout";

export class Application {

    private largeModal: LargeModal | null;
    private fsComponent: FSComponent | null;

    constructor() {
        this.largeModal = null;
        this.fsComponent = null;
    }

    public start(): void {

        console.log("$=%o", $);
        let autocomplete = new AutocompleteText();

        const _callback = (x: any, y: any) => {
            console.log("start(): x=%o, y=%o, $=%o", x, y, $);

            this.largeModal = new LargeModal();

            autocomplete.initialize();

            this.fsComponent = new FSComponent();

            console.log("context=%o", this);
            ko.applyBindings(this);
        };
        const callback = _callback.bind(this);
        $(_callback);
    }
}
