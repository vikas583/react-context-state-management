import { Fragment } from "react";
import AvailableMeals from "../AvailableMeals/AvailableMeals";
import MealsSummary from "../Summary/MealsSummary";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
