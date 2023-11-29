/**
 * Componente cardProduc.
 *
 * Este componente es una tarjeta que muestra un producto con su imagen, nombre y precio.
 *
 *
 * @component
 * @example
 * return (
 *  <CardProduct />
 * )
 */
import { IconHeart } from "@tabler/icons-react";
import Image from "next/image";

export default function CardProduct({ product }) {
  return (
    <div className="bg-white rounded shadow overflow-hidden">
      <div className="relative rounded-lg h-54">
        <div className="absolute top-0 right-0 p-2 ">
          <IconHeart size={30} color="red" />
        </div>

        <Image
          src={product.thumbnail}
          alt={product.title}
          className="h-56 w-full object-cover"
          width={500}
          height={300}
        />
      </div>

      <div className="p-5">
        <h5 className="font-semibold text-lg">{product.title}</h5>

        <p className="mb-3 font-semibold text-gray-500 ">${product.price}</p>
      </div>
    </div>
  );
}
