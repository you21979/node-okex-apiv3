const crypto = require('crypto')
const qstringify = require("querystring").stringify

const createGetParams = (endpoint, params, headers) => {
    return {
        method: "GET",
        uri: endpoint,
        qs: params,
        headers: headers,
        forever: true,
        transform2xxOnly: true,
        transform: (body) => {
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
        transform: (body) => {
            return JSON.parse(body);
        },
    }
}

const createRequestParams = (method, endpoint, params, headers) => {
    switch(method){
    case "GET":
        return createGetParams(endpoint, params, headers)
    case "POST":
        return createPostParams(endpoint, params, headers)
    }
    return void 0
}

const sign = (argo, secret, data) => {
    const hmac = crypto.createHmac(argo, secret);
    return hmac.update(data).digest('base64')
}

const prehash = (timestamp, method, request, body) => {
    return timestamp + method.toUpperCase() + request + body
}

const createAuthHeaders = (apikey, passphase, sign, timestamp) => {
    return {
        "OK-ACCESS-KEY": apikey,
        "OK-ACCESS-SIGN": sign,
        "OK-ACCESS-TIMESTAMP": timestamp.toString(),
        "OK-ACCESS-PASSPHRASE": passphase,
    }
}

const createSignHeaders = (apikey, secret, pass, method, url, params) => {
    const timestamp = new Date().toISOString()
    const body = qstringify(params)
    const message = prehash(timestamp, method, url, body)
    const headers = createAuthHeaders(apikey, pass, sign("sha256", secret, message), timestamp)
    return headers
}

module.exports = {
    sign,
    prehash,
    createAuthHeaders,
    createSignHeaders,
    createGetParams,
    createPostParams,
    createRequestParams,
}
