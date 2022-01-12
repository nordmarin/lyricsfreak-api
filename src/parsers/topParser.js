const cheerio = require('cheerio')

exports.top = html => {
    const $ = cheerio.load(html)
    const json = []
    const songs = $('body .lf-list__container').find('.js-sort-table-content-item')

    songs.each((i, el) => {
        const artist = $(el).find('.lf-link--secondary').text().trim()
        const primaryBlock = $(el).find('.lf-link--primary')
        const song = primaryBlock.text().replace(' Lyrics', '').trim()
        let link = primaryBlock.attr('href').trim()
        if (link) {
            link = link.replace('.html', '')
        }
        const hits = parseInt($(el).find('.lf-list__meta').text().trim())

        json.push({
            artist: artist,
            song: song,
            link: `/songs${link}`,
            hits: hits
        })
    })

    return json
}