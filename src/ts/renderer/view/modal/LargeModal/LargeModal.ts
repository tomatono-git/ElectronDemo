
const COMPONENT_NAME = "large-modal";

import * as ko from "knockout";
import { ComponentRegister } from "../../ComponentRegister";
// import { KnockoutComponentTypes } from "knockout";

// require("./LargeModal.html");

export class LargeModal {

    private component: string;
    private register: ComponentRegister<this>;

    constructor() {
        this.component = COMPONENT_NAME;

        this.register = new ComponentRegister<this>();
        const template = require("./LargeModal.html");
        this.register.registerComponent(COMPONENT_NAME, template);

        // this.register = new ComponentRegister<this>();
        // this.register.register(COMPONENT_NAME,
        //     {
        //         template: require("./LargeModal.html"),
        //         // templatePath: "./LargeModal.html",
        //     },
        //     // {
        //     //     createViewModel: (params?: any, componentInfo?) => {
        //     //         return {} as this;
        //     //     },
        //     // }
        // );

        // if (!ko.components.isRegistered(COMPONENT_NAME)) {
        //     this.registerComponent(COMPONENT_NAME);
        // }
    }

    // private static createConfig(): KnockoutComponentTypes.Config | KnockoutComponentTypes.EmptyConfig {

    // }

    // public registerComponent(componentName: string): void {
    //     ko.components.register(componentName, {
    //         template: require("./LargeModal.html"),
    //         viewModel: {
    //             createViewModel: (params?: any, componentInfo?: {
    //                 element: Node;
    //                 templateNodes: Node[];
    //             }) => {
    //                 let vm: LargeModal | undefined = undefined;
    //                 if (params && params.vm) {
    //                     vm = ko.unwrap(params.option);
    //                 }
    //                 return vm;
    //             },
    //         }
    //     });
    // }
}
// ko.bindingProvider.instance.pre
// {
//     viewModel ?: ViewModelFunction | ViewModelSharedInstance | ViewModelFactoryFunction | AMDModule;
//     template: string | Node[] | DocumentFragment | TemplateElement | AMDModule;
//     synchronous ?: boolean;
// }
