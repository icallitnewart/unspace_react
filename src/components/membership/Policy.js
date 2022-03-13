function Policy() {
    return(
        <section className="policy">
            <div className="inner">         
                <div className="content">
                    <div className="title">
                        <h1><span><span>Terms & Policy</span></span></h1>
                    </div>
                    <div className="textBox">
                        <h2>Terms and Conditions</h2>
                        <textarea name="terms" id="terms" readOnly defaultValue="
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo soluta excepturi iusto minus provident quis. Perspiciatis fugit aliquam laborum debitis quia cumque a asperiores nemo explicabo animi itaque quaerat odit, harum autem praesentium neque facilis sit nisi minus. Omnis autem repellendus animi excepturi, ullam eveniet ex, placeat perspiciatis iusto atque voluptatem! Eaque qui porro harum laborum quam numquam in. Perferendis ullam ab molestias dolorem quaerat dolore? Veritatis earum tempora ipsum sunt distinctio blanditiis cupiditate commodi sequi delectus veniam. Excepturi praesentium, quos expedita adipisci minus ad vel voluptatem, harum ut modi eaque ex facere qui. Voluptatem quo, iure accusamus nulla facere excepturi vero atque accusantium sit pariatur tempore ipsum minus cumque voluptate expedita neque quas a perspiciatis. Tempore, nostrum. Dolores beatae deleniti quaerat natus voluptate? Consequuntur debitis impedit nulla sunt similique necessitatibus velit, possimus vel, temporibus ipsam explicabo iusto optio exercitationem et rem corrupti fugiat, quasi iste nobis? Nostrum corporis dolorum atque quos vero quisquam culpa id in, incidunt ipsam nihil fuga ullam, fugit eveniet similique sapiente ipsum, laudantium recusandae officiis optio quam veniam mollitia! Laudantium quibusdam iusto nulla odio delectus consequuntur totam excepturi odit omnis amet id dolores officiis eius perferendis error similique alias ratione exercitationem voluptas possimus, tempore esse.
                        ">
                        </textarea>
                        <label htmlFor="agree1">
                            <input type="checkbox" name="agree1" id="agree1" />
                            I have read, agree with, and accept all of the terms and conditions written above.
                        </label>
        
                        <h3>Privacy Policy</h3>
                        <textarea name="terms" id="terms" readOnly defaultValue="
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo soluta excepturi iusto minus provident quis. Perspiciatis fugit aliquam laborum debitis quia cumque a asperiores nemo explicabo animi itaque quaerat odit, harum autem praesentium neque facilis sit nisi minus. Omnis autem repellendus animi excepturi, ullam eveniet ex, placeat perspiciatis iusto atque voluptatem! Eaque qui porro harum laborum quam numquam in. Perferendis ullam ab molestias dolorem quaerat dolore? Veritatis earum tempora ipsum sunt distinctio blanditiis cupiditate commodi sequi delectus veniam. Excepturi praesentium, quos expedita adipisci minus ad vel voluptatem, harum ut modi eaque ex facere qui. Voluptatem quo, iure accusamus nulla facere excepturi vero atque accusantium sit pariatur tempore ipsum minus cumque voluptate expedita neque quas a perspiciatis. Tempore, nostrum. Dolores beatae deleniti quaerat natus voluptate? Consequuntur debitis impedit nulla sunt similique necessitatibus velit, possimus vel, temporibus ipsam explicabo iusto optio exercitationem et rem corrupti fugiat, quasi iste nobis? Nostrum corporis dolorum atque quos vero quisquam culpa id in, incidunt ipsam nihil fuga ullam, fugit eveniet similique sapiente ipsum, laudantium recusandae officiis optio quam veniam mollitia! Laudantium quibusdam iusto nulla odio delectus consequuntur totam excepturi odit omnis amet id dolores officiis eius perferendis error similique alias ratione exercitationem voluptas possimus, tempore esse.
                        ">
                        </textarea>
                        <label htmlFor="agree2">
                            <input type="checkbox" name="agree2" id="agree2" />
                            I have read, agree with, and accept all of the privacy policies written above.
                        </label>
                    </div>
                </div>
                <div className="buttons">
                    <input type="reset" value="CANCEL" />
                    <input type="submit" value="SUBMIT" />
                </div>
            </div>
        </section>
    )
}

export default Policy;