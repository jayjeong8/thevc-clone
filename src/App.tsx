import React from 'react';
import {Logo, Nav, LogoSquare, Search, LoginBtn, Ranking, LogoSection, SearchSection, Header} from "./style/AppStyle";
import RankArticle from "./components/RankArticle";
import Research from "./components/Research";

function App() {
    return (
        <>
            <Header>
                <LogoSection>
                    <Logo>
                        <img src="https://ui-resources.thevc.kr/cis/thevc_logo_rectangle_transparent_64.png" alt="thevc"/>
                    </Logo>
                    <Nav>
                        <ul>
                            <li>탐색</li>
                            <li>컬렉션</li>
                            <li>유료 플랜</li>
                        </ul>
                    </Nav>
                </LogoSection>
                <SearchSection>
                    <div>
                        <div>
                            <LogoSquare>
                                <img src="https://ui-resources.thevc.kr/cis/thevc_logo_square.png" alt="thevc" />
                            </LogoSquare>
                            <span>데이터베이스</span>
                        </div>
                        <div>
                            <Search placeholder={"회사, 제품, 서비스 검색"}></Search>
                            <LoginBtn>로그인/가입</LoginBtn>
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
                </SearchSection>
            </Header>
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
