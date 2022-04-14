import React, { useEffect, forwardRef, useRef, useState } from "react";
import { useKakaoMap } from "../../hooks/useKakaoMap.js";

function Location({ scrollEffect }, ref) {
    const mapContainer = useRef(null);
    const btns = useRef(null);

    const [ changeMap , options, activeIndex ] = useKakaoMap(mapContainer, btns);    
    const [ branchOptions, setBranchOptions ] = useState([]);
    const [ activeBranch, setActiveBranch ] = useState({});

    useEffect(()=> {
        (options.length > 0) && setBranchOptions(options);
    }, [options]);

    useEffect(()=> {
        (branchOptions.length > 0) && setActiveBranch(branchOptions[activeIndex]);
    }, [activeIndex, branchOptions]);



    return (
        <section className={scrollEffect ? `container location ${scrollEffect}` : "container location"} ref={ref}>
            <div className="inner">
                <div className="title">
                    <h1>Location</h1>
                </div>
                <div className="location">
                    <h1><span>How to get to us</span></h1>
                    <div id="map" ref={mapContainer}></div>
                    <ul className="branchBtns" ref={btns}>
                        {
                            branchOptions.map((opt, index)=>
                                <li
                                    key={index}
                                    className={activeIndex === index ? "branchBtn on" : "branchBtn"}
                                    onClick={()=> {
                                        (activeIndex !== index) &&
                                        changeMap(index);
                                    }}
                                >
                                    {opt.title} 
                                    <span>{opt.area}</span>
                                </li>
                            )
                        }
                    </ul>
                    <div className="address">
                        <div className="officeTitle">
                            <h2>{activeBranch.title}</h2>
                            <h3>{activeBranch.area}</h3>
                        </div>
                        <div className="addressDetail">
                            <h4>
                                {
                                    activeBranch.address && activeBranch.address.map((el, index)=> 
                                    <React.Fragment key={index}>
                                        {el} <br /> 
                                    </React.Fragment>)
                                }
                            </h4>
                            <p>
                                <span>
                                    <i className="fas fa-bus"></i>
                                </span>{activeBranch.bus}
                            </p>
                            {
                                activeBranch.subway && 
                                <p>
                                    <span>
                                        <i className="fas fa-subway"></i>
                                    </span>{activeBranch.subway.map((el, index)=> 
                                        <React.Fragment key={index}>
                                            {el} <br />
                                        </React.Fragment>
                                    )}
                                </p>
                            }
                        </div>
                    </div>
        
                </div>
            </div>
        </section>
    )
}

export default forwardRef(Location);