document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const formSection = document.querySelector('.form-section');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        form.style.display = 'none';
        formSection.innerHTML += '<p>Thank you for your feedback! Your submission has been processed successfully.</p>';
    });
});