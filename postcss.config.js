const cssNano = require('cssnano')({ preset: 'default' });

module.exports = {
	plugins: [require('tailwindcss'), ...(process.env.NODE_ENV === 'production' ? [cssNano] : [])],
};
