import { forwardRef, useEffect, useState } from "react";
import { useSlider } from "../../hooks/useSlider.js";

function Members({ scrollEffect }, ref) {
    const data = [
        {
            idx: 1,
            name: "Jeremy White",
            position: "Chief Executive",
            greeting: "Jeremy White Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, impedit.",
            career: "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eaque omnis accusamus laborum veniam esse. Ipsam eaque modi hic tempore iste facere",
            desc: "1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum magnam vero, quos delectus totam, iusto, nihil quae quia vitae quasi aspernatur quo placeat recusandae tenetur. Reprehenderit quod debitis sapiente sequi laborum, cumque nesciunt, amet fugit odit velit ab nobis iusto?",
            photo: "profile1.jpg"
        },
        {
            idx: 2,
            name: "Emily Henderson",
            position: "Chief Executive",
            greeting: "Emily Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, impedit.",
            career: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eaque omnis accusamus laborum veniam esse. Ipsam eaque modi hic tempore iste facere",
            desc: "2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum magnam vero, quos delectus totam, iusto, nihil quae quia vitae quasi aspernatur quo placeat recusandae tenetur. Reprehenderit quod debitis sapiente sequi laborum, cumque nesciunt, amet fugit odit velit ab nobis iusto?",
            photo: "profile2.jpg"
        },
        {
            idx: 3,
            name: "Roger Scott",
            position: "Chief Executive",
            greeting: "Roger Scott Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, impedit.",
            career: "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eaque omnis accusamus laborum veniam esse. Ipsam eaque modi hic tempore iste facere",
            desc: "3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum magnam vero, quos delectus totam, iusto, nihil quae quia vitae quasi aspernatur quo placeat recusandae tenetur. Reprehenderit quod debitis sapiente sequi laborum, cumque nesciunt, amet fugit odit velit ab nobis iusto?",
            photo: "profile3.jpg"
        },
        {
            idx: 4,
            name: "Emma Campbell",
            position: "Chief Executive",
            greeting: "Emma Campbell Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, impedit.",
            career: "4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eaque omnis accusamus laborum veniam esse. Ipsam eaque modi hic tempore iste facere",
            desc: "4 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum magnam vero, quos delectus totam, iusto, nihil quae quia vitae quasi aspernatur quo placeat recusandae tenetur. Reprehenderit quod debitis sapiente sequi laborum, cumque nesciunt, amet fugit odit velit ab nobis iusto?",
            photo: "profile4.jpg"
        }
    ];

    const { 
        items, 
        style, 
        activeIndex,
        isClicked,
        moveSlide 
    } = useSlider(data, 500, true);

    const [ sliderEffect, setSliderEffect ] = useState(false);
    const activeItem = items.filter((item)=> item.idx === activeIndex);

    //슬라이더 텍스트 애니메이션 효과
    useEffect(()=> {
        if(isClicked) { //버튼 클릭시 
            setSliderEffect(false);
            const timer = setTimeout(()=> 
            setSliderEffect(true), 0);

            return ()=> clearTimeout(timer);
        } 
        else {  //자동 재생시
            setSliderEffect(true);
            const timer = setTimeout(()=> setSliderEffect(false), 2000);
    
            return ()=> clearTimeout(timer);
        }
    }, [activeIndex, isClicked]);
    
    return (
        <section  className={scrollEffect ?`members ${scrollEffect}` : "members"} ref={ref}>
            <div className={sliderEffect ? "inner sliderOn" : "inner"}>
                <div className="detail">
                    <h1><span>{`"${activeItem[0].greeting}"`}</span></h1>
                    <span>{activeItem[0].name}</span>
                    <span>― {activeItem[0].position}</span>
                    <p>{activeItem[0].career}</p>
                </div>
                <div className="photo slider">
                    <div className="wrap" style={style}>
                        {items.map((item)=> 
                            <img 
                                key={item.idx}
                                src={"img/" + item.photo} 
                                alt={`${item.position} photo`} 
                            />
                        )}
                    </div>
                </div>
                <div className="textBox">
                    <p>
                        <span>{activeItem[0].desc}</span>
                    </p>
                </div>
                <button className="prevBtn" onClick={()=> moveSlide("up")}>
                    <i className="fas fa-chevron-up"></i>
                </button>
                <button className="nextBtn" onClick={()=> moveSlide("down")}>
                    <i className="fas fa-chevron-down"></i>
                </button>
            </div>
        </section>
    )
}

export default forwardRef(Members);