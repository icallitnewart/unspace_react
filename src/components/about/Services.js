import { forwardRef } from "react";

function Services({ scrollEffect }, ref) {
    return (
        <section className={scrollEffect ?`services ${scrollEffect}` : "services"} ref={ref}>
            <div className="inner">
                <div className="wrap">
                    <article>
                        <div className="textBox">
                            <i className="fas fa-record-vinyl"></i>
                            <span>CREATIVITY</span>
                            <span className="line"></span>
                            <p>We reject any platitude in design. Originality and curiosity are the main elements of our design.</p>
                        </div>
                        <div className="pic">
                            <img src="img/about_services1.jpg" alt="" />
                        </div>
                    </article>
                    <article>
                        <div className="textBox">
                            <i className="fas fa-suitcase"></i>
                            <span>COMMUNICATION</span>
                            <span className="line"></span>
                            <p>We are always open to communication and adopt flexible approaches to matters.</p>
                        </div>
                        <div className="pic">
                            <img src="img/about_services2.jpg" alt="" />
                        </div>
                    </article>
                    <article>
                        <div className="textBox">
                            <i className="fas fa-chart-pie"></i>
                            <span>CLIENT-ORIENTED</span>
                            <span className="line"></span>
                            <p>Clients' needs and opinions are our first priority. It is always welcome and important that clients share their ideas and worries if there is any.</p>
                        </div>
                        <div className="pic">
                            <img src="img/about_services3.jpg" alt="" />
                        </div>
                    </article>
                </div>
                
                <div className="textBox">
                    <h1>What <br />We <br />Promise</h1>
                    <p>Our company ensures the best quality of services and always thinks ahead for clients' possible needs. Not only do we consider realistic aspects of "living", we also respect and try to reflect the philosophy of a "liver" into designing a space.</p>
                    <a 
                        href="#" 
                        className="viewBtn" 
                        onClick={(e)=> e.preventDefault()}
                    >view more</a>
                </div>
            </div>
        </section>
    )
}

export default forwardRef(Services);