import { data } from "../../data"
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
      {data?.map((food) => {
        return <FoodItem data={food} key={food.id} />
      })}
    </Grid>
  )
}

export default FoodList
