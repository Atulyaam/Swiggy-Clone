import { Link } from "react-router-dom";

export default function RestCard({ data }) {
  const info = data?.info || {};
  const imgId = info.cloudinaryImageId;
  const restaurantId = info.id;

  if (!imgId || !restaurantId) return null;

  return (
    <Link
      to={`/city/mumbai/${restaurantId}`}
      className="block max-w-70 transform transition duration-300 ease-in-out hover:scale-105"
    >
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imgId}`}
        className="w-70 h-45 object-cover rounded-xl"
        alt={info.name || "Restaurant image"}
      />
      <div className="w-[95%] mx-auto mt-3">
        <div className="font-bold text-xl">{info.name}</div>

        <div className="flex gap-2 ">
          <span className="text-lg">{info.avgRating}</span>
          <span className="text-lg font-semibold ">{info?.sla?.slaString}</span>
        </div>
        <div className="text-gray-500 text-xl mt-1 h-7 overflow-hidden">
          {info.cuisines?.join(" ")}
        </div>
      </div>
    </Link>
  );
}
