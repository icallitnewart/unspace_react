import { useState } from "react";

function Policy({ setIsAgreed }) {
    const initValue = {
        agree1: false,
        agree2: false
    };

    const [ checkbox, setCheckbox ] = useState(initValue);

    const handleCheck = (e)=> {
        const { name } = e.target;
        const isChecked = e.target.checked;

        setCheckbox({ ...checkbox, [name] : isChecked });
    };

    const handleSubmit = ()=> {
        if(!checkbox.agree1 || !checkbox.agree2) {
            alert("Please tick the checkbox to agree.");
        } else {
            setIsAgreed(true);
        }
    }

    return(
        <section className="policy">
            <div className="inner">         
                <div className="content">
                    <div className="title">
                        <h1><span><span>Terms & Policy</span></span></h1>
                    </div>
                    <div className="textBox">
                        <h2>
                            <label htmlFor="terms">Terms and Conditions</label>
                        </h2>
                        <textarea name="terms" id="terms" readOnly defaultValue={terms}>
                        </textarea>
                        <label htmlFor="agree1">
                            <input 
                                type="checkbox" 
                                name="agree1" 
                                id="agree1" 
                                onChange={handleCheck}
                            />
                            I have read, agree with, and accept all of the terms and conditions written above.
                        </label>
                        <h3>
                            <label htmlFor="policy"> Privacy Policy</label>
                        </h3>
                        <textarea name="policy" id="policy" readOnly defaultValue={policy}>
                        </textarea>
                        <label htmlFor="agree2">
                            <input 
                                type="checkbox" 
                                name="agree2" 
                                id="agree2" 
                                onChange={handleCheck}
                            />
                            I have read, agree with, and accept all of the privacy policies written above.
                        </label>
                    </div>
                    <div className="button">
                        <button className="agreeBtn" onClick={handleSubmit}>agree & proceed<i className="fa-solid fa-angles-right"></i></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Policy;


const terms = `Generic Terms and Conditions Template
Please read these terms and conditions ("terms and conditions", "terms") carefully before using [website] website (“website”, "service") operated by [name] ("us", 'we", "our").

Conditions of use
By using this website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to leave the website accordingly. [name] only grants use and access of this website, its products, and its services to those who have accepted its terms.

Privacy policy
Before you continue using our website, we advise you to read our privacy policy [link to privacy policy] regarding our user data collection. It will help you better understand our practices.

Age restriction
You must be at least 18 (eighteen) years of age before you can use this website. By using this website, you warrant that you are at least 18 years of age and you may legally adhere to this Agreement. [name] assumes no responsibility for liabilities related to age misrepresentation.

Intellectual property
You agree that all materials, products, and services provided on this website are the property of [name], its affiliates, directors, officers, employees, agents, suppliers, or licensors including all copyrights, trade secrets, trademarks, patents, and other intellectual property. You also agree that you will not reproduce or redistribute the [name]’s intellectual property in any way, including electronic, digital, or new trademark registrations.
You grant [name] a royalty-free and non-exclusive license to display, use, copy, transmit, and broadcast the content you upload and publish. For issues regarding intellectual property claims, you should contact the company in order to come to an agreement.

User accounts
As a user of this website, you may be asked to register with us and provide private information. You are responsible for ensuring the accuracy of this information, and you are responsible for maintaining the safety and security of your identifying information. You are also responsible for all activities that occur under your account or password.
If you think there are any possible issues regarding the security of your account on the website, inform us immediately so we may address them accordingly.
We reserve all rights to terminate accounts, edit or remove content and cancel orders at our sole discretion.

Applicable law
By visiting this website, you agree that the laws of the [location], without regard to principles of conflict laws, will govern these terms and conditions, or any dispute of any sort that might come between [name] and you, or its business partners and associates.

Disputes
Any dispute related in any way to your visit to this website or to products you purchase from us shall be arbitrated by state or federal court [location] and you consent to exclusive jurisdiction and venue of such courts.

Indemnification
You agree to indemnify [name] and its affiliates and hold [name] harmless against legal claims and demands that may arise from your use or misuse of our services. We reserve the right to select our own legal counsel. 

Limitation on liability
[name] is not liable for any damages that may occur to you as a result of your misuse of our website.
[name] reserves the right to edit, modify, and change this Agreement at any time. We shall let our users know of these changes through electronic mail. This Agreement is an understanding between [name] and the user, and this supersedes and replaces all prior agreements regarding the use of this website.`;

const policy = `Aliquam id quam sed tortor volutpat molestie vel ultrices ex. Suspendisse lectus neque, molestie eget risus interdum, vehicula dapibus ipsum. Vivamus eu diam lectus. Proin pulvinar mi in velit efficitur convallis. Nullam quis magna eu neque pellentesque porttitor. Etiam augue metus, auctor in commodo nec, porttitor a elit. Cras mattis pretium libero eu feugiat. Maecenas ornare erat posuere luctus ultrices. Aliquam nisl ligula, elementum eu convallis sit amet, pellentesque vitae mi. Sed eleifend ipsum non vulputate pulvinar. Nam porta nisi vel nibh viverra, at bibendum dui laoreet. Sed eu pulvinar enim. Mauris pulvinar vel purus sed dictum. Donec elementum justo euismod enim egestas pretium. Duis ac ipsum in mauris vehicula tempor sit amet ac magna.

Donec quis arcu venenatis, efficitur tortor nec, faucibus lorem. Mauris leo ipsum, aliquam ac sodales sed, interdum quis massa. Nullam convallis, sapien a finibus porttitor, diam metus hendrerit risus, nec venenatis libero tortor et leo. Fusce porttitor ullamcorper laoreet. Pellentesque euismod purus non placerat suscipit. Sed lobortis iaculis ligula, vel semper lectus venenatis a. Quisque laoreet sollicitudin feugiat. Proin eu condimentum leo. Morbi ipsum metus, aliquet nec ante quis, tempus dapibus felis. Fusce pellentesque tincidunt purus vel accumsan. Sed fermentum tincidunt blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec eget sem vel diam semper porta ultricies vehicula erat. Nulla nibh ipsum, vulputate vitae rutrum eget, pharetra eget est. Nulla eget nulla leo.

Sed non risus mollis, porttitor eros ut, luctus dui. Quisque vulputate ante enim, in vehicula turpis dictum sed. Curabitur eget odio semper, pharetra arcu ac, feugiat erat. Aliquam erat volutpat. Nullam egestas, enim ut viverra gravida, dui sem fermentum elit, vitae euismod justo urna non erat. Nam fringilla nunc quis justo mollis, eu vestibulum mauris auctor. Nunc congue ligula eget consequat tristique. Cras sem erat, finibus nec sagittis nec, pellentesque vel diam. Vivamus sit amet ante et sapien dictum ultricies quis sed sapien. Curabitur sit amet magna ac sapien porta sodales. Pellentesque rutrum nunc leo, nec laoreet turpis posuere eu. Sed porta diam ligula, feugiat accumsan quam dapibus sit amet.

Pellentesque in laoreet lacus. Cras quis rhoncus dolor. Vivamus faucibus tristique urna id congue. Fusce varius felis et magna rutrum tempus. Vestibulum faucibus fermentum nibh in aliquet. Duis pretium elit tellus. Integer consectetur, velit in luctus porta, enim quam blandit tortor, vel bibendum neque diam sed nibh. Etiam tincidunt faucibus lacinia. Phasellus eget venenatis lacus. Nunc est libero, lacinia consectetur feugiat vel, venenatis eu justo. In sed est magna. Aliquam convallis odio sit amet tortor dapibus consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam aliquam vehicula molestie.`;
