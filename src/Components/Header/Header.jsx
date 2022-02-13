import React from "react"
import { colours } from "../../MUITheme"
import styled from "styled-components"
import CartButton from "./CartButton"
import { Typography, Box } from "@mui/material"

//styles
const StyledHeaderBar = styled(Box)`
  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: center;
  padding: 1rem 3rem;
  background-color: ${colours.red};
  color: ${colours.white};
`

const HeaderBar = () => {
  return (
    <>
      <StyledHeaderBar m={-1}>
        <Typography variant="h5">FoodApp React</Typography>
        <CartButton />
      </StyledHeaderBar>
    </>
  )
}
export default HeaderBar
