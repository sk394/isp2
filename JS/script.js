//Color change JS
// Corrected variable name and added 'let'
let selection = [...document.querySelectorAll('.section')];
let lastScrollTop = window.scrollY;

document.body.style.background = "black";

window.addEventListener('scroll', onScroll);

function onScroll() {
  const scrollTop = window.scrollY;

  const section = selection
    .map(section => {
      const el = section;
      const rect = el.getBoundingClientRect();
      return {el, rect};
    })
    .find(section => section.rect.bottom >= (window.innerHeight * 0.5));

  // Check if section exists before calling getColorFromClass
  if (section) {
    document.body.style.background = getColorFromClass(section.el);
  } else {
    // Handle the case when no section is found
    // You might want to set a default background color
    document.body.style.background = "black";
  }
}

function getColorFromClass(section) {
  // Simplified the code to get the color class
  const colorClass = [...section.classList].find(className => className.startsWith('color'));
  return colorClass ? colorClass.split("-").pop() : "defaultColor";
}

// Dynamic Web Page Generator JS
var headerText = "This is header.";
var quoteText = "This is quote.";
var imageSrc = "";
var paragraph1Text = "This is paragraph 1.";
var paragraph2Text = "This is paragraph 2.";
var linkUrl = "https://www.google.com";
var buttonText = "Drag Me";
var backgroundColor ="#ffffff";
var fontSize = "16px";
var fontColor ="#000000";
var marginsize = "10px";
var tableRows = 3;
var tableColumns = 3;
var includeTable = false;
var includeGPT = false;
var includeList = false;
var authorText = "Author";
var youtubeUrl = "https://www.youtube.com/embed/5qap5aO4i9A";
var musicUrl = "";
var currentDate = new Date();

// Format the date as YYYY-MM-DD
var formattedDate = currentDate.toISOString().split('T')[0];
var myPage = null;

function openWindow(){
    if(myPage !=null) myPage.close();
    myPage = window.open("","myPage","width=800,height=800");
    var style = 
      "<style>"+
      "body { z-index:2; background-color: "+backgroundColor+"; display:flex; flex-direction:column; }"+
      "header{text-align:center;}"+
      "h1{padding-top:60px; font-size:46px !important; letter-spacing:-0.015em;}"+
      "h6{font-style:italic; font-size:12px; padding:5px 0 20px;}"+
      "img{padding-top:20px; pading-bottom:10px;}"+
      `article{
        padding:0 25px 100px;
        margin: 0 auto;
        max-width: 700px;
        font-size: 18px!important;
        font-family: 'Lora', serif;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        line-height: 1.9;
    } ` + 
        "p { color: "+fontColor+"; font-size: "+fontSize+"; margin: "+marginsize+"; padding-bottom:15px; }"+
        "span{font-style:italic; padding:5px 0 20px;}"+
        "table { border-collapse: collapse; width: 50%; margin:0 auto; padding: 0 25px 100px; }"+
        "td, th { border: 1px solid black; text-align: left; padding: 8px; }"+
        "button{z-index:99999;position:absolute; padding:2px;max-width:100px;max-height:100px;width:50px;height:50px; margin-top:2rem; border-radius:100%; border:2px solid black; font-size:"+ fontSize+ "; background-color: #ffffff; margin: 0 auto; cursor:move;}"+
        "button:hover{background-color: #000000; color: #ffffff;}"+
        "a{color: #000000; text-decoration: none;}"+
        "iframe, audio{margin: 0 auto; padding: 0 25px 100px;}"+
        ".gpt{margin: 0 auto; padding: 0 25px 100px;border:2px solid black; border-radius:5%; width:70px; height:20px; background-color:gray;font-size:20px; font-weight:200;cursor:pointer;align-items:center;}"+
        "footer{border:2px solid black; text-align:center; padding:10px; background: rgb(55,55,55); margin-top:auto;}"+
        "</style>";
    myPage.document.write(style);
    myPage.document.write("<header>"+"<h1>" + headerText+ "</h1>" + "<h6> '"+quoteText+"'</h6>" + "</header>");
    myPage.document.write("<audio controls  loop autoplay>" + "<source src='" + musicUrl + "' type='audio/ogg'>" + "</audio>");
    myPage.document.write("<img src='"+imageSrc+"'/>");
    myPage.document.write("<span> Published Date: "+formattedDate+"</span>");
    myPage.document.write("<span> Author: "+authorText+"</span>");
    myPage.document.write("<article>" + "<p>"+paragraph1Text+"</p>" + "<p>"+paragraph2Text+"</p>" + 
   `<a href="` +linkUrl+`" target="_blank">Visit Link</a>` + "</article>");
   if(includeTable){
    createTable();
   }
   
   if(includeGPT){
    myPage.document.write('<br />' + '<p class="gpt" onclick="handleChat();"> Ask me anything, Click here to ask </p>'+ '<br />');
    myPage.document.write('<script>' +
     `function handleChat() {
    const userPrompt = prompt("Enter your Question"); 

    // Check if the user provided a prompt
    if (userPrompt) {
      alert("Wait for 5 seconds to get the response from OpenAI API");
        // Prepare data for OpenAI API
        const data = JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: userPrompt,
                },
            ],
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
  
        // Make a request to OpenAI API
        fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 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',
            },
            body: data,
        })
        .then(response => response.json())
        .then(data => {
            // Display the response from OpenAI API within the myPage window
            alert("ChatSuman: " + data.choices[0].message.content);
        })
        .catch(error => {
            // Handle errors
            console.error("Error:", error);
        });
    } else {
        // Handle the case where the user didn't provide a prompt
        console.log("User did not provide a prompt.");
    }
  }
  ` +
    '</script>'
    );
    }
    myPage.document.write('<br />' +'<iframe width="560" height="315" src="'+youtubeUrl+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    myPage.document.write("<br />" + "<button class='btn'>"+buttonText+"</button>");
    myPage.document.write('<script>' +
   'var btn = document.querySelector(".btn");' +
    "btn.addEventListener('mousedown', function(e) {"+
          "e.preventDefault();"+
          "var start = {x: e.clientX, y: e.clientY};"+
          "var mouseMove = function(eventMove) {"+
              "eventMove.preventDefault();"+
              "var shift = {x: start.x - eventMove.clientX, y: start.y - eventMove.clientY};"+
              "start = {x: eventMove.clientX, y: eventMove.clientY};"+
              "btn.style.top = (btn.offsetTop - shift.y) + 'px';"+
              "btn.style.left = (btn.offsetLeft - shift.x) + 'px';"+
            "};"+
          "var mouseUp = function(eventUp) {"+
              "eventUp.preventDefault();"+
              "document.removeEventListener('mouseup', mouseUp);"+
               "document.removeEventListener('mousemove', mouseMove);"+
          "};"+
    "document.addEventListener('mouseup', mouseUp);"+
    "document.addEventListener('mousemove', mouseMove);"+
  "});"
    +
  '</script>');

    myPage.document.write("<footer>"+"<p>&copy; 2023 " + headerText+ " All Rights Reserved</p> "+"</footer>");
    myPage.document.close();

}



function updateContent(event){
    event.preventDefault();
    headerText = document.getElementById("headerText").value;
    quoteText = document.getElementById("quoteText").value;
    paragraph1Text = document.getElementById("paragraph1Text").value;
    paragraph2Text = document.getElementById("paragraph2Text").value;
    buttonText = document.getElementById("buttonText").value;
    backgroundColor = document.getElementById("backgroundColor").value;
    fontSize = document.getElementById("fontSize").value;
    fontColor = document.getElementById("fontColor").value;
    marginsize = document.getElementById("marginsize").value;
    linkUrl = document.getElementById('linkUrl').value;
    includeTable = document.getElementById('includeTable').checked;
    includeGPT = document.getElementById('includeGPT').checked;
    includeList = document.getElementById('includeList').checked;
    authorText = document.getElementById('authorText').value;
    //youtubeUrl = document.getElementById('youtubeUrl').value;
    musicUrl = document.getElementById('musicUrl').value;
    if(!includeTable){
        tableRows = 0;
        tableColumns = 0;
    }else{
        tableRows = parseInt(document.getElementById("tableRows").value);
        tableColumns = parseInt(document.getElementById("tableColumns").value);
    }

    var imageInput = document.getElementById("imageInput");
    if(imageInput.files.length > 0){
        var reader = new FileReader();
        reader.onload = (e) => {
            imageSrc = e.target.result;
        };
        reader.readAsDataURL(imageInput.files[0]);
    }
}

function createTable(){
    myPage.document.write("<table>");
    for(var i =0; i < tableRows; i++){
        myPage.document.write("<tr>");
        for(var j=0; j< tableColumns; j++){
            myPage.document.write(`<td contenteditable="true">${i}</td>`);
        }
        myPage.document.write("</tr>");
    }
    myPage.document.write("</table>");
}

// Second section
window.onload = function() {
  var d = document;
  var q = "querySelector";
  var iframe = d[q]("iframe");
  var area = document.querySelectorAll('.codepen');

  for (var i = area.length - 1; i >= 0; i--) {
    if (area[i].addEventListener) {
      area[i].addEventListener('input', function() {
        iframe.srcdoc = area[0].value + '<style>' +
          area[1].value + '</style>' + '<script>' + area[2].value + '</script>';
      }, false);
    } else if (area[i].attachEvent) {
      area[i].attachEvent('onpropertychange', function() {
        iframe.srcdoc = area[0].value + '<style>' +
          area[1].value + '</style>' + '<script>' + area[2].value + '</script>';
      });
    }
  }
}








//fourth section
const cards = document.querySelectorAll('.todoCard');
const columns = document.querySelectorAll('.column');

cards.forEach(card => {
  card.addEventListener('dragstart', dragStart);
  card.addEventListener('dragend', dragEnd);
});

columns.forEach(column=> {
  column.addEventListener('dragover', dragOver);
  column.addEventListener('drop', dragDrop);
});

let draggedCard = null;

function dragStart(e) {
  draggedCard = e.target;
  setTimeout(() =>{
    e.target.style.display="none";
  }, 0);
}

function dragEnd(e) {
  draggedCard.style.display = "block";
  draggedCard = null;
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop(e) {
  if(e.target.classList.contains('todoCard')){
    e.target.parentNode.appendChild(draggedCard);
  }else{
    e.target.appendChild(draggedCard);
  }
}