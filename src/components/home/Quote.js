import { forwardRef } from "react";

function Quote({ scrollEffect }, ref) {
    return (
        <section id="quote" className={scrollEffect} ref={ref}>
            <div className="inner">
                <p>"The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized, meaningful environment, not about fashion or what's in or what's out. This is not an easy job."</p>
                <span>Albert Hadley</span>
                <span>Interior Designer</span>
            </div>
        </section>
    )
}

export default forwardRef(Quote);