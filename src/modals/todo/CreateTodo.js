import React, { useState, useEffect } from 'react';
import AddItemForm from '../../components/todo/AddItemForm';
import ItemList from '../../components/todo/ItemList';
const CreateTodo = () => {
   // const [checked, setChecked] = useState(false);
    const [items, setItems] = useState([]);
    const addItem = (item) => {
      setItems([...items, item]);
    };
  
    const removeItem = (itemToBeDeleted) => {
      setItems(items.filter((item) => itemToBeDeleted !== item));
    };
  
    useEffect(() => {
      const items = JSON.parse(localStorage.getItem('items'));
      if (items) {
        setItems(items);
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('items', JSON.stringify(items));
    }, [items]);
  
  

    return (
        <>
        
        <AddItemForm addItem={addItem} />
        <ItemList items={items} removeItem={removeItem} />
        </>
    );
};

export default CreateTodo;