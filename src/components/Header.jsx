import logo from "../assets/img/logo.png"

export default function Header () {
    return (
        <header>
            <nav className="nav">
            <img src={logo} alt="logo" className="logo" />
            <h3>MemeGenerator</h3>
            </nav>
        </header>
    )
}