function Location() {
    return (
        <section className="container location">
            <div className="inner">
                <div className="title">
                    <h1>Location</h1>
                </div>
                <div className="location">
                    <h1><span>How to get to us</span></h1>
                    <div id="map"></div>
                    <div className="branchBtns">
                        <a href="#" className="branchBtn on">Head Office <span>SAMSUNG</span></a>
                        <a href="#" className="branchBtn">Branch Office 1 <span>GANGNAM</span></a>
                        <a href="#" className="branchBtn">Branch Office 2 <span>JEJU</span></a>
                    </div>
                    <div className="address">
                        {/* <!-- <div className="officeTitle">
                            <h2>Head Office</h2>
                            <h3>GANGNAM</h3>
                        </div>
                        <div className="addressDetail">
                            <h4>415 Teheran-ro <br>Samseong-dong<br> Gangnam-gu<br>Seoul</h4>
                            <p><span><i className="fas fa-bus"></i></span> 123, 456, 789</p>
                            <p><span><i className="fas fa-subway"></i></span>Seolleung Station <br> (Exit 3)</p>
                        </div> --> */}
                    </div>
        
                </div>
            </div>
        </section>
    )
}

export default Location;