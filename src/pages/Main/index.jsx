import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import advertiserBackground from '../../assets/advertiser.png';
import influencerBackground from '../../assets/influencer.png';

export default function Main() {
    return (
        <Wrapper>
            <Container>
                <LeftSection>
                    <Link to="/advertiser" style={{ textDecoration: 'none' }}>
                        <button>사업자 페이지</button>
                    </Link>
                </LeftSection>
                <RightSection>
                    <Link to="/influencer" style={{ textDecoration: 'none' }}>
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
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    min-width: 1800px;

    margin: 0 auto;
    hr {
        height: 2px;
        background-color: gray;
    }
`;

const Container = styled.div`
    display: flex;
    width: auto;
    height: auto;
    button {
        border: none;
        display: flex;
        position: relative;
        top: 300px;
        width: 21.25rem;
        height: 6rem;
        justify-content: center;
        align-items: center;
        border-radius: var(--16, 1rem);
        background: var(--Primary-Light, #f7f9fb);
        cursor: pointer;
        color: var(--black-100, #1c1c1c);
        font-family: Inter;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 600;
        line-height: 2.25rem;
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
        &:hover {
            background: #ededed;
        }
    }
`;
const LeftSection = styled.div`
    box-sizing: border-box;
    background-image: url(${advertiserBackground});
    background-size: cover;
    flex: 1;
    width: 1250px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const RightSection = styled.div`
    background-image: url(${influencerBackground});
    background-size: cover;
    background-repeat: no-repeat;
    flex: 1;
    width: 1250px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
