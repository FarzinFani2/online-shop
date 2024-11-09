"use client";

import { ProductType } from "@/types/product";
import { useDispatch } from "react-redux";
import { addToProduct } from "@/redux/features/product-cardslice";

export default function Product({
  id,
  description,
  title,
  price,
  category,
  image,
}: ProductType) {
  const splitText = (desc: string) => {
    let returnDesc = desc;
    if (desc.length > 300) {
      returnDesc = returnDesc.substring(0, 300);
      returnDesc = returnDesc + " ...";
    }
    return returnDesc;
  };

  const dispatch = useDispatch();

  return (
    <div className="border flex flex-col border-stone-300 rounded" id={`${id}`}>
      <img src={image} alt="" className="max-h-[300px] h-[300px]" />
      <div className="m-4">
        <h2 className="mb-2">{title}</h2>
        <p className="pb-4">{splitText(description)}</p>
      </div>
      <div className="flex justify-between mb-4 mx-4 flex-1 items-end">
        <span>{price}</span>
        <button
          className="bg-blue-400 hover:bg-blue-500 text-white  py-1 px-2 rounded"
          onClick={() =>
            dispatch(
              addToProduct({ id, category, title, price, image, description })
            )
          }
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
