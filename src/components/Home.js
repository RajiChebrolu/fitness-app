import React from "react";

function Home() {
    //This function shows an alert when user clicks on JOIN US button
    const handleClick = () => {
        alert("PLEASE CLICK CONTACT US PAGE TO JOIN WITH US!!!!!!!!!!!!")
    }
    return (
        //This function returns the banner image with text
        <div id='main'>
            <div className='header-heading'>
                <h2>STEP UP YOUR</h2>
                <h1><span>FITNESS</span> WITH US</h1>
                <p className='details'>Build your Body and Fitness with Professional Touch</p>
                <div className='header-btns'>
                    <button onClick={handleClick}>JOIN US</button>
                </div>
            </div>

        </div>

    )

}
export default Home;