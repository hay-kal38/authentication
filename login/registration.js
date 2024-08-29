document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const responseMessage = document.getElementById('registrationResponseMessage');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const fullName = document.getElementById('registrationFullName').value;
        const userName = document.getElementById('registrationUserName').value;
        const phoneNumber = document.getElementById('registrationPhoneNumber').value;
        const email = document.getElementById('registrationEmail').value;
        const password = document.getElementById('registrationPassword').value;
        
        try {
            const response = await fetch('http://localhost:8080/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ fullName, userName, phoneNumber, email, password })
            });

            if (response.ok) {
                responseMessage.textContent = 'Registration successful!';
                responseMessage.style.color = "green"; // Green text for success
                
                window.location.href = "login.html";
            } else {
                responseMessage.textContent = 'Registration failed: Please check your details.';
                responseMessage.style.color = "red"; // Red text for failure
            }
        } catch (error) {
            responseMessage.textContent = 'An error occurred. Please try again later.';
            responseMessage.style.color = "red"; // Red text for error
        }
    });
});
