require("dotenv").config();
const withPreact = require("next-plugin-preact");

module.exports = withPreact({
  env: {
    NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN:
      process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
  },
});
