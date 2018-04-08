"use strict";
// "use strct";
exports.__esModule = true;
var electron_1 = require("electron");
var os = require("os");
// const path = require('path');
// const os = require('os');
// const globalShortcut = electron.globalShortcut;
// const config = require(path.join(__dirname, 'package.json'))
// アプリケーションをコントロールするモジュール
// const app = electron.app;
// ウィンドウを作成するモジュール
// const BrowserWindow = electron.BrowserWindow;
// import { BrowserWindow } from "electron";
// // app.setName(config.productName)
// let name = config.mame;
// let title = config.mame;
var name = 'app-name';
electron_1.app.setName(name);
var title = 'Sample App';
// メインウィンドウはGCされないようにグローバル宣言
var mainWindow = null;
// app.on('window-all-closed', () => { app.quit() })
// 全てのウィンドウが閉じたら終了
electron_1.app.on("window-all-closed", function () {
    if (process.platform != "darwin") {
        electron_1.app.quit();
    }
});
// Electronの初期化完了後に実行
electron_1.app.on("ready", function () {
    //ウィンドウサイズを1280*720（フレームサイズを含まない）に設定する
    mainWindow = new electron_1.BrowserWindow({
        title: title,
        width: 1280,
        height: 720,
        useContentSize: true,
        show: false,
        webPreferences: {
            nodeIntegration: true,
            defaultEncoding: 'UTF-8'
        }
    });
    mainWindow.webContents.openDevTools();
    //使用するhtmlファイルを指定する
    var htmlPath = "file://" + __dirname + "/index.html";
    console.log("htmlPath=%s", htmlPath);
    mainWindow.loadURL(htmlPath);
    // Enable keyboard shortcuts for Developer Tools on various platforms.
    var platform = os.platform();
    if (platform === 'darwin') {
        electron_1.globalShortcut.register('Command+Option+I', function () {
            if (!mainWindow) {
                return;
            }
            mainWindow.webContents.openDevTools();
        });
    }
    else if (platform === 'linux' || platform === 'win32') {
        electron_1.globalShortcut.register('Control+Shift+I', function () {
            if (!mainWindow) {
                return;
            }
            mainWindow.webContents.openDevTools();
        });
    }
    ;
    mainWindow.once('ready-to-show', function () {
        if (!mainWindow) {
            return;
        }
        // mainWindow.setMenu(null);
        mainWindow.show();
    });
    // mainWindow.onbeforeunload = (e) => {
    //     // Prevent Command-R from unloading the window contents.
    //     e.returnValue = false;
    // };
    // ウィンドウが閉じられたらアプリも終了
    mainWindow.on("closed", function () {
        mainWindow = null;
    });
});
// 'use strict'
// const electron = require('electron')
// const app = electron.app
// const globalShortcut = electron.globalShortcut
// const os = require('os')
// const path = require('path')
// const config = require(path.join(__dirname, 'package.json'))
// const BrowserWindow = electron.BrowserWindow
// app.setName(config.productName)
// var mainWindow = null
// app.on('ready', function () {
//     mainWindow = new BrowserWindow({
//         backgroundColor: 'lightgray',
//         title: config.productName,
//         show: false,
//         webPreferences: {
//             nodeIntegration: true,
//             defaultEncoding: 'UTF-8'
//         }
//     })
//     mainWindow.loadURL(`file://${__dirname}/app/index.html`);
//     // Enable keyboard shortcuts for Developer Tools on various platforms.
//     let platform = os.platform();
//     if (platform === 'darwin') {
//         globalShortcut.register('Command+Option+I', () => {
//             mainWindow.webContents.openDevTools();
//         });
//     } else if (platform === 'linux' || platform === 'win32') {
//         globalShortcut.register('Control+Shift+I', () => {
//             mainWindow.webContents.openDevTools();
//         });
//     };
//     mainWindow.once('ready-to-show', () => {
//         mainWindow.setMenu(null);
//         mainWindow.show();
//     });
//     mainWindow.onbeforeunload = (e) => {
//         // Prevent Command-R from unloading the window contents.
//         e.returnValue = false;
//     };
//     mainWindow.on('closed', function () {
//         mainWindow = null;
//     });
// })
// // app.on('window-all-closed', () => { app.quit() })
// // 全てのウィンドウが閉じたら終了
// app.on("window-all-closed", () => {
//     if (process.platform != "darwin") {
//         app.quit();
//     }
// });
