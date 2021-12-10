function finishForm() {
  const input = document.querySelector('input[type = "text"]');
  input.type = 'password';
  const login = document.createElement('input');
  login.type = 'text';
  login.name = 'login';
  const form = document.querySelector('.login-form');
  form.prepend(login);
}
// finishForm();
export { finishForm };
