import React from 'react';
import styled from 'styled-components';

const ReviewCard = (props) => {
  return (
    <Wrapper>
      <p className='title'>{props.title}</p>
      <p className='content'>{props.content}</p>
      <Profile>
        <img src={props.img} />
        <p className='name'>{props.name}</p>
        <p className='job'>{props.job}</p>
      </Profile>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 540px;
  height: 286px;
  margin-top: 110px;
  margin-bottom: 284px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  p {
    color: #564e4e;
    line-height: 200%;
  }
  .title {
    font-size: 24px;
    font-weight: 500;
  }
  .content {
    font-size: 18px;
    font-weight: 400;
  }
  .name {
    font-size: 18px;
    font-weight: 500;
    grid-area: name;
  }
  .job {
    font-weight: 300;
    font-size: 14px;
    grid-area: job;
  }
  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    object-position: 50% 25%;
    border-radius: 50%;
  }
`;

const Profile = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: 70px auto;
  grid-template-rows: 36px 28px;
  grid-template-areas:
    'img name'
    'img job';
`;

export default ReviewCard;
