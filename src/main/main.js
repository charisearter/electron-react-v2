const { app, BrowserWindow } = require('electron')


app.whenReady().then(() => {
  
  // Create a new window
  let window = new BrowserWindow({
    width: 800,
    height: 600
  })
  
})