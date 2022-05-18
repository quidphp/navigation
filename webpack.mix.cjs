const mix = require('laravel-mix');
mix.js('index.js', 'dist/navigation-es.js');
mix.js('test/navigation.js', 'dist/navigation-test-es.js');
mix.babel('dist/navigation-es.js', 'dist/navigation.js');
mix.babel('dist/navigation-test-es.js', 'dist/navigation-test.js');
mix.webpackConfig({
    output: {
        library: ["Quid"],
        libraryTarget: "window"
    }
});