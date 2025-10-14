"use client";
//📦 React
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

//🧩 Components
import { Button } from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";

//🎨 Styles
import styles from "../styles.module.css";
import ImageLoginBg from "../../../../public/complete-form.png";
import LogoTipo from "../../../../public/Logotipo.png";
import { TITLE } from "@/utils/formTitles";
import { TITLE_BUTTON } from "@/utils/buttonTitles";

//📋 typagem
type FormLoginProps = {
  name: string;
  email: string;
  password: string;
  confirmPassoword: string;
};

export function FormRegister() {
  const [user, setUser] = useState<FormLoginProps>({
    name: "",
    email: "",
    password: "",
    confirmPassoword: "",
  });

  return (
    <>
      <div className={styles.login__container}>
        <div className={styles.login__card}>
          <div className={styles.login__image__bg}>
            <Image
              src={ImageLoginBg}
              alt="Imagem de background do card"
              priority
            />
          </div>

          <form action="" className={styles.form__login}>
            <div className={styles.content__form}>
              <div className={styles.title__form}>
                <Image
                  src={LogoTipo}
                  alt="Logo tipo da empresa desenvolvedora do sistema"
                  priority
                />
                <p>Preencha todos os campos para registrar-se.</p>
              </div>
              <div className={styles.input__form}>
                <Input
                  widthStyles="w-full"
                  heigthStyles="h-md"
                  title={TITLE.TITLE_FIELDS_USER.LENGTH_NAME}
                  placeholder="Nome do usuário"
                  required
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
                <Input
                  widthStyles="w-full"
                  heigthStyles="h-md"
                  title={TITLE.TITLE_FIELDS_USER.USER_EMAIL}
                  placeholder="email@email.com"
                  required
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
                <Input
                  widthStyles="w-full"
                  heigthStyles="h-md"
                  title={TITLE.TITLE_FIELDS_USER.LENGTH_PASSWORD}
                  placeholder="******"
                  required
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, password: e.target.value }))
                  }
                />
                <Input
                  widthStyles="w-full"
                  heigthStyles="h-md"
                  title={TITLE.TITLE_FIELDS_USER.CONFIRM_PASSWORD}
                  placeholder="******"
                  required
                  type="password"
                  name="confirmPassoword"
                  value={user.confirmPassoword}
                  onChange={(e) =>
                    setUser((prev) => ({
                      ...prev,
                      confirmPassoword: e.target.value,
                    }))
                  }
                />

                <Button
                  type="submit"
                  variant="violet"
                  widthStyles="w-full"
                  title={TITLE_BUTTON.REGISTER}
                >
                  Registrar-se
                </Button>
              </div>
              <div className={styles.footer__form}>
                <label>Já possui uma conta?</label>
                <Link
                  href={"/login"}
                  title="Click aqui e para fazer login."
                >
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
