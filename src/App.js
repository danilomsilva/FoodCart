import { useState } from "react"
import { Box } from "@mui/material"
import Header from "./components/Header/Header"
// import backgroundImage from "./img/backgroundImage.jpeg"
import FoodList from "./components/FoodList/FoodList"
import CartModal from "./components/Header/CartModal"
import { createContext } from "react"

export const cartItemsContext = createContext()

function App() {
  const [openModal, setOpenModal] = useState(false)
  const [cartItems, setCartItems] = useState([])

  // sum of all items added to cart
  let amountTotal = 0
  cartItems.map((item) => (amountTotal += item.amount))

  return (
    <cartItemsContext.Provider
      value={{
        amountTotal,
        openModal,
        handleOpenModal: setOpenModal(true),
        handleCloseModal: setOpenModal(false),
        handleAddItem: (item) =>
          setCartItems((prev) => {
            return [...prev, item]
          }),
      }}
    >
      <Header />
      <Box
        mt={1}
        mx={-1}
        style={{
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        <FoodList />
      </Box>
      <CartModal />
    </cartItemsContext.Provider>
  )
}

export default App
