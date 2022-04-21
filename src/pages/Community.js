import Visual from "../components/common/Visual_sub";
import Faq from "../components/community/Faq";
import Notice from "../components/community/Notice";
import { useParams, useHistory } from "react-router-dom";


function Community() {
    const type = useParams().type;
    const history = useHistory();
    const visual = {
        title : "COMMUNITY",
        pic : { background: "url(img/visual_sub_community.jpg) center/cover" },
        desc : "Duis ut odio eu ipsum vestibulum cursus ut id nunc. Curabitur mollis felis eget nunc accumsan, ac finibus magna commodo.",
        tab: [ 
            {
                name: "faq", 
                event: ()=> {
                    (type!=="faq") &&
                    history.push('/community/faq')
                }
            }, {
                name: "notice",
                event: ()=> {
                    (type!=="notice") &&
                    history.push('/community/notice')
                }
            }
        ]
    };

    return (
        <section className="content community">
            <Visual {...visual} />
            {type==="faq" && <Faq />}
            {type==="notice" && <Notice />}
        </section>
    )
}

export default Community;