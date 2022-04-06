import { useEffect, useState, forwardRef } from "react";

function Visual(prop, ref) {
    const [ activeBg, setActiveBg ] = useState(0);
    const [ stop, setStop ] = useState(false);

    const imgs = [
        {
            idx: 0,
            src: ["visual1.jpg", "visual1-s.jpg"] 
        },
        {
            idx: 1,
            src: ["visual2.jpg", "visual2-s.jpg"] 
        },
        {
            idx: 2,
            src: ["visual3.jpg", "visual3-s.jpg"] 
        },
        {
            idx: 3,
            src: ["visual4.jpg", "visual4-s.jpg"] 
        }
    ];

    //Next 버튼 클릭시 다음 이미지로 넘어가는 함수
    const nextBg = (e)=> {
        e.preventDefault();
        setStop(true);
        setActiveBg(prev=> prev+1);
    };

    //선택한 이미지 클릭시 해당 이미지로 넘어가는 함수
    const selectBg = (index)=> {
        setStop(true);
        setActiveBg(index);
    };

    useEffect(()=> {
        const changeBg = setInterval(()=> setActiveBg(prev=> prev + 1), 5000);

        if(stop) {
            clearInterval(changeBg);
            setStop(false);
        }

        return ()=> clearInterval(changeBg);
    }, [stop]);

    useEffect(()=> {
        (activeBg===imgs.length) && setActiveBg(0); 
    }, [activeBg]);

    return (       
        <figure id="visual" ref={ref}>
            <div className="bgs">
                {imgs.map((img, index)=> 
                        <img 
                            key={index}
                            src={`img/${img.src[0]}`} 
                            alt="banner" 
                            className={(activeBg===img.idx) ? "on" : ""}
                        />
                )}
            </div>
            <div className="inner">
                <div className="container">
                    <div className="textBox">
                        <h1>UNSPACE</h1>
                        <h2>BEYOND IMAGINATION</h2>
                        <span>paint your life, envision your dreams</span>
                    </div>
                    <a href="#">VIEW MORE 
                        <i className="fas fa-angle-double-right"></i></a>
                </div>
                <a href="#" className="nextBtn" onClick={nextBg}>
                    <i className="fas fa-chevron-right"></i>
                    <span>NEXT</span>
                </a>
                <div className="wrap">
                    {imgs.map((img, index)=> 
                        <article key={index} onClick={()=> selectBg(index)}>
                            <img src={`img/${img.src[1]}`}  alt="banner" />
                            <span>Project</span>
                        </article>
                    )}
                </div>
                <div className="pagination">
                    {imgs.map((img, index)=>
                        <span 
                            key={index} href="#"
                            onClick={()=> selectBg(index)}
                        >
                            <i className={(activeBg===index) ? "fas fa-circle" : "far fa-circle"}></i>
                        </span>
                    )}
                </div>
            </div>
        </figure>
    )
}

export default forwardRef(Visual);