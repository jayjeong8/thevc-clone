import React from 'react';
import styled from 'styled-components';
import RankArticle from "./components/RankArticle";
import Research from "./components/Research";

const Logo = styled.div``
const Nav = styled.div``
const LogoSquare = styled.div``
const Search = styled.input``
const LoginBtn = styled.button``
const Ranking = styled.section``

function App() {
    return (
        <>
            <header>
                <section>
                    <Logo><img/></Logo>
                    <Nav>
                        <ul>
                            <li>탐색</li>
                            <li>컬렉션</li>
                            <li>유료 플랜</li>
                        </ul>
                    </Nav>
                </section>
                <section>
                    <div>
                        <div>
                            <LogoSquare></LogoSquare>
                            <span>데이터베이스</span>
                        </div>
                        <div>
                            <Search></Search>
                            <LoginBtn></LoginBtn>
                        </div>
                    </div>
                    <Nav>
                        <ul>
                            <li>투자/M&A</li>
                            <li>스타트업</li>
                            <li>투자자</li>
                            <li>펀드</li>
                            <li>뉴스</li>
                        </ul>
                    </Nav>
                </section>
            </header>
            <Ranking>
               <RankArticle icon={"💰"} title={"투자 유치 랭킹"} subtitle={"투자금액 순"}/>
               <RankArticle icon={"💰"} title={"투자 집행 랭킹"} subtitle={"투자건수 순"}/>
               <RankArticle icon={"🔥"} title={"스타트업 랭킹"} subtitle={"조회수 순"}/>
               <RankArticle icon={"🔥"} title={"액셀러레이터 랭킹"} subtitle={"조회수 순"}/>
               <RankArticle icon={"🔥"} title={"벤처캐피탈 랭킹"} subtitle={"조회수 순"}/>
               <RankArticle icon={"🔥"} title={"대기업/중견기업 랭킹"} subtitle={"조회수 순"}/>
               <RankArticle icon={"🔥"} title={"금융회사 랭킹"} subtitle={"조회수 순"}/>
            </Ranking>
            <Research/>
        </>
    );
}


export default App;
