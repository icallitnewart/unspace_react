import { forwardRef, useState, useEffect } from "react";
import Idea from "./Idea";
import Intro from "./Intro";
import Contact from "./Contact";

function About(prop, ref) {
    const [ tab, setTab ] = useState(1);

    const btns = [
        {
            idx: 1,
            icon: "fas fa-user-tie",
            title: "Why Us?"
        },
        {
            idx: 2,
            icon: "far fa-envelope",
            title: "Contact Us"
        },
        {
            idx: 3,
            icon: "far fa-lightbulb",
            title: "The Idea"
        }
    ];

    const tabContent = [
        {
            idx: 1,
            title: "Why UnSpace?",
            content: <Intro />,
            img: "tab1.jpg"
        },
        {
            idx: 2,
            title: "Contact Us",
            content: <Contact />,
            img: "tab2.jpg"
        },
        {
            idx: 3,
            title: "Innovative Ideas",
            content: <Idea />,
            img: "tab3.jpg"
        }
    ];

    //탭버튼 클릭시 탭컨텐츠 애니메이션 효과 적용
    useEffect(()=> {
        ref.current.classList.remove("tabOn");
        const timer = setTimeout(()=> ref.current.classList.add("tabOn"), 0);
        return ()=> clearTimeout(timer);
    }, [tab]);

    return (
        <section id="about" ref={ref}>
            <div className="inner">
                <img src={"img/" + tabContent[tab - 1].img} alt="" />
                <div className="textBox">
                    <h1>{tabContent[tab - 1].title}</h1>
                    {tabContent[tab - 1].content}
                </div>
                <div className="buttons">
                    {btns.map((btn, index)=> 
                        <button 
                            key={index} 
                            className={tab===btn.idx ? "on" : ""}
                            onClick={()=> setTab(btn.idx)}
                        >
                            <i className={btn.icon}></i>
                            <span>{btn.title}</span>
                        </button>
                    )}
                </div>
            </div>
        </section>
    )
}

export default forwardRef(About);