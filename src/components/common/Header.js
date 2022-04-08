import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Header({ type }) {
    const [ mobileMenu, setMobileMenu ] = useState(false);
    const [ slideEffect, setSlideEffect ] = useState(false);
    const active = {
        color: "salmon",
        fontWeight: 600
    };
    const activeMobile = {
        color: "salmon"
    };

    useEffect(()=> {
        (mobileMenu) && setSlideEffect(true)
    }, [mobileMenu]);

    useEffect(()=> {
        if(!slideEffect) {
            const timer = setTimeout(()=> setMobileMenu(false), 1000);
            return ()=> clearTimeout(timer);
        }
    }, [slideEffect]);

    return (
        <header 
            id={"header"}
            className={type === "sub" ? "header_sub" : ""}
        >
            <div className="inner">
                <h1><NavLink exact to="/">UNSPACE</NavLink></h1>
                <nav className="menuWeb">
                    <ul id="gnb">
                        <li><NavLink activeStyle={active} exact to="/">HOME</NavLink></li>
                        <li><NavLink activeStyle={active} exact to="/about">ABOUT US</NavLink></li>
                        <li><NavLink activeStyle={active} exact to="/media/projects">MEDIA</NavLink></li>
                        <li><NavLink activeStyle={active} exact to="/community/faq">COMMUNITY</NavLink></li>
                        <li><NavLink activeStyle={active} exact to="/contact">CONTACT</NavLink></li>
                        <li><NavLink activeStyle={active} exact to="/membership/login">MY PAGE</NavLink></li>
                    </ul>
                </nav>
        
                <button className="btnCall" onClick={(()=> setMobileMenu(true))}>
                    <span>메뉴호출</span>
                    <i className="fas fa-bars"></i>
                </button>
            </div>
                
            {mobileMenu && 
            <nav className={slideEffect ? "menuMobile on" : "menuMobile"}>
                <h1>
                    <NavLink activeStyle={active} className="logo" exact to="/">
                        UNSPACE
                    </NavLink>
                    <span>Design your space</span>
                </h1>
                <h2>
                    <NavLink exact to="/membership/login">Login</NavLink> | 
                    <NavLink exact to="/membership/signup">Sign Up</NavLink>
                </h2>
                
                <ul id="gnbMobile">
                    <li>
                        <NavLink activeStyle={activeMobile} exact to="/">HOME</NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={activeMobile} exact to="/about">ABOUT US</NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={activeMobile} exact to="/media/projects">MEDIA</NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={activeMobile} exact to="/community/faq">COMMUNITY</NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={activeMobile} exact to="/contact">CONTACT</NavLink>
                    </li>
                </ul>

                <button className="closeBtn" onClick={()=> setSlideEffect(false)}>
                    <span className="hidden">닫기</span>
                </button>
            </nav>
            }
        </header>
    )
}

export default Header;