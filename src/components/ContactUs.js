import React from "react";
//This function shows the contact page
function ContactUs() {
    //This function gives alert when clicks the SEND button
    const handleClick = () => {
        alert("Thank you. Our team will contact you soon!!!!!!")
    }
    //Return the contact form
    return (
        <div id="contact">
            <h1>ContactUs</h1>
            <form>
                <input type="text" placeholder="Fullname" required />
                <input type="email" placeholder="Email Address" required />
                <textarea placeholder="Write here..........." name="message"></textarea>
                <button onClick={handleClick}>SEND</button>
            </form>
            <p>Follow us on Facebook and Twitter.</p>
        </div>
    )

}
export default ContactUs;