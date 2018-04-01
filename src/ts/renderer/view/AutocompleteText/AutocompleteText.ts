// import * as Bloodhound from "bloodhound";

// require('AutocompleteText.css');
import './AutocompleteText.css';

export class AutocompleteText {

    public initialize(): void {

        type Item = { value: string };

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

        let options: Twitter.Typeahead.Options = {
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

        let autocompleteTarget = $(".autocomplete input");
        console.log("options=%o, dataSet=%o, autocompleteTarget=%o", options, dataSet, autocompleteTarget);
        autocompleteTarget.typeahead(options, dataSet);
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
