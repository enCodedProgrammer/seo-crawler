document.addEventListener('DOMContentLoaded', function () {
    const assignColorsBtn = document.getElementById('assignColorsBtn');
    const messageElement = document.getElementById('message');
  
    assignColorsBtn.addEventListener('click', function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
       chrome.tabs.sendMessage(tabs[0].id, { action: 'assignColorsToElements' }, function (response) {
      
        console.log("res", response);  
          if (chrome.runtime.lastError) {
            setMessage('Error assigning colors. Please try again.');
          } else {
            console.log("response", response);
            setMessage(response);
          }
        });
      });
    });
  
    function setMessage(response) {  
      response.forEach(element => {
        messageElement.innerHTML += `<div>${element.innerHTML}</div>`;
        console.log(messageElement);  
      });      

    }
  });
  