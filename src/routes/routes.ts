import { NextRouter } from "next/router";

const Router = {
  home: {
    name: "/",
    push: (router: NextRouter) => router.push(Router.home.name),
  },
  searchTeacher: {
    name: "/pesquisa-professor",
    push: (router: NextRouter, search?: string) =>
      router.push({ pathname: Router.searchTeacher.name, query: { search } }),
  },
  detalhesProfessor: {
    name: "/professor/detalhes",
    push: (router: NextRouter) =>
      router.push({ pathname: Router.detalhesProfessor.name }),
  },
};

export default Router;
