document.getElementById('creditCardForm').addEventListener('submit', function(event) {
    event.preventDefault();
    submitCreditCardApplication();
});

function submitCreditCardApplication() {
    alert("Credit card application submitted successfully.");
    window.location.href = 'mainpage.html';
}

function confirmCancel() {
    if (confirm("Are you sure you want to cancel the application?")) {
        window.location.href = 'mainpage.html';
    }
}