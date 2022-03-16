import { useState, useEffect } from "react";
import { useFetchFlickrData } from "../../hooks/useFetchFlickrData.js";
import Loader from "../common/Loader";

function Gallery() {
    //flickr 데이터 타입
    const tags = [ "popular", "modern", "contemporary", "minimalist", "mid-century" ];
    const [ tagType, setTagType ] = useState("popular");

    //flickr 데이터 호출 및 저장
    const [ flickr, isLoaded ] = useFetchFlickrData(tagType); 
    const [ flickrData, setFlickrData ] = useState([]);
    const [ bigImg, setBigImg ] = useState(null);

    console.log(isLoaded);

    useEffect(()=> {
        setFlickrData(flickr);
    }, [flickr]);
    
    //console.log(flickrData);

    useEffect(()=> {
        setBigImg(flickrData[0]);
    }, [flickrData]);

    return (
        <section id="style">
            <div className="inner">
                <h1>Choose Your Style</h1>
                <ul className="hashtags">
                {
                    tags.map((tag, index)=> 
                        <li className={(tagType===tag) ? "on" : ""} key={index}>
                            <span onClick={()=> setTagType(tag)}>{tag}</span>
                        </li>
                    )
                }   
                </ul>
                {!isLoaded
                ? <Loader />
                : <div className="wrap">
                    <article>
                        {(bigImg) && <img src={`https://live.staticflickr.com/${bigImg.server}/${bigImg.id}_${bigImg.secret}_b.jpg`} />}
                    </article>
                    {
                        flickrData.slice(0, 4).map((item, index)=> {
                            const imgSrc = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`;

                            return (
                                <article key={index}>
                                    <img src={imgSrc} alt={item.title} onMouseOver={()=> setBigImg(item)} />
                                </article>
                            )
                        })
                    }
                </div>
                }
            </div>
        </section>
    )
}

export default Gallery;