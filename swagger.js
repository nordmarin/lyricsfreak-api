const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        title: 'LyricsFreak',
        description: 'Parse LyricsFreak website then return data as JSON',
    },
    // host: 'localhost:3000',
    schemes: ['http']
}

const outputFile = './swagger-output.json'
const endpointsFiles = ['./app.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then()