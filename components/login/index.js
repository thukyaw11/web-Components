
export default class Login extends HTMLElement{
    static get observedAttributes(){
        return['data-action','data-method'];
    }
    constructor(){
        //always call first after constructor
        super();
        const shadow=this.attachShadow({mode:'open'});
        //create element function
        const form=toCreateElement('form');
        const emailInput=toCreateElement('input');
        const emailLabel=toCreateElement('label');
        const passwordInput=toCreateElement('input');
        const passwordLabel=toCreateElement('label');
        const button=toCreateElement('button');
        const style=toCreateElement('style');
        style.textContent='input{display:block}';
        
        //append to shadow root
        shadow.appendChild(style);
        shadow.appendChild(form);
        shadow.appendChild(emailLabel);

        emailLabel.textContent=this.textContent;
        emailInput.value=this.textContent;


        Object.assign(passwordInput,{
            type:'password',
            id:'password',
            required:'required'
        });
        Object.assign(emailInput,{
            type:'email',
            id:'email',
            required:'required'
        });
        Object.assign(button,{
            type:'submit',
            value:'submit'
        });
        if(this.hasAttribute('data-action')) {
            form.setAttribute('action', this.getAttribute('data-action'))
          } 
        if(this.hasAttribute('data-method')) {
            form.setAttribute('method', this.getAttribute('data-method'))
          }


        emailLabel.setAttribute('for', 'email');
        emailLabel.textContent = 'Email';
    
        passwordLabel.setAttribute('for', 'password');
        passwordLabel.textContent = 'Password';
  
      button.textContent = 'Submit'
      form.addEventListener('submit', e => {
        updateInput();
        e.preventDefault();
      });
  
      function updateInput() {
        emailInput.value = '';
        passwordInput.value = '';
      }
      form.append(emailLabel, emailInput, passwordLabel, passwordInput, button);
        


    }
}