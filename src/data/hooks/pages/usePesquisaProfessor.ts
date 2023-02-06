import { Teacher } from "@data/@types/teacher";
import apiService from "@data/services/apiService";
import Router from "@routes/routes";
import { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const usePesquisaProfessor = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [timeoutRef, setTimeoutRef] = useState<NodeJS.Timeout>();
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    apiService
      .get("/professores", { params: { q: search } })
      .then(({ data }: AxiosResponse<Teacher[]>) => setTeachers(data))
      .catch(() => setTeachers([]));
  }, [search]);

  const onSearch = (value: string) => {
    clearTimeout(timeoutRef);
    const time = setTimeout(() => setSearch(value), 500);
    setTimeoutRef(time);
    Router.searchTeacher.push(router, value);
  };

  const onSelectTeacher = (teacher: Teacher) => {
    sessionStorage.setItem("hiperprof_teacher", JSON.stringify(teacher));
    Router.detalhesProfessor.push(router);
  };

  return { teachers, onSearch, onSelectTeacher };
};

export default usePesquisaProfessor;
