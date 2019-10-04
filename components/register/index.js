export default class Register extends HTMLElement{
    static get observedAttributes(){
        return ['data-action','data-method'];
    }
    constructor(){
        //always call first after constructor
        super();


        const shadow=this.attachShadow({mode:'open'});
        const form=toCreateElement('form');
        const emailInput=toCreateElement('input');
        const emailLabel=toCreateElement('label');
        const passwordInput=toCreateElement('input');
        const passwordLabel=toCreateElement('label');
        const confirm_passwordInput=toCreateElement('input');
        const confirm_passwordLabel=toCreateElement('label');
        const button=toCreateElement('button');
        const style=toCreateElement('style');
        style.textContent='input{display:block}';
    
        shadow.appendChild(style);
        shadow.appendChild(form);
        log(shadow);
        button.textContent='Sign up';





        log(shadow);

        Object.assign(passwordInput,{
            id:'password',
            type:'password',
            required:'required'
        });
        Object.assign(emailInput,{
            id:'email',
            type: 'email',
            required: 'required'
        });
        Object.assign(confirm_passwordInput,{
            id:'con_password',
            type:'password',
            required:'required'
        });
        Object.assign(button,{
            type:'submit',
            value:'submit'
        })
        
        emailLabel.setAttribute('for','email');
        emailLabel.textContent='email';

        passwordLabel.setAttribute('for','password');
        passwordLabel.textContent='password';

        confirm_passwordLabel.setAttribute('for','con_password');
        confirm_passwordLabel.textContent='confirm password';


        if(this.hasAttribute('data-action')){
            form.setAttribute('action',this.getAttribute('data-action'));
        }
        if(this.hasAttribute('data-method')){
            form.setAttribute('method',this.getAttribute('data-method'));
        }
        form.addEventListener('submit',e=>{
            updateData();
            e.preventDefault();
        });

        


        
          function updateData() {
            emailInput.value = '';
            passwordInput.value = '';
            confirm_passwordInput.value='';
          }

        form.append(emailLabel,emailInput,passwordLabel,passwordInput,confirm_passwordLabel,confirm_passwordInput,button);

    }

}