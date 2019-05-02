const puppeteer = require('puppeteer')

// devices
const iPhone = puppeteer.devices['iPhone SE']

describe('test', () => {
  test('works', async () => {
    // devise
    await page.emulate(iPhone)

    await page.goto('http://localhost:3000')
    const image = await page.screenshot({
      fullPage: true
    })

    expect(image).toMatchImageSnapshot()
  })
})
