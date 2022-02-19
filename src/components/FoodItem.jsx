import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  ButtonGroup,
  TextField,
} from "@mui/material"
import { useContext, useState } from "react"
import styled from "styled-components"
import { CartContext } from "../App"

const Img = styled.img`
  height: 15rem;
  width: 100%;
  object-fit: cover;
`

const FoodItem = ({ item }) => {
  const [qty, setQty] = useState(0)
  const ctx = useContext(CartContext)

  const handleChangeQty = (type) => {
    if (type === "plus") {
      setQty(qty + 1)
    }
    if (type === "minus") {
      if (qty === 0) return
      setQty(qty - 1)
    }
  }

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Paper sx={{ overflow: "hidden", borderRadius: "0.5rem" }} elevation={6}>
        <Img src={item.imgUrl} alt="" />
        <Box display="flex" alignItems="center" px={2}>
          <Box flex="1" mt={1} mr={6} height="4rem">
            <Typography variant="h6" style={{ whiteSpace: "nowrap" }}>
              {item.title}
            </Typography>
            <Typography variant="caption">{item.description}</Typography>
          </Box>
          <Typography variant="h5" style={{ whiteSpace: "nowrap" }}>
            <b>€ {item.price}</b>
          </Typography>
        </Box>
        <Box mt={2} px={1} p={2} display="flex">
          <Box flex="1">
            <ButtonGroup>
              <Button
                variant="contained"
                onClick={() => handleChangeQty("minus")}
              >
                -
              </Button>
              <TextField size="small" sx={{ width: "2.5rem" }} value={qty} />
              <Button
                variant="contained"
                onClick={() => handleChangeQty("plus")}
              >
                +
              </Button>
            </ButtonGroup>
          </Box>
          <Button
            variant="contained"
            disabled={qty === 0}
            onClick={() => {
              ctx.handleAddItem({ ...item, amount: qty })
              setQty(0)
            }}
          >
            Add item
          </Button>
        </Box>
      </Paper>
    </Grid>
  )
}

export default FoodItem
