import React from "react";
import {LazyLoadingSection, ResearchInfo, ResearchTitle, ResearchWrapper} from "../style/ResearchStyle";


export default function Research() {
    return (
        <ResearchWrapper>
            <ResearchTitle>투자/M&A 탐색</ResearchTitle>
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
        </ResearchWrapper>
    )
}