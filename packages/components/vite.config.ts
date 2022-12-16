import path from 'node:path';
import { defineConfig } from 'vite';


export default defineConfig({
    plugins: [
    ],
    build: {
        sourcemap: true,
        cssCodeSplit: true,
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'FaComponents',
            formats: ['es', 'umd'],
            fileName: (format) => `fa-components.${format}.js`,
        },
        rollupOptions: {
        },
    },
});
