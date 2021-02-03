
// navbar toggler
const toggleBtn = document.querySelector('.toggle-btn');
const navbarList = document.querySelector('.nav-links-container'); // only ul element

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    navbarList.classList.toggle('active');
})

// scrolling behaviour
const navbar = document.querySelector('.navbar'); // whole navbar

document.addEventListener('scroll', () => {
    if(scrollY > 81){
        navbar.style.backgroundColor = `var(--primary-color)`;
    } else{
        navbar.style.backgroundColor = `transparent`;
    }
})

// navbar click event 
const navItems = [...document.querySelectorAll('.nav-item .link')]; // all links item

navItems.map(item => {
    item.addEventListener('click', () => {
        navItems.map(ele => ele.classList.remove('active'));
        item.classList.add('active');
    })
})