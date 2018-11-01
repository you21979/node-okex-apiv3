
const createGetParams = (endpoint, params) => {
    return {
        method: "GET",
        uri: endpoint,
        qs: params,
        forever: true,
        transform2xxOnly: true,
        transform: function (body) {
            return JSON.parse(body);
        },
    }
}

exports.createGetParams = createGetParams

