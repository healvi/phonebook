import { css } from "@emotion/react";
import { jsx } from "@emotion/react";

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map((bp, i) => `@media (min-width: ${bp}px)`);

const detailstyle = css({
  textAlign: "center",
  height: "100vh",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "center",
  backgroundColor: "#00BBFF",
  alignItems: "end",
  "& .details-container": {
    padding: "0 30px",
    borderRadius: "5% 5% 0 0 ",
    justifyContent: "start",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minHeight: "calc(100% - 120px)",
    Width: "100%",
    backgroundColor: "white",
    "& .avatar-contact": {
      maxHeight: "max-content",
      marginTop: -60,
      "& .icons": {
        height: 120,
        borderRadius: 99999,
      },
    },
    "& .content-contact": {
      marginTop: 60,
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      alignItems: "start",

      "& p": {
        margin: 0,
      },
      "& .hightitle": {
        fontSize: 16,
        fontWeight: 700,
      },
      "& .title": {
        fontSize: 12,
        fontWeight: 700,
      },
      "& .subtitle": {
        fontSize: 10,
      },
    },
    "& .deskripsi-contanct": {
      marginTop: 60,
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      alignItems: "center",
      "& .image-contact": {
        flexGrow: 1,
        marginRight: 30,
        "& img": {
          maxHeight: 50,
          borderRadius: 20,
        },
      },
      marginRight: "100px",
      "& .deskripsi": {
        textAlign: "start",
        flex: 8,
      },
      "& p": {
        margin: 0,
      },
    },
    "& .deskripsi-contanct-number": {
      marginTop: 20,
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      alignItems: "center",
      "& .image-contact": {
        flexGrow: 1,
        marginRight: 30,
        "& img": {
          maxHeight: 50,
          borderRadius: 20,
        },
      },
      marginRight: "100px",
      "& .deskripsi": {
        textAlign: "start",
        flex: 8,
      },
      "& p": {
        margin: 0,
      },
    },
    "& .btn": {
      padding: "10px",
      borderRadius: 20,
    },
    "& .btn-edit": {
      marginTop: 20,
      backgroundColor: "blue",
      color: "white",
    },
    "& .btn-delete": {
      marginTop: 10,
      backgroundColor: "red",
      color: "white",
    },
  },
});

export default detailstyle;
