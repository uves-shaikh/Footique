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
                    {/* <FaFacebookF /> */}
                    <a className="icon" href="https://www.facebook.com/uves-shaikh.148" target="_blank" rel="noreferrer"><FaFacebookF /></a>
                </div>
                <div className="icon" size={14}>
                    {/* <FaTwitter /> */}
                    <a className="icon" href="https://www.twitter.com/ShaikhUv1/" target="_blank" rel="noreferrer"><FaTwitter /></a>
                </div>
                <div className="icon" size={14}>
                    {/* <FaInstagram /> */}
                    <a className="icon" href="https://www.instagram.com/uvesforsure/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                </div>
                <div className="icon" size={14}>
                <a className="icon" href="https://www.linkedin.com/in/shaikh-uves-3579bb22a" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                    {/* <FaLinkedinIn /> */}
                </div>
            </div>
        </div>
    </div>;
};

export default Newsletter;
