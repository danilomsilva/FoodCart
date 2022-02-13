import { Box } from "@mui/material"
import HeaderBar from "./components/Header/Header"
// import backgroundImage from "./img/backgroundImage.jpeg"
import FoodList from "./components/FoodList/FoodList"

function App() {
  return (
    <>
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
        <FoodList />
      </Box>
    </>
  )
}

export default App
