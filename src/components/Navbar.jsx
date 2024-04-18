
import './Navbar.css'

export default function Navbar() {
    return (
        <nav>
           <div className="nav-div-logo">
                <div className="nav-logo-icon">T</div>
                <h1 className="nav-logo-name">Trafalgar</h1>
           </div>
           <div className="nav-div-menu">
                <a className="nav-link link-home" href="#">Home</a>
                <a className="nav-link link-selected" href="#">Find a doctor</a>
                <a className="nav-link" href="#">Apps</a>
                <a className="nav-link" href="#">Testimonials</a>
                <a className="nav-link" href="#">About Us</a>
           </div>
        </nav>
    );
}