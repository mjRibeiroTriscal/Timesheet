/**
    * @description      : 
    * @author           : mario
    * @group            : 
    * @created          : 23/04/2023 - 19:57:23
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 23/04/2023
    * - Author          : mario
    * - Modification    : 
**/

const { app, BrowserWindow } = require('electron');
const path = require('path');

const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    const startUrl = isDev
        ? 'http://localhost:3000'
        : new URL('file://' + path.join(__dirname, '../build/index.html')).toString();

    mainWindow.loadURL(startUrl);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
