import React, { useState, useEffect } from 'react';
import localStorage from 'localStorage';
import ListItem from './ListItem';
import backgroundImg from './images/background.svg';

const ToDoListApp = () => {

    const [item, setItem] = useState(
        {
            id: "",
            itemName: "",
        }
    );

    const [listItems, setListItems] = useState(JSON.parse(localStorage.getItem('listItems')));

    const handleFormInput = e => {

        let { name, value } = e.target;

        value = value.trim();

        setItem(prevItemState => { return { ...prevItemState, [name]: value, } });
    }

    // + button click
    const handleFormSubmit = e => {
        e.preventDefault();
        setListItems([...listItems, item]);
        setItem({ id: "", itemName: "", });
    }

    const deleteItemHandler = (itemId) => {
        setListItems(prevListItems => {
            return prevListItems.filter((item) => {
                return item.id !== itemId
            });
        });
    };

    useEffect(() => localStorage.setItem('listItems', JSON.stringify(listItems)), [listItems]);

    // printing borwser stored data
    useEffect(() => console.log(JSON.parse(localStorage.getItem('listItems'))), [listItems]);

    // getting local storage length
    // useEffect(() => console.log(localStorage.length), [listItems]);

    return (
        <section className="toDoApp__container">

            <h1 className="page-hero-heading">The TODoList<br />React App</h1>
            <img className="page-hero-img" src={backgroundImg} alt="background img not available" />

            <div className="toDoApp__wrapper">
                <h1>ToDo List</h1>

                <form onSubmit={handleFormSubmit} className="toDoApp__flex-container">
                    <input onChange={handleFormInput} value={item.itemName} type="text" name="itemName" placeholder="Add an item" />
                    <button type="submit"><i className="bi bi-plus-circle-fill"></i></button>
                </form>

                <ol className="toDoApp__list-item-container">
                    {
                        listItems.map((item, index) => {

                            item.id = `${index}${item.itemName.split(" ").join("")}`;

                            let { id, itemName } = item;

                            return <ListItem key={id} id={id} itemName={itemName} deleteItemHandler={deleteItemHandler} />
                        })
                    }
                </ol>
            </div>
        </section>
    );
}
export default ToDoListApp;