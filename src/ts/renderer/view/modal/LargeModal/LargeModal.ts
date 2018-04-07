
const COMPONENT_NAME = "large-modal";

import * as ko from "knockout";
import { ComponentRegister } from "../../ComponentRegister";

export class LargeModal {

    private component: string;
    private register: ComponentRegister<this>;

    constructor() {
        this.component = COMPONENT_NAME;

        ko.track(this);

        this.register = new ComponentRegister<this>();
        // コンポーネントの登録
        this.registerComponent();
    }

    protected registerComponent(): void {
        if (this.register.isRegistered(COMPONENT_NAME)) {
            return;
        }

        const template = require("./LargeModal.html");
        this.register.register2(COMPONENT_NAME, template);
    }
}
