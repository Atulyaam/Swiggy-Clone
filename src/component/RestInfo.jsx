export default function RestInfo({restData}){
  

  return (
    <>
      <div className="flex justify-between w-full mb-2 pb-2">
        <div className="w-[70%]">
          <p className="text-2xl text-gray-700 font-semibold mb-1">
            {restData?.name}
          </p>
          <p className="text-xl">{"₹ " + restData?.defaultPrice / 100}</p>
          <span className="text-green-700">
            {restData?.ratings?.aggregatedRating?.rating}
          </span>

          <span>
            {" (" + restData?.ratings?.aggregatedRating?.ratingCountV2 + ")"}
          </span>

          <p>{restData?.description}</p>
        </div>
        <div className="w-[20%] relative">
          <img
            className="w-full h-36 object-cover rounded-2xl"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
              restData?.imageId
            }
            alt=""
          />
          <button className="absolute bottom-1 left-20 rounded-xl text-2xl text-green-600  px-4 py-2 shadow-md border-white bg-white ">
            ADD
          </button>
        </div>
      </div>

      <hr className="mb-6 mt-2"></hr>
    </>
  );

}