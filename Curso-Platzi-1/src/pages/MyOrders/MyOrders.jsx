import React from "react";
import {Link} from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import OrdersCard from "../../components/OrdersCard/OrdersCard";
import useShoppingCard from "../../hooks/useShoppingCard";
export default function MyOrders() {
  const {orderProducts} = useShoppingCard();
  
  return (
    <Layout>
      <div className="flex w-80 items-center justify-center relative mb-5">
        <h1 className="font-medium text-xl">My Orders</h1>
      </div>
      {orderProducts.map((item, index) => (
        <Link to={`/myOrders/${index}`} key={index}>
          <OrdersCard
            date={item.date}
            totalPrice={item.totalPrice}
            totalProducts={item.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
}
