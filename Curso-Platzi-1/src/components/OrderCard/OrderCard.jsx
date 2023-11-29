import {XMarkIcon} from "@heroicons/react/24/solid";
import React from "react";

export default function OrderCard(props) {
  const {id, title, image, price, handleDelete} = props;
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            src={image}
            alt={title}
            className="w-full h-full rounded-lg object-cover"
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-ls font-medium">{price}</p>
        {handleDelete && (
          <XMarkIcon
            className="w-6 h-6 text-black cursor-pointer"
            onClick={() => handleDelete(id)}
          />
        )}
      </div>
    </div>
  );
}
