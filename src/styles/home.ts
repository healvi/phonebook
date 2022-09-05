import { css } from "@emotion/react";
import { jsx } from "@emotion/react";

const breakpoints = [576, 768, 992, 1200]
const mq = breakpoints.map((bp,i) => `@media (min-width: ${bp}px)`)

const homestyle = css({
    textAlign: "center",
    backgroundColor: `#282c34`,
    'paragrah' : {
      color : 'red'
    }
  })

export {homestyle}