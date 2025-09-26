import Image from "next/image";
import defaultLivingRoom from "../../../../public/defaultLivingRoom.jpg";
import styles from "./hotDealFurniture.module.css";
import { Button } from "@/components/ui/Button/Button";
export function HotDealFurniture() {
  return (
    <>
      <article className={styles.container}>
        <div className={styles.content}>
          <div className={styles.banner}>
            <div className={styles.cardDetails}>
              <div className={styles.details}>
                <label>hot deal furniture</label>
                <div>
                  <h1>Live Furniture</h1>
                  <h2>Your Love</h2>
                </div>
                <Button size="w-fit" variant="white">
                  BUY NOW
                </Button>
              </div>
            </div>
          </div>

          <div className={styles.imageBg}>
            <Image
              src={defaultLivingRoom}
              alt="Foto ilustrando como ficaria o movel no ambiente."
            />
          </div>
        </div>
      </article>
    </>
  );
}
