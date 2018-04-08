"use strict";
exports.__esModule = true;
// import * as fs from "fs";
var electron_1 = require("electron");
var path = require("path");
var os = require("os");
var APPLICATION_NAME = 'app-name';
var TITLE = 'Sample App';
// const indexPath = `file://${path.join(__dirname, 'index.html')}`;
var MainProcess = (function () {
    function MainProcess() {
        this.mainWindow = null;
    }
    MainProcess.prototype.start = function () {
        var _this = this;
        electron_1.app.setName(APPLICATION_NAME);
        // app.on('window-all-closed', () => { app.quit() })
        // 全てのウィンドウが閉じたら終了
        electron_1.app.on("window-all-closed", function () {
            if (process.platform != "darwin") {
                electron_1.app.quit();
            }
        });
        // Electronの初期化完了後に実行
        electron_1.app.on("ready", function (launchInfo) {
            console.log("ready: launchInfo=%o", launchInfo);
            //ウィンドウサイズを1280*720（フレームサイズを含まない）に設定する
            _this.mainWindow = new electron_1.BrowserWindow({
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
            _this.mainWindow.webContents.openDevTools();
            //使用するhtmlファイルを指定する
            // let indexPath = `file://${path.join(__dirname, 'index.html')}`;
            // let indexPath = `file://${path.normalize(path.join(__dirname, 'index.html'))}`;
            // let indexPath = path.normalize(path.join('./', 'index.html'));
            // let indexPath = `file://${path.join('../', 'index.html')}`;
            var indexPath = path.join(__dirname, 'index.html');
            console.log("indexPath=%s", indexPath);
            _this.mainWindow.loadURL(indexPath);
            // Enable keyboard shortcuts for Developer Tools on various platforms.
            var platform = os.platform();
            if (platform === 'darwin') {
                electron_1.globalShortcut.register('Command+Option+I', function () {
                    if (!_this.mainWindow) {
                        return;
                    }
                    _this.mainWindow.webContents.openDevTools();
                });
            }
            else if (platform === 'linux' || platform === 'win32') {
                electron_1.globalShortcut.register('Control+Shift+I', function () {
                    if (!_this.mainWindow) {
                        return;
                    }
                    _this.mainWindow.webContents.openDevTools();
                });
            }
            ;
            _this.mainWindow.once('ready-to-show', function () {
                if (!_this.mainWindow) {
                    return;
                }
                // mainWindow.setMenu(null);
                _this.mainWindow.show();
            });
            // mainWindow.onbeforeunload = (e) => {
            //     // Prevent Command-R from unloading the window contents.
            //     e.returnValue = false;
            // };
            // ウィンドウが閉じられたらアプリも終了
            _this.mainWindow.on("closed", function () {
                _this.mainWindow = null;
            });
        });
    };
    return MainProcess;
}());
exports.MainProcess = MainProcess;
