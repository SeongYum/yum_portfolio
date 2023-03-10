import styled from 'styled-components';
import Yumi from './../../img/yumiphoto.png';
import media from './../../styles/media';
import { IoCall, IoMail, IoPerson, IoLogoGithub } from 'react-icons/io5';
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
            <Bold>“아무것도 하지 않으면 아무 일도 일어나지 않는다”</Bold> 저의
            좌우명 입니다. {'\n'}
            새로운 시도와 변화를 두려워하지 않는,{'\n'}
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
  ${media.medium`
  padding: 30px;
       `}
  .title {
    h2 {
      width: 330px;
      padding: 40px 40px 50px 40px;
      font-size: 2.5rem;
      background: linear-gradient(to right, #eead96, #8ba4bc);
      color: transparent;
      -webkit-background-clip: text;
      ${media.medium`
         width: 100%;
         text-align:center;
         font-size: 2.2rem;
         padding: 40px 30px 40px 30px;
       `}
      ${media.small`
         font-size: 1.9rem;
         padding: 20px 20px 30px 20px;
       `}
    }
  }
  .introduction {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    ${media.medium`
       flex-direction: column;
       `}
    .photo {
      padding: 15px;
      img {
        width: 250px;
        ${media.medium`
         width: 200px;
       `}
        ${media.small`
         width: 170px;
       `}
      }
      ${media.medium`
         padding: 0;
       `}
    }
    .writing {
      padding: 20px;
      white-space: pre-wrap;
      line-height: 3rem;
      font-size: 1.1rem;
      ${media.medium`
        text-align: center;
        font-size: 1rem;
        line-height: 2rem;
        padding: 20px;
       `}
      ${media.small`
         font-size: 0.9rem;
         line-height: 1.6rem;
         padding: 10px;
       `}
    }
  }

  .information {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 30px;
    ${media.medium`
        padding: 20px;
        padding-top: 0;
       `}
    ${media.small`
        padding: 10px;
        padding-top: 0;
       `}
    div {
      padding: 20px;
      width: 50%;
      font-size: 1.15rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      ${media.medium`
         width: 100%;
         font-size: 1.1rem;
         padding: 12px;
       `}
      ${media.small`
         font-size: 1rem;
         padding: 11px;
       `}
    }
    svg {
      font-size: 1.9rem;
      ${media.medium`
      font-size: 1.3rem;
       `}
      ${media.small`
       font-size: 1rem;
       `}
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
  ${media.medium`
        text-align: center;
        font-size: 1.12rem;
       `}
  ${media.small`
       font-size: 0.96rem;
       `}
`;
