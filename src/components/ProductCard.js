import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const ProductCard = (props) => {
  return (
    <Wrapper>
      <Top>
        <img src={props.img} />
      </Top>
      <Bottom>
        <p className='prodName'>Product</p>
        <p className='prodCate'>Category</p>
        <p className='star'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </p>
        <p className='prodPrice'>IDR {props.price}</p>
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const Top = styled.div`
  width: 400px;
  height: 425px;
  background: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bottom = styled.div`
margin: 20px 0 167px 20px;
p{
  font-weight: 400;
  font-size: 14px;
  color: #564e4e;
}
.prodName {
  font-size: 18px;
}
.prodCate{
  color: #c4c4c4;
  margin: 10px 0;
}
.star{
  color: #ffcb45;
}
.prodPrice{
  margin-top: 20px;
}
`;

export default ProductCard;
