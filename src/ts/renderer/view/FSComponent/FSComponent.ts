import * as ko from "knockout";
import { ComponentRegister } from "../ComponentRegister";

import * as path from "path";
import * as fs from "fs";

const COMPONENT_NAME = "fs-component";

export class FSComponent {

    private component: string;
    private register: ComponentRegister<this>;

    constructor() {
        this.component = COMPONENT_NAME;

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

        const template = require("./FSComponent.html");
        this.register.register(COMPONENT_NAME, template);
    }

    protected onClickOutputFileButton(self: this, event: Event): void {
        console.log("onClickOutputFileButton(): self=%o, event=%o", self, event);

        let dir = path.join("k:", "test");
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        let src = path.join(dir, "test.txt");
        let data = `test-${new Date().getTime()}`.repeat(100);
        console.log("onClickOutputFileButton(): src=%o, data=%o", src, data);

        fs.writeFileSync(src, data);
    }

    protected onClickCopyFileButton(self: this, event: Event): void {
        console.log("onClickCopyFileButton(): self=%o, event=%o", self, event);

        let dir = path.join("k:", "test");
        let src = path.join(dir, "test.txt");
        let dest = path.join(dir, "test2.txt");

        console.log("onClickCopyFileButton(): src=%o, dest=%o", src, dest);

        // TODO ファイルのコピーはcopyFile()copyFileSync()はnode.js 8.5.0以降出ないと使えない？
        fs.copyFileSync(src, dest, fs.constants.COPYFILE_EXCL);
    }

    protected onClickDeleteFolderButton(self: this, event: Event): void {
        console.log("onClickDeleteFolderButton(): self=%o, event=%o", self, event);

        let dir = path.join("k:", "test");
        console.log("onClickDeleteFolderButton(): dir=%o", dir);

        let files = fs.readdirSync(dir);
        files.forEach(name => {
            let filePath = path.join(dir, name);
            console.log("name=%s, filePath=%o", name, filePath);
            fs.unlinkSync(filePath);
        });

        fs.rmdirSync(dir);
    }

}
