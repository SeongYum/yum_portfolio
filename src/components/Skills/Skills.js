import styled from 'styled-components';
import { skills } from '../../data/data';
import SkillsBox from './SkillsBox';

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
  .title {
    h2 {
      width: 330px;
      padding: 50px 40px;
      font-size: 2.5rem;
      color: #eb8e6c;
      text-shadow: 4px 4px 0px #00a59b;
    }
  }
  .strongFlex {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
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
    }
  }
`;
