
import { AutocompleteText } from "./view/AutocompleteText/AutocompleteText";

export class Application {

    public start(): void {

        console.log("$=%o", $);
        let autocomplete = new AutocompleteText();

        const callback = (x: any, y: any) => {
            console.log("start(): x=%o, y=%o, $=%o", x, y, $);

            autocomplete.initialize();
        };
        $(callback.bind(this));
    }
}
