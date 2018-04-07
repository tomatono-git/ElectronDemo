
const COMPONENT_NAME = "large-modal";

import * as ko from "knockout";
// import { KnockoutComponentTypes } from "knockout";

require("./LargeModal.html");

export class LargeModal {
    private component: string;

    constructor() {
        this.component = COMPONENT_NAME;

        if (!ko.components.isRegistered(COMPONENT_NAME)) {
            this.registerComponent(COMPONENT_NAME);
        }
    }

    // private static createConfig(): KnockoutComponentTypes.Config | KnockoutComponentTypes.EmptyConfig {

    // }

    public registerComponent(componentName: string): void {
        ko.components.register(componentName, {
            template: require("./LargeModal.html"),
            viewModel: {
                createViewModel: (params?: any, componentInfo?: {
                    element: Node;
                    templateNodes: Node[];
                }) => {
                    let vm: LargeModal | undefined = undefined;
                    if (params && params.vm) {
                        vm = ko.unwrap(params.option);
                    }
                    return vm;
                },
            }
        });
    }
}
// ko.bindingProvider.instance.pre
// {
//     viewModel ?: ViewModelFunction | ViewModelSharedInstance | ViewModelFactoryFunction | AMDModule;
//     template: string | Node[] | DocumentFragment | TemplateElement | AMDModule;
//     synchronous ?: boolean;
// }
