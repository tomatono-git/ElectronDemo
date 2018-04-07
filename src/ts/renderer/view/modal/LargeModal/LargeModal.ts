
const COMPONENT_NAME = "large-modal";

import * as ko from "knockout";
import { ComponentRegister } from "../../ComponentRegister";

export class LargeModal {

    private component: string;
    private testText: string | null;
    private register: ComponentRegister<this>;

    constructor() {
        this.component = COMPONENT_NAME;
        this.testText = "test text";

        this.register = new ComponentRegister<this>();

        // ko.track(this);
        this.track(this);

        // コンポーネントの登録
        this.registerComponent();
    }

    protected track<T>(obj: T, propertyNames?: Array<string>): T {
        if (this.register == null) {
            throw new Error("this.register is null.");
        }
        return this.register.track(obj, propertyNames);
    }

    protected registerComponent(): void {
        if (this.register.isRegistered(COMPONENT_NAME)) {
            return;
        }

        const template = require("./LargeModal.html");
        this.register.register(COMPONENT_NAME, template);
    }
}
