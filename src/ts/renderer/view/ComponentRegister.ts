// import * as ko from "knockout";
// // import "knockout-es5";
// require("knockout-es5");

// const ko = require('knockout-es5');
// import ko from "knockout-es5";
// const ko = require('knockout-es5');

const ko = require('knockout-es5');

declare namespace ComponentTypes {
    interface TemplateElement {
        element: string | Node;
    }

    // common AMD type
    interface AMDModule {
        require: string;
    }

    interface ComponentInfo {
        element: Node;
        templateNodes: Node[];
    }
}

type ComponentTemplate = string | Node[] | DocumentFragment | ComponentTypes.TemplateElement | ComponentTypes.AMDModule;

interface ComponentRegisterOptions<T> {
    template: string | Node[] | DocumentFragment | ComponentTypes.TemplateElement;
    cssPaths?: string[];
    synchronous?: boolean;
    createViewModel?: (params?: any, componentInfo?: ComponentTypes.ComponentInfo) => T;
}

export class ComponentRegister<T> {

    public isRegistered(componentName: string): boolean {
        return ko.components.isRegistered(componentName);
    }

    public register<T>(componentName: string, template: any): void {

        if (ko.components.isRegistered(componentName)) {
            return;
        }

        ko.components.register(componentName, {
            template: template,
            viewModel: {
                createViewModel: (params?: any, componentInfo?: {
                    element: Node;
                    templateNodes: Node[];
                }) => {
                    let vm: T | undefined = undefined;
                    if (params) {
                        if (params.vm) {
                            vm = ko.unwrap(params.vm);
                        } else {
                            vm = ko.unwrap(params);
                        }
                    }
                    return vm;
                },
            }
        });
    }

    public track<T>(obj: T, propertyNames?: Array<string>): T {
        return ko.track(obj, propertyNames);
    }

}
