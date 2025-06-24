import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const closeMenu = () => setMobileOpen(false);

    return (
        <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

                {/* Logo + Brand */}
                <div className="flex items-center space-x-2">
                    <img src="/mefeydal-logo.png" alt="Mefeydal Logo" className="h-10 w-10 object-contain" />
                    <span className="font-semibold text-lg text-gray-900">Mefeydal</span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    <ul className="flex gap-8 text-sm text-gray-800 font-medium">
                        <li><a href="#services" className="hover:text-blue-600 transition">Services</a></li>
                        <li><a href="#industries" className="hover:text-blue-600 transition">Industries</a></li>
                        <li><a href="#experiences" className="hover:text-blue-600 transition">Experience</a></li>

                    </ul>

                    <button className="bg-blue-600 text-white text-sm font-semibold px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition">
                        <a href="#contact">Contact us</a>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setMobileOpen(!mobileOpen)} className="text-gray-700 focus:outline-none">
                        {mobileOpen ? (
                            <XMarkIcon className="h-6 w-6" />
                        ) : (
                            <Bars3Icon className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {mobileOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
                    <div className="flex flex-col items-center justify-center gap-6 py-6 text-lg text-gray-800 font-medium">
                        <ul className="flex flex-col items-center gap-6">
                            <li><a href="#services" onClick={closeMenu} className="hover:text-blue-600 transition">Services</a></li>
                            <li><a href="#industries" onClick={closeMenu} className="hover:text-blue-600 transition">Industries</a></li>
                            <li><a href="#experiences" onClick={closeMenu} className="hover:text-blue-600 transition">Experience</a></li>
                        </ul>
                        <button
                            onClick={closeMenu}
                            className="bg-blue-600 text-white text-sm font-semibold px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition"
                        >
                            <a href="#contact">Contact us</a>
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
