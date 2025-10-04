// 📦 React
import Image from "next/image";

// 🧩 Components
import { Button } from "@/components/ui/Button/Button";

// 🖼️ Image Default
import defaultChair from "../../../../../../public/defaultChair.png";

// 🎨 Styles
import styles from "./hero.module.css";

export function Hero() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.container__details}>
              <div className={styles.details}>
                <span>New arrival..</span>
                <h1>
                  Elevate <br /> Your Home <br /> Aesthetics
                </h1>
                <p>
                  Transform every detail of your home into a statement of style
                  and sophistication. By elevating your home aesthetics, you
                  create spaces that reflect personality, comfort, and well-being.
                  It’s more than just decorating—it’s about transforming ordinary
                  rooms into inspiring places, where every element contributes to
                  harmony and a true sense of belonging.
                </p>
                <div className={styles.navegation}>
                  <Button
                    widthStyles="w-fit"
                    heigthStyles="h-lg"
                    variant="golden"
                    icon={true}
                  >
                    Buy now
                  </Button>
                  <Button
                    widthStyles="w-fit"
                    heigthStyles="h-lg"
                    variant="white"
                    icon={true}
                  >
                    Viwer details
                  </Button>
                </div>
              </div>
            </div>

            <div className={styles.image}>
              <div className={styles.image__hero}>
                <Image src={defaultChair} alt="Imagem do produto" priority />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
