import {XMarkIcon} from "@heroicons/react/24/solid";
import React from "react";
import useShoppingCard from "../../hooks/useShoppingCard";
import OrderCard from "../OrderCard/OrderCard";
import "./styles.css";

import {Link} from "react-router-dom";
import {totalPrice} from "../../utils/TotalPrice";
export default function CheckoutSideMenu() {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoitSideMenu,
    shoppingCard,
    setShoppingCar,
    setCount,
    orderProducts,
    setOrderProducts,
    setSearchByTitle,
  } = useShoppingCard();

  const handleDelete = (id) => {
    const filteredProducts = shoppingCard.filter(
      (product) => product.id !== id
    );

    setShoppingCar(filteredProducts);
    setCount(filteredProducts.length);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: new Date(),
      products: shoppingCard,
      totalProducts: shoppingCard.length,
      totalPrice: totalPrice(shoppingCard),
    };

    setOrderProducts([...orderProducts, orderToAdd]);
    setShoppingCar([]);
    setCount(0);
    setSearchByTitle(null);
  };

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? "flex" : "hidden"
      }  checkout-side-menu  flex-col fixed bg-white right-0 border border-black rounded-lg`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xñ">My Order</h2>
        <div>
          <XMarkIcon
            className="w-6 h-6 text-black cursor-pointer"
            onClick={() => closeCheckoitSideMenu()}
          />
        </div>
      </div>

      <div className="px-6 overflow-y-scroll flex-1">
        {shoppingCard.map((item) => (
          <OrderCard
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.images[0]}
            price={item.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>

      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-6">
          <span className="font-light">Total:</span>
          <span className="font-medium text-xl">
            ${totalPrice(shoppingCard)}
          </span>
        </p>
        <Link to="/myOrders/last">
          <button
            className="w-full bg-black py-3 text-white rounded-lg "
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
}
