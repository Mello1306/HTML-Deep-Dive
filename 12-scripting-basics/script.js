const button = document.getElementById('revealBtn');
const secret = document.getElementById('secretText');


button.addEventListener('click', function() {
    if (secret.style.display === 'none') {
        secret.style.display = 'block';
        button.textContent = 'Hide Secret';
    } else {
        secret.style.display = 'none';
        button.textContent = 'Show Secret Goal';
    }
});
