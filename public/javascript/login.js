async function signUpFormHandler (event) {
    event.preventDefault();

    const username = document.querySelector("#username-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();

    console.log(username, email, password)

}



document.querySelector(".signup-form").addEventListener("submit", signUpFormHandler)