import React from "react";
import { FaXTwitter, FaLinkedin, FaFacebook } from "react-icons/fa6";

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-primary text-brand-cream/80 py-10">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6 items-center">
                {/* Left Side */}
                <div>
                    <h3 className="text-xl font-semibold text-brand-secondary">Mefeydal Translations</h3>
                    <p className="text-sm mt-2">
                        Breaking language barriers. One translation at a time.
                    </p>
                </div>

                {/* Right Side */}
                <div className="flex justify-start md:justify-end items-center gap-4 mt-4 md:mt-0">
                    <h4 className="mr-4 font-medium text-brand-cream">Follow Us:</h4>
                    <a
                        href="https://x.com/abdoab_dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="text-xl hover:text-brand-secondary transition"
                    >
                        <FaXTwitter />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/abdoab"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-xl hover:text-brand-secondary transition"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=61590889101106&mibextid=ZbWKwL"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="text-xl hover:text-brand-secondary transition"
                    >
                        <FaFacebook />
                    </a>
                </div>
            </div>
            <div className="text-center text-sm text-brand-cream/50 mt-8">
                Developed by
                <a href="https://abdoab.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-secondary hover:underline transition font-medium">Abdo Ab</a> © {new Date().getFullYear()} Mefeydal. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
