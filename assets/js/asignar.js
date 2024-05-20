document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("tutorForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      let isValid = true;
      const tutorName = document.getElementById("tutorName");
      const tutorTopic = document.getElementById("tutorTopic");

      if (!tutorName.value.trim()) {
        tutorName.classList.add("is-invalid");
        isValid = false;
      } else {
        tutorName.classList.remove("is-invalid");
      }

      if (!tutorTopic.value.trim()) {
        tutorTopic.classList.add("is-invalid");
        isValid = false;
      } else {
        tutorTopic.classList.remove("is-invalid");
      }

      if (isValid) {
        window.location.href = "seguimiento.html";
      }
    });
});
