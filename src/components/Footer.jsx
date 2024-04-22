

import "./Footer.css";


export default function Footer() {
    return (
        <footer>
            <div className="column-trafalgar">
                <div className="div-trafalgar">
                    <div className="footer-logo">T</div>
                    <h5 className="footer-title">Trafalgar</h5>
                </div>
                <p className="footer-description">
                    Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone.
                </p>
                <p className="footer-copyright">©Trafalgar PTY LTD 2024. All&nbsp;rights&nbsp;reserved</p>
            </div>

            <div className="column-company">
                <h6 class="column-header">Company</h6>
                <a className="footer-link" href="$">About</a>
                <a className="footer-link" href="$">Testimonials</a>
                <a className="footer-link" href="$">Find a Doctor</a>
                <a className="footer-link" href="$">Apps</a>
            </div>
           
            <div className="column-region">
                <h6 class="column-header">Region</h6>
                <a className="footer-link" href="$">Indonesia</a>
                <a className="footer-link" href="$">Singapore</a>
                <a className="footer-link" href="$">Hongkong</a>
                <a className="footer-link" href="$">Canada</a>
            </div>

            <div className="column-help">
                <h6 class="column-header">Help</h6>
                <a className="footer-link" href="$">Help center</a>
                <a className="footer-link" href="$">Contact support</a>
                <a className="footer-link" href="$">Instructions</a>
                <a className="footer-link" href="$">How it works</a>
            </div>
            <img class="visibility bg-dots8" src="./src/static/dots7.png" alt="dots8" />
        </footer>
    );
}
