import styled, {keyframes} from 'styled-components'

const animAfter = keyframes`
  0% { 
    left: 600px;
    top: 215px;
  }

  25% { 
    top: 0;
    left: 600px;

    rotate: -90deg;
  }


  50%{
    top: 0;
    left: 0;
    rotate: -180deg;
  }

  75%{
    top: 215px;
    left: 0;
    rotate: -270deg;
  }

  100%{
    left: 600px;
    top: 215px;
    rotate: -360deg;
  }
`;

const animBefore = keyframes`
  0% { 
    top: 0;
    left: 0;
  }

  25% { 
    top: 215px;
    left: 0;
    rotate: -90deg;
  }


  50%{
    left: 600px;
    top: 215px;
    rotate: -180deg;
  }

  75%{
    top: 0;
    left: 600px;
    rotate: -270deg;
  }

  100%{
    left: 0;
    top: 0;
    rotate: -360deg;
  }
`;


export const StyledHero = styled.div`
    background: #232222;
    color: #eee;
    margin: 0;
    display: flex;
    justify-content: center;
    padding: 100px;

    h2{
        margin: 0;
        font-size: 56px;
    }

    div{
        text-align: center;
        max-width: 700px;
        padding: 60px;
        position: relative;

    }

    div:hover::after{
        top: 235px;
        left: 620px;
    }

    div:hover::before{
        top: -20px;
        left: -20px;
    }

    div::after{
        content: '';
        position: absolute;
        width: 100px;
        height: 100px;
        border: 1px solid #eee;
        border-width:  0 1px 1px 0;
        left: 600px;
        top: 215px;
        transition: 1s;
        animation: ${animAfter} 7s ease-in-out infinite;
    }

    div::before{
        content: '';
        position: absolute;
        width: 100px;
        height: 100px;
        border: 1px solid #eee;
        border-width:  1px 0 0 1px;
        top: 0;
        left: 0;
        transition: 1s;
        animation: ${animBefore} 7s ease-in-out infinite;
    }
`