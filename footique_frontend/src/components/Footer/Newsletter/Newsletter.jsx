import "./Newsletter.scss";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Newsletter = () => {
    return <div className="newsletter-section">
        <div className="newsletter-content">
            <span className="small-text">Newsletter</span>
            <span className="big-text">Sign-up for latest updates and offers.</span>
            <div className="form">
                <input type="email" placeholder="Email Address" />
                <button>Subscribe</button>
            </div>
            <div className="text">Will be used in accordance with our Privacy Policy</div>
            <div className="social-icons">
                <div className="icon" size={14}>
                    <FaFacebookF />
                </div>
                <div className="icon" size={14}>
                    <FaTwitter />
                </div>
                <div className="icon" size={14}>
                    <FaInstagram />
                    {/* <a className="icon" href="https://instagram.com"><FaInstagram /></a> */}
                </div>
                <div className="icon" size={14}>
                    <FaLinkedinIn />
                </div>
            </div>
        </div>
    </div>;
};

export default Newsletter;
