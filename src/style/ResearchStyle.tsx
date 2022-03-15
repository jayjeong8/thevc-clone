import styled from 'styled-components';

export const ResearchWrapper = styled.div`
  padding: ${props => props.theme.gap.S} ${props => props.theme.gap.L};

section{
  display: flex;
}
`
export const ResearchTitle = styled.h1`
  font-size: ${props => props.theme.type.M};
  padding: ${props => props.theme.gap.L} 0
`
export const ResearchInfo = styled.div`
  padding: ${props => props.theme.gap.M} ${props => props.theme.gap.L};
  width: 300px;
  height: 68px;
  background-color: ${props => props.theme.blue.main};
  border-radius: 8px;
  &:last-child{
    margin-left: 20px;
  }
`
export const LazyLoadingSection = styled.section``