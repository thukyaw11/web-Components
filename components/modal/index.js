const style=toCreateElement('style');
style.innerHTML=`
.modal{
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display:none;
  
}
.modal-content{
  position: absolute;
  top: 30%;
  left: 30%;
  background: #fff;
  padding: 1rem 1.5rem;
  width: 500px;
  height: auto;
  border-radius: 0.5rem;
  overflow: auto;

}
.close-button{
  float: right;
  width: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  cursor: pointer;
  border-radius: 0.25rem;
  background-color: lightgrey;
}
.close-button:hover{
  background-color: darkgrey;
}
`;



export default class Modal extends HTMLElement{
  static get observedAttributes(){
    return['content'];
  }
  $user_content

  constructor(){
    super();

    function toCreateElement(element) {
      return document.createElement(element);
  }
    //create elements
    const button=toCreateElement('button');
    const div_modal=toCreateElement('div');
    const div_modalContent=toCreateElement('div');
    const span=toCreateElement('span');
    const h1=toCreateElement('h1');
    button.textContent='click';
    h1.textContent="hello";
    span.textContent="x";

    // const button = document.createElement('button')

    //set attributes usting function
    setAttributes(div_modal,{'class':'modal'});
    setAttributes(div_modalContent,{'class':'modal-content'});
    setAttributes(span,{'class':'close-button'});
    
    //build DOM tree
    div_modalContent.append(span,h1);
    div_modal.appendChild(div_modalContent);

    //shadow DOM attach
    const shadow=this.attachShadow({mode:'open'});
    shadow.appendChild(button);
    shadow.appendChild(style);
    shadow.appendChild(div_modal);
    var modal=this.shadowRoot.querySelector('.modal');

    this.shadowRoot.addEventListener("click",function(){
      modal.style.display="block";
    });

    
    const btn=this.shadowRoot.querySelector('.close-button');
    
    btn.addEventListener("click",function(){
      modal.style.display="none";
    });
  
    log(shadow);

 
  }
}



   
// const template = document.createElement('template');
// template.innerHTML = `
//   <div>
//     <button>Click me</button>
//     <div class="modal-box"></div>
//   </div>

// `


// export default class Modal extends HTMLElement {
//   static get observedAttributes() {
//     return ['content'];
//   }

//   $modalBox 

//   constructor() {
//     super();

//     this.attachShadow({ mode: 'open' });
//     this.shadowRoot.appendChild(template.content.cloneNode(true));

//     this.$modalBox = this.shadowRoot.querySelector('.modal-box');
    
//     setAttributes(button,{'onclick':'openModal()'});
//   }

//   attributeChangedCallback(name, oldValue, newValue) {
//     switch(name) {
//       case 'content': 
//         return this.$modalBox.innerHTML = newValue;
//     }
//   }
// }