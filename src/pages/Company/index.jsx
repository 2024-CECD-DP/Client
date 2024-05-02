import React from 'react';
import CompanyNavbar from '../../components/Navbar/CompanyNavbar';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export default function CompanyMain() {
    return (
        <>
            <CompanyNavbar></CompanyNavbar>

            <Wrapper>
                <div>사업자 메인</div>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;
