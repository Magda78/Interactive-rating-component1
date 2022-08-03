module.exports = {
	mode: 'jit',
	purge: [ './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}' ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			sm: '375px',
			md: '960px',
			lg: '1440px'
		},
		extend: {
			colors: {
				'bg-color': '#131518',
				'card-bg': '#1F262F',
				'star-bg': '#262E38',
				'paragraph-font-color': '#969FAD',
				'numbers-font-color': '#969FAD',
				'button-bg-hover': '#FC7614',
				'button-color': '#979797'
			},
			fontFamily: {
				Overpass: [ 'Overpass' ]
			}
		}
	},
	plugins: []
};
