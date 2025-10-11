"use client";

// 📦 React
import Link from "next/link";
import Image from "next/image";

// Icon
import { FaHome } from "react-icons/fa";
import { IoStorefrontSharp } from "react-icons/io5";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { TfiWorld } from "react-icons/tfi";
import { FaUserAlt } from "react-icons/fa";
import { BiSolidEditAlt } from "react-icons/bi";
import { SiGoogleforms } from "react-icons/si";

// icons section
import { PiNumberOneFill } from "react-icons/pi";
import { PiNumberTwoFill } from "react-icons/pi";
import { PiNumberThreeFill } from "react-icons/pi";
import { PiNumberFourFill } from "react-icons/pi";
import { PiNumberFiveFill } from "react-icons/pi";
import { PiNumberSixFill } from "react-icons/pi";
import { PiNumberSevenFill } from "react-icons/pi";

// 🎨 Styles
import styles from "./sidebar.module.css";

// Image avatar ---> Remover image vem do banco
import AvatarUser from "../../../../../public/avatar.jpg";
import { useState } from "react";

type SidebarProps = {
  open: boolean;
  toogleSidebar: () => void;
};

export function Sidebar({ open, toogleSidebar }: SidebarProps) {
  const [showMenuWeb, setShowMenuWeb] = useState(false);

  function handleMenuWeb() {
    setShowMenuWeb(!showMenuWeb);
  }

  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.header__sidebar}>
          <div className={styles.avatar__user}>
            <Image
              src={AvatarUser}
              alt="Foto do usuário"
              width={50}
              height={50}
            />
          </div>

          <div className={styles.toogle__sidebar}>
            <button
              onClick={toogleSidebar}
              aria-label="Fechar e Abrir sidebar"
              title={open ? "Fechar Menu Lateral" : "Abrir Menu Lareal"}
              className={open ? "" : styles.toogle__open}
            >
              <HiOutlineMenuAlt1 />
            </button>
          </div>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link
                href="/dashboard"
                className={open ? "" : styles.li__close}
                title="Navegar para home"
              >
                <FaHome /> <span>Home</span>
              </Link>
            </li>
            <li className={styles.li}>
              <Link
                href="/usuarios"
                className={open ? "" : styles.li__close}
                title="Usuários"
              >
                <FaUserAlt /> <span>Usuários</span>
              </Link>
            </li>
            <li className={styles.li}>
              <Link
                href="/empresa"
                className={open ? "" : styles.li__close}
                title="Dados da empresa"
              >
                <IoStorefrontSharp /> <span>Empresa</span>
              </Link>
            </li>

            <li className={styles.li}>
              {" "}
              <button onClick={handleMenuWeb}>
                <BiSolidEditAlt /> Editar site{" "}
              </button>
              {showMenuWeb && (
                <>
                  <ul>
                    <li className={`${styles.li} ${styles.li__menu__web}`}>
                      <Link href={"/section-one"}>
                        <PiNumberOneFill /> Seção 1
                      </Link>
                    </li>

                    <li className={`${styles.li} ${styles.li__menu__web}`}>
                      <Link href={"/section-one"}>
                        <PiNumberTwoFill /> Seção 2
                      </Link>
                    </li>

                    <li className={`${styles.li} ${styles.li__menu__web}`}>
                      <Link href={"/section-one"}>
                        <PiNumberThreeFill /> Seção 3
                      </Link>
                    </li>
                    <li className={`${styles.li} ${styles.li__menu__web}`}>
                      <Link href={"/section-one"}>
                        <PiNumberFourFill /> Seção 4
                      </Link>
                    </li>
                    <li className={`${styles.li} ${styles.li__menu__web}`}>
                      <Link href={"/section-one"}>
                        <PiNumberFiveFill /> Seção 5
                      </Link>
                    </li>
                    <li className={`${styles.li} ${styles.li__menu__web}`}>
                      <Link href={"/section-one"}>
                        <PiNumberSixFill /> Seção 6
                      </Link>
                    </li>
                    <li className={`${styles.li} ${styles.li__menu__web}`}>
                      <Link href={"/section-one"}>
                        <PiNumberSevenFill /> Seção 7
                      </Link>
                    </li>
                  </ul>
                </>
              )}
            </li>
            <li className={styles.li}>
              <Link
                href="/"
                className={open ? "" : styles.li__close}
                title="Abri o site em uma nova aba"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TfiWorld /> <span>Ver site</span>
              </Link>
            </li>
            <li className={`${styles.li}`}>
              <Link href={"/documentacao"}>
                <SiGoogleforms /> Documentação
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
