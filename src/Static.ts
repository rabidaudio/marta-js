// import PouchDB from 'pouchdb'
// import axios from 'axios'

// type Options = {
//   pouchDbOptions?: PouchDB.Configuration.LocalDatabaseConfiguration
// }

// const GTFS_DATA_URL = 'https://www.itsmarta.com/google_transit_feed/google_transit.zip'

// class Static {
//   private readonly db: PouchDB.Database
//   constructor (options: Options) {
//     this.db = new PouchDB('marta-gtfs', options.pouchDbOptions)
//   }

//   async initialize ({ autoUpdate = true }: { autoUpdate?: boolean }): Promise<Static> {
    
//   }


//   private async downloadLatest () {
//     axios.get()
//   }

//   async checkForUpdates () {

//   }

//   async update () {

//   }

// }

// const db = new Static({ pouchDbOptions: { adapter: 'memory' } })
// db.initialize()


// const Blob = require("cross-blob")
// globalThis.Blob = Blob
// const fs = require('fs')
// const f = fs.readFileSync('data/google_transit.zip')

// var unzip = require('unzip-js')

// var blob = new Blob([Uint8Array.from(f.buffer).buffer], { type: 'application/octet-stream' })
// unzip(blob, console.log.bind(console))

// +    "cross-blob": "^1.2.1",
//      "moment": "^2.24.0",
// -    "moment-timezone": "^0.5.28"
// +    "moment-timezone": "^0.5.28",
// +    "pouchdb": "^7.2.1",
// +    "unzip-js": "^1.0.0"