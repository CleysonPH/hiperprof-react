import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export default function useIndex() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [messageError, setMessageError] = useState("");

  const onSearchTeacher = (event: FormEvent) => {
    event.preventDefault();
    if (search.trim().length >= 3) {
      router.push(`/pesquisa-professor`);
    } else {
      setMessageError("Digite pelo menos 3 caracteres");
    }
  };

  return { setSearch, messageError, onSearchTeacher };
}
