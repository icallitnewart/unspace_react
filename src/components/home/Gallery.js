import { useState, useEffect, forwardRef } from "react";
import { useFetchFlickrData } from "../../hooks/useFetchFlickrData.js";
import { useScreenSize } from "../../hooks/useScreenSize.js";
import Loader from "../common/Loader";
import Popup from "../common/Popup";


function Gallery(prop, ref) {
    const [ popup, setPopup ] = useState({
        isVisible: false,
        targetItem: null
    });

    //flickr 데이터 타입
    const tags = [ "popular", "modern", "contemporary", "minimalist", "mid-century" ];
    const [ tagType, setTagType ] = useState("popular");

    //flickr 데이터 호출 및 저장
    const [ flickr, isLoaded ] = useFetchFlickrData(tagType); 
    const [ flickrData, setFlickrData ] = useState([]);
    const [ bigImg, setBigImg ] = useState(null);

    const screenSize = useScreenSize();

    //작은 이미지 클릭시 큰 이미지 보여주기 
    const showBigImg = (item)=> {
        if (screenSize==="mobile") { //모바일 사이즈라면 큰 이미지만 변경
            setBigImg(item);
        } else {    //그 외엔 팝업 띄우기
            setPopup({isVisible: true, targetItem: item});
        }
    };

    useEffect(()=> {
        setFlickrData(flickr);
    }, [flickr]);

    useEffect(()=> {
        setBigImg(flickrData[0]);
    }, [flickrData]);

    return (
        <>
        <section id="gallery" ref={ref}>
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
                                <article key={index} onClick={()=> showBigImg(item)}>
                                    <img src={imgSrc} alt={item.title} onMouseOver={()=> setBigImg(item)} />
                                </article>
                            )
                        })
                    }
                </div>
                }
            </div>
        </section>
        {popup.isVisible && 
            <Popup 
                type="flickr" 
                targetItem={popup.targetItem} 
                setPopup={setPopup} 
            />
        }
        </>
    )
}

export default forwardRef(Gallery);