const cheerio = require('cheerio')

exports.list = (html) => {
    const $ = cheerio.load(html)

    let json = []
    const songs = $('.lf-list__container').find('.js-sort-table-content-item')
    songs.each((i, el) => {

        const artist = $(el).find('.lf-list__title .lf-link--secondary').text().trim()

        const song = $(el).find('.lf-list__subtitle .lf-link--primary').text().replace('Lyrics', '').trim()
        const link = $(el).find('.lf-list__subtitle .lf-link--primary').attr('href').replace('.html', '')

        let rating = $(el).find('.lf-rating').css('width')
        if (rating) {
            rating = rating.replace('px', '')
        }
        rating = getRating(rating)

        let position = {
            artist: artist,
            song: song,
            link: '/songs' + link
        }
        if (rating) {
            position.rating = rating
        }
        json.push(position)
    })

    return json
}


getRating = rating => {
    switch (rating) {
        case '85':
            rating = 5
            break
        case '68':
            rating = 4
            break
        case '51':
            rating = 3
            break
        case '34':
            rating = 2
            break
        case '17':
            rating = 1
            break
        default:
            rating = ''
    }
    return rating
}