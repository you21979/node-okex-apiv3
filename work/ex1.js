const PublicAPI = require("./public_api")

const papi = new PublicAPI()
const inst_id = "BTC-USD-181228"
//papi.ticker(inst_id).then(console.log)
papi.instruments().then(console.log)

/*
const update = (sec) => {
    const inst_id = "BTC-USD-181228"
    setTimeout(() => {
        papi.kline(inst_id).then(console.log).then(() => {
            return papi.depth(inst_id).then(console.log).then(() => {
                update(sec)
            })
        })
    }, sec)
}
update(1000)
*/
