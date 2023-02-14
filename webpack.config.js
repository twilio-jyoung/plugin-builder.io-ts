const DotEnvWebpack = require("dotenv-webpack");
module.exports = (config, { isProd, isDev, isTest }) => {
	/**
	 * Customize the webpack by modifying the config object.
	 * Consult https://webpack.js.org/configuration for more information
	 */

	config.resolve.extensions = [".tsx", ".ts", ".js"];

	// config.output = {
	// 	// `filename` provides a template for naming your bundles (remember to use `[name]`)
	// 	filename: "[name].bundle.js",
	// 	// `chunkFilename` provides a template for naming code-split bundles (optional)
	// 	chunkFilename: "[name].bundle.js",
	// 	// `path` is the folder where Webpack will place your bundles
	// 	path: "./dist",
	// 	// `publicPath` is where Webpack will load your bundles from (optional)
	// 	publicPath: "dist/",
	// };

	config.plugins.push(
		new DotEnvWebpack({
			path: ".env",
		})
	);

	return config;
};
