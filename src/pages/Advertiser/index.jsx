import React from 'react';
import CompanyNavbar from '../../components/Navbar/AdvertiserNavbar';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export default function AdvertiserMain() {
    return (
        <>
            <CompanyNavbar></CompanyNavbar>

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
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const ButtonText = styled.span`
    position: relative;
    color: var(--grey-70);
`;
