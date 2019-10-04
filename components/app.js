import Card from './card/index.js';
import Login from './login/index.js';
import Register from './register/index.js';
import Button from './button/index.js';
import SocialButton from './socialButton/index.js';
import Modal from './modal/index.js';

customElements.define('profile-card',Card); 
customElements.define('login-form',Login);
customElements.define('register-form',Register);
customElements.define('cus-button',Button);
customElements.define('social-button',SocialButton);
customElements.define('modal-box',Modal);