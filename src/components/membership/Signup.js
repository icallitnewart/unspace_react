function Signup() {
    return (
        <section className="signUp">   
            <div className="inner">
                <form action="/" method="post">
                <fieldset>
                    <legend className="hidden">Sign Up Form</legend>
                    <div className="content">
                        <div className="title">
                            <h1><span><span>Sign Up</span></span></h1>
                        </div>
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
                                            <input type="text" name="userid" id="userid" placeholder="ENTER YOUR USERNAME" required />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <label htmlFor="pwd1">
                                                PASSWORD
                                            </label>
                                        </th>
                                        <td>
                                            <input type="password" name="pwd1" id="pwd1" placeholder="ENTER YOUR PASSWORD" required />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <label htmlFor="pwd2">
                                                RE-PASSWORD
                                            </label>
                                        </th>
                                        <td>
                                            <input type="password" name="pwd2" id="pwd2" placeholder="RE-ENTER YOUR PASSWORD" required />
                                        </td>
                                    </tr>  
                                    <tr>
                                        <th scope="row">
                                            <label htmlFor="username">
                                                NAME
                                            </label>
                                        </th>
                                        <td>
                                            <input type="text" name="username" id="username" placeholder="ENTER YOUR FULL NAME" required />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                                HOBBY
                                        </th>
                                        <td className="check">
                                            <label htmlFor="reading">
                                                <input type="checkbox" value="reading" name="hobby" id="reading" />
                                                READING
                                            </label>
                                            <label htmlFor="sports">
                                                <input type="checkbox" value="sports" name="hobby" id="sports" />
                                                SPORTS
                                            </label>
                                            <label htmlFor="music">
                                                <input type="checkbox" value="music" name="hobby" id="music" />
                                                MUSIC
                                            </label>
                                            <label htmlFor="game">
                                                <input type="checkbox" value="game" name="hobby" id="game" />
                                                GAME
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <label htmlFor="comments">
                                                COMMENTS
                                            </label>
                                        </th>
                                        <td className="textArea">
                                            <textarea name="comments" id="comments"></textarea>
                                        </td>
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

export default Signup;