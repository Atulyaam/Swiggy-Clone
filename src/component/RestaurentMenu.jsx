import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MenuCard from "./MenuCard";

import { MenuInfo } from "../Utils/FaultyApi.js";

export default function RestaurentMenu() {
  const { id } = useParams();
  const [RestData, setRestData] = useState([]);
  const [selected, setSelected] = useState(null);

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

  return (
    <div>
      <div className="w-[80%] mx-auto mt-20 mb-20">
        <Link target="_blank" to={`/city/mumbai/${id}/search`}>
          <p className="w-full text-center py-6 bg-gray-200 text-2xl rounded-2xl">
            Search for Dishesh
          </p>
        </Link>
      </div>

      <div className="w-[80%] mx-auto flex gap-10 mt-20 mb-10">
        <button
          className={`text-2xl py-2 px-8 mr-4 border rounded-xl ${
            selected === "veg" ? "bg-green-500" : "bg-white"
          }`}
          onClick={() => {
            setSelected(selected === "veg" ? null : "veg");
          }}
        >
          Veg
        </button>
        <button
          className={`text-2xl py-2 px-8 mr-4 border rounded-xl ${
            selected === "non-veg" ? "bg-red-600" : "bg-white"
          }`}
          onClick={() => {
            setSelected(selected === "non-veg" ? null : "non-veg");
          }}
        >
          Non-Veg
        </button>
      </div>

      <div className="w-[80%] mx-auto mt-20">
        {RestData.map((menuItms) => {
          return (
            <MenuCard
              key={menuItms.card.card.title}
              data={menuItms?.card?.card}
              Foodselected={selected}
            />
          );
        })}
      </div>
    </div>
  );
}
