import { useState } from "react";
import SignupForm from "./SignupForm";
import Policy from "./Policy";

function Signup() {
    const [ isAgreed, setIsAgreed ] = useState(false);

    return (
        <>
        {isAgreed 
        ?   <SignupForm />
        :   <Policy setIsAgreed={setIsAgreed} />
        }
        </>
    )

}

export default Signup;