import { useRef } from "react";
import { useScrollEffect } from "../hooks/useScrollEffect";

//components
import Header from "../components/common/Header";
import About from "../components/home/About";
import Location from "../components/home/Location";
import Philosophy from "../components/home/Philosophy";
import Quote from "../components/home/Quote";
import Gallery from "../components/home/Gallery";
import Subscribe from "../components/home/Subscribe";
import Trending from "../components/home/Trending";
import Visual from "../components/home/Visual";

function Home() {
    const visual = useRef(null);
    const trending = useRef(null);
    const about = useRef(null);
    const philosophy = useRef(null);
    const quote = useRef(null);
    const subscribe = useRef(null);
    const gallery = useRef(null);
    const location = useRef(null);

    //스크롤 애니메이션 효과
    const sections = [ visual, trending, about, philosophy, quote, subscribe, gallery, location ];
    const scrollEffect = useScrollEffect(sections);

    return (
        <>
            <Visual 
                ref={visual} scrollEffect={visual.current && scrollEffect[visual.current.id]} />
            <Trending 
                ref={trending} 
                scrollEffect={trending.current && scrollEffect[trending.current.id]} />
            <About 
                ref={about} 
                scrollEffect={about.current && scrollEffect[about.current.id]} />
            <Philosophy 
                ref={philosophy} 
                scrollEffect={philosophy.current && scrollEffect[philosophy.current.id]} />
            <Quote 
                ref={quote} 
                scrollEffect={quote.current && scrollEffect[quote.current.id]} />
            <Subscribe 
                ref={subscribe} 
                scrollEffect={subscribe.current && scrollEffect[subscribe.current.id]} />
            <Gallery 
                ref={gallery} 
                scrollEffect={gallery.current && scrollEffect[gallery.current.id]} />
            <Location 
                ref={location} 
                scrollEffect={location.current && scrollEffect[location.current.id]} />
        </>
    )
}

export default Home;