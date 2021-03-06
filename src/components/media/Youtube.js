import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../common/Loader";
import Popup from "../common/Popup";

function Youtube() {
    const [ videos, setVideos ] = useState([]);
    const [ isLoaded, setIsLoaded ] = useState(null);
    const [ loadEffect, setLoadEffect ] = useState(false);
    const [ popup, setPopup ] = useState({
        isVisible: false,
        targetItem: null
    });

    useEffect(()=> {
        callData();
    }, []);

    useEffect(()=> {
        if(isLoaded) {
            const activateTimer = setTimeout(()=> {setLoadEffect(true)}, 0);
            return ()=> clearTimeout(activateTimer);
        }
    }, [isLoaded]);

    const callData = async ()=> {
        const youtubeKey = process.env.REACT_APP_YOUTUBE_API_KEY;
        const playlistId = process.env.REACT_APP_YOUTUBE_PLAYLIST_ID;
        const num = 5;
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${youtubeKey}&playlistId=${playlistId}&maxResults=${num}`;

        await axios
        .get(url)
        .then((data)=> {
            const items = data.data.items;

            setVideos(items);
        })
        .catch((error)=> console.error(error));
        
        setIsLoaded(true);
    }

    return (
        <section className="youtube">
            <div className="inner">
                <div className="title">
                    <h1>youtube</h1>
                </div>
                <div className={loadEffect ? "playlist on" : "playlist"}>
                {
                    !isLoaded
                    ? <Loader />
                    : videos.map((video, index)=> {
                        const title = video.snippet.title;
                        let date = video.snippet.publishedAt;
                        date = date.split("T")[0];
                        let desc = video.snippet.description;
                        if(desc.length > 100) {
                            desc = desc.substr(0, 100) + "...";
                        }

                        return (
                            <article key={index} onClick={()=> setPopup({
                                isVisible: true,
                                targetItem: video
                            })}>
                                <img 
                                    className="pic" 
                                    src={video.snippet.thumbnails.maxres.url} 
                                    alt={"Youtube Thumbnail: " + title}
                                />
                                <div className="textBox">
                                    <div className="playBtn">
                                        <span><i className="fas fa-play"></i></span>
                                        <span className="playText">watch</span>
                                    </div>
                                    <p>{title}</p>
                                </div>
                            </article>
                    )})
                }
                </div>
            </div>
            {popup.isVisible && 
                <Popup 
                    type="youtube" 
                    targetItem={popup.targetItem} 
                    setPopup={setPopup} 
                />
            }
        </section>
    )
}


export default Youtube;