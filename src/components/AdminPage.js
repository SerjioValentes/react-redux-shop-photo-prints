import React, {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "../styles/style.css";


function AdminPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [itemsList, setItemsList] = useState([]);
    const fileInput = useRef();

    const [isCorrect, setIsCorrect] = useState(false);
    const [secret, setSecret] = useState("");

    const dispatch = useDispatch();
    const products = useSelector(state => state.items.items);

    const addList = (e) => {
        const obj = {
            title,
            description,
            id: new Date(),
            src: URL.createObjectURL(fileInput.current.files[0]),
        }
        setItemsList(itemsList.concat(obj));
        setTitle("");
        setDescription("");
        dispatch({type: "ADD_ITEM" , payload: obj});
        e.preventDefault();
    }

    const checkSecretKey = () => {
        if (secret === "SecretCode"){
            setIsCorrect(true);
        }
    }

    const deleteItem = (id) => {
        dispatch({type: "REMOVE_ITEM", payload: id});
    }

    const data = products.map(item => (
        <div key={item.id} className={"card-list"}>
            <div className={"card-list__item"}>

                <img alt={" "} src={item.src} className={"card-list__item-img"}/>

                <div className={"card-list__description"}>

                    <p>{item.title}</p>

                    <button className={"card-list__delete-button"}
                        onClick={() => deleteItem(item.id)}
                    >Remove
                    </button>
                </div>
            </div>
        </div>
    ));

    return (
        // CHeck admin panel
        <main className={"admin-page-main"}>
            {
                isCorrect === false
                    ?
                    <div className={"secret-panel"}>
                        <h4 className={"secret-panel__title"}>Enter: SecretCode</h4>
                        <div className={"secret-panel__input-block"}>
                        <input className={"secret-panel__input"} onChange={(e) => { setSecret(e.target.value)}}/>
                        <button className={"secret-panel__button"} onClick={() => {
                            checkSecretKey()
                        }}>Login</button>
                        </div>
                    </div>
        //END Checking admin panel
                    :
        // Admin
                    <div>
                        <form className={"admin-page-form"}>
                            <div className={"admin-page-form__title"}>
                                <h4>Title:</h4>
                                <input value={title} onChange={(event) => setTitle(event.target.value)}/>
                            </div>

                            <div className={"admin-page-form__title"}>
                                <h4>Description:</h4>
                                <textarea value={description} onChange={(event) => setDescription(event.target.value)}/>
                            </div>

                            <div className={"admin-page-form__title"}>
                                <h4>Upload a photo:</h4>
                                <input className={"admin-page-form__file"} type={"file"} ref={fileInput} accept="image/*,image/jpeg"/>
                            </div>

                            <button className={"admin-page-form__send-button"}
                                onClick={(e) => {
                                addList(e)
                            }}>Send
                            </button>
                        </form>
        {/*//END Admin*/}
                        <section>
                            <div className={"card-wrapper"}>
                                {data}
                            </div>
                        </section>
                    </div>
            }
        </main>
    )
}

export default AdminPage;
