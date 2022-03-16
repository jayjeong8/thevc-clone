import React from "react";
import {InvestImage, LazyLoadingSection, ResearchInfo, ResearchTitle, ResearchWrapper} from "../style/ResearchStyle";
import {useQuery} from "react-query";
import {IImageData} from "../../interface";

export default function Research() {
    const getImageData = () => {
        return fetch('http://localhost:3000/data/investmentImageData.json')
            .then(response => response.json())
    }
    const {data} = useQuery<IImageData[]>(
        "imageData", getImageData
    );
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
                {data?.map((data: IImageData ) => (
                    <InvestImage>
                        <img loading="lazy"
                             src={data.image}
                             alt="Investment"/>
                    </InvestImage>
                ))}
            </LazyLoadingSection>
        </ResearchWrapper>
    )
}