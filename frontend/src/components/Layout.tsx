import React, { FC } from "react";

import Nav from "./Nav";

export const Layout: FC = ({ children }) => {
    return (
        <>
            <Nav />
            {children}
        </>
    );
};

export default Layout;
