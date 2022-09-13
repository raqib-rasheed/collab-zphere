const BundleTracker = require("webpack-bundle-tracker");
module.exports = {
    webpack: (config, env) => {
        // config.optimization.splitChunks.name = "vendors";
        console.log(env, "*************************************");
        // config.externals = {
        //     react: 'react',
        //     reactDOM: 'react-dom',
        // }
        if (env === "development") {
            console.log(__dirname + '\\src');
            config.output.publicPath = "http://localhost:3000/";
            config.plugins.push(
                new BundleTracker({
                    path: __dirname,
                    filename: "../backend/static/webpack-stats.dev.json",
                })
            );
            // config.entry.main.push(
            //     require.resolve("webpack-dev-server/client") + "?http://localhost:3000"
            // );
            // config.entry.main.push(require.resolve("webpack/hot/dev-server"));
            // config.entry.push(
            //     require.resolve("webpack-dev-server/client") + "?http://localhost:3000"
            // );
            // config.entry.push(require.resolve("webpack/hot/dev-server"));
        } else if (env === "production") {
            // dev
            // config.output.publicPath = "http://localhost:8000/static/";

            // production
            config.output.publicPath = "https://zphere.s3.ap-south-1.amazonaws.com/zphere-static-root/";
            config.plugins.push(
                new BundleTracker({
                    path: __dirname,
                    filename: "../backend/static/webpack-stats.prod.json",
                })
            );
        }
        return config;
    },
    devServer: function (configFunction) {
        return function (proxy, allowedHost) {
            const config = configFunction(proxy, allowedHost);
            config.headers = { "Access-Control-Allow-Origin": "*" };
            config.port = 3000;
            return config;
        };
    },
};
