import { useState } from "react"
import { Box } from "@mui/material"
import HeaderBar from "./components/Header/Header"
// import backgroundImage from "./img/backgroundImage.jpeg"
import FoodList from "./components/FoodList/FoodList"
import { createContext } from "react"

export const cartItemsContext = createContext()

function App() {
  const [cartItems, setCartItems] = useState([])

  const handleAddItem = (item) => {
    setCartItems([...cartItems, { item: item }])
  }

  return (
    <cartItemsContext.Provider value={cartItems}>
      <HeaderBar />
      <Box
        mt={1}
        mx={-1}
        style={{
          // backgroundImage: `url(${backgroundImage})`,
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        <FoodList handleAddItem={handleAddItem} />
      </Box>
    </cartItemsContext.Provider>
  )
}

export default App
