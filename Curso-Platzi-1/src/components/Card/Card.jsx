import {CheckIcon, PlusIcon} from "@heroicons/react/24/solid";
import React from "react";
import useShoppingCard from "../../hooks/useShoppingCard";
export default function Card(props) {
  const {item} = props;

  const {
    count,
    setCount,
    openProductDetail,
    closeProductDetail,
    setProductToShow,
    setShoppingCar,
    shoppingCard,
    openCheckoitSideMenu,
  } = useShoppingCard();

  const showProductDetail = () => {
    openProductDetail();
    setProductToShow(item);
  };

  const addProductToShoppingCard = (event, data) => {
    event.stopPropagation();
    setCount(count + 1);
    setShoppingCar([...shoppingCard, data]);
    openCheckoitSideMenu();
    closeProductDetail();
  };

  const renderIcon = (id) => {
    const isInCart =
      shoppingCard.filter((product) => product.id === id).length > 0;

    if (isInCart) {
      return (
        <div className="absolute top-0 right-0 flex justify-center items-center bg-green-400  w-6 h-6 rounded-full m-2 p-1">
          <CheckIcon className="w-4 h-4 text-white" />
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => addProductToShoppingCard(event, item)}
        >
          <PlusIcon className="w-4 h-4 text-black" />
        </div>
      );
    }
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProductDetail()}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {item.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={item.images[0]}
          alt={item.title}
        />
        {renderIcon(item.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{item.title}</span>
        <span className="text-lg font-medium">${item.price}</span>
      </p>
    </div>
  );
}
