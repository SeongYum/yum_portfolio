import styled from 'styled-components';
import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-scroll';

function Header() {
  const menuList = ['ABOUT ME', 'SKILLS', 'PROJECTS'];

  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = useCallback(() => {
    setScrollPosition(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <HeaderContainer scrollPosition={scrollPosition}>
      <HeaderContents>
        <div className="name">
          <Link to="Main" spy={true} smooth={true} duration={500}>
            Yum&apos;s Portfolio
          </Link>
        </div>
        <div className="menuList">
          {menuList.map((menu) => {
            return (
              <Link
                to={menu}
                spy={false}
                smooth={true}
                duration={500}
                key={menu}
              >
                <div className="manuEl">{menu}</div>
              </Link>
            );
          })}
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
  background-color: ${(props) =>
    props.scrollPosition ? '#d8a19f' : 'transparents'};
  transition: background-color 0.2s;
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

  .name {
    color: #ffffff;
    font-weight: 600;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .menuList {
    display: flex;
    .manuEl {
      cursor: pointer;
      white-space: nowrap;
      margin-left: 50px;
      color: #ffffff;
      :hover {
        transform: scale(1.07);
        transition: 0.5s;
      }
    }
  }
`;
