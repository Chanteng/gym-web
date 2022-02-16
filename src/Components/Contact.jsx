import React from 'react'

function Contact() {
    return (
        <div id="contact">
            <h1>CONTACT US</h1>
            <form>
                <input type="text" placeholder='Full Name' required="required" />
                <input type="email" placeholder='Email' required="required" />
            <textarea placeholder="Please write Here......" name="message"></textarea>

            <input type="submit" value="Send " />

            </form>
        </div>
    )
}

export default Contact
