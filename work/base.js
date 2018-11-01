const crypto = require('crypto');

const createGetParams = (endpoint, params, headers) => {
    return {
        method: "GET",
        uri: endpoint,
        qs: params,
        headers: headers,
        forever: true,
        transform2xxOnly: true,
        transform: function (body) {
            return JSON.parse(body);
        },
    }
}
const createPostParams = (endpoint, params, headers) => {
    return {
        method: "POST",
        uri: endpoint,
        form: params,
        headers: headers,
        forever: true,
        transform2xxOnly: true,
        transform: function (body) {
            return JSON.parse(body);
        },
    }
}

const sign = exports.sign = function(argo, secret, data){
    const hmac = crypto.createHmac(argo, secret);
    return hmac.update(data).digest('base64')
}

const makedata = (timestamp, request) => {
    return timestamp.toString() + request
}

const createAuthHeaders = (apikey, secret, passphase, request) => {
    const timestamp = new Date().getTime()
    return {
        "OK-ACCESS-KEY": apikey,
        "OK-ACCESS-SIGN": sign("sha256", secret, makedata( timestamp, request )),
        "OK-ACCESS-TIMESTAMP": timestamp,
        "OK-ACCESS-PASSPHRASE": passphase,
    }
}

module.exports = {
    createGetParams,
    createPostParams,
    createAuthHeaders,
}
