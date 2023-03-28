import React from "react";
import "./Footer.scss";
import { GoLocation } from 'react-icons/go'
import { FiSmartphone } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import Payment from '../../assets/payments.png'

const Footer = () => {
    return ( <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                    Creating this web-site only for edeucation purpose...
                    I'm Uves
                    currently in 3rd year
                    Let's complete this
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-items">
                    <GoLocation />
                    <div className="text">430, nasir nagar, ved road, katargam, near jilani bridge ,surat, gujarat, 395004</div>
                </div>
                <div className="c-items">
                    <HiOutlineMail />
                    <div className="text">Email : suves58@gmail.com</div>
                </div>
                <div className="c-items">
                    <FiSmartphone />
                    <div className="text">Phone : +91 79906 65076</div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <span className="text">Sports</span>
                <span className="text">Formals</span>
                <span className="text">Loafers</span>
                <span className="text">Boots</span>
                <span className="text">Sandles</span>
                <span className="text">Sneakers</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Terms and Condition</span>
                <span className="text">Returns</span>
                <span className="text">Contacts</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-content">
                <div className="text">
                    ShoeStore 2023 CREATED BY UVES. PREMIUM E-COMMERCE SOLUTION.
                </div>
                <img src={Payment} alt="" />
            </div>
        </div>
    </footer>
    );
};

export default Footer;
