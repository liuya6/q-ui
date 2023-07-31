import { App, Plugin } from "vue";

import QButton from "./src/index.vue";

const ButtonInstall: Plugin = {
  install: (app: App) => {
    app.component("q-button", QButton);
  },
};

export default ButtonInstall;
export { QButton };
