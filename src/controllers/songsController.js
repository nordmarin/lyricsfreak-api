const request = require('request-promise')
const parser = require("../parsers/songsParser")
const linkList = require('../utils/list')
const {success, failure} = require("../utils/response")

exports.list = async (req, res) => {
    // #swagger.tags = ['Songs']
    // #swagger.summary = 'Get the first letters of the artists'
    try {
        success(res, parser.all())
    } catch (error) {
        failure(res, error)
    }

}

exports.letter = async (req, res) => {
    /*
    #swagger.tags = ['Songs']
    #swagger.summary = 'Get a list of artists by first letter'
    #swagger.parameters['letter'] = {
        schema: 'o'
    }
    */
    try {
        const links = linkList.list()
        const link = links.find(el => el.url.replace('/', '') === req.params.letter).link
        const html = await request.get(process.env.URI + '/' + link)
        success(res, parser.list(html))
    } catch (error) {
        failure(res, error)
    }
}

exports.singer = async (req, res) => {
    /*
    #swagger.tags = ['Songs']
    #swagger.summary = 'Get albums and songs of the artist'
    #swagger.parameters['letter'] = {
        schema: 'o'
    }
    #swagger.parameters['singer'] = {
        schema: 'ozzy+osbourne'
    }
    */
    try {
        const html = await request.get(process.env.URI + '/' + req.params.letter + '/' + req.params.singer)
        success(res, parser.singer(html))
    } catch (error) {
        failure(res, error)
    }
}

exports.song = async (req, res) => {
    /*
    #swagger.tags = ['Songs']
    #swagger.summary = 'Get lyrics'
    #swagger.parameters['letter'] = {
        schema: 'o'
    }
    #swagger.parameters['singer'] = {
        schema: 'ozzy+osbourne'
    }
    #swagger.parameters['song'] = {
        schema: 'i+just+want+you_20103963'
    }
    */
    try {
        const html = await request.get(process.env.URI + '/' + req.params.letter + '/' + req.params.singer + '/' + req.params.song + '.html')
        success(res, parser.song(html))
    } catch (error) {
        failure(res, error)
    }
}


exports.album = async (req, res) => {
    /*
    #swagger.tags = ['Songs']
    #swagger.summary = 'Get album information'
    #swagger.parameters['letter'] = {
        schema: 'o'
    }
    #swagger.parameters['singer'] = {
        schema: 'ozzy+osbourne'
    }
    #swagger.parameters['album'] = {
        schema: 'ozzmosis+1751'
    }
    */
    try {
        const html = await request.get(process.env.URI + '/' + req.params.letter + '/' + req.params.singer + '/album/' + req.params.album)
        success(res, parser.album(html))
    } catch (error) {
        failure(res, error)
    }
}