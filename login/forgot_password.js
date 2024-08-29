document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('forgotPasswordForm');
    const responseMessage = document.getElementById('forgotPasswordResponseMessage');

    console.log('Form:', form);
    console.log('Response Message:', responseMessage);

    const userNameInput = document.getElementById('forgotPasswordusername');
    const newPasswordInput = document.getElementById('forgotPasswordNewPassword');

    console.log('Username Input:', userNameInput);
    console.log('New Password Input:', newPasswordInput);

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const userName = userNameInput.value;
        const newPassword = newPasswordInput.value;

        try {
            const response = await fetch('http://localhost:8080/api/register/update-password', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userName, newPassword })
            });

            if (response.ok) {
                responseMessage.textContent = 'Password updated successfully.';
                responseMessage.style.color = "green"; // Green text for success
            
            window.location.href = "homepage.html"; // Redirect to login page
            } else {
                responseMessage.textContent = 'Invalid username. Try again.';
                responseMessage.style.color = "red"; // Red text for failure
            }
        } catch (error) {
            responseMessage.textContent = 'An error occurred. Please try again later.';
            responseMessage.style.color = "red"; // Red text for error
        }
    });
});
