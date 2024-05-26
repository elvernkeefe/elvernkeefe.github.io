document.getElementById('loanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    submitLoan();
});

function submitLoan() {
    alert("Loan application submitted successfully.");
    window.location.href = 'mainpage.html';
}

function confirmCancel() {
    if (confirm("Are you sure you want to cancel the application?")) {
        window.location.href = 'mainpage.html';
    }
}