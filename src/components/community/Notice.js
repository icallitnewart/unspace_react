import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import NoticePost from "./NoticePost";

function Notice() {
    const { id } = useParams(); 
    const history = useHistory();
    const [ items, setItems ] = useState([]);
    const dispatch = useDispatch();

    useEffect(()=> {
        callData();
    }, []);

    useEffect(()=> {
        dispatch({ type: 'SET_NOTICE', payload: items });
    }, [items]);

    const callData = async ()=> {
        const url = process.env.PUBLIC_URL + "/db/notice.json";

        await axios
        .get(url)
        .catch((error)=> console.error(error))
        .then((data)=> {
            setItems(data.data.data);
        });
    }
    return (
        <section className="container noticeBoard">
            <div className="inner">
                <div className="title">
                    <h1>Notice</h1>
                </div>
                <div className="noticeBoard board">
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
                                    {[...items].reverse().map((item, index)=>
                                        <tr key={index} onClick={()=> history.push(`/community/notice/${item.idx}`)}>
                                            <td className="idx">{item.idx}</td>
                                            <td className="title">{item.title} </td>
                                            <td className="author">{item.author}</td>
                                            <td className="date">{item.date}</td>
                                        </tr>
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
                        </>
                    :   <NoticePost id={id} />
                    }
                </div>
            </div>
        </section>
    )
}

export default Notice;