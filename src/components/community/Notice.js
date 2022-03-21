import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import NoticePost from "./NoticePost";
import SearchBox from "./SearchBox";

function Notice() {
    const { id } = useParams(); 
    const history = useHistory();
    const dispatch = useDispatch();

    //호출한 데이터 저장
    const [ data, setData ] = useState([]);
    //화면에 띄울 데이터 저장
    const [ items, setItems ] = useState([]);
    //하이라이트 처리할 검색어 저장
    const [ highlight, setHighlight ] = useState("");

    useEffect(()=> {
        callData();
    }, []);

    useEffect(()=> {
        setItems(data);
        dispatch({ type: 'SET_NOTICE', payload: data });
    }, [data]);

    const callData = async ()=> {
        const url = process.env.PUBLIC_URL + "/db/notice.json";

        await axios
        .get(url)
        .then((data)=> setData(data.data.data))
        .catch((error)=> console.error(error));
    };

    //검색시 검색어 하이라이트 처리 함수
    const highlightText = (words)=> {
        if(highlight !== "") {
            const text = words.split(new RegExp(`(${highlight})`, 'gi'));
            return text.map((txt, index)=> 
                txt=== highlight 
                ? <mark key={index}>{txt}</mark>
                : txt
            )
        }
    };

    return (
        <section className="container noticeBoard">
            <div className="inner">
                <div className="title">
                    <h1>Notice</h1>
                </div>
                <div className="board">
                    {(!id)
                    ?  <>
                            <table className="boardForm" summary="Notice Board">
                                <caption className="hidden">Notice Board</caption>
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Title</th>
                                        <th>Author</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.length > 0 
                                    ? [...items].reverse().map((item, index)=>
                                        <tr key={index} onClick={()=> history.push(`/community/notice/${item.idx}`)}>
                                            <td className="idx">{item.idx}</td>
                                            <td className="title">{highlight ? highlightText(item.title) : item.title} </td>
                                            <td className="author">{highlight ? highlightText(item.author) : item.author}</td>
                                            <td className="date">{item.date}</td>
                                        </tr>
                                    ) : (
                                        <tr className="noResult"><td colSpan={4}>No Results found.</td></tr>
                                    )}
                                </tbody>
                            </table>
                            <SearchBox 
                                type={"notice"}
                                data={data} 
                                setItems={setItems} 
                                setHighlight={setHighlight}
                            />
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
                        </>
                    :   <NoticePost id={id} />
                    }
                </div>
            </div>
        </section>
    )
}

export default Notice;