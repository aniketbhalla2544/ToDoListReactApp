import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListItem = ({ id, itemName, deleteItemHandler }) => {

    return (
        <li className="mx-0 mb-4 toDoApp__list-item">

            <span>Buy {itemName}</span>

            <span onClick={() => { deleteItemHandler(id) }}><i className="bi bi-trash"></i></span>
        </li>

    );
}

export default ListItem;