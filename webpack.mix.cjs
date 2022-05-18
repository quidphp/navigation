const mix = require('laravel-mix');
mix.js('index.js', 'dist/navigation.js');
mix.js('test/navigation.js', 'dist/navigation-test.js');
mix.babel('dist/navigation.js', 'dist/navigation-es5.js');
mix.babel('dist/navigation-test.js', 'dist/navigation-test-es5.js');
mix.webpackConfig({
    output: {
        library: ["Quid"],
        libraryTarget: "window"
    }
});