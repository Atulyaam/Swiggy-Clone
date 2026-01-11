import { useSelector } from "react-redux";

export default function RestHeader() {
  const counter = useSelector((state) => {
    return state.cartSlice.items;
  });

  return (
    <div className="container mx-auto py-4 px-8 bg-gray-200 text-5xl flex justify-between items-center">
      <div>
        <p className="text-orange-600 font-bold">Swiggy</p>
      </div>
      <div>
        <p> Cart {`${counter.length}`} </p>
      </div>
    </div>
  );
}
