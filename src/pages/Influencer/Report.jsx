import React from 'react';
import InfluencerNavbar from '../../components/Navbar/InfluencerNavbar';
import { styled } from 'styled-components';
import ProfileRing from '../../assets/ProfileRing.svg';
export default function Report() {
    return (
        <>
            <InfluencerNavbar></InfluencerNavbar>

            <Wrapper>
                <Intro>
                    <ProfileImage>
                        <img src={ProfileRing} alt="프로필" />
                    </ProfileImage>
                    <p>@instaname</p>
                    <p>이름</p>
                    <p>카테고리</p>
                    <ProfileData>
                        <p>1234</p> <p>게시글</p>
                        <p>1234</p> <p>게시글</p>
                        <p>1234</p> <p>게시글</p>
                        <p>1234</p> <p>게시글</p>
                    </ProfileData>
                </Intro>
                <DataSection>
                    <p>인기 포스트</p>
                    <PostSection>
                        <Post></Post>
                        <Post></Post>
                        <Post></Post>
                    </PostSection>
                    <p>상세 분석</p>
                    <FollowerSection>
                        <FollowerTrend>팔로워 추이</FollowerTrend>
                        <FollowerGender>팔로워 성별</FollowerGender>
                    </FollowerSection>
                    <HashtagSection>
                        <PostHashtag>게시글 해시태그</PostHashtag>
                        <ResponsiveHashtag>반응높은 해시태그</ResponsiveHashtag>
                    </HashtagSection>
                    <AverageSection>
                        <Like>평균 좋아요</Like>
                        <Comment>평균 댓글수</Comment>
                        <Upload>게시물 업로드 주기</Upload>
                    </AverageSection>
                    <SummarySection>
                        <Summary>활동 요약</Summary>
                    </SummarySection>
                </DataSection>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    background-color: var(--background--gray);
`;

const Intro = styled.div`
    width: 375px;
    height: 570px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 33px;
    background: var(--white-100, #fff);
    margin: 100px;
    margin-top: 150px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #000;
    text-align: center;
    font-family: 'Didact Gothic';
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const ProfileImage = styled.div`
    width: 200px;
    height: 200px;
    border: 1px solid black;
    margin-top: 24px;
`;

const ProfileData = styled.div`
    width: 350px;
    height: 200px;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #000;
    text-align: center;
    font-family: Abel;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const DataSection = styled.div`
    width: 1500px;
    display: flex;
    flex-direction: column;
    height: auto;
    p {
        margin: 27px;
        color: #000;
        font-family: Inter;
        font-size: 30px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: -0.5px;
        text-transform: capitalize;
    }
`;
const PostSection = styled.div`
    width: 1500px;
    height: auto;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
`;

const Post = styled.div`
    width: 350px;
    height: 350px;
    flex-shrink: 0;
    margin-top: 10px;
    margin-right: 90px;
    display: inline-flex;
    padding: 20px 20px 11px 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
    border-radius: 20px;
    background: #fff;
    box-shadow: 0px 3px 100px 0px rgba(0, 0, 0, 0.1);
`;
const FollowerSection = styled.div`
    width: 1500px;
    height: 570px;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
`;

const FollowerTrend = styled.div`
    display: flex;
    width: 900px;
    height: 500px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #fff;
    box-shadow: 0px 3px 100px 0px rgba(0, 0, 0, 0.1);
    color: #000;
    text-align: center;
    justify-content: center;
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.5px;
    text-transform: capitalize;
    padding: 5px;
`;
const FollowerGender = styled.div`
    display: flex;
    width: 350px;
    height: 500px;
    flex-shrink: 0;
    border-radius: 20px;
    margin-left: 90px;
    background: #fff;
    box-shadow: 0px 3px 100px 0px rgba(0, 0, 0, 0.1);
    color: #000;
    text-align: center;
    justify-content: center;
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.5px;
    text-transform: capitalize;
    padding: 5px;
`;
const HashtagSection = styled.div`
    width: 1500px;
    height: 550px;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
`;

const PostHashtag = styled.div`
    display: flex;
    width: 800px;
    height: 500px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #fff;
    box-shadow: 0px 3px 100px 0px rgba(0, 0, 0, 0.1);
    color: #000;
    text-align: center;
    justify-content: center;
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.5px;
    text-transform: capitalize;
    padding: 5px;
`;

const ResponsiveHashtag = styled.div`
    display: flex;
    width: 450px;
    height: 500px;
    flex-shrink: 0;
    border-radius: 20px;
    margin-left: 95px;
    background: #fff;
    box-shadow: 0px 3px 100px 0px rgba(0, 0, 0, 0.1);
    color: #000;
    text-align: center;
    justify-content: center;
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.5px;
    text-transform: capitalize;
    padding: 5px;
`;

const AverageSection = styled.div`
    width: 1500px;
    height: 380px;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
`;

const Like = styled.div`
    width: 400px;
    height: 300px;
    flex-shrink: 0;
    margin-top: 10px;
    margin-right: 70px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    border-radius: 20px;
    background: #fff;
    box-shadow: 0px 3px 100px 0px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.5px;
    text-transform: capitalize;
    padding: 5px;
`;

const Comment = styled.div`
    width: 400px;
    height: 300px;
    flex-shrink: 0;
    margin-top: 10px;
    margin-right: 70px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    border-radius: 20px;
    background: #fff;
    box-shadow: 0px 3px 100px 0px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.5px;
    text-transform: capitalize;
    padding: 5px;
`;

const Upload = styled.div`
    width: 400px;
    height: 300px;
    flex-shrink: 0;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    border-radius: 20px;
    background: #fff;
    box-shadow: 0px 3px 100px 0px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.5px;
    text-transform: capitalize;
    padding: 5px;
`;

const SummarySection = styled.div`
    width: 1500px;
    height: 550px;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
`;

const Summary = styled.div`
    display: flex;
    width: 850px;
    height: 400px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #fff;
    box-shadow: 0px 3px 100px 0px rgba(0, 0, 0, 0.1);
    color: #000;
    text-align: center;
    justify-content: center;
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.5px;
    text-transform: capitalize;
    padding: 5px;
`;
