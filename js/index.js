// Your code goes here
//resize & load
let resizePane = window.addEventListener("resize", function(){
    console.log('resize')}, true);
    console.log(`page fully loaded!`);
    //wheel
    var wheelEvent = new WheelEvent(null);
        console.log('wheel');




  //mouseover
let blueLink = document.querySelector(".nav-link");
blueLink.addEventListener('mouseover', function(event) {   
  // highlight the mouseover target
  event.target.style.color = "pink";
console.log(`I was mouseover, this was my event:${event}`)
});

//keydown

//drag / drop



//focus

//scroll
//select
//let imgSelect = document.querySelector(".img-content");
//imgSelect.addEventListener('keydown', function(event){
 //  event.target.style.backgroundColor ="teal";
//console.log(`the background color is teal.`);
//});
//Stop Propagation
const mainNavigation = document.querySelector(".main-navigation");
mainNavigation.addEventListener('click', function(eventObject) {
  eventObject.stopPropagation();
  eventObject.target.style.color = "green";
  console.log(`main nav fired!`);
  
  
});
//Prevent Default
const nav = document.querySelector(".nav");
nav.addEventListener('click', function(eventObject) {
  eventObject.stopPropagation();
  eventObject.target.style.backgroundColor = "lightgrey";
  eventObject.target.style.color = "yellow"
    console.log(`nav fired`);
    
    eventObject.preventDefault();
    
 });
//double Click
let DblBtn = document.querySelector(".btn");
DblBtn.addEventListener('dblclick', function(event){
  event.target.style.backgroundColor = "red";
    console.log(`I was doubleClicked this was my event:${event}`)
});
//const  = document.getElementsByClassName('');
//.addEventListener('keydown', function(event){
//console.log(`a key was pressed this was my event:${event}`);
//});
