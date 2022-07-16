import React from "react";
import { ItemList, NewItem } from "./components/Items";
import "./App.css";
import { TodoProvider } from './contexts/context'

console.log('TodoProvider', TodoProvider);

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <header className="App-header">
          <h2>🚀 ToDo App</h2>
          <NewItem />
          <ItemList />
        </header>
      </div>
    </TodoProvider>
  );
}

export default App;