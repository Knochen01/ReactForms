import React, { useState }  from 'react'
import Item from './Item'
import NewItemForm from './NewItemForm'
import { v4 as uuidv4 } from 'uuid'

const ShoppingList = () => {

    const INITIAL_STATE = [
        {id: uuidv4(),  name:"Peanut-Butter", qty: 2},
        {id: uuidv4(),  name:"Almond-Milk", qty: 1}
    ]

    const [items, setItems] = useState(INITIAL_STATE)
    const addItem = (newItem) => {
        setItems(items => [...items, {...newItem, id:uuidv4()}])
    }
    return (
        <div>
            <h3>ShoppingList</h3>
            < NewItemForm addItem={addItem} />
            {items.map(({id, name, qty}, idx) => <Item  id={id} name={name} qty={qty} key={id} /> )}
        </div>
    )
}
export default ShoppingList