function Notice() {
    return (
        <section className="container noticeBoard">
            <div className="inner">
                <div className="title">
                    <h1>Notice</h1>
                </div>
                <div className="noticeBoard board">
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
                            <tr>
                                <td>1</td>
                                <td>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia, placeat incidunt eos amet cupiditate.
                                </td>
                                <td>Lorem ipsum</td>
                                <td>05.10.2021</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia, placeat incidunt eos amet cupiditate.
                                </td>
                                <td>Lorem ipsum</td>
                                <td>05.10.2021</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia, placeat incidunt eos amet cupiditate.
                                </td>
                                <td>Lorem ipsum</td>
                                <td>05.10.2021</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia, placeat incidunt eos amet cupiditate.
                                </td>
                                <td>Lorem ipsum</td>
                                <td>05.10.2021</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia, placeat incidunt eos amet cupiditate.
                                </td>
                                <td>Lorem ipsum</td>
                                <td>05.10.2021</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia, placeat incidunt eos amet cupiditate.
                                </td>
                                <td>Lorem ipsum</td>
                                <td>05.10.2021</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia, placeat incidunt eos amet cupiditate.
                                </td>
                                <td>Lorem ipsum</td>
                                <td>05.10.2021</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia, placeat incidunt eos amet cupiditate.
                                </td>
                                <td>Lorem ipsum</td>
                                <td>05.10.2021</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia, placeat incidunt eos amet cupiditate.
                                </td>
                                <td>Lorem ipsum</td>
                                <td>05.10.2021</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia, placeat incidunt eos amet cupiditate.
                                </td>
                                <td>Lorem ipsum</td>
                                <td>05.10.2021</td>
                            </tr>
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

export default Notice;