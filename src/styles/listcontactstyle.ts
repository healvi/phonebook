import { css } from "@emotion/react";
import { jsx } from "@emotion/react";

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map((bp, i) => `@media (min-width: ${bp}px)`);

const listcontactstyle = css({
  width: "100%",
  maxWidth: "100%",
  marginBottom: 5,
  minHeight: 60,
  padding: "5px 20px",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "white",
  "& .image-contact": {
    flexGrow: 1,
    marginRight: 10,
    "& img": {
      maxHeight: 50,
      borderRadius: 20,
    },
  },
  "& .info-contact": {
    flexGrow: 6,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "center",
    "& p": {
      margin: 0,
      fontSize: 12,
    },
    "& .name-contact": {
      fontWeight: 700,
    },
  },
  "& .action-contact": {
    flexGrow: 3,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    "& .icon": {
      maxWidth: 30,
    },
  },
  "& .icon": {
    width: "60 !imprtant",
  },
});

export default listcontactstyle;
