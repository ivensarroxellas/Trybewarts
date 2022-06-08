const botaoL = document.getElementById('botaoLogin');
const email = document.getElementById('email');
const password = document.getElementById('password');
const check = document.querySelectorAll('input')[24];
const x = document.getElementById('submit-btn');
x.disabled = true;

function handleSubmit() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
botaoL.addEventListener('click', handleSubmit);

function isChecked() {
  if (check.checked === true) {
    x.disabled = false;
  } else {
    x.disabled = true;
  }
}

check.addEventListener('change', isChecked);
