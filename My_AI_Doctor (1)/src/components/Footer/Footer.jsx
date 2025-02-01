import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#0c6584", color: "#ffffff", padding: "20px" }}
    >
      <div className="container">
        <div className="row">
          {/* About Us Section */}
          <div className="col-md-3">
            <h5 className="fw-bold">About us</h5>
            <p className="mt-3">
              Dr. Anupama Dental and Esthetic Clinic (best dental and aesthetic
              clinic in Newtown, Kolkata) for an unparalleled blend of
              expertise, innovation, and personalized care that elevates your
              healthcare experience to new heights.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled mt-3">
              <li>
                <a href="#home" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#dental-treatment"
                  className="text-white text-decoration-none"
                >
                  Dental Treatment
                </a>
              </li>
              <li>
                <a
                  href="#aesthetic-treatment"
                  className="text-white text-decoration-none"
                >
                  Aesthetic Treatment
                </a>
              </li>
              <li>
                <a href="#blog" className="text-white text-decoration-none">
                  Blog
                </a>
              </li>
            </ul>
            <div className="d-flex mt-3">
              <a href="#facebook" className="text-white me-3">
                <FaFacebook size={24} color="white" />
              </a>
              <a href="#instagram" className="text-white me-3">
                <FaInstagram size={24} />
              </a>
              <a href="#youtube" className="text-white">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Recent Posts Section */}
          <div className="col-md-3">
            <h5 className="fw-bold">Recent Post</h5>
            <ul className="list-unstyled mt-3">
              <li className="d-flex align-items-start">
                <a href="#post1" className="text-white text-decoration-none">
                  Can a Loose Dental Implant Be Fixed?
                </a>
              </li>
              <li className="d-flex align-items-start">
                <a href="#post2" className="text-white text-decoration-none">
                  Can a Cosmetic Dentist Fix Crooked Teeth?
                </a>
              </li>
              <li className="d-flex align-items-start">
                <a href="#post3" className="text-white text-decoration-none">
                  Discover Side Effects of Dental Implants and How to Manage
                  Them
                </a>
              </li>
              <li className="d-flex align-items-start">
                <a href="#post4" className="text-white text-decoration-none">
                  Common Fears About Dental Implants
                </a>
              </li>
              <li className="d-flex align-items-start">
                <a href="#post5" className="text-white text-decoration-none">
                  What To Eat After Dental Implant Surgery?
                </a>
              </li>
            </ul>
          </div>

          {/* Get In Touch Section */}
          <div className="col-md-3">
            <h5 className="fw-bold">Get In Touch</h5>
            <div className="mt-3">
              <p>
                <FaMapMarkerAlt className="text-white me-2" />
                Shapoorji Indian Oil Petrol Pump, Shop No. B1, SP Sukhobrishti,
                Akandakeshari Main Rd, Newtown, Chhapna, West Bengal 700135
              </p>
              <p>
                <FaPhoneAlt className="text-white me-2" />
                <a
                  href="tel:+917007749299"
                  className="text-white text-decoration-none"
                >
                  +91 7007749299
                </a>
              </p>
              <p>
                <FaEnvelope className="text-white me-2" />
                <a
                  href="mailto:dranupamasdentalaestheticsclinic@gmail.com"
                  className="text-white text-decoration-none"
                >
                  dranupamasdentalaestheticsclinic@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
