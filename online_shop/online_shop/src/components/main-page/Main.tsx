"use client";

import { useEffect, useState } from "react";
import Input from "../inputs/Input";
import Product from "../products/Product";
import { ProductType } from "@/types/product";

export default function MainPage() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch(
      selectedCategory === "All"
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${selectedCategory}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: ProductType[]) => {
        setProducts(data);
      })
      .catch((error: Error) => {});
  }, [selectedCategory, setSelectedCategory]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: string[]) => {
        setCategories(["All", ...data]);
      })
      .catch((error: Error) => {});
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Input
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategories={setSelectedCategory}
          seachQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6  max-w-[1250px] mx-4 md:mx-auto mb-6">
          {products
            .filter(
              (p) =>
                p.description
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase()) ||
                p.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((p) => (
              <Product {...p} />
            ))}
        </div>
      </div>
    </>
  );
}
