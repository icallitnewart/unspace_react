function Footer() {
    const icons = [
        {   
            name: "google plus",
            icon: "fab fa-google-plus-g"
        },
        {
            name: "pinterest",
            icon: "fab fa-pinterest-p"
        },
        {
            name: "facebook",
            icon: "fab fa-facebook-f"
        },
        {
            name: "twitter",
            icon: "fab fa-twitter"
        },
        {
            name: "youtube",
            icon: "fab fa-youtube"
        }
    ];

    return (
        <footer id="footer">
            <div className="inner">
                <h1>
                    <a href="index.html">UNSPACE</a>
                </h1>
                <ul>
                    <li>
                        <h2>ADDRESS</h2>
                        <p>513 Yeongdong-daero</p>
                        <p>Samseong-dong</p>
                        <p>Gangnam-gu Seoul</p>
                    </li>
                    <li>
                        <h2>PHONE & FAX</h2>
                        <p>+333 333 3333</p>
                        <p>+333 333 3333</p>
                    </li>
                    <li>
                        <h2>E-MAIL</h2>
                        <p>support@unspace.com</p>
                        <p>office@unspace.com</p>
                    </li>
                </ul>
                <div className="wrap">
                    <a href="#" onClick={(e)=> e.preventDefault()}>SUBSCRIBE</a>
                    <p>&copy; 2021 UNSPACE</p>
                    <div className="icons">
                        {icons.map((icon, index)=>
                            <a 
                                href="#" 
                                key={index}
                                onClick={(e)=> e.preventDefault()}
                                aria-label={icon.name}
                            >
                                <i className={icon.icon}>
                                </i>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;