"use client"
//📦 React
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

//🧩 Components
import { Button } from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";

//🎨 Styles
import styles from "../styles.module.css"
import ImageLoginBg from "../../../../public/newsletter.png";
import LogoTipo from "../../../../public/Logotipo.png";

//📋 typagem
type FormLoginProps = {
  email: string
}


export function FormForgotPassword() {
  const [user, setUser] = useState<FormLoginProps>({
    email: "",
  })

  return (
    <>
      <div className={styles.login__container}>
        <div className={styles.login__card}>
          <div className={styles.login__image__bg}>
            <Image src={ImageLoginBg} alt="Imagem de background do card" priority />
          </div>

          <form action="" className={styles.form__login}>
            <div className={styles.content__form}>
              <div className={styles.title__form}>
                <Image
                  src={LogoTipo}
                  alt="Logo tipo da empresa desenvolvedora do sistema"
                  priority
                />
                <p>Preencha seu email cadastrado no sistema para receber uma nova senha.</p>
              </div>
              <div className={styles.input__form}>
                <Input
                  sizeStyles="w-full"
                  title="Preencha email cadastrado."
                  placeholder="email@email.com"
                  required
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={(e) => setUser((prev) => ({ ...prev, email: e.target.value }))}

                />
               
                <Button type="submit" variant="violet" size="w-full" title="Redefinir Senha">
                  Redefinir Senha
                </Button>
              </div>
              <div className={styles.footer__form}>
                <label>Já possui uma conta?</label>
                <Link href={"/login"} title="Click aqui e para fazer login.">
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
