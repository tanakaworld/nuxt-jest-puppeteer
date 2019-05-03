const { setup: setupDevServer } = require('jest-dev-server')
const puppeteer = require('puppeteer')

// overwrite default setup
// https://github.com/smooth-code/jest-puppeteer/blob/db731a3a4382f3e27c4e16d9f8cf2560ee5adaff/packages/jest-environment-puppeteer/src/global.js
module.exports = async function globalSetup() {
  global.browser = await puppeteer.launch()
  process.env.PUPPETEER_WS_ENDPOINT = global.browser.wsEndpoint()

  await setupDevServer({
    command: 'npm run build && npm run start',
    launchTimeout: 600000,
    protocol: 'http',
    host: 'localhost',
    port: 3000,
    debug: true,
    usedPortAction: 'kill'
  })
}
