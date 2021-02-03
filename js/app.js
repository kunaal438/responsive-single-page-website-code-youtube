const navbar = document.querySelector('.navbar');

document.addEventListener('scroll', () => {
    if(scrollY > 81){
        navbar.style.backgroundColor = `var(--primary-color)`;
    } else{
        navbar.style.backgroundColor = `transparent`;
    }
})

// navbar click event 
const navItems = [...document.querySelectorAll('.nav-item .link')];

navItems.map(item => {
    item.addEventListener('click', () => {
        navItems.map(ele => ele.classList.remove('active'));
        item.classList.add('active');
    })
})