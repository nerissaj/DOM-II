
//var divID = document.createElement("div");
//var x = document.createEvent("MouseEvent");
//x.initMouseEvent("mouseover", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

//document.getElementById("myDiv").dispatchEvent(x);

//var div = document.getElementById('div');
//var animation;

//function move() {
  //  var time = Math.round((new Date()).getTime() / 10) % 200;

//    object.style.top = time + 'px';

  //  animation = requestAnimationFrame(move);
//}
//document.querySelector(".block--gray").onclick = function() {
  //animation = requestAnimationFrame(move);
//}
var start = null;
var element = document.querySelector('.block--green'); 

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  element.style.transform = 'translateY(' + Math.min(progress / 10, -335) + 'px)';
  if (progress < 2000) {
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);

//var start = null;
//var element = document.querySelector('.block--blue'); 
//function step(timestamp) {
  //if (!start) start = timestamp;
  //var progress = timestamp - start;
  //element.style.transform = 'translateY(' + Math.min(progress / 10, 335) + 'px)';
  //if (progress >2000) {
   // window.requestAnimationFrame(step);
  //}
//}
//window.requestAnimationFrame(step);
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
 //let lastX; // Tracks the last observed mouse X position
 //let bar = document.querySelector("div");
 //bar.addEventListener("mousedown", event => {
   //if (event.button == 0) {
     //lastX = event.clientX;
     //window.addEventListener("mousemove", moved);
     //event.preventDefault(); // Prevent selection
   //}
 //});

 //function moved(event) {
   //if (event.clientX == 0) {
     //window.addEventListener("mousemove", moved);
  // } else {
    // let dist = event.clientX - lastX;
     //let newWidth = Math.max(10, bar.offsetWidth + dist);
     //bar.style.width = newWidth + "px";
     //lastX = event.clientX;
   //}
 //}
