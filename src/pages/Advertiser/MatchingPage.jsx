import React from 'react';
import InfluencerNavbar from '../../components/Navbar/InfluencerNavbar';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import InfluMatch from './InfluMatch';
import SearchIcon from '../../assets/search-icon.png';
import FilterIcon from '../../assets/filter-icon.png';
export default function InfluencerMain() {

    const influData = [
        {
            matchPercent: 80,
            img: "https://images.pexels.com/photos/1458926/pexels-photo-1458926.jpeg?cs=srgb&dl=pexels-poodles2doodles-1458926.jpg&fm=jpg",
            username: "username111",
            follower: 3000,
            category: "뷰티",
            match: "게시글 키워드"
        },
        {
            matchPercent: 78,
            img: "https://images.pexels.com/photos/1458926/pexels-photo-1458926.jpeg?cs=srgb&dl=pexels-poodles2doodles-1458926.jpg&fm=jpg",
            username: "username222",
            follower: 3000,
            category: "패션",
            match: "연관 키워드"
        },
        {
            matchPercent: 76,
            img: "https://images.pexels.com/photos/1458926/pexels-photo-1458926.jpeg?cs=srgb&dl=pexels-poodles2doodles-1458926.jpg&fm=jpg",
            username: "username333",
            follower: 3000,
            category: "뷰티",
            match: "게시글 키워드"
        },
        {
            matchPercent: 76,
            img: "https://images.pexels.com/photos/1458926/pexels-photo-1458926.jpeg?cs=srgb&dl=pexels-poodles2doodles-1458926.jpg&fm=jpg",
            username: "username333",
            follower: 3000,
            category: "뷰티",
            match: "게시글 키워드"
        },
        {
            matchPercent: 76,
            img: "https://images.pexels.com/photos/1458926/pexels-photo-1458926.jpeg?cs=srgb&dl=pexels-poodles2doodles-1458926.jpg&fm=jpg",
            username: "username333",
            follower: 3000,
            category: "뷰티",
            match: "게시글 키워드"
        }
    ]

    return (
        <>
            <InfluencerNavbar></InfluencerNavbar>

            <Wrapper>
                <SearchAndFilter>
                    <SearchContainer>
                        <StyledSearchIcon src={SearchIcon} alt="Search Icon" />
                        <StyledInput type="text" placeholder="인플루언서 아이디를 검색해 보세요"/>
                    </SearchContainer>
                    <FilterButton>
                        필터&키워드 검색
                        <StyledFilterIcon src={FilterIcon} alt="Search Icon" />
                    </FilterButton>
                </SearchAndFilter>
                <Result>
                    <Bar>
                        <BarText>프로필</BarText>
                        <BarInside>
                            <BarText>카테고리</BarText>
                            <BarText>일치 부분</BarText>
                        </BarInside>
                    </Bar>
                    <ResultContainer>
                        {influData.map((i, index) => {
                            return (
                                <InfluMatch key={index} data={i}/>
                            )
                        })}
                    </ResultContainer>
                </Result>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 57px;
`;

const SearchAndFilter = styled.div`
    display: inline-flex;
    align-items: flex-start;
    gap: 62px;
`;

const FilterButton = styled.button`
    display: inline-flex;
    padding: 10px 20px 10px 25px;
    justify-content: center;
    align-items: center;
    gap: 13px;
    border-radius: 30px;
    border: 1px solid var(--Grey-Grey-30, #EAEEF4);
    background: var(--violet-50);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const SearchContainer = styled.div`
    display: flex;
    width: 375px;
    height: var(--48, 48px);
    padding: 0 var(--16, 16px);
    align-items: center;
    gap: var(--24, 24px);
    flex-shrink: 0;
    border-radius: 2px;
    background: var(--white-100, #FFF);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const StyledSearchIcon = styled.img`
  width: 19px;
  height: 19px;
  flex-shrink: 0;
`;

const StyledInput = styled.input`
    flex: 1 0 0;
    width: 300px;
    height: 22px;
    padding: 10px;
    font-family: Roboto;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.5px;
    border: transparent;
    border-radius: 4px;
    color: var(--Label-Colors-LC-L-Secondary, rgba(60, 60, 67, 0.60));

`;

const StyledFilterIcon = styled.img`
    width: var(--24, 24px);
    height: var(--24, 24px);
    flex-shrink: 0;
`;

const Result = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
`;

const Bar = styled.div`
    display: flex;
    height: 35px;
    padding: 5px 50px 0px 30px;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 465px;
    border-radius: 10px;
    background: var(--white-100, #FFF);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const BarInside = styled.div`
    display: flex;
    
    align-items: flex-start;
    gap: 101px;
    flex-shrink: 0;
`;

const BarText = styled.text`
    color: #686767;
    text-align: center;

    font-family: "DM Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const ResultContainer = styled.div`
    display: flex;
    height: 660px;
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
    overflow-y: scroll;

    //스크롤 투명
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;