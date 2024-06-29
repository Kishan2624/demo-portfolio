const mobileNav = () => {
    const headerMenuBtn = document.querySelector('.header__bars')
    const mobileNav = document.querySelector('.mobile-nav')
    const mobileMenuToggle = document.querySelector('.mobile-nav__toggle')
    const mobileLinks = document.querySelectorAll('.mobile-nav__link')
    const sunBtn = document.querySelectorAll(".theme-")
    
    headerMenuBtn.addEventListener("click" , () => {
        mobileNav.style.display = 'flex'
        document.body.style.overflowY = 'hidden'
        headerMenuBtn.classList.add('hide-Display')
        mobileMenuToggle.classList.add('show-Display')
    })

    mobileMenuToggle.addEventListener("click", () => {
        document.body.style.overflowY = 'auto'
        mobileNav.style.display = 'none'
        headerMenuBtn.classList.remove('hide-Display')
        mobileMenuToggle.classList.remove('show-Display')
    })

    mobileLinks.forEach(link => {
        link.addEventListener("click" , () => {
            mobileNav.style.display = 'none'
            document.body.style.overflowY = 'auto'
            headerMenuBtn.classList.remove('hide-Display')
            mobileMenuToggle.classList.remove('show-Display')
        })
    })

}

export default mobileNav;
