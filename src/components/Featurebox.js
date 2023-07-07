import React from "react";
//This function returns 4SVG images along with text
function Featurebox(props) {
    const handleClick = () => {
        alert("Thank you for choosing this feature!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!. My team will contact you soon!!!!!!!!!!!!!!!")
    }
    return (
        <div className="a-box">
            <div class="a-b-img">
                <img src={props.image} alt='' />
            </div>
            <div className="a-b-text">
                <h2 onClick={handleClick}>{props.title}</h2>
                <p>There is no one who loves pain, who seeks after it, wants to have it simply because it is pain.</p>

            </div>
        </div>
    )
}
export default Featurebox;