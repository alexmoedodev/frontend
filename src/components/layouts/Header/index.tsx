"use client"

import Link from "next/link";
import { ImageLogo } from "@/components/ui/ImageLogo/ImageLogo";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./header.module.css";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div>
            <ImageLogo />
          </div>
          <nav>
            <Link href={""} title="Home">Home</Link>
            <Link href={""}title="About" >About</Link>
            <Link href={""}title="Shop">Shop</Link>
            <Link href={""}title="Blog">Blog</Link>
            <Link href={""}title="Contact">Contact</Link>

          </nav>

           <div 
           className={styles.menuMoblie}>
            <GiHamburgerMenu />
            </div>
        </div>
      </header>
    </>
  );
}
