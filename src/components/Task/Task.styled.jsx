import styled from 'styled-components'

export const StyledTask = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 2px solid #908a8a; /* Set a transparent base border */
    border-radius: 10px;
    
    padding: 20px;
    position: relative;
    transition: 1s;
    cursor: pointer;

    &:hover{
        border: 2px solid #eee;
        scale : 1.1;
    }

    p{
        font-size: 20px;
    }
`

export const StyledContent = styled.p`
    max-width: 300px;
    color: #8e8e8e;
    font-size: 16px !important;
`

export const CompleteStatus = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;

    p{
        color: ${props => props.completed ? 'green' : '#b03535'};
        font-size: 16px;

    }
`