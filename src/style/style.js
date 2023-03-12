import styled from 'styled-components';
import bgimg from '../img/bg-img.png';
import img1 from '../img/image-5.png';
import img2 from '../img/image-6.png';

export const Main = styled.section`
.center {
  text-align: center;
}
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding-top: 40px;
    color: #fff;

    .logo {
      width: 120px;
      height: 100%;
    }

    ul {
      display: flex;
      flex-direction: row;
      li {
        margin: 0 60px;
      }
    }
  }
  background-image: url(${bgimg});
  background-size: cover;
  background-position: 70%;
  top: 0;
  left: 0;
  width: 100vw;
  height: 1000px;
  max-height: 1000px;
  height: 80vh;

  h1,
  p {
    color: #fff;
    margin: 0 auto;
    text-align: center;
  }
  h1 {
    font-weight: 600;
    font-size: 48px;
    max-width: 40%;
    margin-top: 236px;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    max-width: 26%;
    margin-top: 40px;
    margin-bottom: 60px;
    line-height: 200%;
  }
`;

export const Choosing = styled.section`
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px;
  }
`;

export const Half = styled.div`
  overflow-y: scroll;
  .half-grid {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
  }

  .left {
    flex-basis: 50%;
  }

  .idea-right {
    flex-basis: 50%;
    max-height: 600px;
    max-width: 870px;
    background-image: url(${img1});
    background-size: cover;
    border-radius: 60px 60px 0 60px;
  }
  .ad-left {
    flex-basis: 50%;
    max-height: 600px;
    max-width: 900px;
    background-image: url(${img2});
    background-size: cover;
    border-radius: 60px 60px 60px 0;
  }

  .right {
    flex-basis: 50%;
    max-width: 810px;
    p {
      font-size: 18px;
      font-weight: 400;
      line-height: 200%;
      color: #564e4e;
    }
  }
`;

export const Product = styled.section`
  margin: 0 80px;
  max-width: 1760px;
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px;
  }
`;

export const Review = styled.section`
  height: 800px;
  height: 100%;
  background: linear-gradient(90deg, #faf5f2, #fff);
  .content {
    display: flex;
    flex-wrap: wrap;
    flex-basis: 33%;
    justify-content: space-around;
  }
`;

export const Footer = styled.footer`
  background: linear-gradient(-45deg, #000, #4b4b4b);
  section {
    padding-top: 100px;
    display: flex;
    justify-content: space-around;
    padding-bottom: 264px;
    h2 {
      color: #fadcd9;
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 20px;
    }
    li {
      font-size: 18px;
      font-weight: 400;
      margin-bottom: 24px;
    }
    a {
      color: #fff;
    }
  }
  p {
    color: #fff;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    padding-bottom: 40px;
  }
`;
