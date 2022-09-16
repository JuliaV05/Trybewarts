const getButton = document.querySelector('.btn');
const getEmail = document.querySelector('.email');
const getPassword = document.querySelector('.pass');
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
