console.log("START");

const packager = require("electron-packager");
const path = require("path");
// const rootDir = path.join(__dirname, "app");
// const rootDir = path.join(__dirname);

let packageJsonPath = path.join(__dirname, "package.json");
console.log("packageJsonPath=%s", packageJsonPath);

const package = require(packageJsonPath);
console.dir(package);
// console.log("package=%s", package);


packager({
    name: package["name"],
    dir: __dirname,// ソースフォルダのパス
    out: path.join(__dirname, "dist"),// 出力先フォルダのパス
    // icon: path.join(rootDir, "icon.ico"),// アイコンのパス
    platform: "win32",
    arch: "x64",
    version: "1.8.4",// Electronのバージョン
    overwrite: true,// 上書き
    asar: false,// asarパッケージ化
    true: true,
    // ignore: "((tsconfig|tslint|package-lock|.eslintrc).json|(electron-pakcager|webpack.config).js|src|.vscode)",
    ignore: [
        /src|.vscode/,
        /(tsconfig|tslint|package-lock|.eslintrc).json/,
        /(electron-pakcager|webpack.config).js/
        // /.+.js/
        // /^ (electron - pakcager | webpack.config).js$ /
        // "(electron-pakcager|webpack.config).js"
    ],
    "app-version": package["version"],// アプリバージョン
    "app-copyright": "Copyright (C) 2016 " + package["author"] + ".",// コピーライト

    "version-string": {// Windowsのみのオプション
        CompanyName: "totoraj.net",
        FileDescription: package["name"],
        OriginalFilename: package["name"] + ".exe",
        ProductName: package["name"],
        InternalName: package["name"]
    }

}, function (err, appPaths) {// 完了時のコールバック
    if (err) console.log(err);
    console.log("Done: " + appPaths);
});
