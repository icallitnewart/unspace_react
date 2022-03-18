import axios from "axios";
import React, { useEffect, useState } from "react";

function Faq() {
    const [ items, setItems ] = useState([]);
    const [ answer, setAnswer ] = useState({ code: "" });
    const types = [
        { 
            type : "Payment",
            icon : "far fa-credit-card"
        }, 
        { 
            type : "Membership",
            icon : "fas fa-users"
        }, 
        { 
            type : "Products",
            icon : "fas fa-box-open"
        }, 
        { 
            type : "A/S",
            icon : "fas fa-tools"
        }
    ];
    const [ type, setType ] = useState(types[0].type);

    useEffect(()=> {
        callData(type);
    }, [type])

    const callData = async (type)=> {
        const url = process.env.PUBLIC_URL + "/db/faq.json";

        await axios
        .get(url)
        .then((data)=> {
            const faq = data.data.data;
            const itemsByType = faq.filter((el)=> el.type === type);
            
            setItems(itemsByType);
        })
    }

    const selectCategory = (e)=> {
        const category = e.currentTarget.querySelector("span").textContent;
        setType(category);
    }

    const showAnswer = (code)=> {
        setAnswer({ code: code });
    }

    return (
        <section className="container faqBoard">
            <div className="inner">
                <div className="title">
                    <h1>Frequently Asked Questions</h1>
                </div>
                <div className="board">
                    <ul className="category">
                        {types.map((el, index)=>
                            <li 
                                className={(el.type===type) ? "on" : ""} 
                                key={index}
                                onClick={selectCategory}
                            >
                                <i className={el.icon}></i>
                                <span>{el.type}</span>
                            </li>
                        )}
                    </ul>
                    <table className="boardForm" summary="Frequently Asked Questions and Answers">
                        <caption className="hidden">Frequently Asked Questions Board</caption>
                        <tbody>
                            {items.map((item, index)=>
                                <React.Fragment key={index}>
                                <tr 
                                    className={(answer.code === item.code) ? "question on" : "question"} 
                                    onClick={()=> showAnswer(item.code)}>
                                    <th scope="row">
                                        {item.type.toUpperCase()}
                                    </th>
                                    <td>
                                        {item.question}
                                        <a href="#" className="viewMore">
                                            <span></span>
                                            <span></span>
                                        </a>
                                    </td>
                                </tr>
                                <tr 
                                    className={(answer.code === item.code) ? "answer" : "answer hide"}
                                >
                                    <th scope="row">ANSWER</th>
                                    <td>{item.answer}</td>
                                </tr>
                                </React.Fragment>
                            )}
                        </tbody>
                    </table>
                    <div className="searchBox">
                        <input type="text" name="search" id="searchFaq" />
                        <i className="fas fa-search"></i>
                    </div>
                    <div className="pagination">
                        <a href="#" className="prevBtn">
                            <i className="fas fa-chevron-left"></i>
                        </a>
                        <ul>
                            <li className="on"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#">6</a></li>
                            <li><a href="#">7</a></li>
                            <li><a href="#">8</a></li>
                            <li><a href="#">9</a></li>
                            <li><a href="#">10</a></li>
                        </ul>
                        <a href="#" className="nextBtn">
                            <i className="fas fa-chevron-right"></i>
                        </a>
                    </div>
                </div>
        </div>
        </section>
    )
}

export default Faq;