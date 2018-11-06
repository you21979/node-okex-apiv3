const PAPI = require("./private_api")
const apikey = ""
const secret = ""
const pass = ""
const wapi = new PAPI.WalletAPI(new PAPI.SignRequest(apikey, secret, pass))
wapi.wallet().then(console.log)

