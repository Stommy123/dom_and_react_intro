import React from 'react';
import { GlobalContextProvider } from './context';
import { Header, ShoppingList, ItemForm } from './components';

const App = _ => (
  <GlobalContextProvider>
    <div className="App">
      <Header />
      <ShoppingList />
      <ItemForm />
    </div>
  </GlobalContextProvider>
);

export default App;
