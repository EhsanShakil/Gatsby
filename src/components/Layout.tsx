import React, { ReactNode } from "react";
import Header from "./Header";

type layout = {children: ReactNode, headerTitle: string};

const Layout = ({ children, headerTitle }: layout) => {
  return (
    <div>
      <Header title={headerTitle} />
      {children}
    </div>
  );
};

export default Layout;
