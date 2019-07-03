import React, { useContext } from 'react';
import { GlobalContext } from '../context';

const Item = ({ symbol, status, item }) => {
  const { updateShoppingList } = useContext(GlobalContext);
  const classes = `item-action ${status}`;
  return (
    <div className="item">
      <span className="item-name">{item.item}</span>
      <button onClick={_ => updateShoppingList(item.id)} className={classes}>
        {symbol}
      </button>
    </div>
  );
};

export default Item;
