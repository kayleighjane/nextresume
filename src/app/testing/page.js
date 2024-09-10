"use client"

export default function Testing() {

    window.onload = (event) => {
        let options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries, observer) => {
      entries.forEach((entry) => console.log(entry))
    }
    
    let observer = new IntersectionObserver(callback, options);
    
    let target = document.querySelector(".testbox");
    observer.observe(target);
        }


    return (
        <>
        <div style={{height: '1000px'}}>
            Test
        </div>
        <div id="test" className="testbox">
            Testing
        </div>
        <div style={{height: '1000px'}}>
            Test
        </div>
        </>
    )
}