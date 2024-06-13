export default defineNuxtConfig({
	devtools: { enabled: true, },
	components: true,
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/color-mode'
	],
	colorMode: {
		classSuffix: '',
	},
	tailwindcss: {
		cssPath: './assets/css/tailwind.css',
		configPath: './tailwind.config.ts',
		exposeConfig: false,
		config: {},
		injectPosition: 0,
		viewer: true,
	},
})
