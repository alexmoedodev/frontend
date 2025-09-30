import Image from "next/image";
import Link from "next/link";
import ImageLoginBg from "../../../public/login.png";
import LogoTipo from "../../../public/Logotipo.png";
import styles from "./formLogin.module.css";
import Input from "@/components/ui/Input/Input";
import { Button } from "@/components/ui/Button/Button";
export function FormLogin() {
  return (
    <>
      <div className={styles.login__container}>
        <div className={styles.login__card}>
          <div className={styles.login__image__bg}>
            <Image src={ImageLoginBg} alt="" />
          </div>

          <form action="" className={styles.form__login}>
            <div className={styles.content__form}>
              <div className={styles.title__form}>
                <Image
                  src={LogoTipo}
                  alt="Logo tipo da empresa desenvolvedora do sistema"
                />
                <p>Preencha suas credenciais para realizar login.</p>
              </div>
              <div className={styles.input__form}>
                <Input
                  sizeStyles="w-full"
                  title="Preencha seu email cadastrado."
                  placeholder="email@email.com"
                  type="email"
                />
                <Input
                  sizeStyles="w-full"
                  title="Preencha sua senha."
                  placeholder="******"
                  type="password"
                />
                <div className={styles.remember__forgot_password}>
                  <div className={styles.remember}>
                    <input
                      type="checkbox"
                      name=""
                      id="remember"
                      title="Click para relembrar as credenciais"
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
                <Button variant="violet" size="w-full" title="Acessar ao Painel">
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
