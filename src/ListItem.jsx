import React from 'react';

const ListItem = props => {

    const deleteListItem = () => {

        const copyLilistItemsArray = [...props.listItemsArray];

        copyLilistItemsArray.forEach((itemName, index, thisArray) => {

            const toFindKey = `${index}${itemName}`;

            if (toFindKey === props.copyKey) thisArray.splice(index, 1);

        });

        props.deleteItemHandler([...copyLilistItemsArray]);
    }

    return (
        <li className="mx-0 mb-4 toDoApp__list-item">

            <span>Buy {props.itemName}</span>

            <span onClick={deleteListItem}><i className="bi bi-trash"></i></span>
        </li>

    );
}

export default ListItem;