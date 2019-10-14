import React from 'react'

const Contact = () => {
    return (
        <div>
            <h1>Contact Page</h1>
            <p>If you like this page or have criticisms or critiques please reach me at</p>
            <form action="submit">
                <label htmlFor="Contact Form">
                    Email: 
                    <input type="text"/>
                </label>
            </form>
        </div>
    )
}

export default Contact;
