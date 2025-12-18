import React from "react";
import blackLogo from "../../../../assets/icons/black-logo-main.svg";
import rankUpAcademy from "../../../../assets/icons/Rank Up Academy.svg";
import footerImg from "../../../../assets/icons/footer-img.svg";
import { motion } from "framer-motion";

function Footer({ fadeContent = false }) {
  // Animation variants for content fade-in
  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <footer className="pt-8 pb-0 relative overflow-hidden font-sans border-t border-app-primary-190">
      <motion.div
        className="max-w-6xl mx-auto px-10 lg:px-14"
        variants={contentVariants}
        initial="hidden"
        animate={fadeContent ? "visible" : "hidden"}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-3 mb-10">
          <img
            src={blackLogo}
            alt="Rank Up Academy Logo"
            className="h-8 w-auto"
          />
          <div className="flex items-center">
            <img src={rankUpAcademy} alt="" className="h-5 w-auto" />
          </div>
        </div>

        {/* Links Grid */}
        <div className="flex flex-col md:flex-row w-full justify-between gap-12 mb-20">
          {/* Column 1 */}
          <div className="flex flex-col space-y-4">
            <a
              href="#"
              className="text-app-primary-110 hover:text-app-primary-120 text-sm"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-app-primary-110 hover:text-app-primary-120 text-sm"
            >
              Features
            </a>
            <a
              href="#"
              className="text-app-primary-110 hover:text-app-primary-120 text-sm"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-app-primary-110 hover:text-app-primary-120 text-sm"
            >
              Documentation
            </a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-4">
            <a
              href="#"
              className="text-app-primary-110 hover:text-app-primary-120 text-sm"
            >
              Support
            </a>
            <a
              href="#"
              className="text-app-primary-110 hover:text-app-primary-120 text-sm"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="text-app-primary-110 hover:text-app-primary-120 text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-app-primary-110 hover:text-app-primary-120 text-sm"
            >
              Contact
            </a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col space-y-4">
            <a
              href="#"
              className="text-app-primary-110 hover:text-app-primary-120 text-sm"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-app-primary-110 hover:text-app-primary-120 text-sm"
            >
              FAQ
            </a>
            <a
              href="#"
              className="text-app-primary-110 hover:text-app-primary-120 text-sm"
            >
              Blog
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center pb-8">
          <p className="text-app-primary-70 text-sm">
            @2020 Aiinhome Technologies Pvt. Ltd. All rights reserved
          </p>
        </div>
      </motion.div>

      {/* Decorative Image */}
      <img
        src={footerImg}
        alt="Footer Decoration"
        className="absolute bottom-0 left-0 w-24 md:w-32 lg:w-38 z-10"
      />
    </footer>
  );
}

export default Footer;
