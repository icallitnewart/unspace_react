function Trending() {
    return (
        <section id="trending">
            <div className="inner">
                <div className="textBox">
                    <h1>Trending</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam placeat quas deleniti expedita culpa molestiae aspernatur, impedit eaque deserunt distinctio neque ab inventore officiis dolorem?</p>
                </div>
                <div className="slider">
                    <article>
                        <video src="img/trending1.mp4" loop muted></video>
                        <div className="textBox">
                            <span>1</span>
                            <h2>Lorem, ipsum.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde eum sed, quod ipsam, quae odio consequatur nam accusantium deserunt amet veritatis iusto id. Illo, mollitia neque aliquam velit tempora vitae.</p>
                            <a href="#">view more</a>
                        </div>
                        
                    </article>
                </div>
                <a href="#" className="prevBtn"><i className="fas fa-chevron-left"></i></a>
                <a href="#" className="nextBtn"><i className="fas fa-chevron-right"></i></a>
            </div>
        </section>
    )
}

export default Trending;