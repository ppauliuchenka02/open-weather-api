const registrationForm = document.getElementById('registration');
const loginForm = document.getElementById('login');
const registrationAnchor = document.getElementById('registerAnchor');
const loginAnchor = document.getElementById('loginAnchor');
const formBtn = document.getElementById('formBtn');

registrationForm.style.display = 'none';
registrationAnchor.addEventListener('click', event => {
    event.preventDefault();
    loginForm.style.display = 'none';
    registrationForm.style.display = 'block'
    formBtn.innerText = 'Register'
})
loginAnchor.addEventListener('click', event => {
    event.preventDefault();
    loginForm.style.display = 'block';
    registrationForm.style.display = 'none'
    formBtn.innerText = 'Login'
})