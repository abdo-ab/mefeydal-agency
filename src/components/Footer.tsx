import React from "react";
import { FaXTwitter, FaLinkedin, FaFacebook } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6 items-center">
        {/* Left Side */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            Mefeydal Translations
          </h3>
          <p className="text-sm mt-2">
            Breaking language barriers. One translation at a time.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex justify-start md:justify-end items-center gap-4 mt-4 md:mt-0">
          <h4 className="mr-4 font-medium text-white">Follow Us:</h4>
          <a
            href="https://twitter.com/kamil_mohammed"
            aria-label="Twitter"
            className="text-xl hover:text-white transition"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/kamil-m-abdo-9a3b36322/"
            aria-label="LinkedIn"
            className="text-xl hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://web.facebook.com/kaamil.qafarkooni.2025"
            aria-label="Facebook"
            className="text-xl hover:text-white transition"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-8">
        Developed by{" "}
        <a
          href="https://abdoab.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:underline"
        >
          Abdo ab
        </a>{" "}
        © {new Date().getFullYear()} Mefeydal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
