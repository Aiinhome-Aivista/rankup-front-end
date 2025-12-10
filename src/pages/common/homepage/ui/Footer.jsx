import React from "react";

function Footer() {
  return (
    <footer className="pt-8 mt-4 pb-0 relative overflow-hidden font-sans border-t border-[#D9D9D9]">
      <div className="max-w-6xl mx-auto px-10 lg:px-14">
        {/* Logo Section */}
        <div className="flex items-center gap-3 mb-10">
          <img 
            src="/black-logo-main.svg" 
            alt="Rank Up Academy Logo" 
            className="h-8 w-auto"
          />
          <div className="flex items-center">
            <img src="/Rank Up Academy.svg" alt="" className="h-5 w-auto" />
          </div>
        </div>

        {/* Links Grid */}
        <div className="flex flex-col md:flex-row w-full justify-between gap-12 mb-20">
          {/* Column 1 */}
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">About Us</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Features</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Pricing</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Documentation</a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Support</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Terms & Conditions</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Contact</a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Contact</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">FAQ</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Blog</a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center pb-8">
          <p className="text-gray-400 text-sm">
            @2020 Aiinhome Technologies Pvt. Ltd. All rights reserved
          </p>
        </div>
      </div>

      {/* Decorative Image */}
      <img 
        src="/footer-img.svg" 
        alt="Footer Decoration" 
        className="absolute bottom-0 left-0 w-24 md:w-32 lg:w-38 z-10"
      />
    </footer>
  );
}

export default Footer;
