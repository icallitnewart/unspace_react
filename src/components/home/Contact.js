import { useState, useEffect } from "react";

function Contact() {
    const initValue = {
        username: "",
        email: "",
        enquiry: ""
    };
    const [ inputs, setInputs ] = useState(initValue);
    const [ errors, setErrors ] = useState(initValue);
    const [ isSubmit, setIsSubmit ] = useState(false);
    const [ success, setSuccess ] = useState(false);

    const handleChange = (e)=> {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name] : value });
    };
    
    const checkErr = (value)=> {
        let errs = {};

        if(!value.username) {
            errs.username = "Please fill in your name";
        }
        if(!value.email || !/@/.test(value.email) || !/[.]/.test(value.email) ) {
            errs.email = "Please enter a proper email address";
        }
        if(!value.enquiry) {
            errs.enquiry = "Please enter your enquiry";
        }

        return errs;
    };

    const handleSubmit = (e)=> {
        e.preventDefault();

        setIsSubmit(true);
        setErrors(checkErr(inputs));
    };

    useEffect(()=> {
        const len = Object.keys(errors).length;

        (len === 0 && isSubmit)
        && setSuccess(true);
    }, [errors]);

    return (
        <div className="contact">
        {success
        ?   <div className="success">
                <span><i className="fa-solid fa-envelope-open-text"></i></span>
                <h2>Your enquiry has been submitted successfully. It will be replied within 2-3 working days. Thanks for your interest in our company!</h2>
            </div>
        :   <form action="" className="contactForm" onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <label htmlFor="username">Name</label>
                                {errors.username && <span>{errors.username}</span>}
                            </th>
                            <td>
                                <input 
                                    type="text" 
                                    name="username"
                                    id="username"
                                    placeholder="Your Name"
                                    onChange={handleChange}
                                    defaultValue={inputs.username}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label htmlFor="email">Email</label>
                                {errors.email && <span>{errors.email}</span>}
                            </th>
                            <td>
                                <input 
                                    type="text" 
                                    name="email"
                                    id="email"
                                    placeholder="Your Email Address"
                                    onChange={handleChange}
                                    defaultValue={inputs.email}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label htmlFor="enquiry">Enquiry</label>
                                {errors.enquiry && <span>{errors.enquiry}</span>}
                            </th>
                            <td>
                                <textarea
                                    name="enquiry"
                                    id="enquiry"
                                    placeholder="Your Enquiry"
                                    onChange={handleChange}
                                    defaultValue={inputs.enquiry}
                                />
                            </td>
                        </tr>
                        <tr className="btn">
                            <th>
                                <input  
                                    type="submit" 
                                    value="SEND"
                                />
                            </th>
                        </tr>
                    </tbody>
                </table>
            </form>
        }
        </div>
    )
};

export default Contact;