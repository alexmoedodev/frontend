import React from "react";
import { FaStar } from "react-icons/fa";
// import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export type ProductsProps = {
  name: string;
  stars: React.ReactNode;
  price: string;
  filters: "All" | "New In" | "Top Rated" | "Tensing Items" 
  img: string;
  off: string | null | undefined
};

export const products: ProductsProps[] = [
  /* 01 */
  {
    name: "Stylish Grey Chair",
    stars: (
      <>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
      </>
    ),
    price: "R$ 150,00",
    off: "10% OFF",
    filters:"New In" ,
    img: "/defaultProduct1.png",
  },
  /* 02 */
  {
    name: "Chair pillow",
    stars: (
      <>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </>
    ),
    price: "R$ 190,00",
    off: "10% OFF",
    filters:"New In" ,
    img: "/defaultProduct2.png",
  },
  /* 03 */
  {
    name: "Seater Gray Sofa",
    stars: (
      <>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
      </>
    ),
    price: "R$ 300,00",
    off: "15% OFF",
    filters:"New In" ,
    img: "/defaultProduct3.png",
  },
  /* 04 */
  {
    name: "Wooden Chair",
    stars: (
      <>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
      </>
    ),
    price: "R$ 129,00",
    off: null,
    filters: "Top Rated",
    img: "/defaultProduct4.png",
  },
  /* 05 */
  {
    name: "Alexander Sofa",
    stars: (
      <>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </>
    ),
    price: "R$ 150,00",
    off: null,
    filters: "Top Rated" ,
    img: "/defaultProduct5.png",
  },
  /* 06 */
  {
    name: "Stylish Grey Chair",
    stars: (
      <>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </>
    ),
    price: "R$ 150,00",
    off: "7% OFF",
    filters: "Tensing Items",
    img: "/defaultProduct6.png",
  },
  /* 07 */
  {
    name: "Chair Nobody Armchair",
    stars: (
      <>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </>
    ),
    price: "R$ 80,00",
    off: null,
    filters: "Tensing Items",
    img: "/defaultProduct7.png",
  },
  /* 08 */
  {
    name: "Realistic Sofa",
    stars: (
      <>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </>
    ),
    price: "R$ 49,00",
    off: "50% OFF",
    filters: "Tensing Items",
    img: "/defaultProduct8.png",

  },
];
