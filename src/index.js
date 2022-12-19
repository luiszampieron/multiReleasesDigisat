const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { DB_NAME } = require("./Utils/Constantes");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    autoHideMenuBar: true,
    minHeight: 820,
    minWidth: 1280,
    maxHeight: 820,
    maxWidth: 1280,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "views/home/index.html"));

  mainWindow.webContents.openDevTools();
};


app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});



