import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Simmor from "./Simmer";
import { dineoutRestaurants } from "../Utils/RestaurentData.js";

export default function Restaurent() {
  const [Restdata, setRestdata] = useState([]);

  useEffect(() => {
    // Simulate network delay to show shimmer effect
    setTimeout(() => {
      setRestdata(dineoutRestaurants);
    }, 1000);
  }, []);

  if (Restdata.length === 0) return <Simmor></Simmor>;

  return (
    <div className="w-[80%] mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-5">All Restaurants</h2>
      <div className="flex flex-wrap gap-4">
        {Restdata.map((data) => {
          if (!data || !data.info) return null;
          return <RestCard key={data.info.id} data={data}></RestCard>;
        })}
      </div>
    </div>
  );
}
