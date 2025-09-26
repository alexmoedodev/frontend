import Image from "next/image";
import defaultChair from "../../../../public/defaultChair.png";
import styles from "./hero.module.css";
import { Button } from "@/components/ui/Button/Button";

export function Hero() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.details}>
              <span>New arrival..</span>
              <h1>
                Elevate <br /> Your Home <br /> Aesthetics
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
                itaque praesentium nihil molestiae. Itaque soluta laboriosam
                quaerat, similique voluptatibus quasi omnis, deserunt libero
                sapiente necessitatibus maiores ab repudiandae autem molestias?
              </p>
              <div className={styles.navegation}>
                <Button variant="yellow">Buy now</Button>
                <Button variant="white">viwer details</Button>
              </div>
            </div>

            <div className={styles.ImageHero}>
              <Image src={defaultChair} alt="Imagem do produto" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
