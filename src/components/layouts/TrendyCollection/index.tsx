import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import ImageProduct from "../../../../public/defaultProduct1.png";
import styles from "./trendyCollection.module.css";

export function TrendyCollection() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.title}>
          <div>
            <label>This month</label>
            <h1>Trendy Collection</h1>
          </div>

          <nav>
            <ul>
              <li>
                <Link href={""}>All Collection</Link>
              </li>
              <li>
                <Link href={""}>New In</Link>
              </li>
              <li>
                <Link href={""}>Top Rated</Link>
              </li>
              <li>
                <Link href={""}>Tensing Items</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.content}>
          <div className={styles.product}>
            <div className={styles.imageProduct}>
              <Image src={ImageProduct} alt="Foto do produto" />
            </div>
            <div className={styles.off}>
              <span>10% OFF</span>
            </div>
            <div className={styles.detailsProduct}>
              <label>Stylish Grey Chair</label>
              <div className={styles.stars}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span>R$ 150,00</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
