import styled from 'styled-components';
import Yumi from './../../img/yumiphoto.png';
import {
  IoCall,
  IoMail,
  IoPerson,
  IoLogoGithub,
  IoCalendarClear,
  IoMapSharp,
} from 'react-icons/io5';
function About() {
  return (
    <AboutContainer id="ABOUT ME">
      <AboutContents>
        <div className="title">
          <h2>ABOUT ME</h2>
        </div>
        <div className="introduction">
          <div className="photo">
            <img src={Yumi} alt="myphoto" />
          </div>
          <div className="writing">
            새로운 기술과 트렌드를 익히고 <Bold>도전하는 것</Bold>을 좋아합니다.
            {'\n'}
            <Bold>“백번의 생각보다 한 번의 행동이 낫다”</Bold> 저의 좌우명
            입니다. {'\n'}
            새로운 시도를 두려워하지 않는,
            <Bold>말보단 행동으로 실천하는 프론트엔드 개발자</Bold>가
            되겠습니다.
          </div>
        </div>
        <div className="information">
          <div className="name">
            <IoPerson />
            성유미
          </div>
          <div className="phone">
            <IoCall />
            010-3831-6930
          </div>
          <div
            className="mail"
            onClick={() => window.open('mailto: dbal6930@gmail.com')}
            aria-hidden="true"
          >
            <IoMail />
            dbal6930@gmail
          </div>
          <div className="birthday">
            <IoCalendarClear />
            1995.07.31
          </div>
          <div className="address">
            <IoMapSharp />
            서울특별시 관악구
          </div>
          <div
            className="git"
            onClick={() => window.open('https://github.com/SeongYum')}
            aria-hidden="true"
          >
            <IoLogoGithub />
            GitHub
          </div>
        </div>
      </AboutContents>
    </AboutContainer>
  );
}

export default About;

const AboutContainer = styled.div`
  padding: 120px 0;
`;
const AboutContents = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1140px;
  /* height: 90%; */
  border-radius: 3rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 65px 50px;
  .title {
    h2 {
      width: 330px;
      padding: 40px 40px 70px 40px;
      font-size: 2.5rem;
      background: linear-gradient(to right, #eead96, #8ba4bc);
      color: transparent;
      -webkit-background-clip: text;
    }
  }
  .introduction {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    .photo {
      padding: 10px;
      img {
        width: 250px;
      }
    }
    .writing {
      padding: 20px;
      white-space: pre-wrap;
      line-height: 40px;
      font-size: 1.1rem;
    }
  }

  .information {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 30px 40px;
    div {
      padding: 20px;
      width: 33.3333%;
      font-size: 1.15rem;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    svg {
      font-size: 1.9rem;
    }
    .mail,
    .git {
      cursor: pointer;
      :hover {
        color: #eead96;
      }
    }
  }
`;
const Bold = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  background: linear-gradient(to right, #eead96, #8ba4bc);
  color: transparent;
  -webkit-background-clip: text;
`;
