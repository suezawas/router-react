import { Page2 } from "../components/Page2";
import { Page404 } from "../components/Page404";
import { UrlParameter } from "../components/UrlParameter";

export const page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
];
