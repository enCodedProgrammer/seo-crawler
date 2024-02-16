const messageElement = document.getElementById('message');

// Listen for the message from the popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'init') {
        console.log('Content script loaded');    
        setTimeout(() => {
          // Once the asynchronous operation is complete, send a response back to the popup
          const result = init();
              // Send the result back to the popup
              sendResponse({result:result.headerInner, h1:result.h1, h2:result.h2, h3:result.h3, h4:result.h4, h5:result.h5, h6:result.h6, title: result.title, description: result.description, keyword: result.keyword  });
              console.log("array of tags", result.headerInner);
      }, 1000); // Simulate a delay of 1 second     
      // Return true to indicate that we will be responding asynchronously
      return true;
  }
  });
  


// Listen for the message from the popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'assignColorsToElements') {
      console.log('highlight color loaded');    
      setTimeout(() => {
        // Once the asynchronous operation is complete, send a response back to the popup
        assignColorsToElements(request.check);
        console.log("checkbox", request.check);
    }, 1000); // Simulate a delay of 1 second     
    // Return true to indicate that we will be responding asynchronously
    return true;
}
});





function init() {
  const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6'); // Include h1 to h6 and p tags
  const pageTitle = document.querySelector('title');
  const metaTag = document.querySelectorAll('meta');


  let newElement = [];
  let childInnerHTML = [];

  let h1 = 0;
  let h2 = 0;
  let h3 = 0;
  let h4 = 0;
  let h5 = 0;
  let h6 = 0;

  let title = pageTitle.innerHTML;
  let description;
  let keyword;

  metaTag.forEach(meta=> {
    console.log("meta", meta);
    if (meta.getAttribute("name") == "description") {
      console.log("description", meta.content);
      description = meta.content;
    } else if(meta.getAttribute("name") == "keywords") {
      keyword = meta.content;
    }
  })

  // elements.forEach(ele=> {
  //   if (ele.tagName.toLowerCase() == "h1") {
  //       ele.childNodes.forEach(node => {
  //         for (let i=0; i<1; i++){
  //         title.push(node.textContent)
  //       }          
  //     })
  //   }
  // })

  console.log("This is the first H1", title);


  elements.forEach(element => {

    
    element.childNodes.forEach(node => {

    // Iterate over the child nodes of the h1 element
    //element.childNodes.forEach(node => {
      if (node.nodeType === Node.ELEMENT_NODE) { // Check if the node is an element
        function recursion(node) {
           //check if the node element does not have another node element inside then return
          if(!node.childNodes) {
            return;
         }
          // check if the node element has another node element inside then iterate over the child nodes
        else if (node.childNodes) {
         node.childNodes.forEach(childNode => {
        if (childNode.nodeType === Node.TEXT_NODE) { // Check if the node is a text node
              childInnerHTML.push(`<${element.tagName}>${element.tagName} ${node.textContent}</${element.tagName}>`); // Concatenate the text content of the text node
            }
          })
        }
        }
        recursion(node);
      } else if (node.nodeType === Node.TEXT_NODE) { // Check if the node is a text node
        childInnerHTML.push(`<${element.tagName}>${element.tagName} ${node.textContent}</${element.tagName}>`); // Concatenate the text content of the text node
      }
    });


    const tagName = element.tagName.toLowerCase();
    //console.log("tagname", tagName);
    const created = document.createElement(tagName);
    created.innerHTML = {childInnerHTML};
    console.log("tagname innerHTML", childInnerHTML);
    //console.log("tagname populated", created);
    newElement.push(created);



    // Check if the element contains a <b> tag
    const hasBoldTag = element.querySelector('strong');

    switch (element.tagName.toLowerCase()) {
      case 'h1':
        h1 +=1;        
        break;
      case 'h2':
        h2 +=1;        
        break;
      case 'h3':
        h3 +=1;        
        break;
      case 'h4':
        h4 +=1;        
        break;
      case 'h5':
        h5 +=1;       
        break;
      case 'h6':
        h6 +=1;        
        break;
      case 'p':
        break;

      // Add more cases for other elements

    }
  });

  return ({headerInner: childInnerHTML, h1:h1, h2:h2, h3:h3, h4:h4, h5:h5, h6:h6, title: title, description: description, keyword: keyword});
}














function assignColorsToElements(event) {
  const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6'); // Include h1 to h6 and p tags
  //const event = document.querySelector("checkbox");
  console.log("event", event);

  elements.forEach(element => {

    let color;

    // Check if the element contains a <b> tag
    const hasBoldTag = element.querySelector('strong');

    
    if(event) {
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
  } else {
    color = 'black';
  }

    // Apply different style if <b> tag is present
    if (hasBoldTag) {
      //element.style.fontWeight = 'bold';
      color = color; // You can adjust this for better visibility
    }
    element.style.color = color;

  });
}



document.addEventListener('DOMContentLoaded', init);
document.addEventListener('DOMContentLoaded', assignColorsToElements);
