import { useContext } from 'react';
import { colours } from '../MUITheme';
import { Box, Fab } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from 'styled-components';
import { CartContext } from '../App';

const StyledBadge = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colours.red};
  border-radius: 4rem;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 1rem;
  color: ${colours.white};
  position: absolute;
  transform: translate(1rem, -0.5rem);
`;

const CartButton = () => {
  const ctx = useContext(CartContext);

  const totalItems = ctx.items.reduce((obj, currentValue) => {
    return obj + currentValue.amount;
  }, 0);

  return (
    <Fab
      variant='extended'
      sx={{ width: '5rem', borderRadius: '0.5rem' }}
      onClick={ctx.handleOpenModal}
    >
      <ShoppingCartIcon sx={{ transform: 'translateX(-0.15rem)' }} />
      <StyledBadge>{totalItems}</StyledBadge>
    </Fab>
  );
};

export default CartButton;
