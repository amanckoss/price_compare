// nuxt.config.ts
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import {fileURLToPath} from "url";

export default defineNuxtConfig({
    vite: {
        plugins: [
            Components({
                // add option {resolveIcons: true} as parameter for resolving problem with icons
                resolvers: [AntDesignVueResolver({
                    resolveIcons: true,
                    importStyle: false,
                })],
            }),
        ],
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                }
            }
        },
        // @ts-ignore
        ssr: {
            noExternal: ['moment', 'compute-scroll-into-view', 'ant-design-vue','@ant-design/icons-vue'],
        },
    },
    // alias: {
    //     'style': fileURLToPath(new URL('./assets/style', import.meta.url)),
    // },
    css: ['~/assets/style/main.less']
})



