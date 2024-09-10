"use client"

import React from "react"
import { useState, useEffect } from "react";


export default function Navbar() {
    if (typeof window !== "undefined") {
    const useScreenSize = () => {
        const [screenSize, setScreenSize] = useState({
          width: 0,
          height: 0,
        });
      
        useEffect(() => {
          const handleResize = () => {
            setScreenSize({
              width: window.innerWidth,
              height: window.innerHeight,
            });
          };
      
          window.addEventListener('resize', handleResize);
      
          // Clean up the event listener when the component unmounts
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);
      
        return screenSize;
      };
      
    const screenSize = useScreenSize();
    const mobile = screenSize.width <= 768;
    };
    const [isOpen, setIsOpen] = useState(false);
    const onClick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <nav className={`navbar ${mobile && !isOpen ? 'navbar--closed' : ''}`}>
            <ul className={`navbar__list ${mobile && !isOpen ? 'navbar__hidden' : 'navbar__show'} ${mobile && isOpen ? ' navbar__list--open' : ''}`}>
                <li className="navbar__item"><a href="#about">About</a></li>
                <li className="navbar__item"><a href="#work">Work</a></li>
                <li className="navbar__item"><a href="#portfolio">Portfolio</a></li>
                <li className="navbar__item"><a href="#contact">Contact</a></li>
            </ul>
            <button className={`navbar__button ${!mobile ? 'navbar__hidden' : 'navbar__show'} ${isOpen ? ' navbar__button--open' : 'navbar__button--closed'}`} onClick={onClick}>{isOpen ? 'X' : 'Explore'}</button>
        </nav>
    )
}