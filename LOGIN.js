// Generate CAPTCHA
function generateCaptcha() {
    const captcha = Math.random().toString(36).substring(2, 8).toUpperCase();
    document.getElementById("captchaText").innerText = captcha;
}

// Handle login form submission
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const captchaInput = document.getElementById("captchaInput").value.trim().toUpperCase();
    const captchaText = document.getElementById("captchaText").innerText.trim();

    if (!email.endsWith("@cca.edu.ph")) {
        alert("Please enter a valid @cca.edu.ph email.");
        return;
    }

    if (captchaInput !== captchaText) {
        alert("Incorrect CAPTCHA. Please try again.");
        generateCaptcha();
        document.getElementById("captchaInput").value = "";
        return;
    }

    // Send data to PHP
    fetch("login.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
    })
    .then(res => res.text())
    .then(data => {
        if (data.includes(".php")) {
            window.location.href = data; // redirect to the correct dashboard
        } else {
            document.write(data); // display any alert from PHP
        }
    })
    .catch(err => {
        console.error("Login error:", err);
        alert("Something went wrong. Please try again.");
    });
}

// Toggle password visibility
function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    const toggleIcon = document.getElementById("togglePassword");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.src = "icons/eye-open.svg";
    } else {
        passwordField.type = "password";
        toggleIcon.src = "icons/eye-closed.svg";
    }
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    generateCaptcha();
    document.getElementById("loginForm").addEventListener("submit", handleLogin);
    document.getElementById("togglePassword").addEventListener("click", togglePasswordVisibility);
});
