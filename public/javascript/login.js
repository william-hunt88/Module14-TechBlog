const signUp = document.querySelector(".signup-form")
const login = document.querySelector(".login-form")
const registerBtn = document.querySelector(".register-btn")


async function signUpFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      if(response) {
        document.location.replace("/dashboard");
      }
    });
  }
}

async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  console.log(email, password)

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert(response.statusText);
      }
    })
  }
}


document.querySelector(".register-btn").addEventListener("click", function () {
  signUp.style.display = "block";
  login.style.display = "none";
  registerBtn.style.display = "none"
})

document
  .querySelector(".signup-form")
  .addEventListener("submit", signUpFormHandler);

  document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);