import React from "react";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";


const Footer = () => {

  return (
    <div className=" footer bg-dark text-light p-3">
      <div className="left-footer">
        <p>Download Our App</p>
        <img src="\images\get-it-on-google-play-icon-logo.png" alt="Playstore"/>
      </div>
      <div className="mid-footer text-center">
        <p style={{ fontWeight: "bold", fontSize: "30px" }}>E Commerce</p>
        <h6>All Right Reserved &copy; Ecommerce</h6>
        <div>
        <Link to="/about">About</Link>
        |
        <Link to="/contact">Contact</Link>
        |
        <Link to="/policy">Policy</Link>
        </div>
      </div>
      <div className="right-footer">
        <h3>Follow Us</h3>
        <a href="https://www.youtube.com">Instagram</a>
        <a href="https://www.youtube.com">Youtube</a>
        <a href="https://www.youtube.com">Facebook</a>
      </div>
    </div>
  );
};

export default Footer;
