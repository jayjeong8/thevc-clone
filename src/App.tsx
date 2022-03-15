import React from 'react';
import styled from 'styled-components';


function App() {
    return (
        <>
            <header>
                <section>
                    <Logo></Logo>
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
                <Article>
                    <Title>
                        <span>💰</span>
                        <h1>투자 유치 랭킹</h1>
                        <h2>투자금액 순</h2>
                    </Title>
                    <TimeFilter>
                        <Button>주간</Button>
                        <Button>월간</Button>
                        <Button>연간</Button>
                    </TimeFilter>
                    <InvestmentData>
                        <li>
                            <span>1</span>
                            <div><img/></div>
                            <InvestmentInfo>
                                <div>쏘카</div>
                                <div>쏘카</div>
                            </InvestmentInfo>
                            <InvestmentInfo>
                                <div>1832억</div>
                                <div>Series G</div>
                            </InvestmentInfo>
                        </li>
                    </InvestmentData>
                </Article>
            </Ranking>
            <Research>
                <section>
                    <ResearchInfo>
                        <div>총 투자 금액</div>
                        <div>120조 3314억+</div>
                    </ResearchInfo>
                    <ResearchInfo>
                        <div>총 투자 건수</div>
                        <div>11,923건</div>
                    </ResearchInfo>
                </section>
                <LazyLoadingSection>

                </LazyLoadingSection>
            </Research>
        </>
    );
}


export default App;
