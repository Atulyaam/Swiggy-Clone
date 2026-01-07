import { dineoutRestaurants } from "../Utils/RestaurentData";
import DineCard from "./DineCard";

export default function DineOption() {
  return (
    <div className="w-[80%] mx-auto mt-20 mb-20">
      <p className="text-xl font-bold">Discover best Restaurent on Dinout</p>
      <div className="flex flex-nowrap overflow-x-auto mt-5 gap-5 ">
        {dineoutRestaurants.map((data) => {
          return <DineCard key={data?.info?.id} data={data}></DineCard>;
        })}
      </div>
    </div>
  );
}
