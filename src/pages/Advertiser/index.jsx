import React from 'react';
import AdvertiserNavbar from '../../components/Navbar/AdvertiserNavbar';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export default function AdvertiserMain() {
    return (
        <>
            <AdvertiserNavbar></AdvertiserNavbar>

            <Wrapper>
                <div>사업자 메인</div>
                <Link to="/matchingPage" style={{ textDecoration: 'none' }}>
                        <button>
                            <ButtonText>검색</ButtonText>
                        </button>
                </Link>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
`;

const ButtonText = styled.span`
    position: relative;
    color: var(--grey-70);
`;
