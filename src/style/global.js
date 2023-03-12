import styled from 'styled-components';

export const Input = styled.input`
  margin: 0 auto;
  width: 360px;
  height: 60px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid #fff;
`;

export const ADInput = styled(Input)`
  color: #f79489;
  background-color: #fefcfb;
  border: 1px solid #fadcd9;
  padding-left: 20px;

  ::placeholder{
    color: #f79489;
  }
  :focus{
    outline: none;
  }
`;

export const Title = styled.h2`
  color: #564e4e;
  font-size: 36px;
  font-weight: 500;
  margin: 80px 0 16px 80px;
`;

export const CenterTitle = styled(Title)`
  text-align: center;
`;

export const Content = styled.p`
  margin: 0 20px;
  margin-left: 80px;
  font-weight: 400;
  font-size: 18px;
  line-height: 200%;
`;
