"use client";

import { FC, PropsWithChildren } from "react";
import QueryProvider from "./query-provider";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return <QueryProvider>{children}</QueryProvider>;
};

export default Providers;
