const puppeteer = require('puppeteer')
const appRoot = require('app-root-path')
const { ensureDir } = require('fs-extra')

const ssDir = `/${appRoot}/test-results/screenshots`

// devices
const iPhone = puppeteer.devices['iPhone SE']

describe('test', () => {
  test('works', async () => {
    // devise
    await page.emulate(iPhone)

    await ensureDir(ssDir)
    const fileName = 'test'

    await page.goto('http://localhost:3000')
    const image = await page.screenshot({
      fullPage: true,
      path: `${ssDir}/${fileName}.png`
    })

    expect(image).toMatchImageSnapshot({
      customDiffDir: ssDir,
      customSnapshotsDir: ssDir,
      customSnapshotIdentifier: fileName
    })
  })
})
