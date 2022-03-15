import styled from "styled-components";


export const LogoSection = styled.section`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.gap.S} ${props => props.theme.gap.L};
  background-color: ${props => props.theme.blue.dark};
`
export const Logo = styled.div`
  margin-right: ${props => props.theme.gap.L};

  img {
    width: 88px;
  }
`
export const Nav = styled.div`
  ul {
    display: flex;

    li {
      padding: ${props => props.theme.gap.S} 0;
      margin-right: ${props => props.theme.gap.L};
      font-size: ${props => props.theme.type.S};
    }
  }
`
export const SearchSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.gap.S} ${props => props.theme.gap.L} 0 ${props => props.theme.gap.L};
  background: linear-gradient(${props => props.theme.blue.main}, ${props => props.theme.blue.main} 50%, ${props => props.theme.blue.deep});

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      margin-top: 4px;
      margin-bottom: ${props => props.theme.gap.M};

      span {
        font-size: ${props => props.theme.type.S};
      }
    }
  }

  li {
    &:first-child {
      border-bottom: 2px solid ${props => props.theme.white};
    }
  }
`

export const LogoSquare = styled.div`
  margin-right: ${props => props.theme.gap.M};

  img {
    width: 40px;
    height: 40px;
  }`
export const Search = styled.input`
  margin-right: ${props => props.theme.gap.M};
  width: 200px;
  height: 40px;
  border-radius: 8px;
`
export const LoginBtn = styled.button`
  width: 96px;
  height: 40px;
  border-radius: 8px;
`
export const Ranking = styled.section`
  width: 100vw;
  padding: ${props => props.theme.gap.L} 0;
  display: flex;

  overflow-x: scroll;
`