import Image from "next/image";
import LogoTipo from "../../../../public/defaultImage.jpg";

import styles from "./ImageLogo.module.css";

export function ImageLogo() {
  return (
    <>
      <div>
        <Image
          src={LogoTipo}
          alt="Imagem do logo tipo"
          priority
          className={styles.containerImage}
        />
      </div>
    </>
  );
}
