import * as ko from "knockout";

declare namespace ComponentTypes {
    interface TemplateElement {
        element: string | Node;
    }

    // common AMD type
    interface AMDModule {
        require: string;
    }

    // // viewmodel types
    // interface ViewModelFunction {
    //     (params?: any): any;
    // }

    // interface ViewModelSharedInstance {
    //     instance: any;
    // }

    // interface ViewModelFactoryFunction {
    //     createViewModel: (params?: any, componentInfo?: ComponentInfo) => any;
    // }

    interface ComponentInfo {
        element: Node;
        templateNodes: Node[];
    }

    // interface Config {
    //     viewModel?: ViewModelFunction | ViewModelSharedInstance | ViewModelFactoryFunction | AMDModule;
    //     template: string | Node[] | DocumentFragment | TemplateElement | AMDModule;
    //     synchronous?: boolean;
    // }
}

// interface ViewModelFactory<T> extends ComponentTypes.ViewModelFactoryFunction {
//     createViewModel: (params?: any, componentInfo?: ComponentTypes.ComponentInfo) => T;
// }

// interface ComponentConfig {
//     viewModel?: ComponentTypes.ViewModelFactoryFunction;
//     template: string | Node[] | DocumentFragment | ComponentTypes.TemplateElement;
//     synchronous?: boolean;
// }

// interface ComponentTemplate {
// }
type ComponentTemplate = string | Node[] | DocumentFragment | ComponentTypes.TemplateElement | ComponentTypes.AMDModule;

interface ComponentRegisterOptions<T> {
    // componentName: string,
    // viewModel?: ComponentTypes.ViewModelFactoryFunction;
    templatePath?: string;
    template: string | Node[] | DocumentFragment | ComponentTypes.TemplateElement;
    cssPaths?: string[];
    synchronous?: boolean;
    createViewModel?: (params?: any, componentInfo?: ComponentTypes.ComponentInfo) => T;
}

// type ViewModelFactory = (params?: any, componentInfo?: ComponentTypes.ComponentInfo) => any;

export class ComponentRegister<T> {

    public register(componentName: string, options: ComponentRegisterOptions<T>): void {

        if (ko.components.isRegistered(componentName)) {
            return;
        }

        console.log("register(): componentName=%o", componentName);

        let template: ComponentTemplate;
        template = options.template;
        // if (options.templatePath) {
        //     template = require(options.templatePath);
        // } else if (options.template) {
        //     template = options.template;
        // } else {
        //     template = "";
        // }

        let factory: (params?: any, componentInfo?: ComponentTypes.ComponentInfo) => T | null;
        if (options.createViewModel) {
            factory = options.createViewModel;
        } else {
            // factory = this.createViewModel.bind(this);
            factory = (params?: any, componentInfo?: ComponentTypes.ComponentInfo) => {

                let vm: T | null = null;
                if (params != null) {
                    if (params.vm != null) {
                        vm = ko.unwrap(params.vm);
                    } else {
                        vm = ko.unwrap(params);
                    }
                }

                console.log("register() -> factory(): vm=%o, params=%o, componentInfo=%o", vm, params, componentInfo);

                if (vm != null && this.onCreateViewModel != null) {
                    this.onCreateViewModel(params);
                }

                return vm;

            };
        }

        // console.log("register(): componentName=%o, template=%o", componentName, template);

        // コンポーネントの登録
        ko.components.register(componentName, {
            viewModel: factory,
            template: template,
            synchronous: options.synchronous,
        });
    }

    protected createViewModel(params?: any, componentInfo?: ComponentTypes.ComponentInfo): T | null {
        let vm: T | null = this.getViewModel(params, componentInfo);

        console.log("createViewModel(): vm=%o, params=%o, componentInfo=%o", vm, params, componentInfo);
        return vm;
    }

    // protected abstract getViewModel(params?: any, componentInfo?: ComponentTypes.ComponentInfo): T | null;
    protected getViewModel(params?: any, componentInfo?: ComponentTypes.ComponentInfo): T | null {
        let vm: T | null = null;
        if (params != null) {
            if (params.vm != null) {
                vm = ko.unwrap(params.vm);
            } else {
                vm = ko.unwrap(params);
            }
        }

        console.log("getViewModel(): vm=%o, params=%o, componentInfo=%o", vm, params, componentInfo);

        if (vm != null && this.onCreateViewModel != null) {
            this.onCreateViewModel(params);
        }

        return vm;
    }

    private onCreateViewModel?: (params: any) => void;
    public setOnCreateViewModel(handler: (params: any) => void) {
        this.onCreateViewModel = handler;
    }
}


// export class ComponentRegister<T extends Function> extends AbstractComponentRegister<T> {

//     protected getViewModel(params?: any, componentInfo?: ComponentTypes.ComponentInfo): T | null {
//         let vm: T | null = null;
//         if (params != null) {
//             if (params.vm != null) {
//                 vm = ko.unwrap(params.vm);
//             } else {
//                 vm = ko.unwrap(params);
//             }
//         }

//         return vm;
//     }

//     // protected viewModelFactory(params?: any, componentInfo?: ComponentTypes.ComponentInfo): T | null {
//     //     let vm: T | null = this.getViewModel(params, componentInfo);
//     //     return vm;
//     // }

//     // public register<T>(componentName: string, createViewModel: ViewModelFactory<T>): void {

//     //     let facotry = createViewModel;
//     //     let template = require("./LargeModal.html");

//     //     ko.components.register(componentName, {
//     //         template: template,
//     //         viewModel: facotry,
//     //     });
//     // }

//     // register(componentName: string, config: KnockoutComponentTypes.Config | KnockoutComponentTypes.EmptyConfig): void;

//     // public registerComponent<T>(componentName: string, createViewModel: ViewModelFactory<T>): void {

//     //     let facotry = (params?: any, componentInfo?: {
//     //         element: Node;
//     //         templateNodes: Node[];
//     //     }) => {
//     //         let vm: T | undefined = undefined;
//     //         if (params && params.vm) {
//     //             vm = ko.unwrap(params.option);
//     //         }
//     //         return vm;
//     //     };
//     //     let template = require("./LargeModal.html");

//     //     ko.components.register(componentName, {
//     //         template: template,
//     //         viewModel: facotry,
//     //     });
//     // }
// }
