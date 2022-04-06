import { forwardRef } from "react";

function Subscribe(prop, ref) {
    return (
        <section id="subscribe" ref={ref}>
            <div className="inner">
                <h1>SUBSCRIBE</h1>
                <h2>Don't miss out the latest trends!</h2>
                <input type="email" name="email" id="email" placeholder="Please Enter Your Email" />
                <button>SUBSCRIBE</button>
            </div>
        </section>
    )
}

export default forwardRef(Subscribe);