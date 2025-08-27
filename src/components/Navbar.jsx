import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(90deg, #4e54c8, #8f94fb);
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  z-index: 1000;
  padding: 0.75rem 0;
`;

const NavRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const NavTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 1px;
`;

const NavButton = styled.button`
  background: #fff;
  color: #4e54c8;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1.2rem;
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: 600;
  box-shadow: 0 1px 4px rgba(0,0,0,0.07);
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #4e54c8;
    color: #fff;
  }
  &.danger {
    background: #ff4d4f;
    color: #fff;
    &:hover {
      background: #d9363e;
    }
  }
`;


export default function Navbar({ onCartClick, onClearCart, cartCount }) {
  return (
    <Nav>
      <NavRow>
        <NavTitle>Mega Fruit Market</NavTitle>
        <div>
          <NavButton type="button" onClick={onCartClick}>
            Cart ({cartCount})
          </NavButton>
          <NavButton className="danger" onClick={onClearCart}>Clear Cart</NavButton>
        </div>
      </NavRow>
    </Nav>
  );
}
