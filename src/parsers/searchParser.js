const cheerio = require('cheerio')

exports.search = (html) => {
    const $ = cheerio.load(html)
    const json = []

    const songs = $('.lf-list__container').find('.js-sort-table-content-item')
    songs.each((i, el) => {
        const artistBlock = $(el).find('.lf-list__title--secondary a')
        const artistName = artistBlock.text().replace('·', '').trim()
        const artistLink = artistBlock.attr('href')
        const artist = {
            name: artistName,
            link: `/songs${artistLink}`
        }
        const songBlock = $(el).find('.lf-list__meta a')
        const songName = songBlock.text().trim()
        const songLink = songBlock.attr('href').replace('.html', '')

        const song = {
            name: songName,
            link: `/songs${songLink}`
        }
        json.push({
            artist: artist,
            song: song
        })
    })

    return json
}