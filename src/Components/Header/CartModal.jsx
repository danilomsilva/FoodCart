import React, { useContext } from "react"
import { Modal, Paper } from "@mui/material"
import { cartItemsContext } from "../../App"

const CartModal = () => {
  const ctx = useContext(cartItemsContext)

  return (
    <Modal open={ctx.openModal} onClose={ctx.handleCloseModal}>
      <Paper justifySelf="flex">test</Paper>
    </Modal>
  )
}

export default CartModal
