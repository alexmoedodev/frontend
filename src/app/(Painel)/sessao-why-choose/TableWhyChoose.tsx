"use client";

// 📦 React
import { redirect } from "next/navigation";

import { StatusTable } from "@/components/ui/StatusTable";
import { RecordsCouts } from "../components/RecordsCount";
import { Button } from "@/components/ui/Button/Button";
import { Select } from "@/components/ui/Select/select";
import { TitlePage } from "../components/TitlePage";
import LayuotMain from "../components/LayoutMain";
import Input from "@/components/ui/Input/Input";

// ⚙ Service
import { WhyChooseService } from "@/services/whyChoose";

export function TableSectionWhyChooseComponents() {
  function handleCreateWhyChoose() {
    redirect("/sessao-why-choose/novo-card");
  }

  return (
    <>
      <LayuotMain>
        <TitlePage label={false} titlePage="Porque nos escolher" />

        <Button variant="new" icon={true} onClick={handleCreateWhyChoose}>
          Novo Card
        </Button>

        <div className="group__fields">
          <Input
            label="Pesquisar"
            title=""
            heigthStyles="h-md"
            widthStyles="w-md"
          />

          <Select
            label="Ativo"
            requiredSelect={true}
            title=""
            widthStyles="w-fit"
            heigthStyles="h-md"
          >
            <option value="">Todos</option>
          </Select>
        </div>

        <RecordsCouts
          totalRecords={WhyChooseService.length}
          totalFiltereds={WhyChooseService.length}
        />

        <table>
          <thead>
            <tr>
              <th>Ações</th>
              <th>#</th>
              <th>Icone</th>
              <th>Titulo</th>
              <th>Paragráfo</th>
              <th>Ativo</th>
              <th>Data do cadastro</th>
            </tr>
          </thead>

          <tbody>
            {WhyChooseService &&
              WhyChooseService.map((item, index) => (
                <tr key={index}>
                  <td data-label="Ações">
                    <span className="btns__actions__table">
                      <Button variant="edit" icon={true} />
                      <Button variant="delete" icon={true} />
                    </span>
                  </td>
                  <td data-label="Codigo">{item.code}</td>
                  <td data-label="Icone">{item.icon}</td>
                  <td data-label="Titulo">{item.name}</td>
                  <td data-label="Paragráfo">{item.details}</td>
                  <td data-label="Status">
                    {" "}
                    <StatusTable icon={item.status} />
                  </td>
                  <td data-labe="Data do cadastro">{item.createdAt}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </LayuotMain>
    </>
  );
}
