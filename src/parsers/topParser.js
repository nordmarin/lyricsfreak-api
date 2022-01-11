const cheerio = require('cheerio')

exports.top = html => {
    const $ = cheerio.load(html)
    let json = []
    const songs = $('body .lf-list__container').find('.js-sort-table-content-item')

    songs.each((i, el) => {
        const artist = $(el).find('.lf-link--secondary').text().trim()
        const song = $(el).find('.lf-link--primary').text().replace(' Lyrics', '').trim()
        let link = $(el).find('.lf-link--primary').attr('href').trim()
        if (link) {
            link = link.replace('.html', '')
        }
        const hits = parseInt($(el).find('.lf-list__meta').text().trim())

        json.push({
            artist: artist,
            song: song,
            link: '/songs' + link,
            hits: hits
        })
    })

    return json
}