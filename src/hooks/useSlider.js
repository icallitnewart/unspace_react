import { useState, useEffect } from "react";

const useSlider = (data, duration, autoplay)=> {
    //처음 로드될 때 items 순서 재배치
    const initItems = ()=> {
        const arr = [...data];
        const lastEl = data[data.length - 1];
        arr.splice(data.length - 1, 1);
        arr.unshift(lastEl);
        
        return arr;
    };
    const [ items, setItems ] = useState(initItems());
    const [ isClicked, setIsClicked ] = useState(false);
    const [ direction, setDirection ] = useState(null);
    const [ style, setStyle ] = useState(null);
    const [ activeIndex, setActiveIndex ] = useState(1);

    
    //0. 버튼 클릭시 슬라이드 이동 함수 
    const moveSlide = (direction)=> {
        setIsClicked(true);
        setDirection(direction);
    };

    //1. 방향에 따른 슬라이드 이동 함수
    const moveTo = (direction)=> {
        if(autoplay) setDirection(direction);

        //activeIndex 번호 설정
        if(direction==="right" || direction==="down") {
            //마지막 슬라이드 + 1 : 첫 슬라이드로 번호 초기화
            (activeIndex===items.length) 
            ? setActiveIndex(1)
            : setActiveIndex(prev=> prev + 1);
        }
        
        if(direction==="left" || direction==="up") {
            //첫 슬라이드 - 1 : 마지막 슬라이드로 번호 초기화
            (activeIndex===1) 
            ? setActiveIndex(items.length)
            : setActiveIndex(prev=> prev - 1);
        }
    };

    //2. 슬라이드 이동시 애니메이션 효과 적용 함수
    const animate = ()=> {
        const prevPos = 0;
        const nextPos = - 100 / data.length * 2;

        const css = {
            right: {
                prop: "transform",
                num: `translateX(${nextPos}%)`
            },
            left: {
                prop: "transform",
                num: `translateX(${prevPos}%)`
            },
            down: {
                prop: "transform",
                num: `translateY(${nextPos}%)`
            },
            up: {
                prop: "transform",
                num: `translateY(${prevPos}%)`
            }
        };

        const prop = css[direction].prop;
        setStyle({
            [prop] : css[direction].num, 
            transition: duration + "ms"
        });
    };

    //3. items 초기화 함수
    const initialize = ()=> {
        const arr = [...items];

        //items 순서 초기화
        if(direction==="right" || direction==="down") {
            const firstEl = arr.shift();
            arr.push(firstEl);
            setItems(arr);
        } 
        
        if(direction==="left" || direction==="up") {
            const lastEl = arr.pop();
            arr.unshift(lastEl);
            setItems(arr);
        }

        //items CSS 초기화
        setStyle(null);
        //버튼 클릭 초기화
        if(isClicked) setIsClicked(false);
    };

    //자동 재생시 작동
    useEffect(()=> {
        if(autoplay) {
            const slider = setInterval(()=> moveTo("down"), duration * 4);
    
            return ()=> clearInterval(slider);
        }
    }, [autoplay, activeIndex]);

    //버튼 클릭시 작동
    useEffect(()=> {
        if(direction && isClicked) moveTo(direction);         
    }, [direction, isClicked]);

    //애니메이션 효과 및 items 초기화
    useEffect(()=> {
        if(!direction) return;

        animate();

        const timer = setTimeout(initialize, duration);
        return ()=> clearTimeout(timer);
    }, [activeIndex]);

    return { 
        items, 
        style, 
        activeIndex,
        moveSlide 
    }
};

export { useSlider }