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
  width: 1.5rem;
  height: 1.5rem;
  font-size: 1rem;
  color: ${colours.white};
  position: absolute;
  transform: translate(1rem, -0.5rem);
`

const CartButton = () => {
  return (
    <Fab variant="extended" style={{ width: "5rem" }}>
      <ShoppingCartIcon />
      <StyledBadge>2</StyledBadge>
    </Fab>
  )
}

export default CartButton