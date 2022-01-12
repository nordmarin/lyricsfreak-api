const request = require('request-promise')
const parser = require("../parsers/topParser")
const {success, failure} = require("../utils/response")

exports.list = async (req, res) => {
    // #swagger.tags = ['Top 100 songs']
    // #swagger.summary = 'Top 100 songs'
    try {
        const html = await request.get(process.env.URI + '/top')
        success(res, parser.top(html))
    } catch (error) {
        failure(res, error)
    }
}