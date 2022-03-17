const mix = require("laravel-mix");

mix.js("resources/js/app.js", "public/js")
    .react()
    .postCss("resources/css/app.css", "public/css", [require("tailwindcss")]);

mix.webpackConfig((webpack) => {
    return {
        plugins: [
            new webpack.DefinePlugin({
                "process.env": JSON.stringify(process.env),
            }),
        ],
    };
});
