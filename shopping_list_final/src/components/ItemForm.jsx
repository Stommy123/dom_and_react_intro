import React, { useState, useContext } from 'react';
import classNames from 'classnames';
import { GlobalContext } from '../context';

const ItemForm = _ => {
  const { addItem, itemValidation } = useContext(GlobalContext);
  const [value, setValue] = useState(String());
  const handleSubmit = e => {
    e.preventDefault();
    addItem(value);
    setValue(String());
  };
  const isDuplicate = itemValidation.includes(value.toLowerCase());
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Add an item to your shopping list"
        onChange={e => setValue(e.target.value)}
      />
      <input
        disabled={isDuplicate}
        className={classNames({
          disabled: isDuplicate
        })}
        value={isDuplicate ? 'Item already on the List!' : 'Add Item'}
        type="submit"
      />
    </form>
  );
};

export default ItemForm;
