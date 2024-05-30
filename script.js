// index.html
const myButton = document.getElementById('myButton');

function animateAndNavigate() {
    myButton.classList.add('animate');
    setTimeout(() => {
        window.location.href = 'next.html';
    }, 1000); // Wait for the animation duration (1 second) before navigating
}

myButton.addEventListener('click', animateAndNavigate);
