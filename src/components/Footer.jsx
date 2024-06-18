import React from 'react';
import logo1 from '../assets/logo.png';

function Footer() {
  return (
    <footer className="footer p-10 bg-gray-700 text-base-content">
      <aside className="flex flex-col  gap-4">
        <img src={logo1} alt="" className="w-20" />
        <p>
          Let's Chat.
          <br />
          Providing real-time chatting experience
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
      </nav>
    </footer>
  );
}

export default Footer;
