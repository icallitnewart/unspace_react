import Visual from "../components/common/Visual_sub";
import Faq from "../components/community/Faq";
import Notice from "../components/community/Notice";

const visual = {
    title : "COMMUNITY",
    pic : { background: "url(../img/visual_sub_community.jpg) center/cover" },
    desc : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores natus, nostrum aliquam error voluptas laudantium eum assumenda quam a eius!",
    tab: [ "faq", "notice" ]
}

// function CommunityVisual() {
//     return (
//         <figure className="visual_sub">
//             <div className="inner">
//                 <div className="pic" style={{ background: "url(../img/visual_sub_community.jpg) center/cover" }}></div>
//                 <main>
//                     <div className="textBox">
//                         <div className="title">
//                             <h1>COMMUNITY</h1>
//                             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores natus, nostrum aliquam error voluptas laudantium eum assumenda quam a eius!</p>
//                         </div>
//                     </div>
//                     <div className="guide">
//                         <div>
//                             <span>01</span>
//                             <span>faq</span>
//                         </div>
//                         <div>
//                             <span>02</span>
//                             <span>notice</span>
//                         </div>
//                     </div>
//                 </main>
//             </div>
//         </figure>
//     )
// }

function Community() {
    return (
        <section className="content community">
            <Visual {...visual} />
            <Faq />
            <Notice />
        </section>
    )
}

export default Community;