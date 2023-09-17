const category = document.querySelector('.category');
const navbar = document.querySelector('.navbar ul');

category.onclick = () =>{
    navbar.classList.toggle('muncul');
}