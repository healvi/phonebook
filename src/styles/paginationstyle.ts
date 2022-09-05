import { css } from "@emotion/react";
import { jsx } from "@emotion/react";

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map((bp, i) => `@media (min-width: ${bp}px)`);

const paginationstyle = css({
  marginTop: 10,
  textAlign: "center",
  maxHeight: 50,
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  "& .pagination-container": {
    borderRadius: 10,
    flexBasis: "80%",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    "& .icon": {
      maxWidth: 25,
      marginRight: 10,
    },
    "& .pagiantion-item": {
      padding: 10,
      flexGrow: 3,
    },
  },
});

export default paginationstyle;
