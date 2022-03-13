import Visual from "../components/common/Visual_sub";
import Intro from "../components/about/Intro";
import Members from "../components/about/Members";
import Services from "../components/about/Services";

const visual = {
    title : "ABOUT US",
    pic : { background: "url(../img/visual_sub_about.jpg) top/cover" },
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsum distinctio repellat soluta, quae natus inventore deleniti atque impedit molestias.",
    tab: [ "intro", "members", "services" ]
}


function About() {
    return (
        <section className="content about">
            <Visual {...visual} />
            <Intro />
            <Members />
            <Services />
        </section>
    )
}

export default About;