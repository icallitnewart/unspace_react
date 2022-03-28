import Visual from "../components/common/Visual_sub";
import Projects from "../components/media/Projects";
import Youtube from "../components/media/Youtube";
import { useParams, useHistory } from "react-router-dom";

function Media() {
    const type = useParams().type;
    const history = useHistory();
    const visual = {
        title : "MEDIA",
        pic : { background: "url(../img/visual_sub_media.jpg) center/cover" },
        desc : "This is a portfolio website with an interior design concept. The images used for projects section are from Flickr and youtube API is used to present videos for interior trends.",
        tab: [ 
            {
                name: "projects",
                event: ()=> {
                    (type!=="projects") &&
                    history.push('/media/projects')
                }
            }, {
                name: "youtube",
                event: ()=> {
                    (type!=="youtube") &&
                    history.push('/media/youtube')
                    
                }
            }
        ]
    };
    
    return (
        <section className="content media">
            <Visual {...visual} />
            {type==="projects" && <Projects />}
            {type==="youtube" && <Youtube />}
        </section>
    )
}

export default Media;