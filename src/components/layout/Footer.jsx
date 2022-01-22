import React from "react";

const footerYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="footer p-10 bg-grat-700 text-primary-content footer-center">
      <p>Copyright &copy; {footerYear} All Rights Reserve</p>
    </div>
  );
};

export default Footer;
