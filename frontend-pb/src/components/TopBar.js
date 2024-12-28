import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../css/topBar.css";

const TopBar = () => {
  const [language, setLanguage] = useState("EN");

  const handleToggle = () => {
    setLanguage((prevLanguage) => (prevLanguage === "EN" ? "PL" : "EN"));
  };

  return (
    <div className="top-bar">
      <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="mailto:contact@polishbaseball.com">
          <MdEmail />
        </a>
      </div>
      <div className="language-toggle">
        <label className="toggle-switch">
          <input type="checkbox" onChange={handleToggle} />
          <span className="slider"></span>
        </label>
        <span className="language-label">{language}</span>
      </div>
    </div>
  );
};

export default TopBar;