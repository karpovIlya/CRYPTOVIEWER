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
	runtimeConfig: {
		public: {
			BASE_URL: 'https://min-api.cryptocompare.com',
			API_KEY: '9e0cfbbc42ac26fe7598173e16b68dab6453bb4b774b44c6b9ba4f69e74e8f4d',
		},
	},
})
