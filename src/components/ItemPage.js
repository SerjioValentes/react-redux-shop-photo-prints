import React from "react";
import "../styles/style.css";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const ItemPage = () => {
    const products = useSelector(state => state.items.items);

    const {itemId} = useParams();

    return (
        <div className={"item-page-wrapper"}>
            {
                products.map((item) => {
                        if (item.id === Number(itemId)) {
                            return (
                                <div>
                                    <img className={"item-page__img"} src={item.src} alt={" "}/>
                                    <p className={"item-page-description"}>
                                        {item.description}
                                    </p>
                                    <div className={"item-page-description-size"}>
                                        <ul>
                                           <strong>Available print sizes:</strong>
                                            <li>30x40 cm</li>
                                            <li>60x50 cm</li>
                                            <li>( You can specify your size when ordering )</li>
                                            <li><br/></li>
                                            <li>*The order is sent in a tube, so you don't have to worry about the package</li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        }
                    }
                )}
            <div>
            </div>
        </div>
    )
}
export default ItemPage;
