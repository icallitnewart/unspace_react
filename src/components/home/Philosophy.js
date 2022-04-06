import { forwardRef } from "react";

function Philosophy(prop, ref) {
    return (
        <section id="philosophy" ref={ref}>
            <div className="inner">
                <div className="textBox">
                    <div className="lines">
                        <div className="top"></div>
                        <div className="left"></div>
                        <div className="bottom"></div>
                        <div className="right"></div>
                    </div>
                    <h1>Realise Your Vision</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit dolorem facilis delectus veritatis iure ut vitae recusandae earum tenetur voluptatum pariatur dolore, unde placeat excepturi veniam provident in tempora harum!</p>
                    <a href="#">VIEW MORE</a>
                </div>
                <div className="pic" style={{   background: "url(img/section2.jpg) left/cover"  }}></div>
            </div>
        </section>
    )
}

export default forwardRef(Philosophy);