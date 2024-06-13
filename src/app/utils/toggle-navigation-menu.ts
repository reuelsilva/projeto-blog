const toggleNavigationMenu = () => {
    const ul = document.getElementById("menu")
    ul?.classList.toggle("hidden")
    ul?.classList.toggle("flex")
}

export default toggleNavigationMenu
