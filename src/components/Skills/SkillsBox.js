import styled from 'styled-components';

function SkillsBox({ skill, idx }) {
  const isEven = (idx + 1) % 2 === 0;
  return (
    <Container>
      <div className={isEven ? 'left' : 'right'}>
        <SkillsContentsBox>
          <div className="skillstitle">{skill.title}</div>
          <div className="skillsContents">
            {skill.contents.map((content, idx) => (
              <div key={idx.toString()} className="contents">
                {content}
              </div>
            ))}
          </div>
        </SkillsContentsBox>
      </div>
    </Container>
  );
}

export default SkillsBox;

const Container = styled.div`
  margin: 40px 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .left {
    margin-left: 25.73rem;
  }
`;

const SkillsContentsBox = styled.div`
  background: rgba(255, 255, 255, 0.7);
  border-radius: 1.7rem;
  width: 38rem;
  padding: 1.7rem;
  margin: 0.5rem 0;
  .skillstitle {
    font-size: 1.3rem;
    padding-bottom: 10px;
    margin-bottom: 10px;
    font-weight: 600;
    color: #eb8e6c;
    border-bottom: 1.5px solid transparent;
    border-image: linear-gradient(to right, #fd7e20, #588fc8);
    border-image-slice: 1;
  }
  .skillsContents {
    .contents {
      line-height: 1.4rem;
    }
  }
`;
