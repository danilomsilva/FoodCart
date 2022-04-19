import React from 'react';
import { colours } from '../MUITheme';
import { Typography, Box } from '@mui/material';
import styled from 'styled-components';
import CartButton from './CartButton';

//styles
const StyledHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background-color: ${colours.red};
  color: ${colours.white};
  box-shadow: 0 0 1rem ${colours.grey};
  position: fixed;
  width: 100%;
  z-index: 999;
  box-sizing: border-box;
`;

const Header = () => {
  return (
    <StyledHeader m={-1}>
      <Typography variant='h5'>FoodApp React</Typography>
      <CartButton />
    </StyledHeader>
  );
};
export default Header;
