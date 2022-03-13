import Visual from "../components/common/Visual_sub";
import Getintouch from "../components/contact/Getintouch";
import Location from "../components/contact/Location";

const visual = {
    title : "CONTACT",
    pic : { background: "url(../img/visual_sub_contact.jpg) top/cover" },
    desc : "This is a portfolio website with an interior design concept. In get in touch, you can fill in a form to leave a message. Kakaomap API is used in the location section. You can explore them by clicking a tab option on the right side.",
    tab: [ "get in touch", "location" ]
}

function Contact() {
    return (
        <section className="content contact">
            <Visual {...visual} />
            <Getintouch />
            <Location />
        </section>
    )
}

export default Contact;