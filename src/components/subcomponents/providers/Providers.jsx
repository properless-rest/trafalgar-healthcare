
import providersImage from "./static/trafalgar-providers.png";
import rectangle from "./static/rectangle.png";

import "./Providers.css";


export default function Providers() {
    return (
        <section className="section-providers">
            <img className="providers-image" src={providersImage} alt="Image section providers"/>
            <div className="div-providers-advertiser">
                <h3 className="providers-title">Leading healthcare providers</h3>
                <img className="img-separator" src={rectangle} alt="Rectangle separator" />
                <p class="providers-description">
                    Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. 
                    To us, it’s not just work. We take pride in the solutions we deliver.
                </p>
                <button className="providers-btn">Learn more</button>
            </div>
        </section>
    );
}
