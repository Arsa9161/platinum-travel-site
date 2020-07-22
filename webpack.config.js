let current_task = process.env.npm_lifecycle_event;

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // file shinechlegdeh uyd buh file-uudiig ustgaj, dahin shineer bundle hiine. ene ni hereggui hog uusehees sergiilne
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // bundled.js -ees css file-uudiig ylgaj bundle hiine
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fileSystemExtra = require("fs-extra");

const postcss_plugins = [
  require("postcss-import"),
  require("postcss-mixins"),
  require("postcss-simple-vars"), // css dotor variable zarlaj bolno
  require("postcss-hexrgba"), // rgba() dotor ungiig variable-eer duudaj bolno
  require("postcss-nested"),
  require("autoprefixer"),
];
// minii uusgesen plugin
class RunAfterCompile {
  apply(compiler) {
    // file-aas zurguudiig copy doj product foldert paste hiine
    compiler.hooks.done.tap("copy images", () =>
      fileSystemExtra.copySync("./app/assets/images", "./docs/assets/images")
    );
  }
}
let cssConfig = {
  // buh css file
  test: /\.css$/i,
  use: [
    "css-loader",
    { loader: "postcss-loader", options: { plugins: postcss_plugins } }, // postcss loader-g nemelt plugin-uudiin tsug ashiglana
  ],
};

let pages = fileSystemExtra // file-uudtai ajildag class
  .readdirSync("./app") // app folder dotorh bih file-uudiig unshine
  .filter((page) => {
    // filtereer shine array uusgene
    return page.endsWith(".html");
  })
  .map((page) => {
    // shineer el tus burdeer urgutguj array uusgene
    return new HtmlWebpackPlugin({
      // product uyed dood taliig solij tavina.
      // filename: `${page.substring(0, page.indexOf("."))}.[chunkHash].html`,
      filename: page, // development uyed dev live server ajiluulahad html file-aa source folder doh nertei ijil tavij ugvul server maani shine uusgegdsen html-iig ajiluulj bsn. Ene ni uurchlult shuud web deer haragdana.
      template: `./app/${page}`,
    });
  });
// main config
let config = {
  entry: "./app/assets/scripts/app.js", // ene file--ig bundle hiine
  module: {
    rules: [cssConfig], // cssConfig ni commandaas hamaarch uur bn
  },
  plugins:
    // -------------  neg html file-deer ingej ashiglaj bolno
    // new HtmlWebpackPlugin({
    //   filename: "index.html",
    //   template: "./app/index.html",
    // }),

    // -------------- olon html file-tai bol tus burt ni html plugin tohirgoog ashiglaj product folder dotor html js, css holboson file-g uusgene
    pages,
};
// development config
if (current_task === "start") {
  // css configt loader nemne.
  cssConfig.use.unshift("style-loader");

  // bundle hiigdsen file ene zamruu output hiigdene
  config.output = {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app"),
  };
  config.devServer = {
    // html uurchlultuudiig watch hiih
    before: function (app, server) {
      server._watch("./app/**/*.html"); // app dotorh buh filed bga buh .html file
    },
    contentBase: path.join(__dirname, "app"), // ali folderiig server deer ajiluulah
    hot: true, // css,js uurchulultiig reload hiilgui uurchluh SUPER!!!
    port: 3000,
    // neg suljeend holbogdson uur tuhuurumjuus harj bolno
    // host: "0.0.0.0",
  };
  config.mode = "development";
}
// product config
if (current_task === "build") {
  // js file-g yamar loader-aar bundle hiih ve gesen rule nemne
  config.module.rules.push({
    test: /\.js$/, // buh js file
    exclude: /(node_modules)/, // node_module dotor bish
    use: {
      loader: "babel-loader", // babel ashiglaj ES5 ruu hurvuulne
      options: {
        presets: ["@babel/preset-env"],
      },
    },
  });
  cssConfig.use.unshift(MiniCssExtractPlugin.loader); // bundled file-aas css file-uudiig ylgah loaderiig neriig css-iin webpack tohirgoond nemj ugnu

  postcss_plugins.push(require("cssnano")); //  css file-iig bundle hiij jijigruulne

  config.output = {
    filename: "[name].[chunkHash].js", // uurchlugdsun file-iin neriin hash uurchlugdunu. ene ni hereglegchiin browser deer hashlagdsan code oo hereglehguigeer bainga uurchlugdsun file-g download hiij uzuuldeg bolgodog
    chunkFilename: "[name].[chunkHash].js",
    path: path.resolve(__dirname, "docs"),
  };
  config.mode = "production";
  config.optimization = {
    // bundled file-uudad bidnii tataj ashiglaj bga package buyu uurchlult orohgui file-g tusad ni ylgaj file bolgono. Ene ni browser deer ehnii unaa tatagdaj hashlagdaad daraa dahin tatagdahgui. Zuvhun bidnii js, css geh met uurchlugdsun file-g l tatna
    splitChunks: {
      chunks: "all",
    },
  };
  config.plugins.push(
    new CleanWebpackPlugin(), // current all file delete then create new bundled files
    new MiniCssExtractPlugin({ filename: "styles.[chunkHash].css" }),
    new RunAfterCompile() // minii zohioson plugin. deer pichsen
  ); // bundled file dotroos buh css file-g tusad ni file bolgono. Ene ni zuvhun css uurchlugduhud zaaval busad js file-uudiig tatahaas sergiilne)
}

module.exports = config;
