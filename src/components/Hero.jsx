
import './Hero.css'
import heroImage from './static/trafalgar-hero-image.png'

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-advertiser">
                <h2 className="hero-title">Virtual healthcare for you</h2>
                <p className="hero-text">
                Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone.
                </p>
                <button className="hero-btn">Consult today</button>
            </div>
            <img className="hero-image" src={heroImage} alt="Trafalgar Medical Hero Image"/>
        </section>
    );
}
