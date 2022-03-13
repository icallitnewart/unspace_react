import { NavLink } from "react-router-dom";

function Header({ type }) {
    const active = {
        color: "salmon",
        fontWeight: "bold",
    }

    return (
        <header 
            id={type === "sub" ? "header_sub" : "header"}
        >
            <div className="inner">
                <h1><NavLink exact to="/">UNSPACE</NavLink></h1>
                <nav className="menuWeb">
                    <ul id="gnb">
                        <li><NavLink activeStyle={active} exact to="/">HOME</NavLink></li>
                        <li><NavLink activeStyle={active} exact to="/about">ABOUT US</NavLink></li>
                        <li><NavLink activeStyle={active} exact to="/media">MEDIA</NavLink></li>
                        <li><NavLink activeStyle={active} exact to="/community">COMMUNITY</NavLink></li>
                        <li><NavLink activeStyle={active} exact to="/contact">CONTACT</NavLink></li>
                        <li><NavLink activeStyle={active} exact to="/membership"><i className="fas fa-user-circle"></i></NavLink></li>
                    </ul>
                </nav>
        
                <a href="#" className="btnCall">
                    <span>메뉴호출</span>
                    <i className="fas fa-bars"></i>
                </a>
            </div>
                
            <nav className="menuMobile">
                <h1>
                    <a href="index.html" className="logo">
                        <span>UNSPACE</span>
                        <span>Design your space</span>
                    </a>
                </h1>
                <h2>
                    <a href="#">Login</a> / 
                    <a href="join.html">Sign Up</a>
                </h2>
                
                <ul id="gnbMobile">
                    <li className="on"><a href="index.html">HOME</a></li>
                    <li><a href="about.html">ABOUT US</a></li>
                    <li><a href="projects.html">PROJECTS</a></li>
                    <li><a href="media.html">MEDIA</a></li>
                    <li><a href="contact.html">CONTACT</a></li>
                </ul>
        
                <a href="#" className="closeBtn"><span className="hidden">닫기</span></a>
            </nav>
        </header>
    )
}

export default Header;