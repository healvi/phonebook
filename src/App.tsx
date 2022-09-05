/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { BootmNav, Navbar } from "./components";
import { homestyle } from "./styles/home";

function App() {
  return (
    <div css={homestyle}>
      <Navbar />
      <BootmNav />
    </div>
  );
}

export default App;
