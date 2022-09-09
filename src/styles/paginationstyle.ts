import { css } from "@emotion/react";

const paginationstyle = css({
  marginTop: 10,
  textAlign: "center",
  maxHeight: 50,
  width: "100%",
  overflow: "hidden",
  position: "fixed",
  bottom: 60,
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
