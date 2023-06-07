const Button = document.getElementById('btn');
 
Button.addEventListener('click', () => {
    document.body.classList.toggle('dark'); 
    Button.classList.toggle('active');
});