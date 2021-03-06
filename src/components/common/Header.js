import { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

function Header() {
    const history = useHistory();
    const path = history.location.pathname;
    const [ mobileMenu, setMobileMenu ] = useState(false);
    const [ slideEffect, setSlideEffect ] = useState(false);
    const active = {
        color: "salmon",
        fontWeight: 600
    };
    const activeMobile = {
        color: "salmon"
    };

    //모바일 사이드바 메뉴 열기
    useEffect(()=> {
        if(mobileMenu) {
            setSlideEffect(true);
            document.body.style.overflow = "hidden";
        }
    }, [mobileMenu]);

    //모바일 사이드바 메뉴 닫기
    useEffect(()=> {
        if(!slideEffect) {
            const timer = setTimeout(()=> setMobileMenu(false), 1000);
            document.body.style.overflow = "auto";
            return ()=> clearTimeout(timer);
        }
    }, [slideEffect]);

    return (
        <header id="header">
            <div className="inner">
                <h1><NavLink exact to="/">UNSPACE</NavLink></h1>
                <nav className="menuWeb">
                    <ul id="gnb">
                        <li><NavLink activeStyle={active} exact to="/">HOME</NavLink></li>
                        <li><NavLink activeStyle={active} exact to="/about">ABOUT US</NavLink></li>
                        <li><NavLink activeStyle={active} isActive={()=> path.includes('/media')} exact to="/media/projects">MEDIA</NavLink></li>
                        <li><NavLink activeStyle={active} isActive={()=> path.includes('/community')} exact to="/community/faq">COMMUNITY</NavLink></li>
                        <li><NavLink activeStyle={active} exact to="/contact">CONTACT</NavLink></li>
                        <li><NavLink activeStyle={active} isActive={()=> path.includes('/membership')} exact to="/membership/login">MY PAGE</NavLink></li>
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
                    <NavLink activeStyle={active} className="logo" exact to="/" onClick={()=> setSlideEffect(false)}>
                        UNSPACE
                    </NavLink>
                    <span>Design your space</span>
                </h1>
                <h2>
                    <NavLink exact to="/membership/login" onClick={()=> setSlideEffect(false)}>Login</NavLink> | 
                    <NavLink exact to="/membership/signup" onClick={()=> setSlideEffect(false)}>Sign Up</NavLink>
                </h2>
                
                <ul id="gnbMobile">
                    <li>
                        <NavLink activeStyle={activeMobile} exact to="/" onClick={()=> setSlideEffect(false)}>HOME</NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={activeMobile} exact to="/about" onClick={()=> setSlideEffect(false)}>ABOUT US</NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={activeMobile} exact to="/media/projects" onClick={()=> setSlideEffect(false)}>MEDIA</NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={activeMobile} exact to="/community/faq" onClick={()=> setSlideEffect(false)}>COMMUNITY</NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={activeMobile} exact to="/contact" onClick={()=> setSlideEffect(false)}>CONTACT</NavLink>
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