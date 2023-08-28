import styled from 'styled-components'

export const StyledTaskList = styled.div`
    background: ${props => props.theme.taskListBgColor};
    color: ${props => props.theme.taskListTextColor};
    margin: 0;
    padding: 0px 20px 20px 100px;

    p{
       margin : 0;
    }
`

export const StyledTitle = styled.p`
        margin: 0;
        font-size: 18px;
`