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
};

export default Router;
