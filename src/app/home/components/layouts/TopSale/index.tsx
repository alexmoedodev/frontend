import Image from "next/image";
import defaultProduct1 from "../../../../../../public/defaultProduct1.png";
import defaultProduct2 from "../../../../../../public/defaultProduct2.png";
import defaultProduct3 from "../../../../../../public/defaultProduct3.png";
import defaultProduct4 from "../../../../../../public/defaultProduct4.png";
import styles from "./topSale.module.css";

import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

export function TopSale() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title__top__sale}>
            <label>Top sale</label>
            <h1>Feactured Product</h1>
          </div>

          <div className={styles.carrocel}>
            <div className={styles.products}>
              <div className={styles.image__product}>
                <Image src={defaultProduct1} alt="Imagem do produto." />
              </div>

              <div className={styles.details}>
                <label>Brasslegged Armchair</label>
                <div className={styles.avaliation}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <span>R$ 150.00</span>
              </div>
            </div>

            {/* APAGAR */}
            {/* DADOS VIRAM DO BANCO  */}
            {/* VISUALIZAÇÃO SÓ PRA FINS DE DESENVOLVIMENTO */}

            <div className={styles.products}>
              <div className={styles.image__product}>
                <Image src={defaultProduct2} alt="Imagem do produto." />
              </div>

              <div className={styles.details}>
                <label>Leather Chair</label>
                <div className={styles.avaliation}>
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <span>R$ 200.00</span>
              </div>
            </div>

            <div className={styles.products}>
              <div className={styles.image__product}>
                <Image src={defaultProduct3} alt="Imagem do produto." />
              </div>

              <div className={styles.details}>
                <label>Chair Pillow</label>
                <div className={styles.avaliation}>
                  <FaStarHalfAlt />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <span>R$ 49.00</span>
              </div>
            </div>

            <div className={styles.products}>
              <div className={styles.image__product}>
                <Image src={defaultProduct4} alt="Imagem do produto." />
              </div>

              <div className={styles.details}>
                <label>Alexander Roll Arm Sofa</label>
                <div className={styles.avaliation}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <span>R$ 150.00</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
