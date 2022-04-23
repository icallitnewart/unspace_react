import { forwardRef, useEffect, useState } from "react";
import { useSlider } from "../../hooks/useSlider.js";

function Members({ scrollEffect }, ref) {
    const data = [
        {
            idx: 1,
            name: "Jeremy White",
            position: "Our Founder",
            greeting: "Our goal is to assist people to envision a comfortable future and to realise it.",
            career: "With a background in architecture, Jeremy has an experience of more than 25 years in a field of hotel interior design, which led to several award-winning high quality projects.",
            desc: "Proin pretium dolor a nibh elementum pellentesque. Vivamus metus justo, blandit eget aliquam nec, pellentesque vitae velit. Mauris dapibus quam vel orci tempor, eu hendrerit turpis ultrices. Vivamus mattis, augue sed sagittis varius, augue neque convallis eros, et commodo leo magna quis urna. Nullam sit amet mauris ex.",
            photo: "profile1.jpg"
        },
        {
            idx: 2,
            name: "Emily Henderson",
            position: "Studio Director",
            greeting: "A space can be re-created in whichever way you may imagine.",
            career: "Emily is a qualified interior designer whose specialty lies within contemporary art and lighting. She is a veteran that has completed over 50 projects.",
            desc: "Morbi sollicitudin in elit eu molestie. Nullam velit justo, molestie quis posuere a, accumsan ut urna. Aenean sed interdum enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque id porta dui. Etiam ultricies pretium suscipit. Proin quam tellus, eleifend eget gravida id, feugiat vitae dolor.",
            photo: "profile2.jpg"
        },
        {
            idx: 3,
            name: "Roger Scott",
            position: "Architectural Technologist",
            greeting: "As simple as it may seem, each space is unique in its own way and thus requires a delicately calculated plan.",
            career: "Highly skilled in the area, Roger has over 15 years' experiences working in transport and domestic construction.",
            desc: "In bibendum, arcu non facilisis feugiat, neque erat commodo sapien, ut aliquet massa mi lacinia leo. Sed pharetra suscipit elit eget facilisis. Donec lacinia justo nibh. Pellentesque eget maximus sapien. Vestibulum vel vestibulum turpis, quis tristique ante. Donec luctus ante at dignissim congue. Cras imperdiet facilisis diam et tempus.",
            photo: "profile3.jpg"
        },
        {
            idx: 4,
            name: "Emma Campbell",
            position: "Furniture Designer",
            greeting: "Any detail cannot be overlooked as creating an environment means imagining as if I were the resider in that place.",
            career: "With a sophisticated sense of selecting materials, Emma has released over 50 pieces of furniture and interior products under her own label.",
            desc: "Praesent nec iaculis leo, at bibendum odio. Suspendisse tempus vehicula risus, non cursus ante. Morbi ut ligula turpis. Ut imperdiet dui enim, ac lobortis sapien mattis ut. Morbi dapibus, orci eget vestibulum mollis, lorem ipsum vulputate leo, ut tincidunt justo nisi at nisi. Cras viverra vestibulum risus id ullamcorper.",
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
                <button 
                    className="prevBtn" 
                    onClick={()=> moveSlide("up")}
                    aria-label="Previous Slide"
                >
                    <i className="fas fa-chevron-up"></i>
                </button>
                <button 
                    className="nextBtn" 
                    onClick={()=> moveSlide("down")}
                    aria-label="Next Slide"
                >
                    <i className="fas fa-chevron-down"></i>
                </button>
            </div>
        </section>
    )
}

export default forwardRef(Members);