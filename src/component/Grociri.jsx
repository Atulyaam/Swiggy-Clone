import GrociriCard from "./Grociricard";
import { imageInfoShop } from "../Utils/ShopGroci.js";

export default function OptionGrociri() {
  return (
    <div className="mt-20 w-[80%] container mx-auto">
      <h1 className="text-2xl font-bold mx-0 my-0">
        Shop Groceries from Instamart
      </h1>
      <div className="flex flex-nowrap container mx-auto overflow-x-auto mt-5 gap-5">
        {imageInfoShop.map((data) => {
          return <GrociriCard key={data.id} data={data}></GrociriCard>;
        })}
      </div>
    </div>
  );
}
