function Location() {
    return (
        <section id="location">
            <div className="inner">
                <div className="container">
                    <div id="map"></div>
                    <div className="branchBtns">
                        <a href="#" className="branchBtn on">Head Office <span>SAMSUNG</span></a>
                        <a href="#" className="branchBtn">Branch Office 1 <span>GANGNAM</span></a>
                        <a href="#" className="branchBtn">Branch Office 2 <span>JEJU</span></a>
                    </div>
                </div>
                <div className="address"></div>
            </div>
        </section>
    )
}

export default Location;