import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

function NoticePost({ id }) {
    const history = useHistory();
    const reduxData = useSelector(state=> state.noticeReducer.notice);
    const [ items, setItems ] = useState({
        target: {},
        prev: {},
        next: {}
    });

    useEffect(()=> {
        const idx = parseInt(id);
        const target = reduxData.filter((item)=> item.idx === idx);
        const prev = reduxData.filter((item)=> item.idx === idx - 1);
        const next = reduxData.filter((item)=> item.idx === idx + 1);

        setItems({
            target: target[0],
            prev: prev[0],
            next: next[0]
        });
    
    }, [history.location.pathname]);


    return (
        <table className="noticePost board" summary="Notice Post">
            <caption className="hidden">Notice Post</caption>
            <tbody>
                <tr className="title">
                    <td colSpan="2">{items.target.title}</td>
                </tr>
                <tr className="extraDetail">
                    <td>{items.target.author}</td>
                    <td>{items.target.date}</td>
                </tr>
                <tr className="content">
                    <td colSpan="2">
                        <div className="contentBox">
                            {items.target.content}
                        </div>
                    </td>
                </tr>
                <tr className="moveTo">
                    <td colSpan="2">
                        <p>
                        {items.next 
                        ?   <Link to={`/community/notice/${items.next.idx}`}>
                            <span>NEXT | </span>
                            {items.next.title}
                            </Link>
                        :   <span>
                            <span>NEXT | </span>
                            No next post exists.
                            </span>
                        }
                        </p>
                        <p>
                        {items.prev 
                        ?   <Link to={`/community/notice/${items.prev.idx}`}>
                            <span>PREV | </span>
                            {items.prev.title}
                            </Link> 
                        :   <span>
                            <span>PREV | </span>
                            No previous post exists.</span>
                        }
                        </p>
                    </td>
                </tr>
                <tr className="viewBtns">
                    <td colSpan="2">
                        {items.prev && <button className="prevBtn" onClick={()=> history.push(`/community/notice/${items.prev.idx}`)}>PREV</button>}
                        {items.next && <button className="nextBtn" onClick={()=> history.push(`/community/notice/${items.next.idx}`)}>NEXT</button>}
                        <button className="listBtn" onClick={()=> history.push('/community/notice')}>LIST</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default NoticePost;