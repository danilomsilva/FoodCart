import { Box, Fab } from "@mui/material"
import { colours } from "../../MUITheme"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import styled from "styled-components"

const StyledBadge = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(0.4rem);
  background-color: ${colours.red};
  border-radius: 4rem;
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  color: ${colours.white};
`

const CartButton = () => {
  return (
    <Fab variant="extended">
      <ShoppingCartIcon />
      <StyledBadge>2</StyledBadge>
    </Fab>
  )
}

export default CartButton
