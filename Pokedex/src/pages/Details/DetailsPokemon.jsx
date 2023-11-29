import {ChevronLeftIcon, ChevronUpIcon} from "@heroicons/react/24/solid";
import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import logo from "../../assets/pokemon-logo.png";
import Details from "../../components/details/details";
import Layout from "../../components/layout/Layout";
export default function DetailsPokemon() {
  const {state} = useLocation();
  const navigate = useNavigate();

  return (
    <Layout>
      <section>
        <img
          src={logo}
          className="h-[200px] cursor-pointer"
          onClick={() => navigate(-1)}
        />

        <div className="mt-8 hover:cursor-pointer  bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
          <ChevronLeftIcon
            className="w-6 h-6 text-slate-900 dark:text-slate-200"
            onClick={() => navigate(-1)}
          />
        </div>
      </section>

      <div>
        <h1 className="text-2xl font-bold text-center mt-5">Details</h1>
      </div>
      <Details pokemon={state.data} />

      <div className="fixed right-6 bottom-5">
        <div className=" hover:cursor-pointer  bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
          <ChevronUpIcon
            className="w-6 h-6 text-slate-900 dark:text-slate-200"
            onClick={() => window.scrollTo(0, 0)}
          />
        </div>
      </div>
    </Layout>
  );
}
