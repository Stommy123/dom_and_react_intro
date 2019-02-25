import React from "react";
import { GlobalContextProvider } from "./context";
import Header from "./components/Header";
import ShoppingList from "./components/ShoppingList";
import ItemForm from "./components/ItemForm";

const App = _ => {
  return (
    <GlobalContextProvider>
      <div className="App">
        <Header />
        <ShoppingList />
        <ItemForm />
      </div>
    </GlobalContextProvider>
  );
};

export default App;
