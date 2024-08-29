// update-password.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('updatePasswordForm');
    const responseMessage = document.getElementById('updatePasswordResponseMessage');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const userName = document.getElementById('updateUserName').value;
        const newPassword = document.getElementById('updateNewPassword').value;

        try {
            const response = await fetch('/api/register/update-password', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userName, newPassword })
            });

            if (response.ok) {
                responseMessage.textContent = 'Password updated successfully!';
                // Handle successful password update (e.g., redirect or show a success message)
            } else {
                responseMessage.textContent = 'Update failed: User not found or invalid credentials.';
            }
        } catch (error) {
            responseMessage.textContent = 'An error occurred. Please try again later.';
        }
    });
});
