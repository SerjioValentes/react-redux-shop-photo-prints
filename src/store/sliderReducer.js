import nature01 from "../images/nature01.jpg";
import nature02 from "../images/nature02.jpg";
import nature03 from "../images/nature03.jpg";
import nature04 from "../images/nature04.jpg";
import nature05 from "../images/nature05.jpg";
import nature06 from "../images/nature06.jpg";
import nature07 from "../images/nature07.jpg";
import nature08 from "../images/nature08.jpg";
import nature09 from "../images/nature09.jpg";
import nature10 from "../images/nature10.jpg";
import nature11 from "../images/nature11.jpg";
import nature12 from "../images/nature12.jpg";
import nature13 from "../images/nature13.jpg";
import nature14 from "../images/nature14.jpg";
import nature15 from "../images/nature15.jpg";
import nature16 from "../images/nature16.jpg";

const defaultState = {
    items: [
        {
            id: 1,
            src: nature01,
            title: "Argentina",
            description: "You can buy my photos easily - just send me a link or a screenshot of a picture in private messages"
        },
        {
            id: 2,
            src: nature02,
            title: "Himalayas. India",
            description: "You can buy my photos easily - just send me a link or a screenshot of a picture in private messages"
        },
        {
            id: 3,
            src: nature03,
            title: "India",
            description: "You can buy my photos easily - just send me a link or a screenshot of a picture in private messages"
        },
        {
            id: 4,
            src: nature04,
            title: "Peru",
            description: "You can buy my photos easily - just send me a link or a screenshot of a picture in private messages"
        },
        {
            id: 5,
            src: nature05,
            title: "Peru",
            description: "You can buy my photos easily - just send me a link or a screenshot of a picture in private messages"
        },
        {
            id: 6,
            src: nature06,
            title: "India",
            description: "You can buy my photos easily - just send me a link or a screenshot of a picture in private messages"
        },
        {
            id: 7,
            src: nature07,
            title: "Ecuador",
            description: "You can buy my photos easily - just send me a link or a screenshot of a picture in private messages"
        },
        {
            id: 8,
            src: nature08,
            title: "Peru",
            description: "You can buy my photos easily - just send me a link or a screenshot of a picture in private messages"
        },
        {
            id: 9,
            src: nature09,
            title: "Peru",
            description: "You can buy my photos easily - just send me a link or a screenshot of a picture in private messages"
        },
        {
            id: 10,
            src: nature10,
            title: "India",
            description: "You can buy my photos easily - just send me a link or a screenshot of a picture in private messages"
        },
        {
            id: 11,
            src: nature11,
            title: "India",
            description: "You can buy my photos easily - just send me a link or a screenshot of a picture in private messages"
        },
        {
            id: 12,
            src: nature12,
            title: "India",
            description: "You can buy my photos easily - just send me a link or a screenshot of a picture in private messages"
        },
        {
            id: 13,
            src: nature13,
            title: "India",
            description: "You can buy my photos easily - just send me a link or a screenshot of a picture in private messages"
        },
        {
            id: 14,
            src: nature14,
            title: "Russia. Altai",
            description: "You can buy my photos easily - just send me a link or a screenshot of a picture in private messages"
        },
        {
            id: 15,
            src: nature15,
            title: "India. Dharamsala",
            description: "You can buy my photos easily - just send me a link or a screenshot of a picture in private messages"
        },
        {
            id: 16,
            src: nature16,
            title: "Russia. Altai",
            description: "You can buy my photos easily - just send me a link or a screenshot of a picture in private messages"
        }
    ]
}

const ADD_ITEM = "ADD_ITEM"
const REMOVE_ITEM = "REMOVE_ITEM"

export const itemReducer = ((state = defaultState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {...state, items: [...state.items, action.payload]}
        case REMOVE_ITEM:
            return {...state, items: state.items.filter(item => item.id !== action.payload )}
        default:
            return state;
    }
})

