import { useEffect } from "react";

const useScrollEffect = (sections)=> {
    const scrollAnimation = ()=> {
        sections.forEach((section)=> {
            const position = section.current.getBoundingClientRect().top;

            if(position + 300 < window.innerHeight) section.current.classList.add("on");
        });
    };

    useEffect(()=> {
        window.addEventListener("scroll", scrollAnimation);

        return ()=> window.removeEventListener("scroll", scrollAnimation);
    }, []);
};

export { useScrollEffect };