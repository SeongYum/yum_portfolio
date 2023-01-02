import styled from 'styled-components';
import { skills } from '../../data/data';
import SkillsBox from './SkillsBox';
import media from './../../styles/media';

const strongList = [
  'React',
  'Javascript',
  'HTML',
  'CSS',
  'SCSS',
  'Styled',
  'git',
  'PostMan',
];

function Skills() {
  return (
    <Container id="SKILLS">
      <SkillsContents>
        <div className="title">
          <h2>SKILLS</h2>
        </div>
        <div className="strongFlex">
          {strongList.map((skill, idx) => (
            <div key={idx.toString()} className="skillsBox">
              <div className="strongSkill">{skill}</div>
            </div>
          ))}
        </div>
        <div className="skillsContents">
          {skills.map((item, idx) => (
            <SkillsBox {...{ item, idx }} key={idx.toString()} skill={item} />
          ))}
        </div>
      </SkillsContents>
    </Container>
  );
}

export default Skills;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b2cae0;
`;
const SkillsContents = styled.div`
  width: 100%;
  max-width: 1140px;
  padding: 70px 35px;
  ${media.medium`
      padding: 58px 30px;
       `}
  ${media.small`
      padding: 40px 20px;
       `}
  .title {
    h2 {
      width: 330px;
      padding: 50px 40px;
      font-size: 2.5rem;
      color: #eb8e6c;
      text-shadow: 4px 4px 0px #00a59b;
      ${media.medium`
         width: 290px;
         font-size: 2.2rem;
         padding: 40px 30px;
       `}
      ${media.small`
         font-size: 1.9rem;
         padding: 40px 30px;
       `}
    }
  }
  .strongFlex {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-size: 1.2rem;
    ${media.large`
       font-size:1.1rem;
    `}
    ${media.medium`
       font-size: 1rem;
       `}
    ${media.small`
       font-size: 0.9rem;
       `}
    .skillsBox {
      margin: 10px;
      border: 0.2rem solid transparent;
      border-radius: 40px;
      background-image: linear-gradient(#b2cae0, #b2cae0),
        linear-gradient(to right, #eead96, #8ba4bc);
      background-origin: border-box;
      background-clip: content-box, border-box;
    }
    .strongSkill {
      padding: 10px 20px;
      color: #fb803d;
      ${media.large`
      padding: 8px 17px;
      `}
      ${media.medium`
       padding: 7px 12px;
       `}
      ${media.small`
       padding: 5px 10px;
       `}
    }
  }
`;
