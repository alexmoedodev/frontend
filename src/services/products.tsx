import React from "react";
import { FaStar } from "react-icons/fa";
// import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export type ProductsProps = {
  name: string;
  stars: React.ReactNode;
  price: string;
  img: string;
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
    img: "/defaultProduct1.jpg",
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
    img: "/defaultProduct2.jpg",
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
    img: "/defaultProduct3.jpg",
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
    img: "/defaultProduct4.jpg",
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
    img: "/defaultProduct5.jpg",
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
    img: "/defaultProduct6.jpg",
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
    img: "/defaultProduct7.jpg",
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
    img: "/defaultProduct8.jpg",
  },
];
