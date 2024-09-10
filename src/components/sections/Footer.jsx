"use client"

import GithubIcon from "../icons/GithubIcon"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__copyright">2024 (c) Kayleigh Regan. Created with NextJS</div>
                <div className="footer__icons"><a href="https://github.com/kayleighjane"><GithubIcon /></a></div>
            </div>
        </footer>
    )
}