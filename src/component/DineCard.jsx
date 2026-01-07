export default function DineCard({ data }) {
  const imageUrl = data?.info?.mediaFiles[0]?.url;

  return (
    <div className="max-w-sm flex-none">
      <a target="_blank" href={data?.cta?.link}>
        <div className="relative">
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${imageUrl}`}
            alt={data?.info?.name}
            className="w-80 h-60 object-cover"
          />

          {/* Gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent z-10" />

          {/* Text */}
          <p className="absolute bottom-2 left-2 text-xl text-white z-20">
            {data?.info?.name}
          </p>

          <p className="absolute bottom-2 right-2 text-xl text-white z-20">
            ⭐ {data?.info?.rating?.value}
          </p>
        </div>
      </a>
    </div>
  );
}
