
const gitnoria = document.getElementById('button-h1');
const reactpuff = document.getElementById('button-h2');
const corvinode = document.getElementById('button-h3');
const pytherina = document.getElementById('button-h4');
const header = document.getElementsByClassName('header');

gitnoria.addEventListener('click', () => {
  document.body.style.backgroundColor = 'rgba(255, 0, 0, 0.157)';
  header[0].style.backgroundColor = 'red';
});

reactpuff.addEventListener('click', () => {
  document.body.style.backgroundColor = 'rgba(255, 255, 0, 0.122)';
  header[0].style.backgroundColor = 'rgb(226, 226, 15)';
});

corvinode.addEventListener('click', () => {
  document.body.style.backgroundColor = 'rgba(0, 0, 255, 0.188)';
  header[0].style.backgroundColor = 'blue';
});

pytherina.addEventListener('click', () => {
  document.body.style.backgroundColor = 'rgba(0, 128, 0, 0.212)';
  header[0].style.backgroundColor = 'green';
});
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

