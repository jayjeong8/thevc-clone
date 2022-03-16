import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  z-index: 100;
  position: sticky;
  top: -40px;
`
export const LogoSection = styled.section`
  height: 40px;
  display: flex;
  align-items: center;
  padding: ${props => props.theme.gap.S} ${props => props.theme.gap.L};
  background-color: ${props => props.theme.blue.dark};

  li {
    margin-right: ${props => props.theme.gap.L};
    font-size: ${props => props.theme.type.S};
  }
`
export const Logo = styled.div`
  margin-right: ${props => props.theme.gap.L};

  img {
    width: 88px;
    padding-top: 5px;
  }
`
export const Nav = styled.div`
  ul {
    display: flex;

    li {
      padding: ${props => props.theme.gap.S} 0;
      min-width: 64px;
      cursor: pointer;
    }
  }
`
export const SearchSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.gap.S} ${props => props.theme.gap.L} 0 ${props => props.theme.gap.L};
  background: linear-gradient(${props => props.theme.blue.main}, ${props => props.theme.blue.main} 50%, ${props => props.theme.blue.deep});

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      margin-top: 4px;
      margin-bottom: ${props => props.theme.gap.M};

      span {
        font-size: ${props => props.theme.type.M};
        font-weight: bold;
        min-width: 80px;
      }
    }
  }

  li {
    font-size: ${props => props.theme.type.M};
    color: ${props => props.theme.gray.gray};
    margin-right: 30px;
    
    &:first-child {
      color: ${props => props.theme.white};
      border-bottom: 2px solid ${props => props.theme.white};
      font-weight: bold;
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
  padding-left: 12px;
  font-size: ${props => props.theme.type.M};
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.white};
  border: ${props => props.theme.black} 2px solid;
  border-radius: 8px;

  &::placeholder {
    color: ${props => props.theme.gray.gray};
  }

  &:focus {
    outline: none;
    border: #6d6de7 2px solid;
  }
`
export const LoginBtn = styled.button`
  width: 96px;
  height: 40px;
  background: linear-gradient(180deg, #6d6de7, #5757e4);
  color: ${props => props.theme.white};
  filter: drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.6));
  border: none;
  border-radius: 8px;
  cursor: pointer;
`
export const Ranking = styled.section`
  width: 100vw;
  margin-top: ${props => props.theme.gap.S};
  padding: ${props => props.theme.gap.L} 0;
  display: flex;

  overflow-x: scroll;
`