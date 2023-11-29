import {XMarkIcon} from "@heroicons/react/24/solid";
import React from "react";
import useShoppingCard from "../../hooks/useShoppingCard";
import "./styles.css";

export default function ProductDetail() {
  const {viewDetail, closeProductDetail, productToShow} = useShoppingCard();
    return (
    <aside
      className={`${
        viewDetail ? "flex" : "hidden"
      }  product-detail  flex-col fixed bg-white right-0 border border-black rounded-lg`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xñ">Detail</h2>
        <div>
          <XMarkIcon
            className="w-6 h-6 text-black cursor-pointer"
            onClick={() => closeProductDetail()}
          />
        </div>
      </div>

      <figure className="px-6">
        <img
          src={productToShow.images ? productToShow.images[0] : null}
          alt=""
          className="w-full h-full rounded-lg"
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-lg">${productToShow.price}</span>
        <span className="font-light text-sm">{productToShow.title}</span>
        <span className="font-light text-sm">{productToShow.description}</span>
      </p>
    </aside>
  );
}
