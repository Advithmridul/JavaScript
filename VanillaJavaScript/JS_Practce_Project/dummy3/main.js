const { app, BrowserWindow, ipcMain } = require('electron');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    win.loadFile('index.html');

    // Handle navigation events
    ipcMain.on('navigate-back', () => {
        if (win.webContents.canGoBack()) {
            win.webContents.goBack();
        }
    });

    ipcMain.on('navigate-forward', () => {
        if (win.webContents.canGoForward()) {
            win.webContents.goForward();
        }
    });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
