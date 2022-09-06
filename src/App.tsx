/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

import Routest from "./routes";
import { ContactProvider } from "./context/ContactContext";

function App() {
  return (
    <>
      <ContactProvider>
        <Routest />
      </ContactProvider>
    </>
  );
}

export default App;
