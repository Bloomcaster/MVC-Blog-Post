//form for login
const loginForm = async (event) => {
    event.preventDefault();

    const password = document.querySelector('#password-login').value.trim();
    const username = document.querySelector('#username-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

//form for signup
const signupForm = async (event) => {
    event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  
  if (username && password) {
    const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
  }
};

document
.querySelector('.login-form')
.addEventListener('submit', loginForm);

document
.querySelector('.signup-form')
.addEventListener('submit', signupForm);