const signUpButton = document.getElementById('signUp');
const signInButtom = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButtom.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});  