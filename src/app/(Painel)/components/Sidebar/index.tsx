// 📦 React 
import Link from "next/link"
import Image from "next/image"

import AvatarUser from "../../../../../public/avatar.jpg"
import styles from "./sidebar.module.css"
import {  FaHome } from "react-icons/fa"
import { IoStorefrontSharp } from "react-icons/io5";
import { HiOutlineMenuAlt1 } from "react-icons/hi";


type SidebarProps = {
    open: boolean
    toogleSidebar: () => void
}

export function Sidebar({ open, toogleSidebar }: SidebarProps) {


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
                            className={open ? "" : styles.toogle__open}>
                            <HiOutlineMenuAlt1 />
                        </button>
                    </div>

                </div>


                <nav className={styles.nav}>
                    <ul className={styles.ul}>
                        <li className={styles.li}>
                            <Link
                                href="/"
                                className={open ? "" : styles.li__close}
                            >
                                <FaHome /> <span>Home</span>

                            </Link>
                        </li>
                        <li className={styles.li}>
                            <Link
                                href="/empresa"
                                className={open ? "" : styles.li__close}
                            >
                                <IoStorefrontSharp /> <span>Empresa</span>

                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>

        </>
    )
}