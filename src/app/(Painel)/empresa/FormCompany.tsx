"use client";
import { useState } from "react";
import { DocumentForm } from "../components/Form/DocumentForm";
import { AddressForm } from "../components/Form/AddressForm";
import { ContactForm } from "../components/Form/ContactForm";
import  Layuot  from "@/app/(Painel)/components/Layout/index";
import { TitlePage } from "../components/TitlePage";
import { ButtonsFooterActions } from "../components/ButtonsFooterAction";

type DocumentFormData = {
  documentType: "CPF" | "CNPJ";
  document: string;
  ieORrg: string;
  socialRasion: string;
  nameFantasy: string;
};

type AddressFormData = {
  cep: string;
  address: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  uf: string;
};

type ContactFormData = {
  phone: string;
  phone2: string;
  email: string;
  site: string;
  whatsApp: string;
  instagran: string;
  facebook: string;
};

type FormData = {
  document: DocumentFormData;
  address: AddressFormData;
  contact: ContactFormData;
};

export function FormCompany() {
  const [formData, setFormData] = useState<FormData>({
    document: {
      documentType: "CNPJ",
      document: "",
      ieORrg: "",
      socialRasion: "",
      nameFantasy: "",
    },

    address: {
      cep: "",
      address: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      uf: "",
    },

    contact: {
      phone: "",
      phone2: "",
      email: "",
      site: "",
      whatsApp: "",
      instagran: "",
      facebook: "",
    },
  });

  return (
    <>
      <Layuot>
        <TitlePage titlePage="EMPRESA" label={true} />
        <form>
          <DocumentForm
            data={formData.document}
            onChange={(newData) =>
              setFormData((prev) => ({
                ...prev,
                document: { ...prev.document, ...newData },
              }))
            }
          />
          <AddressForm
            data={formData.address}
            onChange={(newData) =>
              setFormData((prev) => ({
                ...prev,
                address: { ...prev.address, ...newData },
              }))
            }
          />
          <ContactForm
            data={formData.contact}
            onChange={(newData) =>
              setFormData((prev) => ({
                ...prev,
                contact: { ...prev.contact, ...newData },
              }))
            }
          />

          <ButtonsFooterActions
            titleButtonSave="Empresa"
            titleButtonLinkCancel="e voltar"
            href="/dashboard"
          />
        </form>
      </Layuot>
    </>
  );
}
