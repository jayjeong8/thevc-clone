import styled from "styled-components";

export const Loading = styled.div`
  font-size: ${props => props.theme.type.M};
  width: 300px;
`

export const Article = styled.article`
  margin-left: 20px;
  padding: ${props => props.theme.gap.L};
  width: 300px;
  min-width: 300px;
  height: 400px;
  background-color: ${props => props.theme.blue.main};
  border-radius: 8px;
`
export const Title = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: ${props => props.theme.gap.L};

  h1, span {
    font-size: ${props => props.theme.type.L};
  }

  h1 {
    font-weight: bold;
    margin-right: ${props => props.theme.gap.S};
  }

  h2 {
    font-size: ${props => props.theme.type.S};
    color: ${props => props.theme.gray.gray};
  }
`
export const TimeFilter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${props => props.theme.gap.L};
`
export const Button = styled.button`
  width: 88px;
  height: 24px;
  background: linear-gradient(180deg,
  ${props => props.theme.blue.light},
  ${props => props.theme.blue.dark});
  color: ${props => props.theme.white};
  filter: drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.8));
  border: none;

  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-right: ${props => props.theme.black} 1px solid;
  }

  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-left: ${props => props.theme.black} 1px solid;
  }
`
export const InvestmentData = styled.ul`
  li {
    display: flex;
    align-items: center;
  width: 100%;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.3));
    }
  }

`
export const InvestmentInfo = styled.div`
  &:first-child{
    min-width: 150px;
  }
  &:last-child {
    justify-self: end;
    text-align: end;
  }
  div:first-child{
    font-size: ${props => props.theme.type.M};
  }
  div:last-child {
    font-size: ${props => props.theme.type.S};
    color: ${props => props.theme.gray.gray};
  }
`