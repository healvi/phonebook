import { css } from "@emotion/react";
import { jsx } from "@emotion/react";

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map((bp, i) => `@media (min-width: ${bp}px)`);

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
      "& .btn": {
        padding: 10,
        borderRadius: 20,
      },
      "& input[type=text], input[type=number]": {
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 20,
        padding: 10,
      },
      "& input[type=submit]": {
        marginTop: 10,
        backgroundColor: "blue",
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
