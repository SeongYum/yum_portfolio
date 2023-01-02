import styled from 'styled-components';
import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-scroll';
import media from './../../styles/media';
import { IoMenu, IoClose } from 'react-icons/io5';
function Header() {
  const menuList = ['ABOUT ME', 'SKILLS', 'PROJECTS'];

  const [scrollPosition, setScrollPosition] = useState(0);
  const [BtnInfo, setBtnInfo] = useState(true);

  const menuClick = () => {
    if (BtnInfo === true) {
      setBtnInfo(false);
    } else if (BtnInfo === false) {
      setBtnInfo(true);
    }
  };

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
          <Link
            to="Main"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setBtnInfo(true)}
          >
            Yum&apos;s Portfolio
          </Link>
        </div>
        <MenuBtn onClick={menuClick}>
          {BtnInfo ? <IoMenu /> : <IoClose />}
        </MenuBtn>
        <MenuList BtnInfo={BtnInfo}>
          {menuList.map((menu) => {
            return (
              <Link
                to={menu}
                spy={false}
                smooth={true}
                duration={500}
                key={menu}
              >
                <MeneEl onClick={() => setBtnInfo(true)}>{menu}</MeneEl>
              </Link>
            );
          })}
        </MenuList>
      </HeaderContents>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  background-color: ${(props) =>
    props.scrollPosition ? '#d8a19f' : 'transparents'};
  transition: background-color 0.2s;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  z-index: 10;
  ${media.medium`
  background-color: #d8a19f;
       `}
`;
const HeaderContents = styled.div`
  width: 100%;
  max-width: 1140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1.4rem 2rem;
  overflow: hidden;
  .name {
    color: #ffffff;
    font-weight: 600;
    font-size: 1.5rem;
    cursor: pointer;
  }
  ${media.medium`
     padding: 1.5rem 2rem 1.5rem;
       `}
`;
const MenuList = styled.div`
  display: flex;
  transition: max-height 0.2s ease;
  ${media.medium`
    visibility: ${(props) => (props.BtnInfo ? 'hidden' : 'visible')};
    flex-direction: column;
    width: 100%;
    max-height: ${(props) => (props.BtnInfo ? '0' : '30rem')};
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    text-transform: capitalize;
       `}
`;
const MeneEl = styled.div`
  cursor: pointer;
  white-space: nowrap;
  margin-left: 50px;
  color: #ffffff;
  :hover {
    transform: scale(1.07);
    transition: 0.5s;
  }
  ${media.medium`
    margin-top: 2rem;
       `}
`;
const MenuBtn = styled.button`
  display: none;
  width: 2rem;
  height: 2rem;
  border: none;
  background: transparent;
  & svg {
    width: 100%;
    height: 100%;
    color: #ffffff;
  }
  ${media.medium`
   display: block;
       `}
`;
