import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import NoticePost from "./NoticePost";
import SearchBox from "./SearchBox";
import Pagination from "./Pagination";

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

    //Pagination 옵션
    const maxItems = 5;
    const totalItems = items.length;
    const [ page, setPage ] = useState(1);
    const startIndex = (page - 1) * maxItems;
    const endIndex = startIndex + maxItems;

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
                                    ? [...items].reverse().slice(startIndex, endIndex).map((item, index)=>
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
                            <Pagination
                                totalItems={totalItems}
                                maxItems={maxItems}
                                page={page}
                                setPage={setPage}
                            />
                        </>
                    :   <NoticePost id={id} />
                    }
                </div>
            </div>
        </section>
    )
}

export default Notice;