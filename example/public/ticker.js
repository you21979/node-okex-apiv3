const okexv3 = require("../..")
const public = okexv3.publicApi
const cr = okexv3.customRequest

const req = new cr.BaseRequest()
const papi = new public.FuturesAPI(req)
const inst_id = "BTC-USD-181228"
papi.ticker(inst_id).then(console.log)

