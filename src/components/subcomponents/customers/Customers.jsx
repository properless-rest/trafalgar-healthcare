
import { customerData } from "./customersData.js";

import imgSeparator from "./static/rectangle.png";

import "./Customers.css";


export default function Customers() {
    const { imgSrc, name, job, comment } = customerData;  // simulator of React.useState()
    return (
        <section className="section-customers">
            <img class="visibility bg-dots4" src="figures/dots4.png" alt="dots4" />
            <img class="visibility bg-dots5" src="figures/dots5.png" alt="dots5" />
            <div className="customer-tablet">
                <h3 className="customers-title">What our customers are&nbsp;saying</h3>
                <img className="img-separator" src={imgSeparator} alt="Image separator" />
                <div className="div-customer-comment">
                    <div className="div-customer-profile">
                        <img className="customers-avatar" src={imgSrc} alt="Customer's profile image" />
                        <div className="div-customer-data">
                            <h4 className="customer-name">{name}</h4>
                            <span className="customer-job">{job}</span>
                        </div>
                    </div>
                    <p className="customer-comment"> 
                        {comment}
                    </p>
                </div>
            </div>
            <div className="scroller">
                <svg className="arrow" width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.4">
                    <path d="M27.6911 8.76265L6.64523 8.76265L11.269 4.13893C11.9067 3.50117 11.9067 2.54454 11.269 1.90678C10.6312 1.26903 9.67457 1.26903 9.03681 1.90678L1.70263 9.24097C1.06487 9.87872 1.06487 10.8354 1.70263 11.4731L9.03681 18.8073C9.67457 19.445 10.6312 19.445 11.269 18.8073C11.9067 18.1695 11.9067 17.2129 11.269 16.5752L6.64523 11.9514L27.6911 11.9514C28.4883 11.9514 29.2855 11.3137 29.2855 10.357C29.2855 9.40041 28.4883 8.76265 27.6911 8.76265Z" fill="#458FF6"/>
                    </g>
                </svg>
                <div className="scroller-dots">
                    <svg className="dot" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="5" cy="5" r="5" fill="#5B9BF3"/>
                    </svg>
                    <svg className="dot" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.3" cx="5" cy="5" r="5" fill="#5B9BF3"/>
                    </svg>
                    <svg className="dot" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.3" cx="5" cy="5" r="5" fill="#5B9BF3"/>
                    </svg>
                    <svg className="dot" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.3" cx="5" cy="5" r="5" fill="#5B9BF3"/>
                    </svg>
                </div>
                <svg className="arrow" width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.73745 11.2373L24.7834 11.2373L20.1596 15.8611C19.5219 16.4988 19.5219 17.4555 20.1596 18.0932C20.7974 18.731 21.754 18.731 22.3918 18.0932L29.726 10.759C30.3637 10.1213 30.3637 9.16464 29.726 8.52689L22.3918 1.1927C21.754 0.55495 20.7974 0.55495 20.1596 1.1927C19.5219 1.83046 19.5219 2.78709 20.1596 3.42485L24.7834 8.04857L3.73745 8.04857C2.94025 8.04857 2.14306 8.68633 2.14306 9.64296C2.14306 10.5996 2.94025 11.2373 3.73745 11.2373Z" fill="#458FF6"/>
                </svg>
            </div>
        </section>
    );
}
