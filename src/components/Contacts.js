import React from "react";
import insta from "../png-logos/insta-logo.png";
import vk from "../png-logos/vk-logo.png";
import telegram from "../png-logos/telegram-logo.png";
import "../styles/style.css";

function Contacts() {
    return (
        <div>
            <div className={"contact__title"}>
                <h4>Contacts:</h4>
                <hr/>
                <p>
                    My past is mistery.. And often looking back into the abyss of my consciousness, I try to understand - what
                    has happened to me in the last 10 years.
                    Photography, teaching, traveling. Conscious and not particularly conscious lifestyle
                    life. Basically, if you look through Instagram, you can look into the depths of my mind ..
                </p>
            </div>
            <div className={"contact"}>

                <div className="contact__item">
                    <a href="https://instagram.com/vasilkamalov"><img src={insta} alt=""/></a>
                </div>

                <div className="contact__item">
                    <a href="https://t.me/Vasilkamalov"><img src={telegram} alt=" "/></a>
                </div>

                <div className="contact__item">
                    <a href="https://vk.com/vasilkamalov"><img src={vk} alt=" "/></a>
                </div>
            </div>
        </div>
    )
}

export default Contacts;
