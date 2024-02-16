document.addEventListener('DOMContentLoaded', function () {
  evenOddElements = 0  

  document.getElementById("summary_btn").addEventListener("click", (e)=> {

    //if (evenNumber % 2 == 0) {
    e.target.style.backgroundColor = "#fff";
    e.target.style.zIndex = 5;
    e.target.style.scale = 1.1;
    e.target.style.padding = "10px 8px";
    e.target.style.borderTop = "1px solid black";
    e.target.style.borderLeft = "1px solid black";
    e.target.style.borderRight = "1px solid black";
    e.target.style.marginRight = "4px";
    e.target.style.marginLeft = "4px";
    e.target.style.marginBottom = "0px";

    document.getElementById("analytics").style.display = "none";
    document.getElementById("data").style.display = "none";
    document.getElementById("summary").style.display = "block";
    document.getElementById("elements").style.display = "none";
  
    //evenNumber +=1;    
    //} else if (evenNumber % 2 !== 0) {

      const eleBtn = document.getElementById("elements_btn")
      eleBtn.style.backgroundColor = "#F0F0F0";
        eleBtn.style.zIndex = 1;
        eleBtn.style.scale = 1;
        eleBtn.style.padding = "6px 12px";
        eleBtn.style.marginRight = "auto";
        eleBtn.style.border = "0px";

        
        const anaBtn = document.getElementById("analytics_btn")
        anaBtn.style.backgroundColor = "#F0F0F0";
        anaBtn.style.zIndex = 1;
        anaBtn.style.scale = 1;
        anaBtn.style.padding = "6px 12px";
        anaBtn.style.marginRight = "auto";  
        anaBtn.style.border = "0px";      
        
        const dataBtn = document.getElementById("data_btn")
        dataBtn.style.backgroundColor = "#F0F0F0";
        dataBtn.style.zIndex = 1;
        dataBtn.style.scale = 1;
        dataBtn.style.padding = "6px 12px";
        dataBtn.style.marginRight = "auto";   
        dataBtn.style.border = "0px";       


      })

      /* e.target.style.backgroundColor = "#F0F0F0"
      e.target.style.zIndex = 1;
      e.target.style.scale = 1;
      e.target.style.padding = "6px 12px";
      e.target.style.marginRight = "auto";
  
      document.getElementById("analytics").style.display = "none";
      document.getElementById("data").style.display = "none";
      document.getElementById("summary").style.display = "block";
      document.getElementById("elements").style.display = "none";
  
      evenNumber +=1;     */

//      }
  
//  })




  document.getElementById("elements_btn").addEventListener("click", (e)=> {

    e.target.style.backgroundColor = "#fff"
    e.target.style.zIndex = 5;
    e.target.style.scale = 1.1;
    e.target.style.padding = "10px 8px";
    e.target.style.marginRight = "4px";
    e.target.style.marginLeft = "4px";
    e.target.style.borderTop = "1px solid black";
    e.target.style.borderLeft = "1px solid black";
    e.target.style.borderRight = "1px solid black";

    document.getElementById("analytics").style.display = "none";
    document.getElementById("data").style.display = "none";
    document.getElementById("summary").style.display = "none";
    document.getElementById("elements").style.display = "block";


    const sumBtn = document.getElementById("summary_btn")
      sumBtn.style.backgroundColor = "#F0F0F0";
        sumBtn.style.zIndex = 1;
        sumBtn.style.scale = 1;
        sumBtn.style.padding = "6px 12px";
        sumBtn.style.marginRight = "auto";  
        sumBtn.style.border = "0px";
        
        const anaBtn = document.getElementById("analytics_btn")
        anaBtn.style.backgroundColor = "#F0F0F0";
        anaBtn.style.zIndex = 1;
        anaBtn.style.scale = 1;
        anaBtn.style.padding = "6px 12px";
        anaBtn.style.marginRight = "auto";   
        anaBtn.style.border = "0px";     
        
        const dataBtn = document.getElementById("data_btn")
        dataBtn.style.backgroundColor = "#F0F0F0";
        dataBtn.style.zIndex = 1;
        dataBtn.style.scale = 1;
        dataBtn.style.padding = "6px 12px";
        dataBtn.style.marginRight = "auto"; 
        dataBtn.style.border = "0px";      
   
  })


  document.getElementById("analytics_btn").addEventListener("click", (e)=> {

      e.target.style.backgroundColor = "#fff"
      e.target.style.zIndex = 5;
      e.target.style.scale = 1.1;
      e.target.style.padding = "10px 8px";
      e.target.style.marginRight = "4px";
      e.target.style.marginLeft = "4px";
      e.target.style.borderTop = "1px solid black";
      e.target.style.borderLeft = "1px solid black";
      e.target.style.borderRight = "1px solid black";


    document.getElementById("elements").style.display = "none";
    document.getElementById("data").style.display = "none";  
    document.getElementById("summary").style.display = "none";
    document.getElementById("analytics").style.display = "block";

    

    const eleBtn = document.getElementById("elements_btn")
      eleBtn.style.backgroundColor = "#F0F0F0";
        eleBtn.style.zIndex = 1;
        eleBtn.style.scale = 1;
        eleBtn.style.padding = "6px 12px";
        eleBtn.style.marginRight = "auto";  
        eleBtn.style.border = "0px";
        
        const sumBtn = document.getElementById("summary_btn")
        sumBtn.style.backgroundColor = "#F0F0F0";
        sumBtn.style.zIndex = 1;
        sumBtn.style.scale = 1;
        sumBtn.style.padding = "6px 12px";
        sumBtn.style.marginRight = "auto";    
        sumBtn.style.border = "0px";
        
        const dataBtn = document.getElementById("data_btn")
        dataBtn.style.backgroundColor = "#F0F0F0";
        dataBtn.style.zIndex = 1;
        dataBtn.style.scale = 1;
        dataBtn.style.padding = "6px 12px";
        dataBtn.style.marginRight = "auto";   
        dataBtn.style.border = "0px";
  })


  document.getElementById("data_btn").addEventListener("click", (e)=> {
    
      e.target.style.backgroundColor = "#fff"
      e.target.style.zIndex = 5;
      e.target.style.scale = 1.1;
      e.target.style.padding = "10px 8px";
      e.target.style.marginRight = "4px";
      e.target.style.marginLeft = "4px";
      e.target.style.borderTop = "1px solid black";
      e.target.style.borderLeft = "1px solid black";
      e.target.style.borderRight = "1px solid black";

      
    document.getElementById("analytics").style.display = "none";
    document.getElementById("elements").style.display = "none";
    document.getElementById("summary").style.display = "none";
    document.getElementById("data").style.display = "block";
  
   
    const eleBtn = document.getElementById("elements_btn");
      eleBtn.style.backgroundColor = "#F0F0F0";
        eleBtn.style.zIndex = 1;
        eleBtn.style.scale = 1;
        eleBtn.style.padding = "6px 12px";
        eleBtn.style.marginRight = "auto";  
        eleBtn.style.border = "0px";
        
        const anaBtn = document.getElementById("analytics_btn")
        anaBtn.style.backgroundColor = "#F0F0F0";
        anaBtn.style.zIndex = 1;
        anaBtn.style.scale = 1;
        anaBtn.style.padding = "6px 12px";
        anaBtn.style.marginRight = "auto"; 
        anaBtn.style.border = "0px";       
        
        const sumBtn = document.getElementById("summary_btn")
        sumBtn.style.backgroundColor = "#F0F0F0";
        sumBtn.style.zIndex = 1;
        sumBtn.style.scale = 1;
        sumBtn.style.padding = "6px 12px";
        sumBtn.style.marginRight = "auto";   
        sumBtn.style.border = "0px";    

  })

  document.getElementById("elements_btn").click();


    const init = document.getElementById('assignColorsBtn');
    const assignColorsBtn = document.querySelector('.checkbox');
    const messageElement = document.getElementById('header_message');
    const h1 = document.querySelectorAll('.h1_value');
    const h2 = document.querySelectorAll('.h2_value');
    const h3 = document.querySelectorAll('.h3_value');
    const h4 = document.querySelectorAll('.h4_value');
    const h5 = document.querySelectorAll('.h5_value');
    const h6 = document.querySelectorAll('.h6_value');
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const keyword = document.getElementById('keyword');
  
    init.addEventListener('click', function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
       chrome.tabs.sendMessage(tabs[0].id, { action: 'init' }, function (response) {
      
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

    assignColorsBtn.addEventListener('change', function (event) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
       chrome.tabs.sendMessage(tabs[0].id, { action: 'assignColorsToElements', check: event.target.checked }, function (response) {
      
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
  
    async function setMessage(response) {  
      await response.result.forEach(element => {
        messageElement.innerHTML += element;
        console.log(messageElement);  
      });   
      
      h1.forEach(h1=>{
        h1.innerHTML = response.h1
      })
      h2.forEach(h2=>{
        h2.innerHTML = response.h2
      })
      h3.forEach(h3=>{
        h3.innerHTML = response.h3
      })
      h4.forEach(h4=>{
        h4.innerHTML = response.h4
      })
      h5.forEach(h5=>{
        h5.innerHTML = response.h5
      })
      h6.forEach(h6=>{
        h6.innerHTML = response.h6
      })
      title.innerHTML += response.title
      description.innerHTML += response.description ? response.description : "No description found"
      keyword.innerHTML += response.keyword ? response.keyword : "No keyword found"
    }
    
    init.click();
  });
  


