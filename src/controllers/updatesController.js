const parser = require('../parsers/updatesParser')
const request = require('request-promise')
const {success, failure} = require('../utils/response')

exports.list = async (req, res) => {
    // #swagger.tags = ['Updates songs']
    // #swagger.summary = 'Updates songs'
    try {
        const html = await request.get(process.env.URI + '/updates')
        success(res, parser.list(html))
    } catch (error) {
        failure(res, error)
    }
}