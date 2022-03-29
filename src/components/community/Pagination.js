function Pagination({ totalItems, maxItems, page, setPage }) {
    const itemsPerPage = totalItems / maxItems;
    const pageRange = (itemsPerPage < 1) ? [1] : Array(itemsPerPage).fill().map((arr, i)=> i + 1);
    const pageLimit = 5;

    const calculatePage = (page % pageLimit === 0) ? Math.floor(page / pageLimit) - 1 : Math.floor(page / pageLimit);
    const endIndex = (calculatePage + 1) * pageLimit;
    const startIndex = endIndex - pageLimit + 1;

    console.log(pageRange);
    return (
        <div className="pagination">
            <button 
                className="prevBtn" 
                onClick={()=> setPage(page - 1)} 
                disabled={(page === pageRange[0])}
            >
                <i className="fas fa-chevron-left"></i>
            </button>
            <ul>
                {
                    pageRange.slice(startIndex-1, endIndex).map((num, index)=> 
                        <li className={(page===num) ? "on" : ""} key={index}>
                            <button onClick={()=> setPage(num)}>{num}</button>
                        </li>
                    )
                }
            </ul>
            <button 
                className="nextBtn" 
                onClick={()=> setPage(page + 1)} 
                disabled={(page === pageRange.length)}
            >
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    )
}

export default Pagination;