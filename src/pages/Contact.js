import { useRef } from "react";
import Visual from "../components/common/Visual_sub";
import Getintouch from "../components/contact/Getintouch";
import Location from "../components/contact/Location";

function Contact() {
    const getintouch = useRef(null);
    const location = useRef(null);

    const scroll = (target)=> {
        const pos = target.current.offsetTop;

        window.scrollTo({
            top: pos,
            behavior: 'smooth',
        });
    };
    
    const visual = {
        title : "CONTACT",
        pic : { background: "url(../img/visual_sub_contact.jpg) top/cover" },
        desc : "This is a portfolio website with an interior design concept. In get in touch, you can fill in a form to leave a message. Kakaomap API is used in the location section. You can explore them by clicking a tab option on the right side.",
        tab: [ 
            {
                name: "get in touch",
                event: ()=> {
                    scroll(getintouch);
                }
            }, {
                name: "location",
                event: ()=> {
                    scroll(location);
                }
            } 
        ]
    };

    return (
        <section className="content contact">
            <Visual {...visual} />
            <Getintouch ref={getintouch} />
            <Location ref={location} />
        </section>
    )
}

export default Contact;