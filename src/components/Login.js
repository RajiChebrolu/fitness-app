import React from "react";

function Login() {
    //This shows an alert when user clicks the Submit button
    const handleClick = () => {
        alert("Thank you for Login. Please Explore the App!!!!!!")
    }
    return (
        //This is login page with a form
        <div id="login">
            <h1>LOGIN</h1>
            <form>
                <input type="email" placeholder="Email Address" required />
                <input type="password" placeholder="Password" />
                <button onClick={handleClick}>Submit</button>
            </form>
        </div>
    )

}
export default Login;