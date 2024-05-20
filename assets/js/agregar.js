document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("activityForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      let isValid = true;
      const activityInput = document.getElementById("activityInput");

      if (!activityInput.value.trim()) {
        activityInput.classList.add("is-invalid");
        isValid = false;
      } else {
        activityInput.classList.remove("is-invalid");
      }

      if (isValid) {
        window.location.href = "seguimiento.html";
      }
    });
});
