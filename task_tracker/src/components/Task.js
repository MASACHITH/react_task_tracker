import React from 'react'
import {FaTimes} from 'react-icons/fa'


import './Tasks';

const Task = ({task,onDelete,onToggle}) => {
    var clickNo = 0;
    const handleClick = event => {
        clickNo = clickNo + 1;
        if (clickNo === 2) {
             onToggle(task.id);
             clickNo = 0;
        }
        
      };
    
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onClick={handleClick} >
      <h3>
        {task.text}{''}
        <FaTimes 
        style={{
            color:'red',
            cursor:"pointer"
            }}
            onClick={()=>onDelete(task.id)}
            />   
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
