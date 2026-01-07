export default function GrociriCard({ data }) {
  return (
    <>
      <div className="flex-none">
        <a href={data?.action?.link}>
          <img
            className="w-40 h-50 object-cover"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600/" +
              data?.imageId
            }
            alt={data?.action?.text}
          />
        </a>

        <div className="text-center font-semibold mt-2">{data?.action?.text}</div>
      </div>
    </>
  );
}
