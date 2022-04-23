import { forwardRef } from "react";
import { useSlider } from "../../hooks/useSlider.js";

function Trending({ scrollEffect }, ref) {
    const data= [
        {
            idx : 1,
            src : "trending1.mp4",
            title : "Modern",
            content : "Modern design is an interior design style characterized by a monochromatic color palette, clean lines, minimalism, natural materials, and natural light."
        },
        {
            idx : 2,
            src : "trending2.mp4",
            title : "Contemporary",
            content : "A contemporary style of decorating is defined by simplicity, subtle sophistication, deliberate use of texture, and clean lines."
        },
        {
            idx : 3,
            src : "trending3.mp4",
            title : "Mid-century",
            content : "Mid-century style is typically characterized by clean, simple lines and honest use of materials, and it generally does not include decorative embellishments."
        },
        {
            idx : 4,
            src : "trending4.mp4",
            title : "Minimalist",
            content : "The concept of minimalist architecture is to strip everything down to its essential quality and achieve simplicity."
        }
    ];
    
    const { 
        items, 
        style, 
        moveSlide
    } = useSlider(data, 500);

    return (
        <section id="trending" className={scrollEffect} ref={ref}>
            <div className="inner">
                <div className="textBox">
                    <h1>Trending</h1>
                    <p>What's trending now? The latest interior design trends are introduced in this section. People often aspire to ride the current waves of contemporaries' interest while attaining their own originality. Spaces are no exception.</p>
                </div>
                <div className="slider">
                    <div 
                        className="wrap" 
                        style={style}
                    >
                    {
                        items.map((item)=>
                            <article key={item.idx}>
                                <video 
                                    src={"img/" + item.src} 
                                    loop muted 
                                    onMouseOver={(e)=> e.currentTarget.play()}
                                    onMouseOut={(e)=> e.currentTarget.pause()}
                                ></video>
                                <div className="textBox">
                                    <span>{item.idx}</span>
                                    <h2>{item.title}</h2>
                                    <p>{item.content}</p>
                                    <a href="#" onClick={(e)=> e.preventDefault()}>view more</a>
                                </div>
                            </article>
                        )
                    }
                    </div>
                </div>
                <button 
                    className="prevBtn" 
                    onClick={()=> moveSlide("left")}
                    aria-label="Previous Slide"
                >
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button 
                    className="nextBtn" 
                    onClick={()=> moveSlide("right")}
                    aria-label="Next Slide"
                >
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </section>
    )
}

export default forwardRef(Trending);