"use strct";

// Electronのモジュール
const electron = require("electron");

const path = require('path');
const os = require('os');

const globalShortcut = electron.globalShortcut;
// const config = require(path.join(__dirname, 'package.json'))
// アプリケーションをコントロールするモジュール
const app = electron.app;

// ウィンドウを作成するモジュール
const BrowserWindow = electron.BrowserWindow;

// // app.setName(config.productName)
// let name = config.mame;
// let title = config.mame;
let name = 'app-name';
app.setName(name);

let title = 'Sample App';

// メインウィンドウはGCされないようにグローバル宣言
let mainWindow = null;

// app.on('window-all-closed', () => { app.quit() })
// 全てのウィンドウが閉じたら終了
app.on("window-all-closed", () => {
    if (process.platform != "darwin") {
        app.quit();
    }
});


// Electronの初期化完了後に実行
app.on("ready", () => {
    //ウィンドウサイズを1280*720（フレームサイズを含まない）に設定する
    mainWindow = new BrowserWindow({
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
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    // Enable keyboard shortcuts for Developer Tools on various platforms.
    let platform = os.platform();
    if (platform === 'darwin') {
        globalShortcut.register('Command+Option+I', () => {
            mainWindow.webContents.openDevTools();
        });
    } else if (platform === 'linux' || platform === 'win32') {
        globalShortcut.register('Control+Shift+I', () => {
            mainWindow.webContents.openDevTools();
        });
    };

    mainWindow.once('ready-to-show', () => {
        // mainWindow.setMenu(null);
        mainWindow.show();
    });

    // mainWindow.onbeforeunload = (e) => {
    //     // Prevent Command-R from unloading the window contents.
    //     e.returnValue = false;
    // };

    // ウィンドウが閉じられたらアプリも終了
    mainWindow.on("closed", () => {
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
