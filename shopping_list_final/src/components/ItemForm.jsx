import React, { useState, useContext } from "react";
import classNames from "classnames";
import { GlobalContext } from "../context";

const ItemForm = _ => {
  const { addItem, itemValidation } = useContext(GlobalContext);
  const [value, setValue] = useState(String());
  const handleSubmit = e => {
    e.preventDefault();
    addItem(value);
    setValue(String());
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Add an item to your shopping list"
        onChange={e => setValue(e.target.value)}
      />
      <input
        disabled={itemValidation.includes(value.toLowerCase())}
        className={classNames({
          disabled: itemValidation.includes(value.toLowerCase())
        })}
        value={
          itemValidation.includes(value.toLowerCase())
            ? "Item already on the List!"
            : "Add Item"
        }
        type="submit"
      />
    </form>
  );
};

export default ItemForm;
