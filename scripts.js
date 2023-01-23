
/*  const footer = document.getElementsByTagName('footer')

const h1 = document.getElementById("page-title")
const button = document.getElementById('mode-selector')

button.addEventListener("click", function() {
    const body = document.querySelector('body');
    // Alterna a classe "dark-mode" no body
    body.classList.toggle('dark-mode');
    
    if(h1 === 'Light Mode ON'){
        document.getElementsByTagName("button").style.color = 'white'
        const mode = 'Dark Mode ON'
        h1.innerHTML = mode
        button.innerHTML = 'Light Mode'
    } else {

    }
    
}); */

const h1 = document.getElementById("page-title");
const button = document.getElementById('mode-selector');

button.addEventListener("click", function() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
    const footer = document.querySelector('footer')
    footer.classList.toggle('dark-mode')
    
    if(h1.innerHTML === 'Light Mode ON'){
        button.style.color = 'white';
        h1.innerHTML = 'Dark Mode ON';
        button.innerHTML = 'Light Mode';
    } else {
        button.style.color = 'black';
        h1.innerHTML = 'Light Mode ON';
        button.textContent = 'Dark Mode';
    }
});





