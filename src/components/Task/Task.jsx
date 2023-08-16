import React from 'react'
import { StyledTask, StyledContent, CompleteStatus } from './Task.styled'
import { FaCheck, FaTimes } from 'react-icons/fa';

function truncateString(str, limit) {
  if (str.length <= limit) {
    return str;
  } else {
    return str.slice(0, limit) + '...';
  }
}

const Task = (props) => {
  return (
    <StyledTask>
      <p>{props.title}</p>
      <StyledContent>{truncateString(props.content, 150)}</StyledContent>
      <CompleteStatus completed={props.completed}>
        <p>{props.completed ? 'Completed' : 'Not completed'}</p>
        {props.completed ? <FaCheck color="green" size={24} /> : <FaTimes color="red" size={24} />}
      </CompleteStatus>
    </StyledTask>
  )
}

export default Task
