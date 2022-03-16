import { useState, useEffect, useRef } from "react";
import { useFetchFlickrData } from "../../hooks/useFetchFlickrData.js";

function Projects() {
    const [ enableClick, setEnableClick ] = useState(true);
    const pics = useRef(null);

    //flickr 데이터 타입
    const tags = [ "popular", "modern", "contemporary", "minimalist", "mid-century" ];
    const [ tagType, setTagType ] = useState("popular");

    //flickr 데이터 호출 및 저장
    const [ flickr, isLoaded ] = useFetchFlickrData(tagType); 
    const [ flickrData, setFlickrData ] = useState([]);

    useEffect(()=> {
        if(isLoaded) {
            const activateTimer = setTimeout(()=> {pics.current.classList.add("on")}, 0);
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
                    {
                    !isLoaded 
                    ? <p>로딩중</p>
                    : <div className="wrap" ref={pics}>
                        {
                            flickrData.map((item, index)=> {
                                const imgSrc = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_w.jpg`;
                                const imgSrcBig = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`;
                                const num = index < 9 ? "0" + (index + 1) : index + 1;  

                                return (
                                    <article key={index}>
                                        <a href={imgSrcBig}>
                                            <img className="pic" src={imgSrc} />
                                            <div className="textBox">
                                                <h2>{num}</h2>
                                                <p>{item.title}</p>
                                                <span>{item.owner}</span>
                                            </div>
                                        </a>
                                    </article>
                                )
                            })
                        }
                    </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects;