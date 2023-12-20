import react from "@vitejs/plugin-react";
import * as _ from "lodash";
import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import svgr from "vite-plugin-svgr";

const port = _.toNumber(process.env.PORT) || 3000;

export default defineConfig({
    plugins: [
        mkcert(),
        react(),
        svgr({
            svgrOptions: {
                dimensions: false,
            },
            include: "**/*.svg",
        }),
    ],
    server: { port, https: true },
});
