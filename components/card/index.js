const template = document.createElement('template');
template.innerHTML = `
  <style>
    .user-card {
      font-family: 'Roboto', sans-serif;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: .5em;
      width: 360px;
      box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
    }
    .user-description {
      padding: 1rem;
    }
    .user-description  {
      text-align: center;
    }
    .user-description h4 {
      font-size: 1.5rem;
      margin: 0 0 !important;
    }
    .user-description h6 {
      color: #3f51b5;
      font-weight: 700!important;
      font-size: 1rem;
      margin: 1rem 0;
    }
    .user-avatar img {
      box-shadow: 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15);
      border-radius: .25rem;
    }
    .user-content {
      font-size: .9rem;
    font-weight: 400;
    color: #747373;
    }
    .user-social {
      padding: 2rem;
      display: flex;
      flex-direction: row;
    }
  </style>
  <div class="user-card">
    <div class="user-avatar">
      <img src="" class="image" width="100%"/>
    </div>
    <div class="user-description">
      <h4 class="user-title"></h4>
      <h6 class="user-career"></h6>
      <p class="user-content"></p>
    </div>
    <div class="user-social">
      <slot></slot>
    </div>
  </div>
`;

export default class Card extends HTMLElement {
  // Get Element's Attribute
  static get observedAttributes() {
    return ['title', 'career', 'avatar', 'content'];
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
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
      case 'title':
        return this.$userName.innerHTML = newValue;
      case 'career':
        return this.$userCareer.innerHTML = newValue;
      case 'avatar':
        return this.$userAvatar.src = newValue;
      case 'content':
        return this.$userContent.innerHTML = newValue;
      default:
        return;
    }
  }
}