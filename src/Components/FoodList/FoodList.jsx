import { data } from "../../data"
import { Grid } from "@mui/material"
import FoodItem from "./FoodItem"

const FoodList = ({ handleAddItem }) => {
  return (
    <Grid
      container
      spacing={2}
      px={20}
      style={{ display: "flex", marginTop: "2rem" }}
    >
      {data?.map((food) => {
        return (
          <FoodItem data={food} key={food.id} handleAddItem={handleAddItem} />
        )
      })}
    </Grid>
  )
}

export default FoodList
