const puppeteer = require('puppeteer')
const fs = require('fs')
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

    // take snapshot
    const image = await page.screenshot({
      fullPage: true,
      path: `${ssDir}/${fileName}-expected.png`
    })
    expect(image).toMatchImageSnapshot({
      customDiffDir: ssDir,
      customSnapshotsDir: ssDir,
      customSnapshotIdentifier: fileName
    })
  })
})
