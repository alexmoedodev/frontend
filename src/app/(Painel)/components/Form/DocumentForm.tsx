
import Input from "@/components/ui/Input/Input";
import { Select } from "@/components/ui/Select/select";
import { TittleFieldsDocument } from "@/utils/formTitles";

type DocumentFormProps = {
  data: {
    documentType: "CNPJ" | "CPF";
    document: string;
    ieORrg: string;
    socialRasion: string;
    nameFantasy: string;
  };

  onChange: (newData: Partial<DocumentFormProps["data"]>) => void;
};

export function DocumentForm({ data, onChange }: DocumentFormProps) {
  
  const typeCompany = data.documentType === "CNPJ";

  return (
    <>
      <div className="group__fields container">
        <Select
          label="Tipo"
          requiredSelect={true}
          title={TittleFieldsDocument.TYPE_COMPANY}
          heigthStyles="h-md"
          widthStyles="w-fit"
          required
          value={data.documentType}
          name="documentType"
          onChange={(e) =>
            onChange({ documentType: e.target.value as "CNPJ" | "CPF" })
          }
        >
          <option value="CNPJ">CNPJ</option>
          <option value="CPF">CPF</option>
        </Select>

        <Input
          label={typeCompany ? "CNPJ" : "CPF"}
          requiredField={true}
          title={
            typeCompany
              ? TittleFieldsDocument.DOCUMENT_CNPJ
              : TittleFieldsDocument.DOCUMENT_CPF
          }
          widthStyles="w-fit"
          heigthStyles="h-md"
          required
          value={data.document}
          name="document"
          onChange={(e) => onChange({ document: e.target.value })}
        />

        <Input
          label={typeCompany ? "I.E" : "RG"}
          requiredField={typeCompany ? false : true}
          title={
            typeCompany
              ? TittleFieldsDocument.STATE_REGISTRATION
              : TittleFieldsDocument.DOCUMENT_RG
          }
          widthStyles="w-fit"
          heigthStyles="h-md"
          value={data.ieORrg}
          name="ieORrg"
          onChange={(e) => onChange({ ieORrg: e.target.value })}
        />
      </div>

      <div className="group__fields">
        <Input
          label={typeCompany ? "Razão Social" : "Nome Completo"}
          requiredField={true}
          title={
            typeCompany
              ? TittleFieldsDocument.SOCIAL_RASION
              : TittleFieldsDocument.NAME_USUÁRIO
          }
          widthStyles="w-md"
          heigthStyles="h-md"
          required
          value={data.socialRasion}
          name="socialRasion"
          onChange={(e) => onChange({ socialRasion: e.target.value })}
        />
        <Input
          label="Nome Fantasia"
          title={TittleFieldsDocument.NAME_FANTASY}
          widthStyles="w-md"
          heigthStyles="h-md"
          required
          value={data.nameFantasy}
          name="nameFantasy"
          onChange={(e) => onChange({ nameFantasy: e.target.value })}
        />
      </div>
    </>
  );
}
