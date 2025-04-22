import React from 'react';
import { Bike, Apple, Sofa, ShoppingCart, Search, Menu } from 'lucide-react';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';

const FooterIs = () => {
    return (
        <>
            <footer className="py-8 text-white bg-gray-900">
                <div className="px-4 mx-auto max-w-7xl sm:px-4 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">
                        <div>
                            <h3 className="mb-4 text-xl font-bold"> 𝓟𝓻𝓸𝓭𝓾𝓬𝓽 𝓩𝓸𝓷𝓮</h3>
                            <p className="text-gray-400">
                            𝓟𝓻𝓸𝓭𝓾𝓬𝓽 𝓩𝓸𝓷𝓮 is an all-in-one e-commerce platform that provides customers with a wide range of products. From electronics to fashion, home essentials to groceries
                            </p>
                        </div>
                        <div>
                            <h4 className="flex flex-col items-center justify-center mb-4 text-lg font-semibold">Touch With Us</h4>
                            <div className="flex items-center justify-center mb-4 text-lg font-semibold">
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
                        <div>
                            <h4 className="mb-4 text-lg font-semibold">Customer Service</h4>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        Shipping Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        Returns & Exchanges
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full text-center ">
                            <div className="w-full max-w-md">
                                <h4 className="mb-4 text-lg font-semibold">Newsletter</h4>
                                <p className="mb-4 text-gray-400">
                                    Subscribe to receive updates and special offers.
                                </p>
                                <div className="flex flex-col w-full max-w-md sm:flex-row">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-2 text-gray-900 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                                    />
                                    <button className="px-4 py-2 transition-colors bg-indigo-600 rounded-b-lg sm:rounded-r-lg sm:rounded-b-none hover:bg-indigo-700">
                                        Subscribe
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="pt-8 mt-8 text-center text-gray-400 border-t border-gray-800">
                        <p>&copy; 2024  𝓟𝓻𝓸𝓭𝓾𝓬𝓽 𝓩𝓸𝓷𝓮. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterIs;
