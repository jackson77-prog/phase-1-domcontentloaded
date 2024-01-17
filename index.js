// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    var textParagraph = document.getElementById("text");
    textParagraph.textContent = "This is really cool!";
  });
  
  console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");
  