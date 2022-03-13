function Getintouch() {
    return (
        <section className="container getintouch">
            <div className="inner">
                <div className="title">
                    <h1>Get in touch</h1>
                </div>
                <form action="/" method="post" className="contactForm">
                    <h2><span>Leave us a message</span></h2>
                    <fieldset>
                        <legend className="hidden">Contact Us Form</legend>
                        <table summary="Customer's name, phone number, email, enquiry">
                            <caption className="hidden">Contact Us Form</caption>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <label htmlFor="username">Name</label>
                                    </th>
                                    <td>
                                        <input type="text" name="username" id="username" placeholder="Your Name" required />
                                    </td>
                                </tr>
                                {/* <!--<tr className="errMsg">
                                    <th>Error Message</th>
                                    <td></td>
                                </tr>--> */}
                                <tr>
                                    <th scope="row">
                                        <label htmlFor="phoneNum">Phone Number</label>
                                    </th>
                                    <td>
                                        <input type="number" name="phoneNum" id="phoneNum" placeholder="Your Phone Number" required />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <label htmlFor="email">E-mail</label>
                                    </th>
                                    <td>
                                        <input type="email" name="email" id="email" placeholder="Your Email Address" required />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <label htmlFor="enquiry">Enquiry</label>
                                    </th>
                                    <td>
                                        <textarea name="enquiry" id="enquiry" placeholder="What are your enquiries?"></textarea>
                                    </td>
                                </tr>
                                <tr className="formBtns">
                                    <th colSpan="2">
                                        <input type="reset" value="CANCEL" />
                                        <input type="submit" value="SUBMIT" />
                                    </th>
                                </tr>
                            </tbody>
                        </table>                    
                    </fieldset>
                </form>
                <div className="contactDetail">
                    <div>
                        <h3>Call Us</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio possimus, quasi voluptates quod illo at.</p>
                        <a href="#"><i className="fas fa-phone-alt"></i> +333 3333 3333</a>
                    </div>
                    <div>
                        <h4>Visit Us</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio possimus, quasi voluptates quod illo at.</p>
                        <a href="#"><i className="fas fa-map-marker-alt"></i> See Map</a>
                    </div>
                    <div>
                        <h5>Live Chat</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio possimus, quasi voluptates quod illo at.</p>
                        <a href="#"><i className="far fa-comments"></i> Live Chat</a>
                    </div>
        
                </div>
            </div>
        </section>
    )
}

export default Getintouch;