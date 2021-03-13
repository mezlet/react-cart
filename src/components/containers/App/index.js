import React from 'react';
import { AppProvider } from '../../../context/Provider';
import { Cart } from '../Cart';
function App() {
  return (
    <AppProvider>
      <Cart/>
    </AppProvider>
  );
}

export default App;
