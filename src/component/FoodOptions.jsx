import { imageGridCards } from "../Utils/FoodData";
import FoodCard from "./FoodCard";

export default function FoodOption() {
  console.log(imageGridCards);
  return (
    <>
      <div className="w-[80%] container mx-auto flex flex-wrap my-20">
        {imageGridCards.map((fooddata) => {
          return <FoodCard key={fooddata.id} fooddata={fooddata}></FoodCard>;
        })}
      </div>
    </>
  );
}
