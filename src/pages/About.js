import { useRef } from "react";
import Visual from "../components/common/Visual_sub";
import Intro from "../components/about/Intro";
import Members from "../components/about/Members";
import Services from "../components/about/Services";
import { useScrollEffect } from "../hooks/useScrollEffect";
import { useScrollDown } from "../hooks/useScrollDown";

function About() {
    const intro = useRef(null);
    const members = useRef(null);
    const services = useRef(null);

    //스크롤 애니메이션 효과
    const sections = [ intro, members, services ];
    const scrollEffect = useScrollEffect(sections);

    //탭 버튼 클릭시 스크롤 다운
    const scrollDown = useScrollDown();
    
    const visual = {
        title : "ABOUT US",
        pic : { background: "url(img/visual_sub_about.jpg) top/cover" },
        desc : "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi at orci sed nisl feugiat semper.",
        tab: [ 
            {
                name: "intro",
                event: ()=> {
                    scrollDown(intro);
                }
            }, {
                name: "members",
                event: ()=> {
                    scrollDown(members);
                }
            }, {
                name: "services",
                event: ()=> {
                    scrollDown(services);
                }
            }  
        ]
    };

    return (
        <section className="content about">
            <Visual {...visual} />
            <Intro 
                ref={intro} 
                scrollEffect={intro.current && scrollEffect[intro.current.className]} />
            <Members 
                ref={members} 
                scrollEffect={members.current && scrollEffect[members.current.className]} />
            <Services 
                ref={services} 
                scrollEffect={services.current && scrollEffect[services.current.className]} />
        </section>
    )
}

export default About;