"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import logo from "../../../public/logo.png";
import { useAppSelector } from "@/redux/store";
import { FaUser } from "react-icons/fa";

export default function Header() {
  const [username, setUsername] = useState<string>("");

  const products = useAppSelector(
    (s) => s.productCardslice.value.selectedProducts
  );

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((json) => {
        const randomUser = json[Math.floor(Math.random() * json.length)];
        setUsername(randomUser.username);
      });
  }, []);

  return (
    <>
      <div className="flex justify-center bg-stone-200">
        <div className="max-w-[1250px] flex justify-between items-center w-full mx-4 md:mx-auto">
          <div className="flex items-center justify-center gap-2">
            <FaUser />
            <span>{username}</span>
          </div>
          <Link href={"/"}>
            <img src={logo.src} alt="Logo Image" className="w-24" />
          </Link>
          <Link href={"/shopping-cart"} className="">
            <span className="pr-1">cart</span>
            <span>{products.reduce((acc, p) => acc + p.quantity, 0)}</span>
          </Link>
        </div>
      </div>
    </>
  );
}
