import {ChevronLeftIcon} from "@heroicons/react/24/solid";
import React from "react";
import {Link, useParams} from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import OrderCard from "../../components/OrderCard/OrderCard";
import useShoppingCard from "../../hooks/useShoppingCard";

export default function MyOrder() {
  const {orderProducts} = useShoppingCard();

  const params = useParams();
  const indexOrder = Number(params.id);

  return (
    <Layout>
      <div className="flex w-80 items-center justify-center relative mb-5">
        <Link to={"/myOrders"} className="absolute left-0">
          <ChevronLeftIcon className="w-6 h-6 text-black cursor-pointer" />
        </Link>
        <h1>My order</h1>
      </div>
      <div className="flex flex-col w-80">
        {isNaN(indexOrder)
          ? orderProducts
              ?.slice(-1)[0]
              .products.map((item) => (
                <OrderCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.images[0]}
                  price={item.price}
                />
              ))
          : orderProducts?.[indexOrder]?.products.map((item) => (
              <OrderCard
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.images[0]}
                price={item.price}
              />
            ))}
      </div>
    </Layout>
  );
}
