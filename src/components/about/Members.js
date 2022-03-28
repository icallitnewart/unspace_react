import { forwardRef } from "react";

function Members(props, ref) {
    return (
        <section className="members" ref={ref}>
            <div className="inner">
                <div className="detail">
                    <h1>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, impedit."</h1>
                    <span>Emily Campbell</span>
                    <span>― Chief Executive</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eaque omnis accusamus laborum veniam esse. Ipsam eaque modi hic tempore iste facere</p>
                </div>
                <div className="photo">
                    <img src="img/profile2.jpg" alt="" />
                </div>
                <div className="textBox">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum hic minus obcaecati dolore ex eum asperiores reiciendis, esse quasi natus magnam at velit fugiat, fuga quae ea, sapiente nihil ipsam dolorem voluptates sint rem quas ad. Sit perspiciatis aut odit! Optio aliquam nihil maiores ut quos, est explicabo saepe aut.</p>
                </div>
                <a href="#" className="prevBtn">
                    <i className="fas fa-chevron-up"></i>
                </a>
                <a href="#" className="nextBtn">
                    <i className="fas fa-chevron-down"></i>
                </a>
            </div>
        </section>
    )
}

export default forwardRef(Members);