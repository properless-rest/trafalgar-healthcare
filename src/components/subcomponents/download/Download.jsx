
import { FaLongArrowAltDown } from "react-icons/fa";


import downloadImage from "./static/trafalgar-download.png";
import rectangle from "./static/rectangle.png";

import "./Download.css";

export default function Download() {
    return (
        <section className="section-download">
            <div className="div-download-advertiser">
                <h3 className="download-title">Download our mobile&nbsp;apps</h3>
                <img className="img-separator" src={rectangle} alt="Rectangle separator" />
                <p className="download-description">
                    Our dedicated patient engagement app and web portal allow you to access information instantaneously 
                    (no tedeous form, long calls, or administrative hassle) and securely
                </p>
                <button className="download-btn">
                    Download
                    <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            d="M4.81951 1.05554L4.81951 12.6308L2.27646 10.0877C1.92569 9.73698 1.39954 9.73698 1.04878 10.0877C0.698014 10.4385 0.698014 10.9647 1.04878 11.3154L5.08258 15.3492C5.43335 15.7 5.95949 15.7 6.31026 15.3492L10.3441 11.3154C10.6948 10.9647 10.6948 10.4385 10.3441 10.0877C9.9933 9.73698 9.46715 9.73698 9.11638 10.0877L6.57333 12.6308L6.57333 1.05554C6.57333 0.617083 6.22257 0.178627 5.69642 0.178627C5.17027 0.178627 4.81951 0.617083 4.81951 1.05554Z" 
                            fill="#458FF6"
                        />
                    </svg>
                </button>
            </div>
            <img className="download-image" src={downloadImage} alt ="Download section image" />
        </section>
    );
}
