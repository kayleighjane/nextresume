"use client"

import React from "react"
import { useState } from "react";
import useScreenSize from "@/hooks/useScreenSize"

export default function Navbar() {
    const screenSize = useScreenSize();
    const mobile = screenSize.width <= 768;
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