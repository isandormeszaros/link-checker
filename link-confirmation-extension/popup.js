// popup.js
document.getElementById('openLink').addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const url = tabs[0].url;
      const confirmOpen = window.confirm('Are you sure you want to open the link?\n\n' + url);
  
      if (confirmOpen) {
        chrome.tabs.create({ url: url });
      }
    });
  });
  