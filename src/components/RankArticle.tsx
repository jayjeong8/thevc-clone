import React from "react";
import {IRankArticle, IRankingData} from "../interface";
import {openToggleState} from "../atom";
import {useQuery} from "react-query";
import {
    Article,
    ArticleOpenBtn,
    Button,
    InvestmentData,
    InvestmentInfo,
    Loading,
    TimeFilter,
    Title
} from "../style/RankArticleStyle";
import {useRecoilState} from "recoil";

export default function RankArticle({icon, title, subtitle}: IRankArticle) {
    const localhost = document.location.href.includes("localhost");
    let RANKINGDATA ="";
    if (localhost) {
        RANKINGDATA = "thevc-clone/data/rankingData.json"
    } else {
        RANKINGDATA = "data/rankingData.json"
    }
    const getRankingData = () => {
        return fetch(RANKINGDATA, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
    }
    const {data, isLoading} = useQuery<IRankingData[]>(
        "rankingData", getRankingData
    );

    const openBtn = document.getElementsByTagName("ArticleOpenBtn")

    const [openToggle, setOpenToggle] = useRecoilState(openToggleState);
    const onOpenBtnClink = () => {
        if (openToggle) {
            setOpenToggle(false);
        }
        if (!openToggle) {
            setOpenToggle(true);
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
                        {data?.map((data: IRankingData, index) => (
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
