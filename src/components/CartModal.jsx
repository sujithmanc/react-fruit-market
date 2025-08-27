const CartItemImg = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 6px;
  margin-right: 0.7rem;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
`;



import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

const ModalDialog = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(78,84,200,0.18);
  width: 90vw;
  max-width: 600px;
  padding: 0;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 2rem 1.2rem 1.5rem;
  background: linear-gradient(90deg, #4e54c8, #8f94fb);
  color: #fff;
`;

const ModalTitle = styled.h5`
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0;
`;

const CloseBtn = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.7rem;
  cursor: pointer;
  padding: 0 0.5rem;
`;

const ModalBody = styled.div`
  padding: 2rem 2rem 1.5rem 2rem;
`;

const CartList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
`;

const ShowCartItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 1.1rem;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1.2rem 2rem 1.5rem 2rem;
  background: #f7f8fa;
`;

const ModalButton = styled.button`
  background: linear-gradient(90deg, #4e54c8, #8f94fb);
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #4e54c8;
    color: #fff;
  }
  &.secondary {
    background: #e0e0e0;
    color: #333;
    &:hover {
      background: #bdbdbd;
      color: #222;
    }
  }
`;




export default function CartModal({ cart, isOpen, onClose, onOrderNow, onClearCart, onIncrement, onDecrement }) {
  if (!isOpen) return null;
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  return (
    <ModalOverlay>
      <ModalDialog>
        <ModalHeader>
          <ModalTitle>Cart</ModalTitle>
          <CloseBtn aria-label="Close" onClick={onClose}>&times;</CloseBtn>
        </ModalHeader>
        <ModalBody>
          <CartList>
            {cart.length === 0 ? (
              <div style={{ textAlign: "center", color: "#888", padding: "1.5rem 0" }}>Cart is empty.</div>
            ) : (
              cart.map((item) => (
                <ShowCartItem key={item.name}>
                  <span style={{ flex: 2, display: 'flex', alignItems: 'center' }}>
                    <CartItemImg src={item.image} alt={item.name} />
                    {item.name}
                  </span>
                  <span style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <ModalButton style={{ padding: '0 0.7rem', minWidth: 0 }} onClick={() => onDecrement(item.name)}>-</ModalButton>
                    {item.quantity}
                    <ModalButton style={{ padding: '0 0.7rem', minWidth: 0 }} onClick={() => onIncrement(item.name)}>+</ModalButton>
                  </span>
                  <span style={{ flex: 1 }}>₹{item.price}</span>
                  <span style={{
                    flex: 1,
                    fontWeight: 600,
                    color: '#4e54c8',
                    fontFamily: 'monospace',
                    textAlign: 'right',
                    display: 'inline-block',
                    minWidth: '70px'
                  }}>
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </span>
                </ShowCartItem>
              ))
            )}
          </CartList>
          <div style={{ textAlign: "right", fontWeight: 600, fontSize: "1.1rem", marginTop: "1.2rem" }}>
            Total price: ₹<span className="total-cart">{total}</span>
          </div>
        </ModalBody>
        <ModalFooter>
          <ModalButton className="secondary" onClick={onClose}>Close</ModalButton>
          <ModalButton onClick={onOrderNow} disabled={cart.length === 0}>Order now</ModalButton>
          <ModalButton className="secondary" onClick={onClearCart} disabled={cart.length === 0}>Clear Cart</ModalButton>
        </ModalFooter>
      </ModalDialog>
    </ModalOverlay>
  );
}
