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
  Rating,
} from "@mui/material"
import { CartContext } from "../App"

const CartModal = () => {
  const [qty, setQty] = useState(0)
  const ctx = useContext(CartContext)
  const hasItems = !!ctx.items.length

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
      <DialogTitle>{hasItems ? "Check out your cart" : "Ooops!"}</DialogTitle>
      <Divider />
      {!hasItems && (
        <Box m={3} width="20rem">
          <Typography>Your cart is empty. </Typography>
        </Box>
      )}
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
                <Box display="flex">
                  <Typography flex="1">{item.title}</Typography>
                  <Box marginLeft="4rem">
                    <Rating
                      name="simple-controlled"
                      value={item.stars}
                      size="small"
                      readOnly={true}
                    />
                  </Box>
                </Box>

                <Typography variant="caption">{item.description}</Typography>
                <Box display="flex" mt={2}>
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
                  <Typography
                    flex="1"
                    textAlign="right"
                    variant="h5"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    € {item.price.toFixed(2)}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Divider />
          </Box>
        )
      })}
      <Divider />
      {hasItems && (
        <>
          <Box display="flex" mx={3} my={2}>
            <Button
              variant="contained"
              disabled={!ctx.items.length}
              onClick={() =>
                alert("Payment feature still needs to be implemented.")
              }
            >
              Payment
            </Button>

            <Box flex="1" />
            <Typography variant="h5">
              Total: € {ctx.finalPrice.toFixed(2)}
            </Typography>
          </Box>
          <Divider />
        </>
      )}
    </Dialog>
  )
}

export default CartModal
