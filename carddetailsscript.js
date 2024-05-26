document.getElementById('repaymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Payment successful!');
    window.location.href = 'manage.html';
});