import React from 'react'
import TodoActivity from '../../components/todoActivity'
import './index.scss'


const data = {
  TODO:[
    {title:'task1', description:'sdfsdfa d ds fsdf'},
    {title:'todotask1', description:'todo d ds fsdf'}
  ],
  INPROGRESS:[{title:'task2', description:'sdfsdfa d ds fsdf'}],
  COMPLETE:[{title:'task3', description:'sdfsdfa d ds fsdf'}]

}


function ToDoPage() {
  const taskKeys = Object.keys(data);
  console.log('taskKeys=======', taskKeys);
  return (
    <div className='main-todo-container'>

      <div className='todo-header'>
        todo-header
      </div>

      <div className='todo-inner-container'>
        
        {taskKeys.map(key =>(
          <TodoActivity  title={key}  tasks={data[key]} />
        ))}
        
      </div>
    </div>
  )
}

export default ToDoPage