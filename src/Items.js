import React from "react";
import { useDispatch } from "react-redux";

function Items() {
  const dispatch = useDispatch();

  function addItem() {
    dispatch({ type: "ADD_ITEM" });
  }
  function removeItem() {
    dispatch({ type: "REMOVE_ITEM" });
  }

  return (
    <div>
      <h1>Item component</h1>
      <button onClick={addItem}>Add Item</button>
      <button onClick={removeItem}>Remove Item</button>
    </div>
  );
}
export default Items;
