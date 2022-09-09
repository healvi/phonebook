import { css } from "@emotion/react";
const bottomnavstyle = css({
  textAlign: "center",
  maxHeight: 50,
  overflow: "hidden",
  position: "fixed",
  bottom: 0,
  width: "100%",
  maxWidth: "100%",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  backgroundColor: "white",
  justifyContent: "center",
  alignItems: "center",
  "& .bottom-items": {
    cursor: "pointer",
    flexGrow: 5,
    "& .icon": {
      maxWidth: 20,
      marginRight: 10,
    },
  },
  "& .active": {
    padding: "10px 20px",
    backgroundColor: "rgb(243, 252, 252)",
  },
});

export default bottomnavstyle;
