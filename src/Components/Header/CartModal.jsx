import React, { useContext } from "react"
import { Box, Divider, Typography } from "@mui/material"
import { cartItemsContext } from "../../App"

import DialogTitle from "@mui/material/DialogTitle"
import Dialog from "@mui/material/Dialog"

const CartModal = () => {
  const ctx = useContext(cartItemsContext)

  const totalPrice = ctx.cartItems.reduce((obj, currentValue) => {
    return (obj += currentValue.price * currentValue.amount)
  }, 0)

  console.log(ctx.cartItems)

  return (
    <Dialog onClose={ctx.handleCloseModal} open={ctx.openModal}>
      <DialogTitle>Check out your cart</DialogTitle>
      <Divider />
      {ctx.cartItems.map((item) => {
        return (
          <>
            <Box key={item.id} mt={0} m={3} display="flex" gap="1rem">
              <img
                src={item.imgUrl}
                alt=""
                style={{ width: "6rem", height: "6rem", objectFit: "cover" }}
              />
              <Box>
                <Typography>{item.title}</Typography>
                <Typography variant="caption">{item.description}</Typography>
                <Box display="flex" mt={2} alignItems="flex-end">
                  <Typography> Qty:</Typography>
                  <Typography> {item.amount}</Typography>
                  <Typography flex="1" textAlign="right" variant="h5">
                    € {item.price}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Divider />
          </>
        )
      })}
      <Divider />
      <Box display="flex" gap="3rem" mx={3} my={2}>
        <Box flex="1" />
        <Typography variant="h5">Total: € {totalPrice}</Typography>
      </Box>
    </Dialog>
  )
}

export default CartModal
