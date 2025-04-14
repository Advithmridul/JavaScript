const { ipcRenderer } = require('electron');

document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchQuery').value;
    const searchEngine = document.getElementById('searchEngine').value;

    if (!query) {
        alert("Please enter a search query.");
        return;
    }

    let searchUrl;
    switch (searchEngine) {
        case 'google':
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            break;
        case 'bing':
            searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
            break;
        case 'duckduckgo':
            searchUrl = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
            break;
        default:
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            break;
    }

    window.location.href = searchUrl;
});

// Handle forward and backward navigation
document.getElementById('backButton').addEventListener('click', () => {
    ipcRenderer.send('navigate-back');
});

document.getElementById('forwardButton').addEventListener('click', () => {
    ipcRenderer.send('navigate-forward');
});

// Check network status
function checkNetworkStatus() {
    const networkStatus = document.getElementById('networkStatus');
    if (!navigator.onLine) {
        networkStatus.classList.remove('hidden');
    } else {
        networkStatus.classList.add('hidden');
    }
}

// Listen for network changes
window.addEventListener('load', checkNetworkStatus);
window.addEventListener('online', checkNetworkStatus);
window.addEventListener('offline', checkNetworkStatus);
