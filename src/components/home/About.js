import { forwardRef } from "react";

function About(prop, ref) {
    return (
        <section id="about" ref={ref}>
            <div className="inner">
                
                <img src="img/section1.jpg" alt="" />
                <div className="textBox">
                    <h1>Why UnSpace?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore omnis repellendus, exercitationem, mollitia, ullam cum eos asperiores quas delectus voluptatum itaque minus tempora saepe vero? Ab quis qui fugiat consectetur?</p>
                    <ul>
                        <li>Lorem ipsum dolor, sit amet.</li>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum consectetur adipisicing elit. Sit.</li>
                    </ul>
                </div>
                <div className="buttons">
                    <a href="#" className="on">
                        <i className="fas fa-user-tie"></i>
                        <span>Why Us?</span>
                    </a>
                    <a href="#">
                        <i className="far fa-envelope"></i>
                        <span>Contact Us</span>
                    </a>
                    <a href="#">
                        <i className="far fa-lightbulb"></i>
                        <span>The Idea</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default forwardRef(About);