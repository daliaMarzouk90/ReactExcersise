function Header() {
    return (
        <header className='header'>
            <img src="/src/assets/react-1.svg" width="100" height="100" alt="React Logo" />
            <nav className='nav-list'>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export { Header }