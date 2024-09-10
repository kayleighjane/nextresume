"use client"

export default function About() {
  window.onload = (event) => {
    let callback = (entries, observer) => {
        entries.forEach((entry) => {
          entry.target.style.opacity = entry.intersectionRatio
        });
      };
      
      let options = {
        root: null,
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9, 1]
      }
      let observer = new IntersectionObserver(callback, options);
      
      for (const target of document.querySelectorAll('.about__text-left, .about__text-middle, .about__text-right')) {
          observer.observe(target);
      }
    }

    return (
        <section className="about">
          <a className="about__anchor" id="about"></a>
            <h2 className="about__heading">About me</h2>
            <div className="about__container">
            <p className="about__text-left opacity-effect">My name is Kayleigh Regan. I live in Portslade, UK, and I’m a Frontend Developer specialising in design.</p>
            <p className="about__text-middle opacity-effect">I have three cats; Delilah, Littlefoot and Petrie. My hobbies include drawing, reading and video games.</p>
            <p className="about__text-right opacity-effect">I try to bridge the gap between design and development with accessible and responsive websites with a splash of creativity.</p>
            </div>
        </section>
    )
}