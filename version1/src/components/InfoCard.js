import React from 'react';
import styled from 'styled-components';

const InfoCard = (props) => {
  return (
    <Wrapper>
      <Icon>{props.icon}</Icon>
      <p className='title'>{props.title}</p>
      <p className='detail'>{props.detail}</p>
      <a href='#' className='more'>more info</a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 425px;
  height: 280px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0 20px;
  box-sizing: border-box;

  p {
    font-size: 18px;
    color: #564e4e;
    line-height: 200%;
  }
  .title {
    font-weight: 500;
    margin: 10px 0;
  }
  .detail{
    width: 300px;
    font-weight: 400;
  }
  .more {
    color: #f79489;
    text-decoration: none;
    margin: 20px 0;
  }

  :hover {
    border-radius: 10px;
    border: 1px solid #fadcd9;
    box-shadow: 0px 0px 8px #fadcd9;
  }

  & + & {
    margin-left: 20px;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  color: #f79489;
  font-size: 24px;
  background-color: #faf6f2;
  border-radius: 50%;
  margin-top: 16px;
`;

export default InfoCard;
