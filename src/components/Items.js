import React, { useState } from "react";
// import { useTodoContext } from "../contexts/context";
import {useTodoContext} from "../contexts/context/TodoContext"
import { addTodo, removeTodo, clearAll } from "../contexts/context/TodoContext"

export function NewItem() {
  const [text, setText] = useState('');

  // Get the dispatcher from TodoContext
  const { dispatch } = useTodoContext();

  // const todoContext = useContext(TodoContext);

  // Dispatch addTodo action when adding a new item
  return (
    <div className="Item">
      <input
        type="text"
        placeholder="New Task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      {/* <button onClick={() => add(text)}>Add</button> */}
      <button onClick={() => dispatch(addTodo(text))}>Add</button>
    </div>
  );
}

export function ItemList() {
  const { items, dispatch } = useTodoContext();
  return (
    <>
      {items.map((item, i) => (
        <Item text={item} index={i} key={i} dispatch={dispatch} />
      ))}
      {items.length > 0 && (
        <p
          style={{ fontSize: "15px", cursor: "pointer" }}
          onClick={() => dispatch(clearAll())}
        >
          Clear All
        </p>
      )}
    </>
  );
  // return items.map((item, i) => <Item text={item} index={i} key={i} remove={remove} />);
}

export function Item({ text, index, dispatch }) {
  return (
    <div className="Item">
      {index + 1} {text}
      <span onClick={() => dispatch(removeTodo(index))}>Done</span>
    </div>
  );
}