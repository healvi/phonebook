import { css } from "@emotion/react";
import { jsx } from "@emotion/react";

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map((bp, i) => `@media (min-width: ${bp}px)`);

const homestyle = css({
  marginTop: 60,
  marginBottom: 60,
  padding: "10px 10px",
  minHeight: "calc(100% - 60px)",
  minWidth: "100vw",
});

export default homestyle;
