"use client"
//📦 React
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

//🧩 Components
import { Button } from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";

//🎨 Styles
import styles from "./formLogin.module.css";
import ImageLoginBg from "../../../public/login.png";
import LogoTipo from "../../../public/Logotipo.png";

//📋 typagem
type FormLoginProps = {
  email: string
  password: string
  remmember: boolean
}


export function FormLogin() {
  const [user, setUser] = useState<FormLoginProps>({
    email: "",
    password: "",
    remmember: false
  })
  console.log("Checkbox:", user.remmember)

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
                <p>Preencha suas credenciais para realizar login.</p>
              </div>
              <div className={styles.input__form}>
                <Input
                  sizeStyles="w-full"
                  title="Preencha email cadastrado."
                  placeholder="email@email.com"
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={(e) => setUser((prev) => ({ ...prev, email: e.target.value }))}

                />
                <Input
                  sizeStyles="w-full"
                  title="Preencha sua senha."
                  placeholder="******"
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))}
                />
                <div className={styles.remember__forgot_password}>
                  <div className={styles.remember}>
                    <input
                      type="checkbox"
                      name="remember"
                      id="remember"
                      title="Click para relembrar as credenciais"
                      checked={user.remmember}
                      onChange={(e) => setUser((prev)=> ({...prev , remmember: e.target.checked}))}
                    />
                    <label
                      htmlFor="remember"
                      title="Click para relembrar as credenciais"
                    >
                      Lembrar-me
                    </label>
                  </div>
                  <div className={styles.forgot_password}>
                    <Link
                      href={"/"}
                      title="Click para redefinir uma nova senha."
                    >
                      Esqueceu senha?
                    </Link>
                  </div>
                </div>
                <Button type="submit" variant="violet" size="w-full" title="Acessar ao Painel">
                  Acessar
                </Button>
              </div>
              <div className={styles.footer__form}>
                <label>Não possui uma conta?</label>
                <Link href={"/"} title="Click aqui e registre uma conta.">
                  Registrar-se
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
