import { boot } from 'quasar/wrappers'

// https://quasar.dev/options/quasar-language-packs

// quasar new boot quasar-lang-pack [--format ts]
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
// export default boot(async (/* { app, router, ... } */) => {
//   // something to do
// })

import { Quasar } from 'quasar'

// relative path to your node_modules/quasar/..
// change to YOUR path
// const langList = import.meta.glob('../../node_modules/quasar/lang/*.mjs')
// or just a select few (example below with only DE and FR):
const langList = import.meta.glob('../../node_modules/quasar/lang/(en-US|zh-TW|zh-CN).mjs')
export default async () => {
  const langIso = 'en-US' // ... some logic to determine it (use Cookies Plugin?)
  try {
    langList[`../../node_modules/quasar/lang/${langIso}.mjs`]().then(lang => {
      Quasar.lang.set(lang.default)
    })
  }
  catch (err) {
    // Requested Quasar Language Pack does not exist,
    // let's not break the app, so catching error
  }
}
