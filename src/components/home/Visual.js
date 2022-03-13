function Visual() {
    return (       
        <figure id="visual">
            <div className="bgs">
                <img src="img/visual1.jpg" alt="" />
                {/* <img src="img/visual2.jpg" alt="">
                <video src="img/visual.mp4" loop autoplay muted></video> */}
            </div>
            <div className="inner">
                <div className="container">
                    <div className="textBox">
                        <h1>UNSPACE</h1>
                        <h2>BEYOND IMAGINATION</h2>
                        <span>paint your life, envision your dreams</span>
                    </div>
                    <a href="#">VIEW MORE 
                        <i className="fas fa-angle-double-right"></i></a>
                </div>
                <a href="#" className="nextBtn">
                    <i className="fas fa-chevron-right"></i>
                    <span>NEXT</span>
                </a>
                <div className="wrap">
                    <article>
                        <img src="img/visual1-s.jpg" alt="" />
                        <span>Project</span>
                    </article>
                    <article>
                        <img src="img/visual2-s.jpg" alt="" />
                        <span>Project</span>
                    </article>
                    <article>
                        <img src="img/visual3-s.jpg" alt="" />
                        <span>Project</span>
                    </article>
                    <article>
                        <img src="img/visual4-s.jpg" alt="" />
                        <span>Project</span>
                    </article>
                </div>
                <div className="pagination">
                    <a href="#" className="on">
                        <i className="far fa-circle"></i>
                    </a>
                    <a href="#">
                        <i className="fas fa-circle"></i>
                    </a>
                    <a href="#">
                        <i className="fas fa-circle"></i>
                    </a>
                </div>
            </div>
        </figure>
    )
}

export default Visual;