module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				blackPrimary: '#0F0E17',
				amarrillo: '#FED941',
				greyLight: '#A7A9BE',
			},
			fontSize: {
				'46px': '46px',
				'48px': '48px',
				'48px': '48px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
