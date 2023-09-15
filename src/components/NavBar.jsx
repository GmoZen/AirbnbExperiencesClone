import react from "react"
import airbnbLogo from '../assets/airbnb1.png';

function NavBar() {
    return (
        <nav>
            <img src={airbnbLogo} className="nav--logo" />
        </nav>
    )
}

export default NavBar