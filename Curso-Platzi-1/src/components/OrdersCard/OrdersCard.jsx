import {ChevronRightIcon} from "@heroicons/react/24/solid";
import React from "react";

export default function OrdersCard(props) {
  const {totalPrice, totalProducts, date} = props;

  let dateToShow = new Date(date).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-80 flex justify-between items-center mb-4 rounded-lg p-4 border border-black">
      <p className="flex justify-between w-full">
        <div className="flex flex-col">
          <span className="font-light">{dateToShow}</span>
          <span className="font-light">{totalProducts} articles</span>
        </div>
        <div className="flex  items-center gap-2">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon className="w-6 h-6 text-black" />
        </div>
      </p>
    </div>
  );
}
