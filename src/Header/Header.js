import logo from '../logo-horloge-image.png'
import NavBar from './NavBar'

export default function Header() {
    return(
        <header className="banner">
            <NavBar />
            <div className="logo-part">
                <h1 className="headline">Watchmaking</h1>
                <img src={logo} className="logo-banner"/>
            </div>
        </header>
    )
}