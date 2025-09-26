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
                Transform every detail of your home into a statement of style and sophistication. By elevating your home aesthetics, you create spaces that reflect personality, comfort, and well-being. It’s more than just decorating—it’s about transforming ordinary rooms into inspiring places, where every element contributes to harmony and a true sense of belonging.
              </p>
              <div className={styles.navegation}>
                <Button variant="yellow">Buy now</Button>
                <Button variant="white">viwer details</Button>
              </div>
            </div>

            <div className={styles.ImageHero}>
              <Image src={defaultChair} alt="Imagem do produto" priority />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
