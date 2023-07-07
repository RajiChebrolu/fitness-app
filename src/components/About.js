import React from "react";
//Function to know about page 
function About() {
    //This function gives alert when button clicks
    const handleClick = () => {
        alert("Please visit www.google.com  !!!!!!!!!!!!!")
    }
    return (
        <div id="about">
            <div className="about-image">
                <img src="{about-image}" alt='' />
            </div>
            <div className="about-text">
                <p>NZ Fitness is an online fitness app through this everyone can get access to maintain their body and fitness by choosing how they want to be and allows users to join in their journey to reduce obesity. Obesity is one of the major problems in New Zealand and the third highest obesity rate in the OECD (The Organization for Economic Cooperation and Development). </p>
                <p>This is the scope of this total web application, and it help with exercise, other types of physical activities, nutrition and diet, and other ways to get fit. It provides personal account, setting goals, actual activity tracking, and social elements. This fitness app is an application that can be downloaded on any devices and used anywhere to get fit.</p>
                <h1>LEARN MORE ABOUT US</h1>
                <button onClick={handleClick}>READ MORE </button>
            </div>
        </div>
    )


}
export default About;