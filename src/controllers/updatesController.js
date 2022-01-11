const parser = require('../parsers/updatesParser')
const request = require('request-promise')
const {success, failure} = require('../utils/response')

exports.list = async (req, res) => {
    try {
        const html = await request.get(process.env.URI + '/updates')
        success(res, parser.list(html))
    } catch (error) {
        failure(res, error)
    }
}