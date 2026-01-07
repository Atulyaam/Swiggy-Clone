export default function RestCard({ data }) {
  if (!data || !data.info) return null;

  const imageId = data.info.cloudinaryImageId;
  const name = data.info.name;
  const rating = data.info.avgRating;

  return (
    <div className="flex flex-col w-48 flex-none">
      <img
        src={"https://media-assets.swiggy.com/swiggy/image/upload/" + imageId}
        alt={name}
        className="w-48 h-40 object-cover rounded"
      />
      <p className="font-semibold mt-2 truncate">{name}</p>
      <p className="text-yellow-500">⭐ {rating || "N/A"}</p>
    </div>
  );
}
