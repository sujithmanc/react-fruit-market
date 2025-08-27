
import styled from "styled-components";


const StyledCard = styled.div`
  margin-bottom: 32px;
  width: 20rem;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(78,84,200,0.10);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem 1.2rem 1rem;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 8px 32px rgba(78,84,200,0.18);
  }
`;

const StyledCardImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
`;

const CardBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0.5rem 0 0.2rem 0;
  color: #4e54c8;
`;

const CardText = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin: 0 0 0.7rem 0;
`;

const AddToCartBtn = styled.a`
  display: inline-block;
  background: linear-gradient(90deg, #4e54c8, #8f94fb);
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 1px 4px rgba(0,0,0,0.07);
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #4e54c8;
    color: #fff;
    text-decoration: none;
  }
`;


import React from "react";


export default function ProductCard({ image, title, price, onAddToCart }) {
  return (
    <StyledCard>
      <StyledCardImg src={image} alt={title + " image"} />
      <CardBlock>
        <CardTitle>{title}</CardTitle>
        <CardText>Price: ₹{price}</CardText>
        <AddToCartBtn as="button" type="button" onClick={onAddToCart}>
          Add to cart
        </AddToCartBtn>
      </CardBlock>
    </StyledCard>
  );
}
