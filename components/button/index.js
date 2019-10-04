export default class Button extends HTMLElement{
    static get observedAttributes(){
        return['value','color'];
    }
    //just assign
    $color
    constructor(){
        //always call first after constructor
        super();
        
        const shadow=this.attachShadow({mode:'open'});
        
        const button=toCreateElement('button');
        const style=toCreateElement('style');
        const div=toCreateElement('div');
        const slot=toCreateElement('slot');       
        log(shadow);

        div.append(slot);
        shadow.appendChild(style);
        shadow.appendChild(button);
        shadow.appendChild(div);

        style.textContent=`
        .custom_button{
            height:30px;
            width:auto;
            border-radius:5px;
        }`;
        div.setAttribute('class','append');
        button.setAttribute('class','custom_button');

        if(this.hasAttribute('value')){
            button.textContent=this.getAttribute('value');
        }

        this.$color=this.shadowRoot.querySelector('.custom_button');   
    }

    attributeChangedCallback(name,oldValue,newValue){
        return this.$color.style.backgroundColor=newValue;   
    }
}
