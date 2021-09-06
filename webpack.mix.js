const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    resolve: {
        extensions: [".js", ".vue"],
        alias: {
            "@": __dirname + "/resources"
        }
    }
});

mix.options({
    hmrOptions: {
        // host: "192.168.0.100",
        host: "172.17.204.105",
        port: 8888
    }
});

mix.js("resources/js/app.js", "public/js")
    .vue()
    .sass("resources/sass/app.scss", "public/css");
