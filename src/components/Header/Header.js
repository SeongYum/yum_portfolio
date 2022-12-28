import styled from 'styled-components';

function Header() {
  return (
    <HeaderContainer>
      <HeaderContents>
        <div className="name">SEONG YU MI</div>
        <div className="menuList">
          <ul>
            <li>HOME</li>
            <li>ABOUT ME</li>
            <li>SKILLS</li>
            <li>PROJECT</li>
          </ul>
        </div>
      </HeaderContents>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  background-color: #d8a19f;
  position: relative;
  height: 50px;
  display: flex;
  justify-content: center;
`;
const HeaderContents = styled.header`
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  .name {
    color: #ffffff;
    font-weight: 600;
  }
  .menuList {
    display: flex;
    li {
      list-style: none;
      flex: 1 0 auto;
      padding: 0 0 0 50px;
      color: #ffffff;
      text-decoration: none;
      font-weight: 500;
      display: inline-block;
    }
  }
`;
