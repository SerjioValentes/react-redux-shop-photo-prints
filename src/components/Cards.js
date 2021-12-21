import React from "react";
import "../styles/style.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Slaider from "./Slaider";


const CardLayout = () => {

    const products = useSelector(state => state.items.items)

    const data = products.map(item => (
        <div key={item.id} className={"card-list"}>
            <div className={"card-list__item"}>

                <img alt={" "} src={item.src} className={"card-list__item-img"}/>

                <div className={"card-list__description"}>

                    <p>{item.title}</p>

                    <Link className={"card-list__description-link"} to={"/" + item.id}>
                        Buy
                    </Link>
                </div>
            </div>
        </div>
    ))

    return (
        <div className="card-wrapper">
            <div>
                <div>
                    <Slaider/>
                </div>
                <div className={"card-wrapper__title"}>
                    <h3>Print on quality canvas</h3>
                </div>
            </div>
            {data}
        </div>
    )
}
export default CardLayout;
