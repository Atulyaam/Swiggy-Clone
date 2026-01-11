import { useCallback } from "react";
import {
  addItems,
  IncrementItems,
  DecrementItmes,
} from "../../Stores/cardSlicer.jsx";

import { useDispatch, useSelector, shallowEqual } from "react-redux";

export default function RestInfo({ restData }) {
  const dispatch = useDispatch();
  const itemId = String(restData?.id);

  // Get the entire items array - this will trigger re-render on any change
  const cartItems = useSelector((state) => state.cartSlice.items, shallowEqual);

  // Calculate count from the current cartItems
  const count =
    cartItems.find((item) => String(item.id) === itemId)?.quantity || 0;

  const handelAddItem = useCallback(() => {
    dispatch(addItems({ ...restData, id: itemId }));
  }, [itemId, restData, dispatch]);

  const handelePlus = useCallback(() => {
    dispatch(IncrementItems({ id: itemId }));
  }, [itemId, dispatch]);

  const handelMinus = useCallback(() => {
    dispatch(DecrementItmes({ id: itemId }));
  }, [itemId, dispatch]);

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

        <div className="w-[20%] relative h-42">
          <img
            className="w-full h-36 object-cover rounded-2xl"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
              restData?.imageId
            }
            alt=""
          />

          {count === 0 ? (
            <button
              onClick={() => {
                handelAddItem();
              }}
              className="absolute bottom-1 left-20 rounded-xl text-2xl text-green-600  px-4 py-2 shadow-md border-white bg-white "
            >
              ADD
            </button>
          ) : (
            <div className="absolute bottom-1 left-20 flex gap-3 text-2xl text-green-600 px-6 py-2 shadow-md border border-white bg-white rounded-2xl">
              <button
                onClick={() => {
                  handelePlus();
                }}
              >
                +
              </button>
              <span>{count}</span>
              <button
                onClick={() => {
                  handelMinus();
                }}
              >
                -
              </button>
            </div>
          )}
        </div>
      </div>

      <hr className="mb-6 mt-2"></hr>
    </>
  );
}
