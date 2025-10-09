import { FormUser } from "./FormUser";

export const metadata = {
    title: "Usuários",
    description: "Lista de usuários cadastrados"
}

export default function User(){
    return(
        <>
        <FormUser/>
        </>
    )
}