// webpack.mix.js

let mix = require('laravel-mix');

mix.options({
	processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
	purifyCss: false, // Remove unused CSS selectors.
	postCss: [require('autoprefixer')] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
});

mix.js('src/js/app.js', 'js')
   .js('src/js/admin.js', 'js')
   .autoload({
       jquery: ['$', 'window.jQuery']
    }).setPublicPath('../static');

mix.sass('src/scss/app.scss', 'css')
   .sass('src/scss/admin.scss', 'css')
   .setPublicPath('../static');

//npx mix --production
