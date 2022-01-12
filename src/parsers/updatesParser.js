const cheerio = require('cheerio')

exports.list = (html) => {
    const $ = cheerio.load(html)

    const json = []
    const songs = $('.lf-list__container').find('.js-sort-table-content-item')
    songs.each((i, el) => {

        const primaryBlock = $(el).find('.lf-list__subtitle .lf-link--primary')
        const artist = $(el).find('.lf-list__title .lf-link--secondary').text().trim()
        const song = primaryBlock.text().replace('Lyrics', '').trim()
        const link = primaryBlock.attr('href').replace('.html', '')
        const date = $(el).find('.lf-list__meta').text().trim()

        json.push({
            artist: artist,
            song: song,
            link: `/songs${link}`,
            date: date
        })
    })

    return json
}