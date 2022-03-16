import { useEffect } from "react";

function Popup({ type, targetItem, setPopup }) {
    let src = "";

    if(type==="youtube") src = targetItem.snippet.resourceId.videoId;
    if(type==="flickr") src = `https://live.staticflickr.com/${targetItem.server}/${targetItem.id}_${targetItem.secret}_b.jpg`;

    const content = {
        youtube : 
            <div className="video">
                <iframe src={`https://www.youtube.com/embed/${src}?autoplay=1&controls=0`} width="100%" height="100%" allowFullScreen></iframe> 
            </div>
        ,
        flickr : 
            <div className="pic">
                <span>{targetItem.title}</span>
                <img src={src} alt={targetItem.title} />
            </div>
    }

    useEffect(()=> {
        document.body.style.overflow = "hidden";
        return ()=> document.body.style.overflow = "auto";
    }, []);

    return (
        <aside className="popup">
            <div className="inner">
                {content[type]}
                <div className="closeBtn" onClick={()=> setPopup({ isVisible: false, video: null })}>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </aside>
    )
}

export default Popup;