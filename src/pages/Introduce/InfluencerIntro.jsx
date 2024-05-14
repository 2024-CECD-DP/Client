import React from 'react';
import InfluencerNavbar from '../../components/Navbar/InfluencerNavbar';
import { styled } from 'styled-components';
export default function InfluencerIntro() {
    return (
        <>
            <InfluencerNavbar></InfluencerNavbar>

            <Wrapper>
                <div>인플루언서 소개페이지입니다.</div>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;
