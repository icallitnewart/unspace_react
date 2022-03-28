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
        pic : { background: "url(../img/visual_sub_join.jpg) center/cover" },
        desc : "This is a portfolio website with an interior design concept. There are sections for login and sign up here. You can explore them by clicking a tab option on the right side.",
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
            {type==="signup" &&
            <>
                <Signup />
                <Policy />
            </>
            }
        </section>
    )
}

export default Membership;