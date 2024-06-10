const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

document.getElementById('signUpForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Sign up form submitted');
});

document.getElementById('signInForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Sign in form submitted');
});
