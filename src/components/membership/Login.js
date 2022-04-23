import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    const initValue = { 
        userid: "",
        password: ""
    };
    const [ inputs, setInputs ] = useState(initValue);

    const handleChange = (e)=> {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name] : value });
    };
    
    const handleCheck = (e)=> {
        const { name } = e.target;
        const isChecked = e.target.checked;
        setInputs({ ...inputs, [name] : isChecked });
    };

    return (
        <section className="login">
            <div className="inner">
                <form action="/" method="post" className="loginForm">
                    <h1>
                        <span>UNSPACE</span>
                    </h1>
                    <fieldset>
                        <legend className="hidden">
                            Login Form
                        </legend>
                        <table summary="User's id, password for login">
                            <caption className="hidden">Login Form</caption>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <label htmlFor="userid">USER ID</label>  
                                    </th>
                                    <td>
                                        <input 
                                            type="text"
                                            name="userid" 
                                            id="userid"
                                            onChange={handleChange}
                                            value={inputs.userid}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <label htmlFor="password">
                                        PASSWORD
                                        </label>
                                    </th>
                                    <td>
                                        <input 
                                            type="password" 
                                            name="password" 
                                            id="password"
                                            onChange={handleChange}
                                            value={inputs.password}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="remember">
                                            <input 
                                                type="checkbox" 
                                                name="remember" 
                                                id="remember" 
                                                onChange={handleCheck}
                                            /> 
                                            remember me
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <input 
                                            type="submit" 
                                            value="LOGIN"
                                            onClick={(e)=> e.preventDefault()}
                                        />
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </fieldset>
                    <p>
                        <a 
                            href="#"
                            onClick={(e)=> e.preventDefault()}
                        >Forgot your ID or password?</a>
                    </p>
                </form>
                <div className="banner">
                    <img src="img/login.jpg" alt="sign up photo" />
                    <div className="textBox">
                        <h2>Don't have an account yet?</h2>
                        <h3>Come Join Us!</h3>
                        <Link to="/membership/signup">SIGN UP</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login