"use client";

// 📦React
import { useParams } from "next/navigation";

// 🧩 Components
import { ButtonsFooterActions } from "../../components/ButtonsFooterAction";
import { TitlePage } from "../../components/TitlePage";
import { Select } from "@/components/ui/Select/select";
import LayuotMain from "../../components/LayoutMain";
import Input from "@/components/ui/Input/Input";

export function FormEditSectionWhyChoose() {
  const { id } = useParams();
  const isCreating = id === "novo-card";
  
  return (
    <>
      <LayuotMain>
        <form action="">
          <TitlePage
            titlePage={
              isCreating
                ? "Cadastrar card da sessão - Porque nos escolher"
                : "Editar sessão - Porque nos escolher"
            }
            label={true}
          />

          <div className="group__fields">
            <Select
              label="Icone"
              requiredSelect={true}
              title="Selecione um icone"
              widthStyles="w-fit"
              heigthStyles="h-md"
            >
              <option value="">Selecione uma icone</option>
            </Select>
            <Input
              label="Titulo"
              requiredField={true}
              title=""
              heigthStyles="h-md"
              widthStyles="w-fit"
              maxLength={20}
            />
          </div>
          <div className="text__area">
            <label htmlFor="" className="required">
              Paragráfo Max. 100 Caractéries.
            </label>
            <textarea name="" id=""></textarea>
          </div>

          <ButtonsFooterActions
            titleButtonSave={isCreating ? "novo card da sessão" : "edição do card da sessão"}
            titleButtonLinkCancel="e voltar"
            href="/sessao-why-choose"
          />
        </form>
      </LayuotMain>
    </>
  );
}
