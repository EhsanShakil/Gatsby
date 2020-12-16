import React, { ReactNode } from "react";
import Header from "./Header";

type layout = {children: ReactNode};

const Layout = ({ children }: layout) => {
  return (
    <div>
      <Header title="My Application" />
      {children}
    </div>
  );
};

export default Layout;
