import React, { useState } from 'react';
import ListItem from './ListItem';
import backgroundImg from './images/background.svg';

const ToDoListApp = () => {

    const [itemName, setItemName] = useState("");
    const [listItems, setListItems] = useState([]);

    const handleFormInput = e => {
        const { target: { value } } = e;
        setItemName(value);
    }

    // + button click
    const handleFormSubmit = e => {
        e.preventDefault();
        setListItems([...listItems, itemName.toLowerCase()]);
        setItemName("");
    }

    return (

        <section className="toDoApp__container">

            <h1 className="page-hero-heading">The TODoList<br />React App</h1>
            <img className="page-hero-img" src={backgroundImg} alt="background img not available" />

            <div className="toDoApp__wrapper">
                <h1>ToDo List</h1>

                <form onSubmit={handleFormSubmit} className="toDoApp__flex-container">
                    <input onChange={handleFormInput} value={itemName} type="text" name="" id="" placeholder="Add an item" />
                    <button type="submit"><i className="bi bi-plus-circle-fill"></i></button>
                </form>

                <ol className="toDoApp__list-item-container">
                    {
                        listItems.map((listItemName, index, thisArray) => {

                            let itemKey = `${index}${listItemName}`;

                            return <ListItem key={itemKey} copyKey={itemKey} itemName={listItemName} deleteItemHandler={setListItems} listItemsArray={thisArray} />
                        })
                    }
                </ol>

            </div>

        </section>

    );
}

export default ToDoListApp;