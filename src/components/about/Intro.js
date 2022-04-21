import { forwardRef } from "react";

function Intro({ scrollEffect }, ref) {
    return (
        <section className={scrollEffect ?`intro ${scrollEffect}` : "intro"} ref={ref}>
            <div className="inner">
                <div className="pic">
                    <article style={{ 
                    background: "url(img/about_intro1.jpg) center/cover" }}>
                        <div className="textBox">
                            <span>01</span>
                            <p>Simple yet powerful. Living in an environment where one may rest as well as focus enriches a quality of life and develops it into a more elegant one.</p>
                        </div>
                    </article>
                    <article style={{ 
                    background: "url(img/about_intro2.jpg) center/cover" }}>
                        <div className="textBox">
                            <span>02</span>
                            <p>An artistic style does not necessarily mean inconvenience. Efficiency can be compatible with aesthetic pleasure.</p>
                        </div>
                    </article>
                </div>
                <div className="textBox">
                    <h1>ART OF SPACING</h1>
                    <span></span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis iusto fugiat excepturi debitis laboriosam obcaecati optio magni, aspernatur iure assumenda facilis libero numquam quae. Exercitationem velit assumenda quia quis iusto.</p>
                </div>
            </div>
        </section>
    )
}

export default forwardRef(Intro);