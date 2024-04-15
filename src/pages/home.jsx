import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export default function home() {
    return (
        <Wrapper>
        <h1>
          DP 와이어프레임
        </h1>
        <hr/>
        <ButtonBox>
        <Link to ='/page1'>
        <button>1번 페이지</button>
        </Link>
        <Link to ='/page2'>
        <button>2번 페이지</button>
        </Link>
        </ButtonBox>
        <hr/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  box-sizing: border-box;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
   
  margin: 0 auto;
  hr{
    width : 100%;
    height : 2px;
    background-color : gray;
  }
`;
const ButtonBox = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  button{
    background: ${props => (props.isSelected ? '#a3b6e9' : '#FF7062')};
    border: none;
    width: 8rem;
    height: 2.4rem;
    border-radius: 1rem;
    cursor: pointer;
    font-size: 0.9375rem;
    font-style: bold;
    font-weight: 900;
    line-height: 130%;
    color: #FFF;
    margin : 2rem;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    &:hover {
      background: #F29788;
    }
  }


`;