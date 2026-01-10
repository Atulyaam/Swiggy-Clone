import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Simmor from "./Simmer";

export default function Restaurent() {
  const [Restdata, setRestdata] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";

      const url =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0748&lng=72.8856&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

      const response = await fetch(proxyServer + url);
      const data = await response.json();
      const restaurants =
        data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setRestdata(restaurants);
    }
    fetchdata();
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
