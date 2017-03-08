const path = require('path')
const url = require('url')

const {app, BrowserWindow} = require('electron')

require('electron-debug')({ showDevTools: true })

// グローバル参照をしないと、GCに自動的に閉じられてしまう。
let mainWindow

function onClosed () {
  mainWindow = null
}

function createMainWindow () {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    frame: true
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, '../renderer/index.html'),
    protocol: 'file:'
  }))

  // DevTools.
  if (process.env.NODE_ENV === 'development') {
    win.webContents.openDevTools({ mode: 'detach' })
  }

  win.center()
  win.setTitle('競合')

  win.on('closed', onClosed)

  return win
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (!mainWindow) {
    mainWindow = createMainWindow()
  }
})

app.on('ready', () => {
  mainWindow = createMainWindow()
})
