import { css } from "@emotion/react";

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
  "& .deskripsi": {
    flexGrow: 9,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  "& .image-contact": {
    flexGrow: 1,
    marginRight: 10,
    "& img": {
      maxHeight: 50,
      borderRadius: 20,
    },
  },
  "& .info-contact": {
    flexGrow: 5,
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
      textTransform: "uppercase",
    },
  },
  "& .action-contact": {
    flexBasis: 70,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    "& .icon": {
      maxWidth: 30,
    },
    "& .bundle": {
      flexGrow: 1,
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  "& .icon": {
    width: "60 !imprtant",
  },
});

export default listcontactstyle;
