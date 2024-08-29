// login.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const responseMessage = document.getElementById('loginResponseMessage');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const userName = document.getElementById('loginUserName').value;
        const password = document.getElementById('loginPassword').value;

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userName, password })
            });

            if (response.ok) {
                const data = await response.json();
                responseMessage.textContent = 'Login successful!';
                // Handle successful login (e.g., redirect or show user info)
            } else {
                responseMessage.textContent = 'Login failed: Invalid username or password.';
            }
        } catch (error) {
            responseMessage.textContent = 'An error occurred. Please try again later.';
        }
    });
});
