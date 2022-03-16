import axios from "axios";
import { useEffect, useState, useRef } from "react";

function Youtube() {
    const [ videos, setVideos ] = useState([]);
    const [ isLoaded, setIsLoaded ] = useState(null);
    const playlist = useRef(null);

    useEffect(()=> {
        callData();
    }, []);

    useEffect(()=> {
        if(isLoaded) {
            const activateTimer = setTimeout(()=> {playlist.current.classList.add("on")}, 0);
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
                <div className="playlist" ref={playlist}>
                
                {
                    !isLoaded
                    ? <p>로딩중입니다</p>
                    : videos.map((video, index)=> {
                        const title = video.snippet.title;
                        let date = video.snippet.publishedAt;
                        date = date.split("T")[0];
                        let desc = video.snippet.description;
                        if(desc.length > 100) {
                            desc = desc.substr(0, 100) + "...";
                        }
                        
                        return (
                            <article key={index} onClick={()=> window.open(`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`, "_blank")}>
                                <img className="pic" src={video.snippet.thumbnails.maxres.url} />
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
        </section>
    )
}

export default Youtube;