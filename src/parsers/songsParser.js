const cheerio = require('cheerio')
const linkList = require('../utils/list')

exports.all = () => {
    const links = linkList.list()
    const json = []
    links.forEach(el => {
        const name = el.name
        const link = el.url
        json.push({
            name: name,
            link: `/songs${link}`
        })
    })
    return json
}


exports.list = html => {
    const $ = cheerio.load(html)
    const json = []

    const songs = $('body .lf-list__container').find('.js-sort-table-content-item')
    songs.each((i, el) => {
        const secondaryBlock = $(el).find('.lf-link--secondary')
        const artist = secondaryBlock.text().trim()
        const link = secondaryBlock.attr('href')
        const lyrics = parseInt($(el).find('.lf-list__meta').text().trim())

        const position = {
            artist: artist,
            link: `/songs${link}`,
            lyrics: lyrics
        }
        json.push(position)
    })

    return json
}


exports.singer = html => {
    const $ = cheerio.load(html)
    const songsList = []
    const albumsList = []

    const songs = $('body .lf-list__container').first().find('.js-sort-table-content-item')
    songs.each((i, el) => {
        let rating = $(el).find('.lf-rating').css('width')
        if (rating) {
            rating = rating.replace('px', '')
        }
        rating = getRating(rating)

        const primaryBlock = $(el).find('.lf-link--primary')
        const song = primaryBlock.text().replace('Lyrics', '').trim()
        const time = $(el).find('.lf-list__meta').text().trim()
        let link = primaryBlock.attr('href')
        if (link) {
            link = link.replace('.html', '')
        }

        const position = {
            song: song,
            link: `/songs${link}`,
        }
        if (time) {
            position.time = time
        }
        if (rating) {
            position.rating = rating
        }
        songsList.push(position)
    })

    const albums = $('.js-albums-list .lf-list__container').find('.js-sort-table-content-item')
    albums.each((i, el) => {
        const image = $(el).find('.lf-list__cover img').attr('src').replace('@50', '')
        const aBlock = $(el).find('.lf-list__cell--full a')
        const link = aBlock.attr('href')
        const title = aBlock.text().trim()
        const metaBlock = $(el).find('.lf-list__meta')
        const year = parseInt(metaBlock.first().text().trim())
        const tracks = parseInt(metaBlock.last().text().trim())

        albumsList.push({
            image: image,
            link: `/songs${link}`,
            title: title,
            year: year,
            tracks: tracks
        })
    })

    return {
        songs: songsList,
        albums: albumsList
    }
}


exports.song = html => {
    const $ = cheerio.load(html)

    const songHead = $('.lyric-song-head')
    const artist = songHead.children('a').text()
    const title = songHead.text().split('–')[1].replace('Lyrics', '').trim()
    const text = $("#content").text().trim()
    const textArr = text.split('\n')

    return {
        artist: artist,
        title: title,
        text: text,
        textArr: textArr
    }
}


exports.album = html => {
    const $ = cheerio.load(html)

    const wiki = []
    const songsList = []
    const albumName = $('.song-info-panel h1').text().split('-')[1].replace('lyrics', '').trim()
    const songs = $('.lfd-content').first().find('.lf-list__container .js-sort-table-content-item')
    songs.each((i, el) => {
        let rating = $(el).find('.lf-rating').css('width')
        if (rating) {
            rating = rating.replace('px', '')
        }
        rating = getRating(rating)
        const secondaryBlock = $(el).find('.lf-link--secondary')
        const song = secondaryBlock.text().replace('Lyrics', '').trim()
        const time = $(el).find('.lf-list__meta').text().trim()
        let link = secondaryBlock.attr('href')
        if (link) {
            link = link.replace('.html', '')
        }

        const position = {
            song: song,
            link: `/songs${link}`,
        }
        if (time) {
            position.time = time
        }
        if (rating) {
            position.rating = rating
        }
        songsList.push(position)
    })

    const wikiBlock = $('.js-wiki-block .lf-meta-list').find('.lf-meta-list__item')
    wikiBlock.each((i, el) => {
        const title = $(el).find('.lf-meta-list__title').text().trim()
        const description = $(el).find('.lf-meta-list__content').text().trim()
        wiki.push({
            title: title,
            description: description
        })
    })

    let image = $('.lf-album__left img').attr('src')
    if (image) {
        image = image.replace('@115', '').trim()
    }

    const info = []
    const infoBlock = $('.lf-album__right').find('.lf-album__meta-item')
    infoBlock.each((i, el) => {
        const text = $(el).text().replace(/\s+/g, ' ').trim()
        info.push(text)
    })

    return {
        songs: songsList,
        name: albumName,
        wiki: wiki,
        image: image,
        info: info
    }
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