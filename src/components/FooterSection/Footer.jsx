import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-sub">
                    <div className="footer-sub-1">
                        <h2>Short Links</h2>
                        <div className="footer-1-in">
                            <Link to={'/'} style={{ textDecoration: 'none' }}>
                                <div className="footer-head">
                                    <h1 className='footer-head-in'>Home</h1>
                                </div>
                            </Link>
                            <Link to={'/about'} style={{ textDecoration: 'none' }}>
                                <div className="footer-head">
                                    <h1 className='footer-head-in'>About</h1>
                                </div>
                            </Link>
                            <Link to={'/'} style={{ textDecoration: 'none' }}>
                                <div className="footer-head">
                                    <h1 className='footer-head-in'>Product</h1>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="footer-sub-2">
                        <div className="footer-2-in">
                            <div className="footer-email-box">
                                <input type="text" className='footer-email' placeholder='Chat with Us' />
                                <div className="footer-submit-box">
                                    <Button>Send</Button>
                                </div>
                            </div>

                            {/* Social Media Links */}
                            <div className="footer-link-box">
                                <Button >
                                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faFacebook} size="2x" color="#1877F2" />
                                    </a>
                                </Button>
                                <Button >
                                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faInstagram} size="2x" color="#E4405F" />
                                    </a>
                                </Button>
                                <Button >
                                    <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faWhatsapp} size="2x" color="#25D366" />
                                    </a>
                                </Button>
                                <Button >
                                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faYoutube} size="2x" color="red" />
                                    </a>
                                </Button>

                            </div>
                        </div>
                    </div>

                    <div className="footer-sub-3">
                        <h2>About Us</h2>
                        <div className="footer-1-in">
                            Product Zone is an all-in-one e-commerce platform that provides customers with a wide range of products. From electronics to fashion, home essentials to groceries
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
