const gitnoria = document.getElementById('button-h1');
const reactpuff = document.getElementById('button-h2');
const corvinode = document.getElementById('button-h3');
const pytherina = document.getElementById('button-h4');
const header = document.getElementsByClassName('header');
const footer = document.getElementById('footer');
const buttonForm = document.getElementById('submit-btn');

gitnoria.addEventListener('click', () => {
  document.body.style.backgroundColor = 'rgba(255, 0, 0, 0.157)';
  header[0].style.backgroundColor = 'red';
  footer.style.backgroundColor = 'red';
  buttonForm.style.background = 'red';
});

reactpuff.addEventListener('click', () => {
  const yellow = 'rgb(226, 226, 15)';
  document.body.style.backgroundColor = 'rgba(255, 255, 0, 0.122)';
  header[0].style.backgroundColor = yellow;
  footer.style.backgroundColor = yellow;
  buttonForm.style.background = yellow;
});

corvinode.addEventListener('click', () => {
  document.body.style.backgroundColor = 'rgba(0, 0, 255, 0.188)';
  header[0].style.backgroundColor = 'blue';
  footer.style.backgroundColor = 'blue';
  buttonForm.style.background = 'blue';
});

pytherina.addEventListener('click', () => {
  document.body.style.backgroundColor = 'rgba(0, 128, 0, 0.212)';
  header[0].style.backgroundColor = 'green';
  footer.style.backgroundColor = 'green';
  buttonForm.style.background = 'green';
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

const check = document.getElementById('agreement');

check.addEventListener('change', () => {
  if (check.checked) {
    buttonForm.disabled = false;
  } else {
    buttonForm.disabled = true;
  }
});

const textarea = document.getElementById('textarea');

function getId(id) {
  return document.getElementById(id).value;
}
function innerHtml(id, result) {
  document.getElementById(id).innerHTML = result;
  return result;
}

window.onload = function contadorCaracteres() {
  textarea.value = '';
  setInterval(() => {
    const caracteres = getId('textarea');
    if (caracteres.length === 0) {
      innerHtml('counter', 500);
    } else {
      innerHtml('counter', 500 - caracteres.length);
    }
  }, 10);
};
