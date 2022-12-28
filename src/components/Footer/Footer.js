import styled from 'styled-components';
import { IoCall, IoMail } from 'react-icons/io5';
function Footer() {
  return (
    <FooterContainer>
      <FooterContents>
        <div className="contectBox">
          <h2>How to Contact</h2>
          <ul>
            <li>
              <IoCall /> 010-3831-6930
            </li>
            <li>
              <IoMail /> dbal6930@gmail.com
            </li>
          </ul>
        </div>
        <div className="copyright">
          <h2>SEONG YU MI</h2>
          <p>@Copyright Kim hee su. All rights reserved.</p>
        </div>
      </FooterContents>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  background-color: #d8a19f;
  display: flex;
  justify-content: center;
`;
const FooterContents = styled.header`
  padding: 40px 35px;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  color: #ffffff;
  h2 {
    font-size: 2rem;
    margin: 0;
  }
  .contectBox {
    text-align: left;
    ul {
      padding: 0;
    }
    li {
      list-style: none;
      font-size: 1.2rem;
      margin: 15px 0;
    }
  }
  .copyright {
    text-align: right;
    margin: 0;
    p {
      margin: 0;
    }
  }
`;
