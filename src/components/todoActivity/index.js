import React, { useEffect, useState } from 'react'
import Task from '../task'
import './index.scss'

const TodoActivity = ({ title, tasks }) => {
  const [backColor, setBackColor] = useState('#BDC3C7')

  useEffect(() => {
    if (title === 'TODO') {
      setBackColor('#BDC3C7')
    }
    else if (title === 'INPROGRESS') {
      setBackColor('#27AE60')
    }
    else if (title === 'COMPLETE') {
      setBackColor('#D4AC0D')
    }
  }, [title])

  return (
    <div key={title} className='task-column'>
      <div className='task-column-header' style={{ color: backColor }}>
        {title}
      </div>
      <div className='task-column-body'>
        {
          tasks.map(task => (
            <Task taskType={title} task={task} />
          ))
        }
      </div>
    </div>
  )
}

export default TodoActivity