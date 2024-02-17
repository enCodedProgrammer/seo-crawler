const messageElement = document.getElementById('message');


// let h1 = document.querySelector('h1');
// let h2 = document.querySelector('h2');
// let h3 = document.querySelector('h3');
// let h4 = document.querySelector('h4');
// let h5 = document.querySelector('h5');
// let h6 = document.querySelector('h6');

// let h1color;
// let h2color;
// let h3color;
// let h4color;
// let h5color;
// let h6color;


// if (h1) {
// h1color = window.getComputedStyle(h1).getPropertyValue('color');
// }
// if (h2) {
// h2color = window.getComputedStyle(h2).getPropertyValue('color');
// }
// if (h3) {
//   h3color = window.getComputedStyle(h3).getPropertyValue('color');
// }
// if (h4) {
//   h4color = window.getComputedStyle(h4).getPropertyValue('color');
// }
// if (h5) {
//   h5color = window.getComputedStyle(h5).getPropertyValue('color');
// }
// if (h6) { 
//   h6color = window.getComputedStyle(h6).getPropertyValue('color');
// }

// console.log("h1color", h1color, h2color, h3color, h4color, h5color, h6color);

  let h11Color = []
  let h11 = document.querySelectorAll('h1');
  h11.forEach(h1 => {
    console.log("h1", h1);
  h11Color.push(window.getComputedStyle(h1).getPropertyValue('color'));
  })
  console.log("h11color", h11Color);


  
  let h22Color = []
  let h22 = document.querySelectorAll('h2');
  h22.forEach(h2 => {
    console.log("h2", h2);
  h22Color.push(window.getComputedStyle(h2).getPropertyValue('color'));
  })
  console.log("h22color", h22Color);

  
  let h33Color = []
  let h33 = document.querySelectorAll('h3');
  h33.forEach(h3 => {
    console.log("h3", h3);
  h33Color.push(window.getComputedStyle(h3).getPropertyValue('color'));
  })
  console.log("h33color", h33Color);
  
  let h44Color = []
  let h44 = document.querySelectorAll('h4');
  h44.forEach(h4 => {
    console.log("h4", h4);
  h44Color.push(window.getComputedStyle(h4).getPropertyValue('color'));
  })
  console.log("h44color", h44Color);

  
  let h55Color = []
  let h55 = document.querySelectorAll('h5');
  h55.forEach(h5 => {
    console.log("h5", h5);
  h55Color.push(window.getComputedStyle(h5).getPropertyValue('color'));
  })
  console.log("h55color", h55Color);

  
  let h66Color = []
  let h66 = document.querySelectorAll('h6');
  h66.forEach(h6 => {
    console.log("h6", h6);
  h66Color.push(window.getComputedStyle(h6).getPropertyValue('color'));
  })
  console.log("h66color", h66Color);




// Listen for the message from the popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'init') {
        //console.log('Content script loaded');    
        setTimeout(() => {
          // Once the asynchronous operation is complete, send a response back to the popup
          const result = init();
              // Send the result back to the popup
              sendResponse({result:result.headerInner, h1:result.h1, h2:result.h2, h3:result.h3, h4:result.h4, h5:result.h5, h6:result.h6, img: result.img, imgSrc: result.imgSrc, imgAlt: result.imgAlt, title: result.title, description: result.description, keyword: result.keyword  });
              //console.log("array of tags", result.headerInner);
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
        //console.log("checkbox", request.check);
    }, 1000); // Simulate a delay of 1 second     
    // Return true to indicate that we will be responding asynchronously
    return true;
}
});

// Optionally, you can listen for visibility changes in the content script as well
chrome.runtime.onConnect.addListener((port) => {
  if (port.name === "popupVisibility") {
    port.onDisconnect.addListener(() => {
      // Popup is closed, execute your desired functionality here
      console.log("Popup closed");
    });
  }
});





function init() {
  const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, img'); // Include h1 to h6 and p tags
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
  let image = 0;
  let imageSrc = [];
  let imageAlt = [];

  let title = pageTitle.innerHTML;
  let description;
  let keyword;

  metaTag.forEach(meta=> {
    //console.log("meta", meta);
    if (meta.getAttribute("name") == "description") {
      //console.log("description", meta.content);
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

  //console.log("This is the first H1", title);


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
    //console.log("tagname innerHTML", childInnerHTML);
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
      case 'img':
        image +=1;
        if (element.src.endsWith('jpg') || element.src.endsWith('jpeg') || element.src.endsWith('png') || element.src.endsWith('svg')) {
          imageSrc.push(element.src);
          imageAlt.push(element.alt);
        };
        break;

      // Add more cases for other elements

    }
  });
console.log("image number", image);
console.log("image src", imageSrc);
console.log("image alt", imageAlt);
  return ({headerInner: childInnerHTML, h1:h1, h2:h2, h3:h3, h4:h4, h5:h5, h6:h6, img: image, imgSrc: imageSrc, imgAlt: imageAlt, title: title, description: description, keyword: keyword});
}














async function assignColorsToElements(event) {
  const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6'); // Include h1 to h6 and p tags
  //console.log("event", event);


  for (let i=0; i<elements.length; i++) {
    let color;
    
    if (event) {
    switch (elements[i].tagName.toLowerCase()) {
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

    } 

    elements[i].style.color = color;
  }
  // } else {
  //   color = 'black';
  // }


  }

  //console.log("elementtttt", h1color, h2color, h3color, h4color, h5color, h6color);

  

  // for (let j=0; j<elements.length; j++) {
  //   if(!event) {
  //     let resetColor;
  //   switch (elements[j].tagName.toLowerCase()) {
  //     case 'h1':
  //       resetColor = h1color;
  //       break;
  //     case 'h2':
  //       resetColor = h2color;
  //       break;
  //     case 'h3':
  //       resetColor = h3color;
  //       break;
  //     case 'h4':
  //       resetColor = h4color;
  //       break;
  //     case 'h5':
  //       resetColor = h5color;
  //       break;
  //     case 'h6':
  //       resetColor = h6color;
  //       break;
  //   }
  //   elements[j].style.color = resetColor;
  //   console.log("resetcolor", resetColor);
  // };


  // }     

  h11.forEach((ele, index) => {
    if (ele && !event) {
      console.log("h1color", h11Color[index]);
      ele.style.color = h11Color[index];
    }
  });

  h22.forEach((ele, index) => {
    if (ele && !event) {
      console.log("h2color", h22Color[index]);
      ele.style.color = h22Color[index];
    }
  });

  h33.forEach((ele, index) => {
    if (ele && !event) {
      console.log("h3color", h33Color[index]);
      ele.style.color = h33Color[index];
    }
  });

  h44.forEach((ele, index) => {
    if (ele && !event) {
      console.log("h4color", h44Color[index]);
      ele.style.color = h44Color[index];
    }
  });

  h55.forEach((ele, index) => {
    if (ele && !event) {
      console.log("h5color", h55Color[index]);
      ele.style.color = h55Color[index];
    }
  });

  h66.forEach((ele, index) => {
    if (ele && !event) {
      console.log("h6color", h66Color[index]);
      ele.style.color = h66Color[index];
    }
  });
}



document.addEventListener('DOMContentLoaded', init);
document.addEventListener('DOMContentLoaded', assignColorsToElements);
