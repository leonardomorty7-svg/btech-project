/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				bg: '#0f121b',
				surface: '#151826',
				card: '#1c2133',
				primary: '#18218c',
				accent: '#2408c0',
				violet: '#4e2bcd',
			},
			fontFamily: {
				sans: ['"Plus Jakarta Sans"', 'Outfit', 'Inter', 'sans-serif'],
				mono: ['Fira Code', 'monospace'],
			},
			borderRadius: {
				'xl': '16px',
			}
		},
	},
	plugins: [],
}
