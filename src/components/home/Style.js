function Style() {
    return (
        <section id="style">
            <div className="inner">
                <h1>Choose Your Style</h1>
                <ul className="hashtags">
                    <li className="on">
                        <a href="#">#modern</a>
                    </li>
                    <li>
                        <a href="#">#contemporary</a>
                    </li>
                    <li>
                        <a href="#">#minimalist</a>
                    </li>
                    <li>
                        <a href="#">#mid-century</a>
                    </li>
                </ul>
                
                <div className="wrap">
                    <article>
                        <img src="img/visual1.jpg" alt="" />
                    </article>
                    <article>
                        <img src="img/visual1.jpg" alt="" />
                    </article>
                    <article>
                        <img src="img/visual2.jpg" alt="" />
                    </article>
                    <article>
                        <img src="img/visual3.jpg" alt="" />
                    </article>
                    <article>
                        <img src="img/visual4.jpg" alt="" />
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Style;