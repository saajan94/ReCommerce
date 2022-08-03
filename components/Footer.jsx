import React from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>ReCommerce © 2022. All rights reserved.</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <a href="https://github.com/saajan94/ReCommerce" target="_blank">
          <AiFillGithub />
        </a>
      </p>
    </div>
  );
};

export default Footer;
