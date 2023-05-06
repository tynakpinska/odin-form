const passwordInput = document.getElementById("password");
const passwordConfirmInput = document.getElementById("confirm-password");
const warning = document.querySelector(".warning");

const check = () => {
  if (passwordInput.value !== passwordConfirmInput.value) {
    passwordInput.classList.add("error");
    passwordConfirmInput.classList.add("error");
    warning.style.display = "block";
  } else {
    passwordInput.classList.remove("error");
    passwordConfirmInput.classList.remove("error");
    warning.style.display = "none";
  }
};

passwordInput.addEventListener("keyup", check);
passwordConfirmInput.addEventListener("keyup", check);
