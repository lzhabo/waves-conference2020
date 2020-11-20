import { injectGlobal } from "emotion";
import tenor from "./fonts/TenorSans-Regular.ttf";
import ibm from "./fonts/IBMPlexSans-Regular.ttf";
injectGlobal`
  * {
    box-sizing: border-box;
  }
  @font-face {
    font-family: Tenor Sans;
    src: url(${tenor})   ;
  }
  @font-face {
    font-family: IBM Plex Sans;
    src: url(${ibm});
  }
  }`;
