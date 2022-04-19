import { forwardRef, useEffect, useState } from "react";

function Subscribe({ scrollEffect }, ref) {
    const [ text, setText ] = useState({ email: "" });
    const [ isSubmit, setIsSubmit ] = useState(false);
    const [ error, setError ] = useState({});

    const handleChange = (e)=> {
        const { name, value } = e.target;
        setText({ ...text, [name] : value  });
    };

    const checkErr = (value)=> {
        let err = {};
        
        if(value.email.length===0) {
            err.email = "Please enter your email address.";
        } 
        else if(!/@/.test(value.email) || !/[.]/.test(value.email)) {
            err.email = "Please enter a proper email address.";
        } 

        return err;
    };

    const handleSubmit = ()=> {
        setIsSubmit(true);
        setError(checkErr(text));
    };

    useEffect(()=> {
        const len = Object.keys(error).length;

        if(isSubmit) {
            (len===0)
            ? alert("Thanks for subscribing!")
            : alert(error.email);
        }
    }, [error]);

    return (
        <section id="subscribe" className={scrollEffect} ref={ref}>
            <div className="inner">
                <h1>SUBSCRIBE</h1>
                <h2>Don't miss out the latest trends!</h2>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    onChange={handleChange}
                    value={text.email}
                    placeholder="Please Enter Your Email" 
                />
                <button onClick={handleSubmit}>SUBSCRIBE</button>
            </div>
        </section>
    )
}

export default forwardRef(Subscribe);