import { useState } from "react";

function SearchBox({ type, data, setItems, setHighlight }) {
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
            foundItems = data.filter((item)=> item.title.match(input) || item.author.match(searchTerm));
        } else if(type==="faq") {
            foundItems = data.filter((item)=> item.question.match(input) || item.answer.match(input));
        }
        
        setItems(foundItems);
        setHighlight(input);
    };

    return (
        <div className="searchBox">
            <input 
                type="text" 
                name="search" 
                className="searchInput" 
                onChange={handleChange}
                value={input}
                onKeyPress={(e)=> (e.key === "Enter") && searchItem()}
            />
            <button className="searchBtn" onClick={searchItem}>
                <i className="fas fa-search"></i>
            </button>
        </div>
    )
}

export default SearchBox;