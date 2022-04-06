import { useRef } from "react";
import Visual from "../components/common/Visual_sub";
import Getintouch from "../components/contact/Getintouch";
import Location from "../components/contact/Location";
import { useScrollEffect } from "../hooks/useScrollEffect";
import { useScrollDown } from "../hooks/useScrollDown";

function Contact() {
    const getintouch = useRef(null);
    const location = useRef(null);

    //탭 버튼 클릭시 스크롤 다운
    const scrollDown = useScrollDown();
    
    const visual = {
        title : "CONTACT",
        pic : { background: "url(../img/visual_sub_contact.jpg) top/cover" },
        desc : "This is a portfolio website with an interior design concept. In get in touch, you can fill in a form to leave a message. Kakaomap API is used in the location section. You can explore them by clicking a tab option on the right side.",
        tab: [ 
            {
                name: "get in touch",
                event: ()=> {
                    scrollDown(getintouch);
                }
            }, {
                name: "location",
                event: ()=> {
                    scrollDown(location);
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