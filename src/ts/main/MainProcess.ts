// import * as fs from "fs";
import { app, BrowserWindow, globalShortcut, GlobalShortcut } from "electron";
import * as path from "path";
import * as os from "os";

const APPLICATION_NAME = 'app-name';
const TITLE = 'Sample App';
// const indexPath = `file://${path.join(__dirname, 'index.html')}`;
export class MainProcess {

    private mainWindow: BrowserWindow | null;

    constructor() {
        this.mainWindow = null;
    }

    public start(): void {

        app.setName(APPLICATION_NAME);

        // app.on('window-all-closed', () => { app.quit() })
        // 全てのウィンドウが閉じたら終了
        app.on("window-all-closed", () => {
            if (process.platform != "darwin") {
                app.quit();
            }
        });

        // Electronの初期化完了後に実行
        app.on("ready", (launchInfo) => {
            console.log("ready: launchInfo=%o", launchInfo);

            //ウィンドウサイズを1280*720（フレームサイズを含まない）に設定する
            this.mainWindow = new BrowserWindow({
                title: TITLE,
                width: 1280,
                height: 720,
                useContentSize: true,
                show: false,
                webPreferences: {
                    nodeIntegration: true,
                    defaultEncoding: 'UTF-8'
                }
            });

            this.mainWindow.webContents.openDevTools();

            //使用するhtmlファイルを指定する
            // let indexPath = `file://${path.join(__dirname, 'index.html')}`;
            // let indexPath = `file://${path.normalize(path.join(__dirname, 'index.html'))}`;
            // let indexPath = path.normalize(path.join('./', 'index.html'));
            // let indexPath = `file://${path.join('../', 'index.html')}`;
            var indexPath = path.join(__dirname, 'index.html');
            console.log("indexPath=%s", indexPath);
            this.mainWindow.loadURL(indexPath);

            // Enable keyboard shortcuts for Developer Tools on various platforms.
            let platform = os.platform();
            if (platform === 'darwin') {
                globalShortcut.register('Command+Option+I', () => {
                    if (!this.mainWindow) {
                        return;
                    }
                    this.mainWindow.webContents.openDevTools();
                });
            } else if (platform === 'linux' || platform === 'win32') {
                globalShortcut.register('Control+Shift+I', () => {
                    if (!this.mainWindow) {
                        return;
                    }
                    this.mainWindow.webContents.openDevTools();
                });
            };

            this.mainWindow.once('ready-to-show', () => {
                if (!this.mainWindow) {
                    return;
                }
                // mainWindow.setMenu(null);
                this.mainWindow.show();
            });

            // mainWindow.onbeforeunload = (e) => {
            //     // Prevent Command-R from unloading the window contents.
            //     e.returnValue = false;
            // };

            // ウィンドウが閉じられたらアプリも終了
            this.mainWindow.on("closed", () => {
                this.mainWindow = null;
            });
        });
    }

}

