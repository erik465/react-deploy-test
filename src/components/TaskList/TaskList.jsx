import React, { useState } from 'react'
import { StyledTaskList, StyledTitle } from './TaskList.styled'
import  Task  from '../Task/Task'
import TaskWrapper from './TaskWrapper/TaskWrapper'
import data from '../../exampledata.json'

const INITIAL_TASKS = data


const TaskList = () => {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  return (
    <StyledTaskList>
      <StyledTitle>{'>> '}Your tasks: </StyledTitle>
      <TaskWrapper>
        {tasks.map(task => {
          return <Task key={task.id} title={task.title} content={task.content} completed={task.completed}/>
        })}
      </TaskWrapper>
    </StyledTaskList>
  )
}

export default TaskList
