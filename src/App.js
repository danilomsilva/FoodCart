import { useState } from "react"
import { Box } from "@mui/material"
import Header from "./components/Header/Header"
import FoodList from "./components/FoodList/FoodList"
import CartModal from "./components/Header/CartModal"
import { createContext } from "react"

export const cartItemsContext = createContext()

function App() {
  const [openModal, setOpenModal] = useState(false)
  const [cartItems, setCartItems] = useState([])

  return (
    <cartItemsContext.Provider
      value={{
        cartItems,
        openModal,
        handleOpenModal: () => setOpenModal(true),
        handleCloseModal: () => setOpenModal(false),
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
