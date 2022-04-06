const useHighlight = (highlight)=> {
    const highlightText = (words)=> {
        if(highlight) {
            const text = words.split(new RegExp(`(${highlight})`, 'gi'));
            return text.map((txt, index)=> 
                txt===highlight 
                ? <mark key={index}>{txt}</mark>
                : txt
            )
        }
    };

    return highlightText;
};

export { useHighlight };