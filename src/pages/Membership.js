import Visual from "../components/common/Visual_sub";
import Signup from "../components/membership/Signup";
import Policy from "../components/membership/Policy";
import Login from "../components/membership/Login";
import { useParams, useHistory } from "react-router-dom";


function Membership() {
    const type = useParams().type;
    const history = useHistory();
    const visual = {
        title : "MEMBERSHIP",
        pic : { background: "url(img/visual_sub_join.jpg) center/cover" },
        desc : "Nullam nec egestas orci. Aliquam scelerisque dolor sit amet arcu rhoncus gravida. Proin cursus, diam eget blandit molestie, nisl diam convallis mauris, finibus dapibus tellus ex vel dolor.",
        tab: [ 
            { 
                name: "login",
                event: ()=> {
                    (type!=="login") &&
                    history.push('/membership/login')
                }
            }, 
            {
                name: "sign up", 
                event: ()=> {
                    (type!=="signup") &&
                    history.push('/membership/signup')
                }
            }
        ]
    };

    return (
        <section className="content join">
            <Visual {...visual} />
            {type==="login" && <Login />}
            {type==="signup" && <Signup />}
        </section>
    )
}

export default Membership;