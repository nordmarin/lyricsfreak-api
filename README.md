# LyricsFreak API  ([lyricsfreak.com](https://lyricsfreak.com))

LyricsFreak list of songs and albums and their search. This project is still in early development.

The API basically reads from LyricsFreak website and results JSON data.

## Table of Contents

* [Implemented Features](#implemented-features)
* [Online Demo](#online-demo)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [Endpoints](#endpoints)
* [Proxy](#proxy)
* [Contact](#contact)
* [License](#license)

## Implemented Features

- [x] Get the first letters of the artists
- [x] Get a list of artists by first letter
- [x] Get albums and songs of the artist
- [x] Get lyrics
- [x] Get album information
- [x] Search for songs
- [x] Top 100 songs
- [x] New songs
- [x] Updates songs

## Online Demo

* [Get the first letters of the artists](https://lyricsfreak-api.herokuapp.com/songs/)
* [Get a list of artists by first letter](https://lyricsfreak-api.herokuapp.com/songs/o/)
* [Get albums and songs of the artist](https://lyricsfreak-api.herokuapp.com/songs/o/ozzy+osbourne/)
* [Get lyrics](https://lyricsfreak-api.herokuapp.com/songs/o/ozzy+osbourne/i+just+want+you_20103963)
* [Get album information](https://lyricsfreak-api.herokuapp.com/songs/o/ozzy+osbourne/album/ozzmosis+1751)
* [Search for songs](https://lyricsfreak-api.herokuapp.com/search/baby)
* [Top 100 songs](https://lyricsfreak-api.herokuapp.com/top)
* [New songs](https://lyricsfreak-api.herokuapp.com/new)
* [Updates songs](https://lyricsfreak-api.herokuapp.com/updates)

## Documentation

Click [here](http://lyricsfreak-api.herokuapp.com/doc) to view the Swagger UI documentation

## Quick Start

```bash
npm install
npm start
```

## Endpoints

### Get the first letters of the artists

Endpoint `/songs`

```json
[
  {
    "name": "A",
    "link": "/songs/a"
  }
]
```

### Get a list of artists by first letter

Endpoint `/songs/:letter`, example `/songs/o`

```json
[
  {
    "artist": "Ozzy Osbourne",
    "link": "/songs/o/ozzy+osbourne/",
    "lyrics": 177
  }
]
```

### Get albums and songs of the artist

Endpoint `/songs/:letter/:singer`, example `/songs/o/ozzy+osbourne/`

```json
{
  "songs": [
    {
      "song": "I Just Want You",
      "link": "/songs/o/ozzy+osbourne/i+just+want+you_20103963",
      "time": "4:10",
      "rating": 4
    }
  ],
  "albums": [
    {
      "image": "https://www.ultimate-guitar.com/static/storage/album/images/f/c/fc00f77dc262fabe5e65dd518d6f9629545471e3.jpg",
      "link": "/songs/o/ozzy+osbourne/album/ozzmosis+1751",
      "title": "Ozzmosis",
      "year": 1995,
      "tracks": 10
    }
  ]
}
```

### Get lyrics

Endpoint `/songs/:letter/:singer/:song`, example `/songs/o/ozzy+osbourne/i+just+want+you_20103963`

```json
{
  "artist": "Ozzy Osbourne",
  "title": "I Just Want You",
  "text": "O. Osbourne/J. Vallance\nThere are no unlockable doors\nThere are no unwinable wars\n",
  "textArr": [
    "O. Osbourne/J. Vallance",
    "There are no unlockable doors",
    "There are no unwinable wars"
  ]
}
```

### Get album information

Endpoint `/songs/:letter/:singer/album/:album`, example `/songs/o/ozzy+osbourne/album/ozzmosis+1751`

```json
{
  "songs": [
    {
      "song": "I Just Want You",
      "link": "/songs/o/ozzy+osbourne/i+just+want+you_20103963",
      "time": "4:56",
      "rating": 4
    }
  ],
  "name": "Ozzmosis",
  "wiki": [
    {
      "title": "Vocals",
      "description": "Ozzy Osbourne"
    }
  ],
  "image": "https://www.ultimate-guitar.com/static/storage/album/images/8/8/885ecb22532abab2ad07a8b9d4fd34aca97e2a32.jpg",
  "info": [
    "Album Ozzmosis (1995)",
    "by Ozzy Osbourne",
    "Label Epic"
  ]
}
```

### Search for songs

Endpoint `/search/:song`, example `/search/baby`

```json
[
  {
    "artist": {
      "name": "Justin Bieber",
      "link": "/songs/j/justin+bieber/"
    },
    "song": {
      "name": "Baby",
      "link": "/songs/j/justin+bieber/baby_20865507"
    }
  }
]
```

### Top 100 songs

Endpoint `/top`

```json
[
  {
    "artist": "Kumar Sanu",
    "song": "Do Dil Mil Rahe Hain",
    "link": "/songs/k/kumar+sanu/do+dil+mil+rahe+hain_20503872",
    "hits": 1079
  }
]
```

### New songs

Endpoint `/new`

```json
[
  {
    "artist": "Lewis Capaldi",
    "song": "Someone You Loved",
    "link": "/songs/l/lewis+capaldi/someone+you+loved_21585657",
    "rating": 2
  }
]
```

### Updates songs

Endpoint `/updates`

```json
[
  {
    "artist": "Lana Del Rey",
    "song": "Looking For America",
    "link": "/songs/l/lana+del+rey/looking+for+america_1687545",
    "date": "Jan 11, 2022"
  }
]
```

## Proxy

If you want to use proxy add a constant `HTTP_PROXY` in `.env` file or `HTTPS_PROXY` if you use `https`

## Contact

Created by [@nordmarin](https://t.me/nordmarin) - feel free to contact me!

## License

LyricsFreak API is MIT licensed.