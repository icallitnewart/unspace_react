import { useRef } from "react";
import Visual from "../components/common/Visual_sub";
import Getintouch from "../components/contact/Getintouch";
import Location from "../components/contact/Location";
import { useScrollEffect } from "../hooks/useScrollEffect";
import { useScrollDown } from "../hooks/useScrollDown";

function Contact() {
    const getintouch = useRef(null);
    const location = useRef(null);

    //스크롤 애니메이션 효과
    const sections = [ getintouch, location ];
    const scrollEffect = useScrollEffect(sections);

    //탭 버튼 클릭시 스크롤 다운
    const scrollDown = useScrollDown();
    
    const visual = {
        title : "CONTACT",
        pic : { background: "url(../img/visual_sub_contact.jpg) top/cover" },
        desc : "Sed eget odio neque. Vivamus interdum pulvinar nulla, vel pharetra neque interdum sit amet. Sed elementum dapibus lacus, in volutpat est ultricies nec.",
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
            <Getintouch 
                ref={getintouch}
                scrollEffect={getintouch.current && scrollEffect[getintouch.current.className]} />
            <Location 
                ref={location}
                scrollEffect={location.current && scrollEffect[location.current.className]} />
        </section>
    )
}

export default Contact;