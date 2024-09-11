"use client"

import { Bebas_Neue, Playwrite_Cuba } from "next/font/google";

const bebasNeue = Bebas_Neue({ weight: ['400'], subsets: ["latin"] });

export default function Intro() {


    return (
        <section className="intro">
            <div className="intro__container">
            <h1 className="intro__heading">Hi! My name is Kayleigh. I'm a
                <span className={`${bebasNeue} intro__designer`}>
                    Designer
                </span>
                <span className="intro__developer">
                    Developer.
                </span>
            </h1>
            <p className="intro__p">I am a multi-disciplined professional with a background in design and development.</p>
            </div>
        </section>
    )
}