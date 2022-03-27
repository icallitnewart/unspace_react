import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import Pagination from "./Pagination";

function Faq() {
    //호출한 데이터 저장
    const [ data, setData ] = useState([]);
    //화면에 띄울 데이터 저장
    const [ items, setItems ] = useState([]);
    //하이라이트 처리할 검색어 저장
    const [ highlight, setHighlight ] = useState("");
    //질문 클릭시 보여줄 답변 데이터 저장
    const [ answer, setAnswer ] = useState({ code: "" });
    
    //FAQ 타입
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

    //Pagination 옵션
    const maxItems = 5;
    const totalItems = items.length;
    const [ page, setPage ] = useState(1);
    const startIndex = (page - 1) * maxItems;
    const endIndex = startIndex + maxItems;

    //FAQ 타입에 따른 데이터 호출
    useEffect(()=> {
        callData(type);
        setPage(1);
    }, [type]);

    //화면에 띄울 데이터 저장
    useEffect(()=> {
        setItems(data);
    }, [data]);

    const callData = async (type)=> {
        const url = process.env.PUBLIC_URL + "/db/faq.json";

        await axios
        .get(url)
        .then((data)=> {
            const faq = data.data.data;
            const itemsByType = faq.filter((el)=> el.type === type);
            
            setData(itemsByType);
        })
        .catch((error)=> console.error(error));
    };

    //카테고리 선택 함수
    const selectCategory = (e)=> {
        const category = e.currentTarget.querySelector("span").textContent;
        setType(category);
        if(highlight) setHighlight("");
    };

    //질문 클릭시 답변 보기/닫기
    const showAnswer = (e, code)=> {
        const isOn = e.currentTarget.classList.contains("on");
        isOn 
        ? setAnswer({ code: "" }) 
        : setAnswer({ code: code });
    };

    //검색시 검색어 하이라이트 처리 함수
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
                            {(items.length > 0)
                            ? items.slice(startIndex, endIndex).map((item, index)=>
                                <React.Fragment key={index}>
                                <tr 
                                    className={(answer.code === item.code) ? "question on" : "question"} 
                                    onClick={(e)=> showAnswer(e, item.code)}>
                                    <th scope="row">
                                        {item.type.toUpperCase()}
                                    </th>
                                    <td>
                                        {highlight ? highlightText(item.question) : item.question}
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
                                    <td>{highlight ? highlightText(item.answer) : item.answer}</td>
                                </tr>
                                </React.Fragment>
                            ) : (
                                <tr className="noResult"><td>No Results found.</td></tr>
                            )}
                        </tbody>
                    </table>
                    <SearchBox 
                        type="faq"
                        data={data}
                        setItems={setItems}
                        setHighlight={setHighlight}
                    />
                    <Pagination
                        totalItems={totalItems}
                        maxItems={maxItems}
                        page={page}
                        setPage={setPage}
                    />
                </div>
        </div>
        </section>
    )
}

export default Faq;