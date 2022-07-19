import React, { useEffect, useState } from 'react'
import './index.scss'

const Task = ({ taskType, task }) => {

  const [backColor, setBackColor] = useState('#BDC3C7')

  useEffect(() => {
    if (taskType === 'TODO') {
      setBackColor('#BDC3C7')
    }
    else if (taskType === 'INPROGRESS') {
      setBackColor('#27AE60')
    }
    else if (taskType === 'COMPLETE') {
      setBackColor('#D4AC0D')
    }
  }, [taskType])

  return (
    <div className={`task-container`} style={{background:backColor}}>
      <div>
        {task?.title}
      </div>
      <div>
        {task?.description}
      </div>
    </div>
  )
}


export default Task