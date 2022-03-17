import React, {useState} from "react";
import {IRankArticle, IRankingData} from "../../interface";
import {useQuery} from "react-query";
import {Article, ArticleOpenBtn, Button, InvestmentData, InvestmentInfo, Loading, TimeFilter, Title} from "../style/RankArticleStyle";

export default function RankArticle({icon, title, subtitle}: IRankArticle) {
    const getRankingData = () => {
        return fetch('http://localhost:3000/data/rankingData.json')
            .then(response => response.json())
    }
    const {data, isLoading} = useQuery<IRankingData[]>(
        "rankingData", getRankingData
    );

    const openBtn = document.getElementsByTagName("ArticleOpenBtn")
    const [openToggle, setOpenToggle] = useState(true);
    const onOpenBtnClink = () => {
        if(openToggle){
            setOpenToggle(false);
            console.log(openBtn);
        }
        if(!openToggle){
            setOpenToggle(true);
            console.log("false");
        }
    }

    return (
        <>
            {isLoading ?
                <Loading>Loading..</Loading>
            :
                <Article>
                    <Title>
                        <span>{icon}</span>
                        <h1>{title}</h1>
                        <h2>{subtitle}</h2>
                    </Title>
                    <TimeFilter>
                        <Button>주간</Button>
                        <Button>월간</Button>
                        <Button>연간</Button>
                    </TimeFilter>
                    <InvestmentData toggle={openToggle}>
                        {data?.map((data : IRankingData, index) => (
                        <li key={index}>
                            <span>{data?.index}</span>
                            <div><img src={data?.imgUrl} alt={data?.rankTitle}/></div>
                            <InvestmentInfo>
                                <div>{data?.rankTitle}</div>
                                <div>{data?.rankSubtitle}</div>
                            </InvestmentInfo>
                            <InvestmentInfo>
                                <div>{data?.scale}</div>
                                <div>{data?.series}</div>
                            </InvestmentInfo>
                        </li>
                    ))}
                    </InvestmentData>
                    <ArticleOpenBtn onClick={onOpenBtnClink}>{openToggle ? "▼펼치기" : "▲접기"}</ArticleOpenBtn>
                </Article>}
        </>
    )
}
