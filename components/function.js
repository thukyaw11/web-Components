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
  

