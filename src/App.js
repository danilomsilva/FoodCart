import { createContext, useReducer, useState } from "react"
import { Box } from "@mui/material"
import Header from "./components/Header"
import FoodList from "./components/FoodList"
import CartModal from "./components/CartModal"

const initialCartState = {
  items: [],
  finalPrice: 0,
}

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newFinalPrice =
      state.finalPrice + action.item.amount * action.item.price

    const existingCartItemsIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    )

    const existingCartItem = state.items[existingCartItemsIndex]
    let updatedItems

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      }
      updatedItems = [...state.items]
      updatedItems[existingCartItemsIndex] = updatedItem
    } else {
      updatedItems = state.items.concat(action.item)
    }
    return {
      items: updatedItems,
      finalPrice: newFinalPrice,
    }
  }
  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    )
    const existingItem = state.items[existingCartItemIndex]
    const newFinalPrice = state.finalPrice - existingItem.price
    let updatedItems
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id)
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      }
      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem
    }
    return {
      items: updatedItems,
      finalPrice: newFinalPrice,
    }
  }
  return initialCartState
}

export const CartContext = createContext()

function App() {
  const [openModal, setOpenModal] = useState(false)
  const [cartItems, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  )

  return (
    <CartContext.Provider
      value={{
        items: cartItems?.items,
        finalPrice: cartItems?.finalPrice,
        openModal,
        handleOpenModal: () => setOpenModal(true),
        handleCloseModal: () => setOpenModal(false),
        handleAddItem: (item) => {
          dispatchCartAction({ type: "ADD_ITEM", item: item })
        },
        handleRemoveItem: (id) => {
          dispatchCartAction({ type: "REMOVE_ITEM", id: id })
        },
      }}
    >
      <Header />
      <Box
        mt={1}
        mx={-1}
        style={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        <FoodList />
      </Box>
      <CartModal />
    </CartContext.Provider>
  )
}

export default App
