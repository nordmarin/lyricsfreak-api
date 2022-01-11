const cheerio = require('cheerio')

exports.search = (html) => {
    const $ = cheerio.load(html)
    let json = []

    const songs = $('.lf-list__container').find('.js-sort-table-content-item')
    songs.each((i, el) => {
        const artistName = $(el).find('.lf-list__title--secondary a').text().replace('·', '').trim()
        const artistLink = $(el).find('.lf-list__title--secondary a').attr('href')
        const artist = {
            name: artistName,
            link: '/songs' + artistLink
        }
        const songName = $(el).find('.lf-list__meta a').text().trim()
        const songLink = $(el).find('.lf-list__meta a').attr('href').replace('.html', '')

        const song = {
            name: songName,
            link: '/songs' + songLink
        }
        json.push({
            artist: artist,
            song: song
        })
    })

    return json
}