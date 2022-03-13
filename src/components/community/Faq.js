function Faq() {
    return (
        <section className="container faqBoard">
            <div className="inner">
                <div className="title">
                    <h1>Frequently Asked Questions</h1>
                </div>
                <div className="board">
                    <div className="category">
                        <a href="#" className="on">
                            <i className="far fa-credit-card"></i>
                            <span>Payment</span>
                        </a>
                        <a href="#">
                            <i className="fas fa-users"></i>
                            <span>Membership</span>
                        </a>
                        <a href="#">
                            <i className="fas fa-box-open"></i>
                            <span>Products</span>
                        </a>
                        <a href="#">
                            <i className="fas fa-tools"></i>
                            <span>A/S</span>
                        </a>
                    </div>
                    <table className="boardForm" summary="Frequently Asked Questions and Answers">
                        <caption className="hidden">Frequently Asked Questions Board</caption>
                        <tbody>
                            <tr className="question">
                                <th scope="row">
                                    PAYMENT
                                </th>
                                <td>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia, placeat incidunt eos amet cupiditate.
                                    <a href="#" className="viewMore">
                                        <span></span>
                                        <span></span>
                                    </a>
                                </td>
                            </tr>
                            <tr className="question">
                                <th scope="row">
                                    PAYMENT
                                </th>
                                <td>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia, placeat incidunt eos amet cupiditate.
                                    <a href="#" className="viewMore">
                                        <span></span>
                                        <span></span>
                                    </a>
                                </td>
                            </tr>
                            <tr className="question">
                                <th scope="row">
                                    PAYMENT
                                </th>
                                <td>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia, placeat incidunt eos amet cupiditate.
                                    <a href="#" className="viewMore">
                                        <span></span>
                                        <span></span>
                                    </a>
                                </td>
                            </tr>
                            <tr className="question">
                                <th scope="row">
                                    PAYMENT
                                </th>
                                <td>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia, placeat incidunt eos amet cupiditate.
                                    <a href="#" className="viewMore">
                                        <span></span>
                                        <span></span>
                                    </a>
                                </td>
                            </tr>
                            <tr className="question">
                                <th scope="row">
                                    PAYMENT
                                </th>
                                <td>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia, placeat incidunt eos amet cupiditate.
                                    <a href="#" className="viewMore">
                                        <span></span>
                                        <span></span>
                                    </a>
                                </td>
                            </tr>
                            <tr className="question">
                                <th scope="row">
                                    PAYMENT
                                </th>
                                <td>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia, placeat incidunt eos amet cupiditate.
                                    <a href="#" className="viewMore">
                                        <span></span>
                                        <span></span>
                                    </a>
                                </td>
                            </tr>
                            <tr className="question">
                                <th scope="row">
                                    PAYMENT
                                </th>
                                <td>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia, placeat incidunt eos amet cupiditate.
                                    <a href="#" className="viewMore">
                                        <span></span>
                                        <span></span>
                                    </a>
                                </td>
                            </tr>
                            <tr className="question">
                                <th scope="row">
                                    PAYMENT
                                </th>
                                <td>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia, placeat incidunt eos amet cupiditate.
                                    <a href="#" className="viewMore">
                                        <span></span>
                                        <span></span>
                                    </a>
                                </td>
                            </tr>
                            <tr className="question">
                                <th scope="row">
                                    PAYMENT
                                </th>
                                <td>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia, placeat incidunt eos amet cupiditate.
                                    <a href="#" className="viewMore">
                                        <span></span>
                                        <span></span>
                                    </a>
                                </td>
                            </tr>
                            <tr className="question">
                                <th scope="row">
                                    PAYMENT
                                </th>
                                <td>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia, placeat incidunt eos amet cupiditate.
                                    <a href="#" className="viewMore">
                                        <span></span>
                                        <span></span>
                                    </a>
                                </td>
                            </tr>
                            {/* <!-- <tr className="answer">
                                <th scope="row">ANSWER</th>
                                <td>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quis non ullam facere commodi asperiores nisi, quasi beatae iusto eaque deserunt excepturi, architecto obcaecati distinctio accusantium nobis dicta et itaque!
                                </td>
                            </tr> --> */}
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

export default Faq;