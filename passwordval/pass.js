document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');
    
    if (validatePassword(password)) {
        messageDiv.textContent = 'Password is valid!';
        messageDiv.style.color = 'green';
    } else {
        messageDiv.textContent = 'Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.';
        messageDiv.style.color = 'red';
    }
});

function validatePassword(password) {
    const lengthCriteria = password.length >= 8;
    const uppercaseCriteria = /[A-Z]/.test(password);
    const lowercaseCriteria = /[a-z]/.test(password);
    const numberCriteria = /[0-9]/.test(password);
    const specialCharacterCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    return lengthCriteria && uppercaseCriteria && lowercaseCriteria && numberCriteria && specialCharacterCriteria;
}
