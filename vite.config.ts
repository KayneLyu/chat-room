import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
// import path from 'path';
// https://vitejs.dev/config/


export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname);

  return {
    // build: {
    //   target: "chrome58"
    // },
    build: {
      cssTarget: "chrome61"
    },
    
    plugins:[react()],
    resolve:{
      alias: {
        '@': resolve(__dirname, 'src' )// 设置 `@` 指向 `src` 目录
      }
    },
    // 资源路径
    base: env.VITE_RES_URL,
    // css: {
    //   preprocessorOptions: {
    //     less: {
    //       additionalData: `@import "${path.resolve(__dirname, 'src/theme.module.less')}";`,
    //       javascriptEnabled: true,
    //     }
    //   },
    // },
  }
})