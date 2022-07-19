import React, { useState } from "react";
import { useTodoContext } from "../contexts/context/TodoContext"
import { addTodo, removeTodo, clearAll } from "../contexts/context/TodoContext"

export function NewItem() {
  const [text, setText] = useState('');

  // Get the dispatcher from TodoContext
  const { dispatch } = useTodoContext();


  // Dispatch addTodo action when adding a new item
  return (
    <div className="Item">
      <input
        type="text"
        placeholder="New Task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => dispatch(addTodo(text))}>Add</button>
    </div>
  );
}

export function ItemList() {
  const { items, dispatch } = useTodoContext();
  return (
    <>
      {console.log('items------====', items)}
      {items.map((item, i) => (

        <Item title={item.title} discription={item.discription} index={i} key={i} dispatch={dispatch} />
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
}

export function Item({ title, discription, index, dispatch }) {
  return (
    <div className="Item">
      <div className="ItemTodo">
        <div className="ItemTodoInner">
          <div className='Title'>{index + 1} {title}</div>
          <div className='Discription'> {discription}</div>
        </div>
        <span onClick={() => dispatch(removeTodo(index))}>Done</span>
      </div>
      <div className='Assign'>Assign</div>
      <div className='Complete'>Complete</div>
    </div>
  );
}