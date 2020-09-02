const path = require("path");
const { version } = require("./package.json");

module.exports = {
  styleguideComponents: {
    Wrapper: path.join(__dirname, "src/components/StyleWrapper"),
  },
  ignore: ['**/components/index.js'],
  defaultExample: true,
  version,
};
