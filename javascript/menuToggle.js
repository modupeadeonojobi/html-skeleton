const x = document.getElementById('hamburgerBtn');
const nav = document.getElementById('primaryNav');
x.addEventListener('click', () => {
    nav.classList.toggle('open')
})
