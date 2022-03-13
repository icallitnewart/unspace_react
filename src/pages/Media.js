import Visual from "../components/common/Visual_sub";
import Projects from "../components/media/Projects";
import Youtube from "../components/media/Youtube";

const visual = {
    title : "MEDIA",
    pic : { background: "url(../img/visual_sub_media.jpg) center/cover" },
    desc : "This is a portfolio website with an interior design concept. The images used for projects section are from Flickr and youtube API is used to present videos for interior trends.",
    tab: [ "project", "youtube" ]
}

function Media() {
    return (
        <section className="content media">
            <Visual {...visual} />
            <Projects />
            <Youtube />
        </section>
    )
}

export default Media;