import React, { FC } from "react";

import Nav from "./Nav";


export const Layout: FC<{children:any}> = ({ children }) => {
    return (
        <>
            <Nav showBottomSection={true} />
            {children}
        </>
    );
};

export default Layout;
