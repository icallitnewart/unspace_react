import { useEffect, useState, forwardRef } from "react";

function Getintouch({ scrollEffect }, ref) {
    const initValue = {
        username: "",
        phoneNum: "",
        email: "",
        enquiry: ""
    }
    const [ input, setInput ] = useState(initValue);
    const [ err, setErr ] = useState({});
    const [ isSubmit, setIsSubmit ] = useState(false);
    const [ success, setSuccess ] = useState(false);

    const handleChange = (e)=> {
        const { name, value } = e.target;
        setInput({ ...input, [name] : value });
    };

    //폼 유효성 검사
    const checkErr = (value)=> {
        let errs = {};
        const num = /^[0-9]+$/;

        if(!value.username || value.username.length < 4) {
            errs.username = "Please enter at least 4 letters of your name.";
        }
        if(!value.phoneNum || !num.test(value.phoneNum)) {
            errs.phoneNum = "Please enter numbers only.";
        }
        if(!value.email || !/@/.test(value.email) || !/[.]/.test(value.email)) {
            errs.email = "Please enter a correct email address.";
        }
        if(!value.enquiry || value.enquiry.length < 10) {
            errs.enquiry = "Please enter 10 letters at least.";
        }

        return errs;
    };

    const handleSubmit = (e)=> {
        e.preventDefault();
        setIsSubmit(true);
        setErr(checkErr(input));
    }

    useEffect(()=> {
        const len = Object.keys(err).length;

        (len === 0 && isSubmit) 
        ? setSuccess(true) 
        : setSuccess(false)
    }, [err]);

    return (
        <section className={scrollEffect ? `container getintouch ${scrollEffect}` : "container getintouch"} ref={ref}>
            <div className="inner">
                <div className="title">
                    <h1>Get in touch</h1>
                </div>
                {success 
                ?  <div className="success">
                        <span className="mailIcon"><i className="far fa-envelope"></i></span>
                        <h2>Thank you for leaving a message!</h2>
                        <div>
                            <i className="fa-solid fa-diamond"></i>
                            <i className="fa-solid fa-diamond"></i>
                            <i className="fa-solid fa-diamond"></i>
                        </div>
                        <p>Your interest in our company is greatly appreciated. We will contact you within 2-3 working days. If you wish to contact us faster, please make a call, visit us, or try live chat as indicated on the right side.</p>
                    </div>
                :   <form action="/" method="post" className="contactForm" onSubmit={handleSubmit}>
                        <h2><span>Leave us a message</span></h2>
                        <fieldset>
                            <legend className="hidden">Contact Us Form</legend>
                            <table summary="Customer's name, phone number, email, enquiry">
                                <caption className="hidden">Contact Us Form</caption>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <label htmlFor="username">Name</label>
                                            {err.username && 
                                                <p className="errMsg">{err.username}
                                                </p>
                                            }
                                        </th>
                                        <td>
                                            <input 
                                                type="text" 
                                                name="username" 
                                                id="username" 
                                                placeholder="Your Name (at least 4 letters)"
                                                onChange={handleChange}
                                                defaultValue={input.username}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <label htmlFor="phoneNum">Phone Number</label>{err.phoneNum && 
                                                <p className="errMsg">{err.phoneNum}
                                                </p>
                                            }
                                        </th>
                                        <td>
                                            <input 
                                                type="text" 
                                                name="phoneNum" 
                                                id="phoneNum" 
                                                placeholder="Your Phone Number (number only)" 
                                                onChange={handleChange}
                                                defaultValue={input.phoneNum}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <label htmlFor="email">E-mail</label>
                                            {err.email && 
                                                <p className="errMsg">{err.email}
                                                </p>
                                            }
                                        </th>
                                        <td>
                                            <input 
                                                type="text" 
                                                name="email" 
                                                id="email" 
                                                placeholder="Your Email Address" 
                                                onChange={handleChange}
                                                defaultValue={input.email}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <label htmlFor="enquiry">Enquiry</label>
                                            {err.enquiry && 
                                                <p className="errMsg">{err.enquiry}
                                                </p>
                                            }
                                        </th>
                                        <td>
                                            <textarea 
                                                name="enquiry" 
                                                id="enquiry" 
                                                placeholder="What are your enquiries? (at least 10 letters)"
                                                onChange={handleChange}
                                                defaultValue={input.enquiry}
                                            ></textarea>
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
                }
                <div className="contactDetail">
                    <div>
                        <h3>Call Us</h3>
                        <p>Our opening hours are from 10.00 am to 6.00 pm (MON - FRI).</p>
                        <a href="#" onClick={(e)=> e.preventDefault()}><i className="fas fa-phone-alt"></i> +333 3333 3333</a>
                    </div>
                    <div>
                        <h4>Visit Us</h4>
                        <p>You can find where we are located on the map if you click on the below. Please make sure to call us for making a reservation with us.</p>
                        <a href="#" onClick={(e)=> e.preventDefault()}><i className="fas fa-map-marker-alt"></i> See Map</a>
                    </div>
                    <div>
                        <h5>Live Chat</h5>
                        <p>Got any questions? Just talk to us on a live chat during 10.00 am - 6.00 pm!</p>
                        <a href="#" onClick={(e)=> e.preventDefault()}><i className="far fa-comments"></i> Live Chat</a>
                    </div>
        
                </div>
            </div>
        </section>
    )
}

export default forwardRef(Getintouch);