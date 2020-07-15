const path = require("path");

const postcss_plugins = [
    require("postcss-import"),
    require("postcss-mixins"),
    require("postcss-simple-vars"),
    require("postcss-nested"),
    require("autoprefixer"),
];
module.exports = {
    entry: "./app/assets/scripts/app.js",
    output: {
        filename: "bundled.js",
        path: path.resolve(__dirname, "app"),
    },
    devServer: {
        // html uurchlultuudiig watch hiih
        before: function(app, server) {
            server._watch("./app/**/*.html");
        },
        contentBase: path.join(__dirname, "app"),
        hot: true, // css,js uurchulultiig reload hiilgui uurchluh SUPER!!!
        port: 3000,
        // neg suljeend holbogdson uur tuhuurumjuus harj bolno
        // host: "0.0.0.0",
    },
    mode: "development",
    module: {
        rules: [{
            test: /\.css$/i,
            use: [
                "style-loader",
                "css-loader",
                { loader: "postcss-loader", options: { plugins: postcss_plugins } },
            ],
        }, ],
    },
};