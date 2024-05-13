import React from 'react';
import AdvertiserNavbar from '../../components/Navbar/AdvertiserNavbar';
import { styled } from 'styled-components';

export default function AdvertiserIntro() {
    return (
        <>
            <AdvertiserNavbar></AdvertiserNavbar>

            <Wrapper>
                <div>사업자 소개페이지입니다.</div>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;
