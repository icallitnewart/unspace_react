import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function SignupForm() {
    const history = useHistory();
    const initValue = {
        userid: "",
        pwd1: "",
        pwd2: "",
        username: "",
        email: "",
        phNum: "",
        interests: false,
        comments: ""
    };

    const [ inputs, setInputs ] = useState(initValue);
    const [ errors, setErrors ] = useState({});
    const [ isSubmit, setIsSubmit ] = useState(false);
    const [ success, setSuccess ] = useState(false);

    const handleChange = (e)=> {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name] : value });
    };

    const handleCheck = (e)=> {
        const { name } = e.target;
        const isChecked = e.target.checked;
        setInputs({ ...inputs, [name] : isChecked });
    };

    const checkErr = (value)=> {
        let errs = {};
        const eng = /[a-zA-Z]/;
        const num = /[0-9]/;
        const numOnly = /^[0-9]+$/;
        const spc = /[!@#$%^&*]/;

        if(!value.userid || value.userid.length < 6) {
            errs.userid = "Please enter more than 5 letters for user ID.";
        }
        if(!value.pwd1 || 
            value.pwd1.length < 9 || 
            !num.test(value.pwd1) ||
            !eng.test(value.pwd1) ||
            !spc.test(value.pwd1) 
        ) {
            errs.pwd1 = "Please enter more than 8 letters including english, number and special symbols for your password.";
        }
        if(!value.pwd2 || value.pwd2 !== value.pwd1) {
            errs.pwd2 = "Please enter the same password again.";
        }
        if(!value.username || value.username.length < 4) {
            errs.username = "Please enter at least 4 letters for your name.";
        }
        if(!value.email || !/@/.test(value.email) || !/[.]/.test(value.email)) {
            errs.email = "Please enter a proper email address.";
        }
        if(!value.phNum || !numOnly.test(value.phNum)) {
            errs.phNum = "Please enter only numbers for your phone number";
        }
        if(!value.interests) {
            errs.interests = "Please check at least one type for your preferrable style.";
        }
        if(!value.comments) {
            errs.comments = "Please write your enquiry.";
        }

        return errs;
    };

    const handleSubmit = (e)=> {
        e.preventDefault();

        setErrors(checkErr(inputs));
        setIsSubmit(true);
    };

    const handleReset = (e)=> {
        e.preventDefault();

        setInputs(initValue);
    }

    useEffect(()=> {
        const len = Object.keys(errors).length;

        (len === 0 && isSubmit) 
        ? setSuccess(true) 
        : setSuccess(false);
    }, [errors]);

    useEffect(()=> {
        if(success) {
            alert("Your sign up has been completed successfully! Please login.");
            history.push('/membership/login');
        }
    }, [success]);
    
    return (
        <section className="signUp">   
            <div className="inner">
                <form 
                    action="/" 
                    method="post" 
                    onSubmit={handleSubmit}
                    onReset={handleReset}
                >
                <fieldset>
                    <legend className="hidden">Sign Up Form</legend>
                    <div className="content">
                        <div className="textBox">
                            <h2>Member Information</h2>
                            <table summary="User's ID, password, gender, hobby, address, email form">
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <label htmlFor="userid">
                                                ID
                                            </label>
                                        </th>
                                        <td>
                                            <input 
                                                type="text" 
                                                name="userid" 
                                                id="userid" 
                                                placeholder="5 LETTERS AT MINIMUM"
                                                onChange={handleChange}
                                                value={inputs.userid}
                                            />
                                            {errors.userid &&
                                                <p className="errMsg">
                                                    {errors.userid}
                                                </p>
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <label htmlFor="pwd1">
                                                PASSWORD
                                            </label>
                                        </th>
                                        <td>
                                            <input 
                                                type="password" 
                                                name="pwd1" 
                                                id="pwd1" 
                                                placeholder="8 LETTERS AT MINIMUM (ENGLISH, NUMBER, SPECIAL SYMBOL)"  
                                                onChange={handleChange}
                                                value={inputs.pwd1}
                                            />
                                            {errors.pwd1 &&
                                                <p className="errMsg">
                                                    {errors.pwd1}
                                                </p>
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <label htmlFor="pwd2">
                                                RE-PASSWORD
                                            </label>
                                        </th>
                                        <td>
                                            <input 
                                                type="password" 
                                                name="pwd2" 
                                                id="pwd2" 
                                                placeholder="SAME PASSWORD AS ABOVE"  
                                                onChange={handleChange}
                                                value={inputs.pwd2}
                                            />
                                            {errors.pwd2 &&
                                                <p className="errMsg">
                                                    {errors.pwd2}
                                                </p>
                                            }
                                        </td>
                                    </tr>  
                                    <tr>
                                        <th scope="row">
                                            <label htmlFor="username">
                                                NAME
                                            </label>
                                        </th>
                                        <td>
                                            <input 
                                                type="text" 
                                                name="username" 
                                                id="username" 
                                                placeholder="4 LETTERS AT MINIMUM"  
                                                onChange={handleChange}
                                                value={inputs.username}
                                            />
                                            {errors.username &&
                                                <p className="errMsg">
                                                    {errors.username}
                                                </p>
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <label htmlFor="email">
                                                EMAIL
                                            </label>
                                        </th>
                                        <td>
                                            <input 
                                                type="text" 
                                                name="email" 
                                                id="email" 
                                                placeholder="FULL EMAIL ADDRESS"
                                                onChange={handleChange}
                                                value={inputs.email}  
                                            />
                                            {errors.email &&
                                                <p className="errMsg">
                                                    {errors.email}
                                                </p>
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <label htmlFor="phNum">
                                                PHONE NUMBER
                                            </label>
                                        </th>
                                        <td>
                                            <input 
                                                type="text" 
                                                name="phNum" 
                                                id="phNum" 
                                                placeholder=" NUMBERS ONLY"  
                                                onChange={handleChange}
                                                value={inputs.phNum}
                                            />
                                            {errors.phNum &&
                                                <p className="errMsg">
                                                    {errors.phNum}
                                                </p>
                                            }
                                        </td>
                                    </tr>
                                    <tr className="check">
                                        <th scope="row">
                                            <span>INTERESTS</span>
                                        </th>
                                        <td>
                                            <div>
                                            <label htmlFor="modern">
                                                <input 
                                                    type="checkbox" 
                                                    value="modern" 
                                                    name="interests" 
                                                    id="modern" 
                                                    onChange={handleCheck}
                                                />
                                                MODERN
                                            </label>
                                            <label htmlFor="mid-century">
                                                <input 
                                                    type="checkbox" 
                                                    value="mid-century"
                                                    name="interests" 
                                                    id="mid-century" 
                                                    onChange={handleCheck}
                                                />
                                                MID-CENTURY
                                            </label>
                                            <label htmlFor="contemporary">
                                                <input 
                                                    type="checkbox" 
                                                    value="contemporary" 
                                                    name="interests" 
                                                    id="contemporary" 
                                                    onChange={handleCheck}
                                                />
                                                CONTEMPORARY
                                            </label>
                                            <label htmlFor="minimalist">
                                                <input 
                                                    type="checkbox" 
                                                    value="minimalist" 
                                                    name="interests" 
                                                    id="minimalist" 
                                                    onChange={handleCheck}
                                                />
                                                MINIMALIST
                                            </label>
                                            </div>
                                            {errors.interests &&
                                                <p className="errMsg">
                                                    {errors.interests}
                                                </p>
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <label htmlFor="comments">
                                                COMMENTS
                                            </label>
                                        </th>
                                        <td className="textArea">
                                            <textarea 
                                                name="comments" 
                                                id="comments"
                                                onChange={handleChange}
                                                value={inputs.comments}
                                                placeholder="LEAVE COMMENTS FOR ENQUIRY"
                                            ></textarea>
                                            {errors.comments &&
                                                <p className="errMsg">
                                                    {errors.comments}
                                                </p>
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" colSpan="2" className="buttons">
                                            <input 
                                                type="reset" 
                                                value="CANCEL" 
                                            />
                                            <input 
                                                type="submit" 
                                                value="SUBMIT" 
                                            />
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </fieldset>
                </form>
            </div>
        </section>
    )
}

export default SignupForm;