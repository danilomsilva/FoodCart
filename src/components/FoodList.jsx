import { data } from "../data"
import { Grid } from "@mui/material"
import FoodItem from "./FoodItem"

const FoodList = () => {
  return (
    <Grid
      container
      spacing={4}
      px={6}
      style={{ display: "flex", marginTop: "1rem" }}
    >
      {data?.map((item) => {
        return <FoodItem item={item} key={item.id} />
      })}
    </Grid>
  )
}

export default FoodList
