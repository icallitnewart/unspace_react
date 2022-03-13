function Footer() {
    return (
        <footer id="footer">
            <div className="inner">
                <h1><a href="index.html">UNSPACE</a></h1>
                <ul>
                    <li>
                        <h2>ADDRESS</h2>
                        <p>1715 Hideway Road</p>
                        <p>San Jose, CA 95118</p>
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
                    <a href="#">SUBSCRIBE</a>
                    <p>&copy; 2021 UNSPACE</p>
                    <div className="icons">
                        <a href="#"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="on"><i className="fab fa-pinterest-p"></i></a>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;