import Visual from "../components/common/Visual_sub";
import Intro from "../components/about/Intro";
import Members from "../components/about/Members";
import Services from "../components/about/Services";
import { useRef } from "react";

function About() {
    const intro = useRef(null);
    const members = useRef(null);
    const services = useRef(null);

    const scroll = (target)=> {
        const pos = target.current.offsetTop;

        window.scrollTo({
            top: pos,
            behavior: 'smooth',
        });
    }

    const visual = {
        title : "ABOUT US",
        pic : { background: "url(../img/visual_sub_about.jpg) top/cover" },
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsum distinctio repellat soluta, quae natus inventore deleniti atque impedit molestias.",
        tab: [ 
            {
                name: "intro",
                event: ()=> {
                    scroll(intro);
                }
            }, {
                name: "members",
                event: ()=> {
                    scroll(members);
                }
            }, {
                name: "services",
                event: ()=> {
                    scroll(services);
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