"use client";

import { useAppSelector } from "@/redux/store";
import TableRow from "./TableRow";

export default function ProductsList() {
  const products = useAppSelector(
    (s) => s.productCardslice.value.selectedProducts
  );
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-8">
        <table className="w-[80%] border border-collapse">
          <thead>
            <tr>
              <th className="py-2 px-2">Number</th>
              <th>Title</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, index) => (
              <TableRow product={p} number={index + 1} />
            ))}
          </tbody>
        </table>
        <div className="flex justify-between w-[80%] border-b border-x p-2">
          <span>Total</span>
          <span>
            {products.reduce((acc, p) => acc + p.price * p.quantity, 0)} $
          </span>
        </div>
      </div>
    </div>
  );
}
