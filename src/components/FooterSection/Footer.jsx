import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './Footer.css'



const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-sub">
                    <div className="footer-sub-1">
                        <h2>Shot Link</h2>
                        <div className="footer-1-in">
                            <Link><div className="footer-head"><h1 className='footer-head-in'>Product</h1></div></Link>
                            <Link><div className="footer-head"><h1 className='footer-head-in'>Product</h1></div></Link>
                            <Link><div className="footer-head"><h1 className='footer-head-in'>Product</h1></div></Link>
                        </div>
                    </div>
                    <div className="footer-sub-2">
                        <div className="footer-2-in">
                            <div className="footer-email-box"><input type="text" className='footer-email' placeholder='Chat with Us' />
                                <div className="footer-submit-box"><Button>send</Button></div>
                            </div>
                            <div className="footer-link-box">
                                <Button>F</Button>
                                <Button>W</Button>
                                <Button>X</Button>
                                <Button>IN</Button>
                            </div>
                        </div>
                    </div>
                    <div className="footer-sub-3">
                        <h2>Shot Link</h2>
                        <div className="footer-1-in">
                            <Link><div className="footer-head"><h1 className='footer-head-in'>Product</h1></div></Link>
                            <Link><div className="footer-head"><h1 className='footer-head-in'>Product</h1></div></Link>
                            <Link><div className="footer-head"><h1 className='footer-head-in'>Product</h1></div></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer