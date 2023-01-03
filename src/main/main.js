const { app, BrowserWindow } = require('electron');

function createWindow() {
	// Create a new window
	const window = new BrowserWindow({
		width: 800,
		height: 600,
		show: false,
		backgroundColor: '#002b36',
	});

	// Event listeners on the window
	window.webContents.on('did-finish-load', () => {
		window.show();
		window.focus();
	});

	// Load the HTML file
	window.loadFile('index.html');
}

// Electron finishes initializing
app.whenReady().then()(() => {
	createWindow();

	app.on('activate', () => {
		// for macOS
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	});
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
