import styled from 'styled-components';
import { useEffect, useState } from 'react';
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
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/Skills')
      .then((res) => {
        if (!res.ok) {
          throw Error('찾을 수 없음');
        }
        return res.json();
      })
      .then((data) => {
        setSkills(data);
      })
      .catch((err) => console.log(err));
  }, []);
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
  /* height: 100vh; */

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b2cae0;
`;
const SkillsContents = styled.div`
  width: 100%;
  max-width: 1140px;
  padding: 60px 35px;
  .title {
    h2 {
      width: 330px;
      padding: 50px 40px;
      font-size: 2.5rem;
      color: #eb8e6c;
    }
  }
  .strongFlex {
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    .skillsBox {
      margin: 10px;
      border: 0.15rem solid transparent;
      border-radius: 40px;
      background-image: linear-gradient(#b2cae0, #b2cae0),
        linear-gradient(to right, #fd7e20, #588fc8);
      background-origin: border-box;
      background-clip: content-box, border-box;
    }
    .strongSkill {
      padding: 10px 20px;
      color: #fb803d;
    }
  }
`;
