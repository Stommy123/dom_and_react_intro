import React, { useContext } from "react";
import { GlobalContext } from "../context";
import ItemHeader from "./ItemHeader";
import Item from "./Item";

const ShoppingList = _ => {
  const { needToBuy, inCart } = useContext(GlobalContext);
  return (
    <div className="shopping-list">
      <div className="to-buy">
        <ItemHeader title="Need To Buy" />
        {needToBuy.map(item => (
          <Item symbol="+" status="add" item={item} key={item.id} />
        ))}
      </div>
      <div className="cart">
        <ItemHeader title="In Cart" />
        {inCart.map(item => (
          <Item symbol="-" status="remove" item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;
