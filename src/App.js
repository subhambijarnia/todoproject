import React from "react";
// import { ItemList, NewItem } from "./components/Items";
import "./App.css";
import ToDoPage from "./pages/todoPages";
// import { TodoProvider } from './contexts/context'

// console.log('TodoProvider------', TodoProvider);

function App() {
  return (
    // <TodoProvider>
    //   <div className="App">
    //     <header className="App-header">
    //       <h2>🚀 ToDo App</h2>
    //       <NewItem />
    //       <ItemList />
    //     </header>
    //   </div>
    // </TodoProvider>
    <ToDoPage />
  );
}

export default App;