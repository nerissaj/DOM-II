
var divID = document.createElement("div");
var x = document.createEvent("MouseEvent");
x.initMouseEvent("mouseover", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

document.getElementById("myDiv").dispatchEvent(x);

  blockRed = document.querySelectorAll('.block')
blockRed.addEventListener('click', function(event){
 event

})   
  //function myMove() {
  //  var elem = document.getElementById("animate"); 
    //var pos = 0;
    //var id = setInterval(frame, 8);
    //function frame() {
     // if (pos == 250) {
       // clearInterval(id);
      //} else {
        //pos++; 
        //elem.style.top = pos + 'px';
        //elem.style.left = pos + 'px'; 
     // }
   // }
 // }
 let lastX; // Tracks the last observed mouse X position
 let bar = document.querySelector("div");
 bar.addEventListener("mousedown", event => {
   if (event.button == 0) {
     lastX = event.clientX;
     window.addEventListener("mousemove", moved);
     event.preventDefault(); // Prevent selection
   }
 });

 function moved(event) {
   if (event.buttons == 0) {
     window.removeEventListener("mousemove", moved);
   } else {
     let dist = event.clientX - lastX;
     let newWidth = Math.max(10, bar.offsetWidth + dist);
     bar.style.width = newWidth + "px";
     lastX = event.clientX;
   }
 }
