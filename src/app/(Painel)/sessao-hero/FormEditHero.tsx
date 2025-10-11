import Input from "@/components/ui/Input/Input";
import LayuotMain from "../components/LayoutMain";
import { TitlePage } from "../components/TitlePage";
import { ButtonsFooterActions } from "../components/ButtonsFooterAction";

export function FormSectionEditHero() {
  return (
    <>
      <LayuotMain>
        <form action="">
          <TitlePage titlePage="Editar sessão principal - HERO" label={true} />

          <div className="group__fields">
            <Input
              label="Nome"
              requiredField={true}
              heigthStyles="h-md"
              widthStyles="w-fit"
              maxLength={15}
              minLength={4}
              title=""
            />
            <Input
              label="Titulo"
               requiredField={true}
              heigthStyles="h-md"
              widthStyles="w-md"
              maxLength={36}
              minLength={4}
              title=""
            />
          </div>
          
          <div className="text__area">
            <label htmlFor="" className="required">Paragráfo - Max. 350 caractéries </label>
            <textarea  name="" id="" maxLength={350}>

            </textarea>
          </div>

          <ButtonsFooterActions 
          titleButtonSave="dados do Hero"
          titleButtonLinkCancel="e voltar"
          href="/editar-site"
          
          />
        </form>
      </LayuotMain>
    </>
  );
}
