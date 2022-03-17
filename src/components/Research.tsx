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


    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1
    }
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.src = entry.target.dataset.src;
                    observer.unobserve(entry.target);
                }
                console.log(entry);
            })
        }, options)
    const target = document.querySelectorAll<HTMLImageElement>(".image");
    target.forEach((image) => {
        observer.observe(image);
    })


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
                {data?.map((data: IImageData, index) => (
                    <InvestImage key={index}>
                        <img className="lazy"
                             src=""
                             data-src={data.image}
                             alt="Investment"/>
                    </InvestImage>
                ))
                }
            </LazyLoadingSection>
        </ResearchWrapper>
    )
}