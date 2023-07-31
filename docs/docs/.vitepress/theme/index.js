import DefaultTheme from "vitepress/theme";
import "vitepress-theme-demoblock/dist/theme/styles/index.css";
import { useComponents } from "./useComponents";

import qui from "q-ui";
import "q-ui/dist/index.css";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.use(qui);
    useComponents(ctx.app);
    // useComponents(ctx.app);
  },
};
