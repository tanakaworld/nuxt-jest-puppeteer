const { teardown: teardownDevServer } = require('jest-dev-server')

// overwrite default setup
// https://github.com/smooth-code/jest-puppeteer/blob/db731a3a4382f3e27c4e16d9f8cf2560ee5adaff/packages/jest-environment-puppeteer/src/global.js
module.exports = async function globalTeardown() {
  await teardownDevServer()

  await browser.close()
}
