// Your code goes here
//resize & load
let resizePane = window.addEventListener("resize", function(){
    console.log('resize!')}, true);
    console.log(`page fully loaded!`);
    //wheel
    var wheelEvent = new WheelEvent(null);
        console.log('wheel');




  //mouseover
let blueLink = document.querySelector(".nav-link");
blueLink.addEventListener('mouseover', function(event) {   
  // highlight the mouseover target
  event.target.style.color = "orange";
console.log(`I was mouseover, this was my event:${event}`)
});

//keydown

//drag / drop



//focus



//scroll
//select
//let imgSelect =document.getElementsByClassName(".img-content");
//imgSelect.addEventListener('select', function(event){
  //  event.target.style.backgroundColor ="teal";
//console.log(`the background color is teal.`);
//});
//Stop Propagation
const mainNavigation = document.querySelector(".main-navigation");
mainNavigation.addEventListener('click', function(eventObject) {
    console.log(`main nav fired!`);
    eventObject.stopPropagation();
    
 });
 //Prevent Default
 const nav = document.querySelector(".nav");
 nav.addEventListener('click', function(event) {
    console.log(`nav fired`);
    event.preventDefault();
 });
//double Click
let DblBtn = document.querySelector(".btn");
DblBtn.addEventListener('dblclick', function(event){
    console.log(`I was doubleClicked this was my event:${event}`)
});
const imgContent = document.querySelector('.img-content');
imgContent.addEventListener('keydown', function(event){
console.log(`a key was pressed this was my event:${event}`);
});