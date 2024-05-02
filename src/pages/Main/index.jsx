import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';

export default function home() {
    return (
        <Wrapper>
            <Navbar></Navbar>
            <hr />
            <Container>
                <LeftSection>
                    <Link to="/company">
                        <button>사업자 페이지</button>
                    </Link>
                </LeftSection>
                <RightSection>
                    <Link to="/influencer">
                        <button>인플루언서 페이지</button>
                    </Link>
                </RightSection>
            </Container>
            <hr />
            <h1>Footer</h1>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    hr {
        width: 100%;
        height: 2px;
        background-color: gray;
    }
`;

const Container = styled.div`
    flex: 1;
    display: flex;
    button {
        background: ${(props) => (props.isSelected ? '#a3b6e9' : '#FF7062')};
        border: none;
        width: 10rem;
        height: 2.4rem;
        border-radius: 1rem;
        cursor: pointer;
        font-size: 0.9375rem;
        font-style: bold;
        font-weight: 900;
        line-height: 130%;
        color: #fff;
        margin-top: 30rem;
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
        &:hover {
            background: #f29788;
        }
    }
`;

const LeftSection = styled.div`
    box-sizing: border-box;
    height: 800px;
    background-color: #d9d9d9;
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const RightSection = styled.div`
    background-color: #a338f6;
    height: 800px;
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
