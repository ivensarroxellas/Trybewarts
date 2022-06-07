const email = document.getElementById('email');
const password = document.getElementById('password');

// eslint-disable-next-line no-unused-vars
function handleSubmit() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
