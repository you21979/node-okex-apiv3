const okexv3 = require("../..")
const papi = okexv3.privateApi
const cr = okexv3.customRequest

const fs = require("fs")
const auth = JSON.parse(fs.readFileSync("./config/auth.json"))

const req = new cr.SignRequest(auth["API-KEY"], auth["API-SECRET"], auth["API-PASS"])
const wapi = new papi.WalletAPI(req)
wapi.wallet().then(console.log)

