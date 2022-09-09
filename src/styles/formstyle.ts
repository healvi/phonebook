import { css } from "@emotion/react";

const formstyle = css({
  textAlign: "center",
  height: "100vh",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "center",
  backgroundColor: "#00BBFF",
  alignItems: "end",
  "& .form-container": {
    padding: "0 30px",
    borderRadius: "5% 5% 0 0 ",
    justifyContent: "center",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minHeight: "calc(100% - 120px)",
    Width: "100%",
    backgroundColor: "white",
    "& form": {
      display: "flex",
      flexDirection: "column",
      "& .number-conatiner": {
        display: "flex",
        flexDirection: "row",
        "& input[type=number]": {
          flexGrow: 9,
        },
        "& .icon": {
          flexGrow: 1,
          maxWidth: 20,
          marginLeft: 10,
        },
      },
      "& .btn": {
        padding: 10,
        borderRadius: 20,
      },
      "& input[type=text], input[type=number]": {
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 20,
        padding: 10,
      },
      "& input[type=submit]": {
        marginTop: 10,
        backgroundColor: "blue",
        color: "white",
      },
      "& input[type=submit]:disabled": {
        marginTop: 10,
        backgroundColor: "lightblue",
        color: "white",
      },
      "& .btn-delete": {
        marginTop: 10,
        backgroundColor: "red",
        color: "white",
      },
      "& .btn-add": {
        marginTop: 10,
      },
    },
  },
});

export default formstyle;
