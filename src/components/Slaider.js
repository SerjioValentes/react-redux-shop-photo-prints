import React, {useState} from 'react';
import dataSlider from "./dataSlider";

function Slaider() {
    const [imgId, setImgId] = useState(0);

    const nextButton = () => {
        if (imgId < dataSlider.length - 1) setImgId(imgId + 1);
        else setImgId(0);
    }

    const prevButton = () => {
        if (imgId === 0) setImgId(3);
        if (imgId > 0) setImgId(imgId - 1);
    }

    return (
        <main>
            <div className={"slider-wrapper"}>
                <div className={"slider-wrapper-item"}>
                    <button onClick={() => prevButton()} className={"slider-wrapper-back"}>Back</button>
                    <img src={dataSlider[imgId].src} alt={" "} className={"slider-wrapper-img"}/>
                    <button onClick={() => nextButton()} className={"slider-wrapper-next"}>Next</button>
                </div>
            </div>
        </main>
    )
}

export default Slaider;
