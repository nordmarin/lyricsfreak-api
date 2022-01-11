const parser = require('../parsers/searchParser')
const request = require('request-promise')
const {success, failure} = require('../utils/response')

exports.search = async (req, res) => {
    try {
        const html = await request.get(process.env.URI + '/search.php?q=' + req.params.song)
        success(res, parser.search(html))
    } catch (error) {
        failure(res, error)
    }
}