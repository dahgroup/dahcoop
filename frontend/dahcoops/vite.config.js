import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig(({ command }) => {
	const isProduction = command === 'build';

	return {
		base: '/',

		plugins: [preact(), createHtmlPlugin()],

		build: {
			target: 'es2015',
			outDir: 'dist',
			assetsDir: '.',
			minify: isProduction ? 'terser' : false,
			sourcemap: !isProduction,
			rollupOptions: {
				output: {
					entryFileNames: 'assets/js/[name]-[hash].js',
					chunkFileNames: 'assets/js/[name]-[hash].js',
					manualChunks(id) {
						if (id.includes('node_modules')) {
							return 'vendor';
						}
					},
				},
			},
		},

		server: {
			hmr: {
				overlay: true,
			},
		},

		optimizeDeps: {
			include: [],
		},
	};
});
