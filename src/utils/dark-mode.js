const darkMode = () => {
    const themeToggleBtns = document.querySelectorAll('#theme-toggle');

    //State
    const theme = localStorage.getItem('theme');

    //On mount 
    theme && document.body.classList.add(theme);

    //Handlers
    const handleThemeToggle = () => {
        document.body.classList.toggle("light-mode");
        if(document.body.classList.contains("light-mode")){
            localStorage.setItem('theme', 'light-mode')
            themeToggleBtns.forEach(btn => {
                btn.style.color = '#e11d48'
            })
        }else{
            localStorage.removeItem('theme');
            document.body.removeAttribute('class')
            themeToggleBtns.forEach(btn => {
                btn.style.color = '#475569'
            })
        }
    }

    //Events
    themeToggleBtns.forEach(btn => 
        btn.addEventListener("click" , handleThemeToggle)) 


}

export default darkMode;