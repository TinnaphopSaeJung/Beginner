const eyeIcon = document.querySelector("#eye"); 
const password = document.querySelector("#password");

eyeIcon.addEventListener("click", () => {
    if (eyeIcon.classList.contains("fa-eye")) {
        eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
        password.setAttribute("type", "text");
    } else {
        eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
        password.setAttribute("type", "password");
    }
});
