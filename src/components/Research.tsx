import React, {useEffect} from "react";
import {InvestImage, LazyLoadingSection, ResearchInfo, ResearchTitle, ResearchWrapper} from "../style/ResearchStyle";
import {useQuery} from "react-query";
import {IImageData} from "../interface";

export default function Research() {
    const getImageData = () => {
        return fetch('thevc-clone/data/investmentImageData.json')
            .then(response => response.json())
    }
    const {data} = useQuery<IImageData[]>(
        "imageData", getImageData
    );

    useEffect(() => {
        const target = document.querySelectorAll<HTMLImageElement>(".lazy");
        const options = {
            root: null,
            rootMargin: '480px',
            threshold: 0
        }
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting || entry.intersectionRatio > 0) {
                        const image = entry.target
                        image.attributes[1].value = image.attributes[2].value;
                        observer.unobserve(entry.target);
                    }
                })
            }, options)

        target.forEach((image) => {
            observer.observe(image);
        })
    }, [data])


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