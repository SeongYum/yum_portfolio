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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  /* width: 100%; */
  background-color: #d8a19f;
  height: 65px;
  display: flex;
  justify-content: center;
`;
const HeaderContents = styled.div`
  width: 100%;
  max-width: 1140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  .name {
    color: #ffffff;
    font-weight: 600;
    font-size: 1.1rem;
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
