import { FC } from "react";
import { ILayoutProps } from "./Layout.types";
import css from "./Layout.module.css";

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return <main className={css.container}>{children}</main>;
};
