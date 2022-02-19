import React, { useContext, useState } from "react"
import {
  Box,
  Divider,
  Typography,
  DialogTitle,
  Dialog,
  Button,
  ButtonGroup,
  TextField,
} from "@mui/material"
import { CartContext } from "../App"

const CartModal = () => {
  const [qty, setQty] = useState(0)
  const ctx = useContext(CartContext)

  const handleChangeQty = (type, item) => {
    if (type === "plus") {
      setQty(qty + 1)
      ctx.handleAddItem({ ...item, amount: 1 })
    }
    if (type === "minus") {
      if (qty === 0) return
      setQty(qty - 1)
      ctx.handleRemoveItem(item.id)
    }
  }

  return (
    <Dialog onClose={ctx.handleCloseModal} open={ctx.openModal}>
      <DialogTitle>Check out your cart</DialogTitle>
      <Divider />
      {ctx.items.map((item, index) => {
        return (
          <Box key={item.id + index}>
            <Box mt={0} m={3} display="flex" gap="1rem">
              <Box>
                <img
                  src={item.imgUrl}
                  alt=""
                  style={{ width: "6rem", height: "6rem", objectFit: "cover" }}
                />
              </Box>

              <Box width="100%">
                <Typography>{item.title}</Typography>
                <Typography variant="caption">{item.description}</Typography>
                <Box display="flex" mt={2} alignItems="flex-end">
                  <ButtonGroup>
                    <Button
                      variant="contained"
                      onClick={() => handleChangeQty("minus", item)}
                    >
                      -
                    </Button>
                    <TextField
                      size="small"
                      sx={{ width: "2.5rem" }}
                      value={item.amount}
                    />
                    <Button
                      variant="contained"
                      onClick={() => handleChangeQty("plus", item)}
                    >
                      +
                    </Button>
                  </ButtonGroup>
                  <Typography flex="1" textAlign="right" variant="h5">
                    € {item.price}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Divider />
          </Box>
        )
      })}
      <Divider />
      <Box display="flex" gap="3rem" mx={3} my={2}>
        <Button variant="contained">Payment</Button>

        <Box flex="1" />
        <Typography variant="h5">Total: € {ctx.finalPrice}</Typography>
      </Box>
      <Divider />
    </Dialog>
  )
}

export default CartModal
