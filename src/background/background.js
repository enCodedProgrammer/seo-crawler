chrome.action.onClicked.addListener((tab) => {
    chrome.action.setPopup({ popup: "../public/popup.html" }); // Open the popup
    chrome.action.openPopup({ popup: "../public/popup.html" });

  });
  