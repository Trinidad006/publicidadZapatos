document.getElementById('add-to-cart').addEventListener('click', function() {
    var msg = document.getElementById('cart-message');
    msg.classList.remove('hidden');
    setTimeout(function() {
        msg.classList.add('hidden');
    }, 2000);
});
document.getElementById('contact-seller').addEventListener('click', function() {
    alert('Message envoyé au vendeur !');
}); 