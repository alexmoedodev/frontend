import styles from "./whyChoose.module.css";

import { FaTruck } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";

export function WhyChoose() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.services}>
            <div>
              <FaTruck className={styles.icons} />
            </div>
            <div className={styles.details}>
              <label htmlFor="">Free Delivery</label>
              <span>Free shipping on all order</span>
            </div>
          </div>

          {/*
           * **********APAGAR************
           * aqui os dados viram do banco
           */}

          <div className={styles.services}>
            <div>
              <FaCreditCard className={styles.icons} />
            </div>
            <div className={styles.details}>
              <label htmlFor="">Money Return</label>
              <span>Back guarantee under 7 day</span>
            </div>
          </div>

          <div className={styles.services}>
            <div>
              <MdOutlineSupportAgent className={styles.icons} />
            </div>
            <div className={styles.details}>
              <label htmlFor="">Online Support</label>
              <span>Suppot online 24 hours a day</span>
            </div>
          </div>

          <div className={styles.services}>
            <div>
              <VscWorkspaceTrusted className={styles.icons} />
            </div>
            <div className={styles.details}>
              <label htmlFor="">Reliable</label>
              <span>Trusted by 1000+ brands</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
