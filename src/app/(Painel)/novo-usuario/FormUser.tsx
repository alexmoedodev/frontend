"use client"

//📦 React
import { useState } from "react"

// 🧩 Componentes
import { ButtonsFooterActions } from "../components/ButtonsFooterAction"
import { Select } from "@/components/ui/Select/select"
import { Button } from "@/components/ui/Button/Button"
import { TitlePage } from "../components/TitlePage"
import LayuotMain from "../components/LayoutMain"
import Input from "@/components/ui/Input/Input"

// Utils
import { OTHERS, TITLE_FIELDS_USER } from "@/utils/formTitles"

// Icons
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

// 🎨 Styles
import styles from "./user.module.css"


export function FormUser() {

    const [showPassword, setShowPassoword] = useState(false)

    function handleShowPassword() {
        setShowPassoword(!showPassword)
    }

    return (
        <>
            <LayuotMain>

                <div className={styles.container__user}>
                    <TitlePage
                        titlePage="Novo usuário"
                        label={true}
                    />
                    <div className={styles.content__user}>
                        <form action="">

                            <div className="group__fields">

                                <Input
                                    label="Nome"
                                    requiredField={true}
                                    title={TITLE_FIELDS_USER.USER_NAME}
                                    type="text"
                                    minLength={2}
                                    widthStyles="w-fit"
                                    heigthStyles="h-md"
                                />
                                <Input
                                    label="E-mail"
                                    requiredField={true}
                                    title={TITLE_FIELDS_USER.USER_EMAIL}
                                    type="email"
                                    widthStyles="w-md"
                                    heigthStyles="h-md"
                                />
                                <Input
                                    label="Senha"
                                    requiredField={true}
                                    title={TITLE_FIELDS_USER.LENGTH_PASSWORD}
                                    type={showPassword ? "text" : "password"}
                                    widthStyles="w-fit"
                                    heigthStyles="h-md"
                                />
                                <Input
                                    label="Confirma-senha"
                                    requiredField={true}
                                    title={TITLE_FIELDS_USER.CONFIRM_PASSWORD}
                                    type={showPassword ? "text" : "password"}
                                    widthStyles="w-fit"
                                    heigthStyles="h-md"
                                />

                                <Button
                                    variant="violet"
                                    aria-label="Visualizar senha"
                                    title={showPassword ? "Ocutar senha" : "Mostrar Senha"}
                                    onClick={handleShowPassword}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}

                                </Button>

                                <Select
                                    label="Ativo"
                                    requiredSelect={true}
                                    title={OTHERS.STATUS}
                                    heigthStyles="h-md"
                                    widthStyles="w-fit"
                                >
                                    <option value="1">Ativo</option>
                                    <option value="0">Inativo</option>

                                </Select>

                                <Select
                                    label="Tipo"
                                    requiredSelect={true}
                                    title={TITLE_FIELDS_USER.USER_TYPE}
                                    heigthStyles="h-md"
                                    widthStyles="w-fit"
                                >
                                    <option value="1">Admin</option>
                                    <option value="0">User</option>
                                </Select>
                            </div>

                            <ButtonsFooterActions
                                titleButtonSave="usuário"
                                titleButtonLinkCancel="e voltar"
                                href="/usuarios"
                            />
                        </form>
                    </div>

                </div>

            </LayuotMain>
        </>
    )
}