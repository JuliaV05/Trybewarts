const getButton = document.querySelector('.btn');
const getEmail = document.querySelector('.email');
const getPassword = document.querySelector('.pass');
const button = document.querySelector('#submit-btn');
const getCheckbox = document.querySelector('#agreement');

function buttonAlert() {
  const verifyPass = getPassword.value;
  const verifyMail = getEmail.value;
  if (verifyMail === 'tryber@teste.com' && verifyPass === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
getButton.addEventListener('click', buttonAlert);

 ableButton.addEventListener('change', (event) => {
  button.disabled = !event.target.checked;
}, false);
