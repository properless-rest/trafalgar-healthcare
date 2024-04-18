
import Service from "./Service.jsx";

import { serviceData } from "./service-grid-data.jsx";

import rectangle from "./static/rectangle.png";

import "./Services.css";


export default function Services() {
    const serviceElements = serviceData.map(
        (service, index) => <Service key={index} {...service} />
    );
    return (
        <section className="section-services">
            <h3 className="services-title">Our services</h3>
            <img className="img-separator" src={rectangle} alt="Rectangle separator" />
            <p className="services-description">
                We provide you with the best choiches. Adjust them to your health needs and make sure your undergo treatment with our highly qualified doctors. Consult with us which type of service is most suitable for your health
            </p>
            <div className="service-grid">
                {serviceElements}
            </div>
            <button className="services-btn">Learn more</button>
        </section>
    );
}
