import { useState } from "react";

function SearchBox({ type, data, setItems, setHighlight, resetPage }) {
    const [ input, setInput ] = useState("");

    const handleChange = (e)=> {
        const { value } = e.target;
        setInput(value);
    };

    const searchItem = ()=> {
        if(!input) { 
            alert("Please type something to search.");
            return;
        }

        const searchTerm = new RegExp(input, "i");
        let foundItems = [];

        if(type==="notice") {
            foundItems = data.filter((item)=> item.title.match(searchTerm) || item.author.match(searchTerm) || item.content.match(searchTerm));
        } else if(type==="faq") {
            foundItems = data.filter((item)=> item.question.match(searchTerm) || item.answer.match(searchTerm));
        }
        
        setItems(foundItems);
        setHighlight(input);
        resetPage(1);
    };

    return (
        <div className="searchBox">
            <label className="hidden" htmlFor="search">
                Search Box
            </label>
            <input 
                type="text" 
                name="search" 
                id="search"
                className="searchInput" 
                onChange={handleChange}
                value={input}
                onKeyPress={(e)=> (e.key === "Enter") && searchItem()}
            />
            <button 
                className="searchBtn" 
                onClick={searchItem}
                aria-label="Search"
            >
                <i className="fas fa-search"></i>
            </button>
        </div>
    )
}

export default SearchBox;