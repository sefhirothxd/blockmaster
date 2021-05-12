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
				'28px': '28px',
				'46px': '46px',
				'48px': '48px',
				'48px': '48px',
			},
			maxWidth: {
				1366: '1366px',
				1200: '1200px',
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				Montserrat: ['Montserrat', 'sans-serif'],
			},
			height: {
				'40vh': '40vh',
			},
			width: {},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
