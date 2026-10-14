
function togglePassword(id) {
    const input = document.getElementById(id);

    input.type = input.type === "password" ? "text" : "password";
}

// Login form
function login(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        alert("Login form validated! Connect your backend to sign in.");
    }
}

// Signup form
function signup(event) {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;

    if (password.length < 8) {
        alert("Password must contain at least 8 characters.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    event.target.submit();
}
