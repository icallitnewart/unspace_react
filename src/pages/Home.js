//components
import Header from "../components/common/Header";
import About from "../components/home/About";
import Location from "../components/home/Location";
import Philosophy from "../components/home/Philosophy";
import Quote from "../components/home/Quote";
import Style from "../components/home/Style";
import Subscribe from "../components/home/Subscribe";
import Trending from "../components/home/Trending";
import Visual from "../components/home/Visual";

function Home() {
    return (
        <>
            <Header type="main" />
            <Visual />
            <Trending />
            <About />
            <Philosophy />
            <Quote />
            <Subscribe />
            <Style />
            <Location />
        </>
    )
}

export default Home;