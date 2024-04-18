
import "./Service.css";


export default function Service( { imgSrc, serviceTitle, serviceDescription } ) {
    return (
        <div className="service">
            <img className="service-image" src={imgSrc} alt="Service Image"/>
            <h4 className="servive-title">{serviceTitle}</h4>
            <p className="service-description">{serviceDescription}</p>
        </div>
    );
}