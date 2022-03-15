import React from "react";
import styled from 'styled-components';

const ResearchInfo = styled.div``
const LazyLoadingSection = styled.section``

export default function Research() {
    return (
        <>
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
        </>
    )
}