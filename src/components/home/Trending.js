import { forwardRef } from "react";
import { useSlider } from "../../hooks/useSlider.js";

function Trending({ scrollEffect }, ref) {
    const data= [
        {
            idx : 1,
            src : "trending1.mp4",
            title : "Lorem Ipsum",
            content : "tr1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde eum sed, quod ipsam, quae odio consequatur nam accusantium deserunt amet veritatis iusto id. Illo, mollitia neque aliquam velit tempora vitae."
        },
        {
            idx : 2,
            src : "trending2.mp4",
            title : "Lorem Ipsum",
            content : "tr2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde eum sed, quod ipsam, quae odio consequatur nam accusantium deserunt amet veritatis iusto id. Illo, mollitia neque aliquam velit tempora vitae."
        },
        {
            idx : 3,
            src : "trending3.mp4",
            title : "Lorem Ipsum",
            content : "tr3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde eum sed, quod ipsam, quae odio consequatur nam accusantium deserunt amet veritatis iusto id. Illo, mollitia neque aliquam velit tempora vitae."
        },
        {
            idx : 4,
            src : "trending4.mp4",
            title : "Lorem Ipsum",
            content : "tr4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde eum sed, quod ipsam, quae odio consequatur nam accusantium deserunt amet veritatis iusto id. Illo, mollitia neque aliquam velit tempora vitae."
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam placeat quas deleniti expedita culpa molestiae aspernatur, impedit eaque deserunt distinctio neque ab inventore officiis dolorem?</p>
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
                                    <a href="#">view more</a>
                                </div>
                            </article>
                        )
                    }
                    </div>
                </div>
                <button className="prevBtn" onClick={()=> moveSlide("left")}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button className="nextBtn" onClick={()=> moveSlide("right")}>
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </section>
    )
}

export default forwardRef(Trending);