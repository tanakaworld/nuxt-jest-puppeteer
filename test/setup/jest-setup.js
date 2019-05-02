const { toMatchImageSnapshot } = require('jest-image-snapshot')

// Extend Jest's expect
// https://github.com/americanexpress/jest-image-snapshot#usage
expect.extend({ toMatchImageSnapshot })

// https://vue-test-utils.vuejs.org/guides/#choosing-a-test-runner
require('jsdom-global')()
