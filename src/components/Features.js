import React from "react";
//Importes all SVG images here
import Featurebox from "./Featurebox";
import fimage1 from "../images/1.svg";
import fimage2 from "../images/2.svg";
import fimage3 from "../images/3.svg";
import fimage4 from "../images/4.svg";
//This function returns the page into 4 grids to display images
function Features() {
    return (
        <div id='features'>
            <h1>FEATURES</h1>
            <div className="a-container">
                <Featurebox image={fimage1} title="Weight Lifting" />
                <Featurebox image={fimage2} title="Specific Muscle" />
                <Featurebox image={fimage3} title="Flex Your Muscle" />
                <Featurebox image={fimage4} title="Cardio Excercise" />
            </div>

        </div>

    )

}
export default Features;