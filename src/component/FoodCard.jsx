export default function FoodCard({fooddata}){
  return (
    <>
      <a href={fooddata?.action.link}>
        <img
          className="w-36 h-40 object-cover"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
            fooddata?.imageId
          }
          alt=""
        />
      </a>
    </>
  );
}