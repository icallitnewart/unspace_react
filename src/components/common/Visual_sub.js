import { useParams } from "react-router-dom";

function Visual_sub({ title, pic, desc, tab }) {
    const { type } = useParams();
    
    return (
        <figure className="visual_sub">
            <div className="inner">
                <div className="pic" style={pic}></div>
                <main>
                    <div className="textBox">
                        <div className="title">
                            <h1>{title}</h1>
                            <p>{desc}</p>
                        </div>
                    </div>
                    <div className="guide">
                    {
                        tab.map((item, index)=> 
                            <div 
                                key={index}
                                className={
                                    (type && item.name.replace(/ /gi,"")===type) ? "on" : ""
                                } 
                                onClick={item.event}
                            >
                                <span>0{index + 1}</span>
                                <span>{item.name}</span>
                            </div>
                        )

                    }
                    </div>
                </main>
            </div>
        </figure>
    )
}

export default Visual_sub;