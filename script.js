const getButton = document.getElementsByClassName('btn');
const getEmail = document.getElementsByClassName('email');
const getPassword = document.getElementsByClassName('pass');
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
