import Input from "@/components/ui/Input/Input";
import { TittleFieldsContact } from "@/utils/formTitles";

type ContactFormProps = {
  data: {
    phone: string;
    phone2: string;
    email: string;
    site: string;
    whatsApp: string;
    instagran: string;
    facebook: string;
  };

  onChange: (newData: Partial<ContactFormProps["data"]>) => void;
};

export function ContactForm({ data, onChange }: ContactFormProps) {
  return (
    <>
      <div className="group__fields">
        <Input
          label="Telefone"
          title={TittleFieldsContact.PHONE}
          heigthStyles="h-md"
          widthStyles="w-fit"
          value={data.phone}
          onChange={(e) => onChange({ phone: e.target.value })}
        />
        <Input
          label="Telefone 2"
         title={TittleFieldsContact.PHONE}
          heigthStyles="h-md"
          widthStyles="w-fit"
          value={data.phone2}
          onChange={(e) => onChange({ phone2: e.target.value })}
        />
        <Input
          label="E-mail"
          title={TittleFieldsContact.EMAIL}
          heigthStyles="h-md"
          widthStyles="w-md"
          value={data.email}
          onChange={(e) => onChange({ email: e.target.value })}
        />
      </div>

      <div className="group__fields">
        <Input
          label="Site"
          title={TittleFieldsContact.SITE}
          heigthStyles="h-md"
          widthStyles="w-fit"
          value={data.site}
          onChange={(e) => onChange({ site: e.target.value })}
        />
        <Input
          label="WhatsApp"
          title={TittleFieldsContact.WHATSAPP}
          heigthStyles="h-md"
          widthStyles="w-fit"
          value={data.whatsApp}
          onChange={(e) => onChange({ whatsApp: e.target.value })}
        />
        <Input
          label="Instagran"
          title={TittleFieldsContact.INSTAGRAN}
          heigthStyles="h-md"
          widthStyles="w-fit"
          value={data.instagran}
          onChange={(e) => onChange({ instagran: e.target.value })}
        />
        <Input
          label="Facebook"
          title={TittleFieldsContact.FACEBOOK}
          heigthStyles="h-md"
          widthStyles="w-fit"
          value={data.facebook}
          onChange={(e) => onChange({ facebook: e.target.value })}
        />
      </div>
    </>
  );
}
