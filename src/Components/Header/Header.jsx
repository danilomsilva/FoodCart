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
  padding: 1rem 2rem 1.5rem;
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
      <Box m={-1}>
        <img
          src="https://images.unsplash.com/photo-1558030089-02acba3c214e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
          alt="main-food"
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        />
      </Box>
    </>
  )
}
export default HeaderBar
