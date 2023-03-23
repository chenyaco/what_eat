const path = require("path")
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@views': path.resolve(__dirname, './src/views')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.pug']
  },
  module: {
    rules: [
      // ...
      // 加入對 .pug 檔案的解析
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      }
    ]
  }
})
