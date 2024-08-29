document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', async () => {
        const usernameInput = document.querySelector('input[placeholder="Username"]');
        const passwordInput = document.querySelector('input[placeholder="Password"]');
        
        const username = usernameInput.value;
        const password = passwordInput.value;

        try {
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userName: username,
                    password: password // Send the plain text password
                })
            });

            if (response.ok) {
                const data = await response.json();
                // Handle success, e.g., redirect to homepage
                window.location.href = "homepage.html";
            } else {
                alert("Login failed. Please try again.");
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("An error occurred. Please try again.");
        }
    });
});
