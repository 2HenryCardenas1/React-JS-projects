import {ShoppingBagIcon} from "@heroicons/react/24/solid";
import React from "react";
import {NavLink} from "react-router-dom";
import useShoppingCard from "../../hooks/useShoppingCard";

export default function NavBar() {
  const activeClassName = "underline underline-offset-4";

  const {
    count,
    openCheckoitSideMenu,
    isCheckoutSideMenuOpen,
    closeCheckoitSideMenu,
    setSearchByCategory,
  } = useShoppingCard();

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-amber-200">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">Shopi</li>
        <li>
          <NavLink
            to="/"
            className={({isActive}) => (isActive ? activeClassName : null)}
            onClick={() => setSearchByCategory(null)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({isActive}) => (isActive ? activeClassName : null)}
            onClick={() => setSearchByCategory("clothes")}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({isActive}) => (isActive ? activeClassName : null)}
            onClick={() => setSearchByCategory("electronics")}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            className={({isActive}) => (isActive ? activeClassName : null)}
            onClick={() => setSearchByCategory("furnitures")}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            className={({isActive}) => (isActive ? activeClassName : null)}
            onClick={() => setSearchByCategory("toys")}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            className={({isActive}) => (isActive ? activeClassName : null)}
            onClick={() => setSearchByCategory("others")}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-start gap-3">
        <li className="text-black/60">h3c4@gmail.com</li>
        <li>
          <NavLink
            to="/myOrders"
            className={({isActive}) => (isActive ? activeClassName : null)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/account"
            className={({isActive}) => (isActive ? activeClassName : null)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signin"
            className={({isActive}) => (isActive ? activeClassName : null)}
          >
            Sign Out
          </NavLink>
        </li>
        <li className="flex justify-center items-center">
          <ShoppingBagIcon
            className="w-6 h-6 "
            onClick={
              isCheckoutSideMenuOpen
                ? closeCheckoitSideMenu
                : openCheckoitSideMenu
            }
          />
          <div>{count}</div>
        </li>
      </ul>
    </nav>
  );
}
