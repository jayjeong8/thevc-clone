import React from "react";
import styled from 'styled-components';
import {IRankArticle, IRankingData} from "../../interface";
import {useQuery} from "react-query";

const Article = styled.article`
  margin-left: 20px;
  padding: ${props => props.theme.gap.L};
  width: 300px;
  min-width: 300px;
  height: 400px;
  background-color: ${props => props.theme.blue.main};
  border-radius: 8px;
`
const Title = styled.div`

`
const TimeFilter = styled.div``
const Button = styled.button`
  width: 88px;
  height: 24px;`
const InvestmentData = styled.section``
const InvestmentInfo = styled.div``

export default function RankArticle({icon, title, subtitle}: IRankArticle) {
    const getRankingData = () => {
        return fetch('http://localhost:3000/data/rankingData.json')
            .then(response => response.json())
    }
    const {data, isLoading} = useQuery<IRankingData>(
        "rankingData", getRankingData
    );

    return (
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
            <InvestmentData>
                <li>
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
            </InvestmentData>
        </Article>
    )
}
