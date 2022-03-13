import Visual from "../components/common/Visual_sub";
import Signup from "../components/membership/Signup";
import Policy from "../components/membership/Policy";

const visual = {
    title : "MEMBERSHIP",
    pic : { background: "url(../img/visual_sub_join.jpg) center/cover" },
    desc : "This is a portfolio website with an interior design concept. There are sections for login and sign up here. You can explore them by clicking a tab option on the right side.",
    tab: [ "login", "signup" ]
}

function Membership() {
    return (
        <section className="content join">
            <Visual {...visual} />
            <Signup />
            <Policy />
        </section>
    )
}

export default Membership;