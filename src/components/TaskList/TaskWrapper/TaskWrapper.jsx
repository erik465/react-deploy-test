import React from 'react'
import styled from 'styled-components'

const StyledTasksWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 20px;
    padding: 30px 150px;
`


const TaskWrapper = (props) => {
  return (
    <StyledTasksWrapper>
      {props.children}
    </StyledTasksWrapper>
  )
}

export default TaskWrapper
