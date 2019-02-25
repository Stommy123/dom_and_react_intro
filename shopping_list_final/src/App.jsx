import React from "react";
import { GlobalContextProvider } from "./context";
import Header from "./components/Header";
import ShoppingList from "./components/ShoppingList";
import ItemForm from "./components/ItemForm";

const App = _ => {
  return (
    <GlobalContextProvider>
      <Header />
      <ShoppingList />
      <ItemForm />
    </GlobalContextProvider>
  );
};

export default App;
