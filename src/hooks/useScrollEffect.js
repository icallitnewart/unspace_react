import { useEffect, useState } from "react";

const useScrollEffect = (sections)=> {
    const [ scrollEffect, setScrollEffect ] = useState({});
    const scrollAnimation = ()=> {
        sections.forEach((section)=> {
            const position = section.current.getBoundingClientRect().top;

            if(position + 300 < window.innerHeight) {
                const id = section.current.id;
                const className = section.current.className;
                
                (!scrollEffect[id ? id : className]) 
                && setScrollEffect(prev=> ({ ...prev, [id ? id : className] : "on" }));
            }
        });
    };

    useEffect(()=> {
        let isEffect = {}; 
        sections.forEach((section)=> {
            isEffect[section.current.id 
                        ? section.current.id 
                        : section.current.className] 
            = "";
        });
        setScrollEffect(isEffect);
    }, []);

    useEffect(()=> {
        window.addEventListener("scroll", scrollAnimation);

        return ()=> window.removeEventListener("scroll", scrollAnimation);
    }, [scrollEffect]);

    return scrollEffect;
};

export { useScrollEffect };