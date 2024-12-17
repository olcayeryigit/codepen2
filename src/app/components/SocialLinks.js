"use client"
import React from 'react';

const SocialLinks = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-700 relative">
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/20 backdrop-blur-md z-[-1]"></div>

      <a href="#" className="glassIco">
        <i className="fab fa-facebook-f text-white text-3xl"></i>
      </a>
      <a href="#" className="glassIco">
        <i className="fab fa-instagram text-white text-3xl"></i>
      </a>
      <a href="#" className="glassIco">
        <i className="fab fa-linkedin-in text-white text-3xl"></i>
      </a>
      <a href="#" className="glassIco">
        <i className="fab fa-whatsapp text-white text-3xl"></i>
      </a>

      <style jsx>{`
        .glassIco {
          --width: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: var(--width);
          height: var(--width);
          color: #fff;
          font-size: 30px;
          border-radius: 5px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(2px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-right-color: rgba(255, 255, 255, 0.1);
          border-bottom-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
          text-decoration: none;
          margin: 20px;
          position: relative;
          overflow: hidden;
          transition: transform 200ms;
        }
        .glassIco:before {
          content: "";
          position: absolute;
          display: block;
          width: 50%;
          height: 100%;
          background: rgba(255, 255, 255, 0.5);
          filter: blur(0px);
          transition: 400ms;
          transform: skewX(45deg) translateX(calc(var(--width) + 50%));
        }
        .glassIco:hover {
          transform: translateY(-20px);
        }
        .glassIco:hover:before {
          transform: skewX(45deg) translateX(calc(var(--width) * -1 - 50%));
        }
        .glassIco > * {
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
};

export default SocialLinks;
