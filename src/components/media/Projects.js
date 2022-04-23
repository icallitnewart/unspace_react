import { useState, useEffect } from "react";
import { useFetchFlickrData } from "../../hooks/useFetchFlickrData.js";
import Loader from "../common/Loader";
import Popup from "../common/Popup";

function Projects() {
    const [ enableClick, setEnableClick ] = useState(true);
    const [ popup, setPopup ] = useState({
        isVisible: false,
        targetItem: null
    });
    const [ loadEffect, setLoadEffect ] = useState(false);

    //flickr 데이터 타입
    const tags = [ "popular", "modern", "contemporary", "minimalist", "mid-century" ];
    const [ tagType, setTagType ] = useState("popular");

    //flickr 데이터 호출 및 저장
    const [ flickr, isLoaded ] = useFetchFlickrData(tagType); 
    const [ flickrData, setFlickrData ] = useState([]);

    useEffect(()=> {
        if(isLoaded) {
            if(loadEffect) setLoadEffect(false);
            const activateTimer = setTimeout(()=> {setLoadEffect(true)}, 0);
            setEnableClick(true);
            return ()=> clearTimeout(activateTimer);
        }
    }, [isLoaded]);

    useEffect(()=> {
        setFlickrData(flickr);
    }, [flickr]);

    const selectTag = (tag)=> {
        //1) 이미 선택된 태그가 아닌 다른 태그 클릭시
        //2) 데이터 로딩중이 아닌 경우에만 작동
        if(tagType !== tag && enableClick) {
            setTagType(tag);
            setEnableClick(false);
        }
    }

    return (
        <section className="projects">
            <div className="inner">
                <div className="title">
                    <h1>projects</h1>
                </div>
                <div className="gallery">
                    <ul className="hashtags">
                    {
                        tags.map((tag, index)=> 
                            <li className={(tagType===tag) ? "on" : ""} key={index}>
                                <span onClick={()=> selectTag(tag)}>{tag}</span>
                            </li>
                        )
                    }   
                    </ul>
                    {!isLoaded 
                    ? <Loader />
                    : <div className={loadEffect ? "wrap on" : "wrap"}>
                        {
                            flickrData.map((item, index)=> {
                                const imgSrc = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_w.jpg`;
                                const num = index < 9 ? "0" + (index + 1) : index + 1;  

                                return (
                                    <article key={index} onClick={()=> setPopup({isVisible: true, targetItem: item})}>
                                        <img 
                                            className="pic" 
                                            src={imgSrc}
                                            alt={item.title}
                                        />
                                        <div className="textBox">
                                            <h2>{num}</h2>
                                            <p>{item.title}</p>
                                            <span>{item.owner}</span>
                                        </div>
                                    </article>
                                )
                            })
                        }
                    </div>
                    }
                </div>
            </div>
            {popup.isVisible && 
                <Popup 
                    type="flickr" 
                    targetItem={popup.targetItem} 
                    setPopup={setPopup} 
                />
            }
        </section>
    )
}

export default Projects;