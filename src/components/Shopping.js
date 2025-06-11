"use client";

import styles from "./Shopping.module.css";
import { useState } from "react";


export default function ShoppingApp() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [changedItem, setChangedItem] = useState("");
  const [itemIndex, setItemIndex] = useState();

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const removeItem = (indexToRemove) => {
    setItems((prevItems) =>
      prevItems.filter((_, index) => index != indexToRemove)
    );
  };

  const updateItem = () => {
    if (changedItem.trim()) {
      setItems((prevItems) => {
        return prevItems.map((item, index) =>
          index == itemIndex ? changedItem : item
        );
      });
      setChangedItem(null);
      setItemIndex(null);
    }
  };

  console.log('changedItem: ', changedItem);
  console.log('itemIndex', itemIndex)

  return (
    <div className={styles.container}>
      {/* Item Input to add new item */}
      <div>
        <input
          className={styles.itemInput}
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className={styles.addItemBtn} type="button" onClick={addItem}>
          Add Item
        </button>
      </div>
      {/* Item Input to Updat a Item */}
      {itemIndex != null || itemIndex != undefined ? (
        <div style={{ marginTop: 10 }}>
          <input
            className={styles.itemInput}
            value={changedItem}
            onChange={(e) => setChangedItem(e.target.value)}
          />
          <button
            className={styles.updateItemBtn}
            type="button"
            onClick={updateItem}
          >
            Update Item
          </button>
          <button
            className={styles.cancelBtn}
            onClick={() => {
              setItemIndex(null);
              setChangedItem(null);
            }}
          >
            Cancel
          </button>
        </div>
      ) : null}
      {/* Item List */}
      <ul className={styles.itemList}>
        {items.length > 0 ? (
          items.map((item, index) => (
            <li key={index} className={styles.listItem}>
              <span className={styles.itemName}>{item}</span>
              <button
                className={styles.editBtn}
                onClick={() => {
                  setItemIndex(index);
                  setChangedItem(item);
                }}
              >
                Edit
              </button>
              <button
                className={styles.removeBtn}
                onClick={() => removeItem(index)}
              >
                Remove
              </button>
            </li>
          ))
        ) : (
          <li>No items available</li>
        )}
      </ul>
    </div>
  );
}
