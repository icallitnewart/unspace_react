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
    useScrollEffect(sections);

    //탭 버튼 클릭시 스크롤 다운
    const scrollDown = useScrollDown();
    
    const visual = {
        title : "ABOUT US",
        pic : { background: "url(../img/visual_sub_about.jpg) top/cover" },
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsum distinctio repellat soluta, quae natus inventore deleniti atque impedit molestias.",
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
            <Intro ref={intro} />
            <Members ref={members} />
            <Services ref={services} />
        </section>
    )
}

export default About;