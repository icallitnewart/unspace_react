const useScrollDown = ()=> {
    const scrollDown = (target)=> {
        const pos = target.current.offsetTop;

        window.scrollTo({
            top: pos,
            behavior: 'smooth',
        });
    };

    return scrollDown;
};

export { useScrollDown };