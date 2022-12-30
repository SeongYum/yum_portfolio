import styled from 'styled-components';
import { IoCall, IoMail } from 'react-icons/io5';
function Footer() {
  return (
    <FooterContainer>
      <FooterContents>
        <div className="contectBox">
          <h3>How to Contact</h3>
          <div className="contectContents">
            <div>
              <IoCall /> 010-3831-6930
            </div>
            <div
              className="mail"
              onClick={() => window.open('mailto: dbal6930@gmail.com')}
              aria-hidden="true"
            >
              <IoMail />
              dbal6930@gmail.com
            </div>
          </div>
        </div>
        <div className="copyRight">
          <h2>SEONG YU MI</h2>
          <p>© 2022. Seong Yu mi. All rights reserved.</p>
        </div>
      </FooterContents>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  background-color: #d8a19f;
`;
const FooterContents = styled.header`
  padding: 40px 35px;
  margin: 0 auto;
  width: 100%;
  max-width: 1140px;
  color: #ffffff;
  h3 {
    font-size: 2rem;
    margin: 0;
  }
  .contectBox {
    display: flex;
    flex-direction: column;
    justify-content: last baseline;
    .contectContents {
      margin: 30px 0;
      font-size: 1.2rem;
      div {
        display: flex;
        margin: 20px 0;
        gap: 10px;
      }
      .mail {
        width: 250px;
        cursor: pointer;
        white-space: nowrap;
        :hover {
          transform: scale(1.07);
          transition: 0.5s;
        }
      }
    }
  }
  .copyRight {
    text-align: right;
    margin: 0;
    p {
      margin: 3px 0;
    }
  }
`;
