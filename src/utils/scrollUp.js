const scrollUp = () => {
//Handler
const handler = () => {
    const topBtn = document.querySelector('.scrollUp')
    // When the scroll is higher than 350 viewport height, add the show-display class to the a tag with the show-Display class
    scrollY >= 350 ? topBtn.classList.add('show-scroll') : topBtn.classList.remove('show-scroll')
}

window.addEventListener('scroll',handler)
}

export default scrollUp;