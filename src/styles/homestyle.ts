import { css } from "@emotion/react";
import { jsx } from "@emotion/react";

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map((bp, i) => `@media (min-width: ${bp}px)`);

const homestyle = css({
  padding: "10px 10px",
  minHeight: "100vh",
  minWidth: "100vw",
});

export default homestyle;
