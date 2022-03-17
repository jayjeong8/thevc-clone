import styled from 'styled-components';

export const ResearchWrapper = styled.div`
  width: 100%;
  padding: ${props => props.theme.gap.S} ${props => props.theme.gap.L};
  section {
    width: 100%;
    display: flex;
  }
`
export const ResearchTitle = styled.h1`
  padding: ${props => props.theme.gap.L} 0;
  font-size: ${props => props.theme.type.L};
  font-weight: bold;
`
export const ResearchInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 50%;
  height: 68px;
  padding: ${props => props.theme.gap.M} ${props => props.theme.gap.L};
  font-size: ${props => props.theme.type.S};
  background-color: ${props => props.theme.blue.main};
  border-radius: 8px;

  &:last-child {
    margin: 0 ${props => props.theme.gap.L};
  }

  div:last-child {
    font-weight: bold;
    font-size: ${props => props.theme.type.M};
  }
`
export const LazyLoadingSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${props => props.theme.gap.L};
`
export const InvestImage = styled.div`
  width: 400px;
  height: 240px;
  border: ${props => props.theme.blue.main} 2px solid;
  border-radius: 8px;
  margin-bottom: ${props => props.theme.gap.L};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
  }
`