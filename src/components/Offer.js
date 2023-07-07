import React from "react";

function Offer() {
    //This function shows an alert when user clicks JOIN NOW button
    const handleClick = () => {
        alert("Thank you for Joining with us.!!!!!!!!!!!!")
    }
    return (
        //This function dispays an image and text
        <div id="presentaion">
            <div className="pr-heading">
                <h1>A BIG <span>OFFER</span> FOR THIS SUMMER</h1>
                <h1>Nutritionist and Free DIET charts available for free</h1>
                <div className="pr-btns">
                    <button onClick={handleClick}>JOIN NOW</button>
                </div>
            </div>

        </div>
    )
}
export default Offer;