/* eslint-env node */
module.exports = {
  "test_page": "tests/index.html?hidepassed",
  "phantomjs_debug_port": 9000,
  "disable_watching": true,
  "phantomjs_args": [
    "--ignore-ssl-errors=true"
  ],
  "launch_in_ci": [
    "PhantomJS"
  ],
  "launch_in_dev": [
    "PhantomJS",
    "Chrome"
  ]
};
