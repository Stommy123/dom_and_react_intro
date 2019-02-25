import React, { useState } from "react";
import { initialState } from "../data";

export const GlobalContext = React.createContext({});

export const GlobalContextProvider = props => {
  const [shoppingList, setShoppingList] = useState(initialState.shoppingList);
  const addItem = item => {
    const newItem = {
      id: shoppingList.length,
      item,
      inCart: false
    };
    const newShoppingList = [...shoppingList, newItem];
    setShoppingList(newShoppingList);
  };
  const updateShoppingList = id => {
    const updatedShoppingList = shoppingList.map(item =>
      item.id === id ? { ...item, inCart: !item.inCart } : item
    );
    setShoppingList(updatedShoppingList);
  };
  const needToBuy = shoppingList.filter(item => !item.inCart);
  const inCart = shoppingList.filter(item => item.inCart);
  const itemValidation = shoppingList.map(e => e.item.toLowerCase());
  return (
    <GlobalContext.Provider
      value={{
        shoppingList,
        addItem,
        updateShoppingList,
        needToBuy,
        inCart,
        itemValidation
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
