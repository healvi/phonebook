import { css } from "@emotion/react";
import { jsx } from "@emotion/react";

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map((bp, i) => `@media (min-width: ${bp}px)`);

const navbarstyle = css({
  width: "100%",
  maxWidth: "100%",
  maxHeight: "max-content",
  padding: "10px 20px",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  backgroundColor: "white",
  justifyContent: "space-between",
  alignItems: "center",
  "& .nav-title": {
    flexGrow: 2,
    textAlign: "left",
    "& p": {
      margin: 0,
      fontSize: 12,
    },
  },
  "& .nav-content": {
    display: "flex",
    flexGrow: 8,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "end",
    "& .icon": {
      maxWidth: 20,
      marginRight: 10,
    },
  },
  "& .search-container": {
    marginTop: 10,
    flexBasis: "100%",
    "& .search-input": {
      width: "100%",
      padding: "8px",
      borderRadius: 10,
    },
  },
  "& .show": {
    display: "flex",
  },
  "& .hidden": {
    display: "none",
  },
});

export default navbarstyle;
