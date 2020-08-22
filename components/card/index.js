const template = document.createElement('template');
template.innerHTML = `
  <style>
  .user-card {
    height: 37rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 50px;
    margin: 0 auto;
    font-family: 'Arial';

  }
  
  .user-title {
    margin-top: 15px;
    font-size: 2em;
  }
  
  .image {
    height: 160px;
    width: 160px;
    border-radius: 50%;
    border: 5px solid #272133;
    margin-top: 20px;
    box-shadow: 0 10px 50px rgba(235, 25, 110, 1);
  }
  
  
  .draw-border {
    box-shadow: inset 0 0 0 4px #58cdd1;
    color: #58afd1;
    -webkit-transition: color 0.25s 0.0833333333s;
    transition: color 0.25s 0.0833333333s;
    position: relative;
  }
  
  .draw-border::before,
  .draw-border::after {
    border: 0 solid transparent;
    box-sizing: border-box;
    content: '';
    pointer-events: none;
    position: absolute;
    width: 0rem;
    height: 0;
    bottom: 0;
    right: 0;
  }
  
  .draw-border::before {
    border-bottom-width: 4px;
    border-left-width: 4px;
  }
  
  .draw-border::after {
    border-top-width: 4px;
    border-right-width: 4px;
  }
  
  .draw-border:hover {
    color: #ffe593;
  }
  
  .draw-border:hover::before,
  .draw-border:hover::after {
    border-color: #eb196e;
    -webkit-transition: border-color 0s, width 0.25s, height 0.25s;
    transition: border-color 0s, width 0.25s, height 0.25s;
    width: 100%;
    height: 100%;
  }
  
  .draw-border:hover::before {
    -webkit-transition-delay: 0s, 0s, 0.25s;
    transition-delay: 0s, 0s, 0.25s;
  }
  
  .draw-border:hover::after {
    -webkit-transition-delay: 0s, 0.25s, 0s;
    transition-delay: 0s, 0.25s, 0s;
  }
  
  .user-content {
    background: none;
    border: none;
    cursor: pointer;
    line-height: 1.5;
    font: 700 1.2rem 'Roboto Slab', sans-serif;
    padding: 0.75em 2em;
    letter-spacing: 0.05rem;
    margin: 1em;
    width: 13rem;
  }
  
  .user-content:focus {
    outline: 2px dotted #55d7dc;
  }
  
  
 
  </style>

<div class="user-card">
  <img src="" alt="Person" class="image" >
  <p class="user-title"></p>
  <p class="user-career"></p>
  <a href="" target="_blank"> 
  <button class="user-content draw-border"></button>
  </a>
</div>
  
`;

export default class Card extends HTMLElement {
  // Get Element's Attribute
  static get observedAttributes() {
    return ['title', 'career', 'avatar', 'content', 'backcolor', 'height', 'width', 'button-contact-url'];
  }
  connectedCallback(){
    log("Connected call back works!");
  }
  // Just assign 
  $userCard
  $userName
  $userCareer
  $userAvatar
  $userContent
  $userURL

  constructor() {
    // Call super fist after constructor
    super();
    const x=this.attachShadow({ mode: 'open' });
    log(x);
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$userCard = this.shadowRoot.querySelector('.user-card');
    this.$userName = this.shadowRoot.querySelector('.user-title');
    this.$userCareer = this.shadowRoot.querySelector('.user-career');
    this.$userAvatar = this.shadowRoot.querySelector('.image');
    this.$userContent = this.shadowRoot.querySelector('.user-content');
    this.$userURL = this.shadowRoot.querySelector('a[href]');

    if(this.hasAttribute('backcolor')){
      this.$userCard.style.backgroundColor = this.getAttribute('backcolor');
    }else{
      this.$userCard.style.backgroundColor = '#222831';
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name);
    switch(name) {
      case 'title':
        return this.$userName.innerHTML = newValue;
      case 'career':
        return this.$userCareer.innerHTML = newValue;
      case 'avatar':
        return this.$userAvatar.src = newValue;
      case 'content':
        return this.$userContent.innerHTML = newValue;
      case 'height':
        return this.$userCard.style.height = newValue;
      case 'width' : 
        return this.$userCard.style.width = newValue;
      case 'button-contact-url' : 
        return this.$userURL.href = newValue;
      default:
        return;
    }
  }
}