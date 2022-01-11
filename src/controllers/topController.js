const request = require('request-promise')
const parser = require("../parsers/topParser")
const {success, failure} = require("../utils/response")

exports.list = async (req, res) => {
    try {
        const html = await request.get(process.env.URI + '/top')
        success(res, parser.top(html))
    } catch (error) {
        failure(res, error)
    }
}