import { useEffect, useState } from "react";

const useScreenSize = ()=> {
    const [ screenSize, setScreenSize ] = useState(null);

    useEffect(()=> {
        const checkMediaSize = ()=> {
            const mobile = window.matchMedia("(max-width: 599px)").matches;
            const tablet = window.matchMedia("(min-width: 600px) and (max-width: 1179px)").matches;
            
            (mobile) && setScreenSize("mobile");
            (tablet) && setScreenSize("tablet");
        };

        checkMediaSize();
        window.addEventListener("resize", checkMediaSize);

        return ()=> window.removeEventListener("resize", checkMediaSize);
    }, []);

    return screenSize;
};

export { useScreenSize };