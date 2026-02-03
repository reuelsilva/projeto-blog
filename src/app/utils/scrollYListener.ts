const scrollYListener = () => {
    const headerIntro = document.querySelector('header > div') as HTMLElement;

    if (window.scrollY > 516.7999877929688) {
        headerIntro.style.display = 'none';
    } else {
        headerIntro.style.display = 'flex';
    }
}

export default scrollYListener