




import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

                {/* Logo + Brand */}
                <div className="flex items-center space-x-2">
                    <img src="/mefeydal-logo.png" alt="Mefeydal Logo" className="h-10 w-10 object-contain" />
                    <span className="font-semibold text-lg text-gray-900">Mefeydal</span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    <ul className="flex gap-8 text-sm text-gray-800 font-medium">
                        <li><a href="#" className="hover:text-blue-600 transition">Services</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition">Industries</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition">Experience</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition">About Us</a></li>
                    </ul>

                    <button className="bg-blue-600 text-white text-sm font-semibold px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition">
                        Contact us
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

            {/* Mobile Menu (Centered) */}
            {mobileOpen && (
                <div className="md:hidden fixed inset-0 z-50 bg-white flex flex-col items-center justify-center gap-6 text-lg text-gray-800 font-medium">
                    <ul className="flex flex-col items-center gap-6">
                        <li><a href="#" className="hover:text-blue-600 transition">Services</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition">Industries</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition">Experience</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition">About Us</a></li>
                    </ul>
                    <button className="bg-blue-600 text-white text-sm font-semibold px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition">
                        Contact us
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;

