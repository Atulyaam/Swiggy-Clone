import { useEffect, useState } from "react";
import RestCard from "./RestCard";

export default function Restaurent() {
  const [Restdata, setRestdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchdata() {
      try {
        setLoading(true);
        // Fetch from your own backend instead of using CORS proxies
        const response = await fetch("http://localhost:3001/api/restaurants");

        if (!response.ok) {
          throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        const restaurants =
          data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];

        setRestdata(restaurants);
        setError(null);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(
          "Failed to fetch restaurants. Make sure backend server is running on port 3001"
        );
        setRestdata([]);
      } finally {
        setLoading(false);
      }
    }
    fetchdata();
  }, []);

  console.log(Restdata);

  return (
    <div className="w-[80%] mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-5">All Restaurants</h2>
      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && Restdata.length === 0 && (
        <p className="text-gray-500">No restaurants found</p>
      )}
      <div className="flex flex-nowrap overflow-x-auto gap-4">
        {Restdata.map((data) => {
          if (!data || !data.info) return null;
          return <RestCard key={data.info.id} data={data}></RestCard>;
        })}
      </div>
    </div>
  );
}
