/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				fadeIn: "fadeIn 2s ease-in forwards"
			  },
			  keyframes: {
				fadeIn: {
				  "0%": { opacity: 0 },
				  "100%": { opacity: 1 }
				}
			},
			backgroundImage: {
				'starbg': "url('../assets/images/starbg.webp')",
				'astronaut':"url('../assets/images/astronaut.png')",
				'heroMoon': "url('../assets/images/moonstuff.jpg')",
				'moon':"url('../assets/images/moon2.webp')",
				'overviewbg':"url('../assets/images/overviewbg.webp')",
				'moonscape':"url('../assets/images/moonscape.webp')",
			},
			aspectRatio: {
				'golden': '1.618 / 1',
				'moon': '1707 / 916',
				'rev-golden': '247 / 371'
			  },
			fontFamily: {
				'nixie': ['Nixie One', 'serif'],
				'news': ['Noto Sans MonoVariable', 'serif'],
				'playfair': ['Playfair DisplayVariable', 'serif'],
				'poppins': ['Poppins','Helvetica', 'Arial', 'sans-serif'],
				'habitat': ['HABITAT','sans-serif']
			},
			container: {
				center: true,
				padding: {
				DEFAULT: "1rem",
				}
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require("daisyui"),
	],
}
