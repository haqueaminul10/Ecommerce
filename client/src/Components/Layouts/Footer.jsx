import React from "react";
import "../Style/footer.css";
// IMPORT ICON
import { FaRegPaperPlane } from "react-icons/fa";
import { SlCallOut } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";

function Footer() {
  return (
    <>
      {/* FOOTER FIRST PART */}
      <section className="footer_one">
        <div className="footer_one_left">
          <FaRegPaperPlane className="footer_one_left_icon" />
          <span className="footer_one_left_text">Sign up to Newsletter</span>
        </div>
        <div className="footer_one_center">
          ...and receive
          <span style={{ fontWeight: `600` }}>
            $20 coupon for first shopping
          </span>
        </div>
        <div className="footer_one_right">
          <input
            type="text"
            placeholder="Enter your email"
            className="footer_one_right_input"
          />
          <input
            type="submit"
            value="Subscribe"
            className="footer_one_right_submit"
          />
        </div>
      </section>
      {/* FOOTER LAST PART */}
      <section>
        <div className="footer_two">
          <div>
            <div className="logo">
              <span className="logo_name">
                Eco<span className="logo_names">Hub</span>
                <span className="logo_dot">.</span>
              </span>
            </div>
            <div className="footer_two_left_call">
              <SlCallOut className="footer_two_left_logo" />
              <p>
                Got questions?
                <span className="footer_two_left_number">
                  Call us 24/7! (800) 8001-8588, (0600) 874 548
                </span>
              </p>
            </div>
            <div>
              <p className="footer_two_left_info">
                Contact info
                <span className="footer_two_left_adress">
                  17 Princess Road, London, Greater London NW1 8JR, UK
                </span>
              </p>
            </div>
            <div>
              <FaFacebookF className="footer_two_left_icon" />
              <AiOutlineWhatsApp className="footer_two_left_icon" />
              <AiFillInstagram className="footer_two_left_icon" />
              <AiOutlineTwitter className="footer_two_left_icon" />
            </div>
          </div>
          <div className="footer_two_find">
            <h3>Find In Fast</h3>
            <li>Accessories</li>
            <li>Gaming</li>
            <li>Laptops & Computer</li>
            <li>Mac Computers</li>
            <li>PC Computers</li>
            <li>Ultrabooks</li>
          </div>

          <div className="footer_two_find">
            <h3>Information</h3>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>All Collections</li>
            <li>Privacy policy</li>
            <li>Terms & Conditions</li>
          </div>

          <div className="footer_two_find">
            <h3></h3>
            <li>Contact Us</li>
            <li>Wishlist</li>
            <li>Shopping Cart</li>
            <li>Shipping & Return</li>
            <li>FAQs</li>
            <li>About Us</li>
          </div>

          <div className="footer_two_find">
            <h3>In the Spotlight</h3>
            <li>Electronics</li>
            <li>Toys</li>
            <li>Video Games</li>
            <li>Home Products</li>
            <li>Clothing</li>
            <li>Sports & Outdoors</li>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
