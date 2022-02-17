import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material"
import { useState } from "react"
import styled from "styled-components"

const Img = styled.img`
  height: 15rem;
  width: 100%;
  object-fit: cover;
`

const FoodItem = ({ data, handleAddItem }) => {
  const [qty, setQty] = useState(0)

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
    <Grid item xs={4}>
      <Paper sx={{ overflow: "hidden", borderRadius: "0.5rem" }} elevation={6}>
        <Img src={data.imgUrl} alt="" />
        <Box display="flex" alignItems="center" px={2}>
          <Box flex="1" mt={1} mr={6} height="4rem">
            <Typography variant="h6">{data.title}</Typography>
            <Typography variant="caption">{data.description}</Typography>
          </Box>
          <Typography variant="h5">
            <b>€ {data.price}</b>
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
              handleAddItem({ ...data, amount: qty })
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
