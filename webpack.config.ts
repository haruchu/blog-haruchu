// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [{ test: /\.ts|tsx$/, use: "ts-loader" },
    {
      test: /\.(png|jpg)$/,
      loader: 'url-loader',
      options: {},
  }],
  },
  resolve: {
    extensions: ['.tsx', '.ts']
  },
};
