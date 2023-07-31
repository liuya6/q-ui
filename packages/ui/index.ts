import { QButton } from "@q-ui/components/button";
import Components from "./components";
import type { App } from "vue";
// import 'uno.css'
import "./styles/index.scss";

const Installer = {
  install(app: App) {
    Components.forEach((c) => {
      app.use(c);
    });
  },
};

export default Installer;
export { QButton };
