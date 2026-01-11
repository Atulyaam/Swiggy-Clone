import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { MenuInfo } from "../Utils/FaultyApi.js";
import RestInfo from "./RestInfo";

export default function SearchFood() {
  const [food, setFood] = useState("");
  const [RestData, setRestData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const tempdata = MenuInfo;

      const filterdata = tempdata?.filter((items) => {
        return "title" in items.card.card;
      });
      setRestData(filterdata);
    }
    fetchData();
  }, [id]);

  const filteredFood = useMemo(() => {
    const searchResults = [];
    const addedIds = new Set();

    if (food.trim() !== "") {
      RestData.forEach((menuSection) => {
        const items = menuSection?.card?.card?.itemCards;
        if (items) {
          items.forEach((item) => {
            const itemName = item?.card?.info?.name?.toLowerCase();
            const itemId = item?.card?.info?.id;

            if (
              itemName?.includes(food.toLowerCase()) &&
              !addedIds.has(itemId)
            ) {
              searchResults.push(item.card.info);
              addedIds.add(itemId);
            }
          });
        }
      });
    }

    return searchResults;
  }, [food, RestData]);

  return (
    <div className="w-[80%] mx-auto mt-20">
      <input
        className="w-full pl-10 py-4 text-2xl bg-gray-200 rounded-2xl "
        placeholder="Search here"
        value={food}
        onChange={(e) => {
          setFood(e.target.value);
        }}
      />

      <div className="mt-10">
        {filteredFood.length > 0 ? (
          filteredFood.map((item) => <RestInfo key={item.id} restData={item} />)
        ) : food.trim() !== "" ? (
          <p className="text-center text-gray-500 text-xl mt-10">
            No results found
          </p>
        ) : null}
      </div>
    </div>
  );
}
