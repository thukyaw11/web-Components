const template = document.createElement('template');
template.innerHTML = `
  <style>
  a.social-name { 
    color: #3f51b5;
    padding: 0 20px;
    text-decoration: none;
  }
  </style>
  <div class="share-buttons">
    
      <a 
        href="" 
        class="social-name" 
        title=""
      >
        <i></i>
      </a>

  </div>
`
export default class SocialButton extends HTMLElement {

  static get observedAttributes() {
    return ['type', 'data-param-text', 'data-param-url'];
  }

  $type
  $data_param_text
  $data_param_url

  constructor() {
    super();

    this.attachShadow({ mode: 'open' })
    console.log(this.shadowRoot);
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$type = this.shadowRoot.querySelector('i');

    this.$data_param_url = this.shadowRoot.querySelector('a[href]');
    this.$data_param_text = this.shadowRoot.querySelector('a[title]');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
      case 'type':
        return this.$type.innerHTML = newValue;
      case 'data-param-text':
        return this.$data_param_text.title = newValue;
      case 'data-param-url':
        return this.$data_param_url.href = newValue;
      default:
        return;
    }
  }

  
}