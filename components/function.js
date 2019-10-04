function toCreateElement(element){
    return document.createElement(element);
}
function log(value){
    console.log(value);
}
function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }
  



//for modal box
// function openModal(){
//   modal.style.display="block";
// }
// btn.onclick=function(){
//   modal.style.display="none";
// }
// window.onclick=function(event){
//   if(event.target==modal){
//     modal.style.display="none";
//   }
// }