import { useState } from "react";
import RestInfo from "./RestInfo";

export default function MenuCard({ data, Foodselected }) {
  const [isOpen, setIsOpen] = useState(true);

  if (!data) return null;

  if ("categories" in data) {
    return (
      <div className="w-full">
        <p className="text-3xl font-bold">{data?.title}</p>
        <div>
          {data?.categories?.map((items) => {
            return <MenuCard key={items?.title} data={items} Foodselected={Foodselected} />;
          })}
        </div>
      </div>
    );
  }

  if (Foodselected === "veg") {
    const filteredItems = data?.itemCards?.filter(
      (food) => food.card.info.isVeg === 1
    );

    if (!filteredItems || filteredItems.length === 0) {
      return null;
    }

    return (
      <div className="w-full">
        <div className="flex justify-between text-2xl font-bold mb-4">
          <p>{data?.title}</p>
          <button
            className="text-3xl mr-10"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? "^" : "V"}
          </button>
        </div>
        {isOpen && (
          <div className="">
            {filteredItems?.map((items) => {
              return (
                <RestInfo
                  key={items.card.info.id}
                  restData={items.card.info}
                ></RestInfo>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  if (Foodselected === "non-veg") {
    const filteredItems = data?.itemCards?.filter(
      (food) => food.card.info.isVeg === 0 || !food.card.info.isVeg
    );

    if (!filteredItems || filteredItems.length === 0) {
      return null;
    }

    return (
      <div className="w-full">
        <div className="flex justify-between text-2xl font-bold mb-4">
          <p>{data?.title}</p>
          <button
            className="text-3xl mr-10"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? "^" : "V"}
          </button>
        </div>
        {isOpen && (
          <div className="">
            {filteredItems?.map((items) => {
              return (
                <RestInfo
                  key={items.card.info.id}
                  restData={items.card.info}
                ></RestInfo>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex justify-between text-2xl font-bold mb-4">
        <p>{data?.title}</p>
        <button
          className="text-3xl mr-10"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? "^" : "V"}
        </button>
      </div>
      {isOpen && (
        <div className="">
          {data?.itemCards?.map((items) => {
            return (
              <RestInfo
                key={items.card.info.id}
                restData={items.card.info}
              ></RestInfo>
            );
          })}
        </div>
      )}
    </div>
  );
}
