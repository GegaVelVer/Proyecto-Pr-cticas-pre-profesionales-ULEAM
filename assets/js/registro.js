document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("registerForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      let isValid = true;
      const emailInput = document.getElementById("exampleInputEmail");
      const passwordInput = document.getElementById("exampleInputPassword");
      const confirmPasswordInput = document.getElementById(
        "exampleInputPassword-1"
      );
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

      if (!emailInput.value.trim() || !emailPattern.test(emailInput.value)) {
        emailInput.classList.add("is-invalid");
        isValid = false;
      } else {
        emailInput.classList.remove("is-invalid");
      }

      if (!passwordInput.value.trim()) {
        passwordInput.classList.add("is-invalid");
        isValid = false;
      } else {
        passwordInput.classList.remove("is-invalid");
      }

      if (
        !confirmPasswordInput.value.trim() ||
        passwordInput.value !== confirmPasswordInput.value
      ) {
        confirmPasswordInput.classList.add("is-invalid");
        isValid = false;
      } else {
        confirmPasswordInput.classList.remove("is-invalid");
      }

      if (isValid) {
        window.location.href = "index.html";
      }
    });
});
