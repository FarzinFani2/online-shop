"use client";

import {
  addToProduct,
  minusFromProduc,
  removeProduct,
} from "@/redux/features/product-cardslice";
import { TableProductType } from "@/types/product";
import { useDispatch } from "react-redux";

import { FaRegTrashAlt } from "react-icons/fa";

export default function TableRow({
  product,
  number,
}: {
  product: TableProductType;
  number: number;
}) {
  function splitText(text: string, size: number) {
    let returnText = text;
    if (text.length > size) {
      returnText = text.substring(0, size) + "...";
    }
    return returnText;
  }

  const dispatch = useDispatch();

  return (
    <tr className="bg-gray-100 even:bg-gray-200 odd:bg-gray-300">
      <td className="py-2 px-4 text-center">{number}</td>
      <td className="py-2 px-4 text-center">{splitText(product.title, 50)}</td>
      <td className="py-2 px-4 text-center">
        {splitText(product.description, 100)}
      </td>
      <td className="flex justify-center items-center py-2 px-4 gap-2 mt-[10px]">
        <span
          onClick={() => dispatch(minusFromProduc(product.id))}
          className="me-5 h-5 w-5 flex items-center justify-center font-bold bg-red-700 rounded-full text-white border border-white hover:cursor-pointer"
        >
          -
        </span>
        <span>{product.quantity}</span>
        <span
          className="ms-5 p-2 h-5 w-5 flex items-center justify-center font-bold bg-blue-700 rounded-full text-white border border-white hover:cursor-pointer"
          onClick={() => dispatch(addToProduct(product))}
        >
          +
        </span>
      </td>
      <td className="py-2 px-4 text-center">{product.price}</td>
      <td className="py-2 px-4 text-center">
        {product.quantity * product.price}
      </td>
      <td className="">
        <FaRegTrashAlt
          onClick={() => dispatch(removeProduct(product.id))}
          className="cursor-pointer border-b-orange-700 rounded-full w-[50px]"
        ></FaRegTrashAlt>
      </td>
    </tr>
  );
}
