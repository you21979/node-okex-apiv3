const PAPI = require("./private_api")
const cr = require("./custom_request")

const apikey = ""
const secret = ""
const pass = ""
const req = new cr.SignRequest(apikey, secret, pass)
const wapi = new PAPI.WalletAPI(req)
wapi.wallet().then(console.log)

