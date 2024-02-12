const messageElement = document.getElementById('message');

// Listen for the message from the popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'assignColorsToElements') {
        console.log('Content script loaded');
      
        
        // Perform an asynchronous operation (e.g., fetching data)
        // Here, we simulate an asynchronous operation using setTimeout
        setTimeout(() => {
          // Once the asynchronous operation is complete, send a response back to the popup
          const result = assignColorsToElements();
              // Send the result back to the popup
              sendResponse(result);
              console.log("result", result);

      }, 1000); // Simulate a delay of 1 second
     
      // Return true to indicate that we will be responding asynchronously
      return true;
  }






  });
  

// contentScript.js

// contentScript.js




function assignColorsToElements() {
  const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6'); // Include h1 to h6 and p tags
  let newElement = [];
  let childInnerHTML = '';

  elements.forEach(element => {




    // Iterate over the child nodes of the h1 element
    element.childNodes.forEach(node => {
      if (node.nodeType === Node.ELEMENT_NODE) { // Check if the node is an element
        function recursion(node) {
          // check if the node element does not have another node element inside then return
          if(!node.childNodes) {
            return;
          }
          // check if the node element has another node element inside then iterate over the child nodes
        else if (node.childNodes) {
          node.childNodes.forEach(childNode => {
        if (childNode.nodeType === Node.TEXT_NODE) { // Check if the node is a text node
              childInnerHTML += `<div>${childNode.textContent}</div>`; // Concatenate the text content of the text node
            }
          })
        }
        }
        recursion(node);
      } else if (node.nodeType === Node.TEXT_NODE) { // Check if the node is a text node
        childInnerHTML += `<div>${node.textContent}</div>`; // Concatenate the text content of the text node
      }
    });



    const tagName = element.tagName.toLowerCase();
    const created = document.createElement(tagName);
    created.innerHTML = `<div>${childInnerHTML}</div>`;
    console.log("n", created);
    newElement.push(created);


    let color;

    // Check if the element contains a <b> tag
    const hasBoldTag = element.querySelector('strong');

    switch (element.tagName.toLowerCase()) {
      case 'h1':
        color = 'green';
        break;
      case 'h2':
        color = 'yellow';
        break;
      case 'h3':
        color = 'red';
        break;
      case 'h4':
        color = 'orange';
        break;
      case 'h5':
        color = 'blue';
        break;
      case 'h6':
        color = 'purple';
        break;
      case 'p':
        color = 'brown';
        break;

      // Add more cases for other elements

      default:
        color = 'black';
    }

    // Apply different style if <b> tag is present
    if (hasBoldTag) {
      //element.style.fontWeight = 'bold';
      color = color; // You can adjust this for better visibility
    }

    element.style.color = color;
  });

  return newElement;
}

document.addEventListener('DOMContentLoaded', assignColorsToElements);