import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import path from 'path'
import RenderInfoModel from "./model/infos.js"

dotenv.config({ path: path.resolve('./server/.env') })

const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 7000

MongoClient.connect(
  process.env.MONGO_DB_URL,
  {
    wtimeoutMS: 2500,
    useUnifiedTopology: true,
  }
)
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
  .then(async client => {
    await RenderInfoModel.injectDB(client)
    app.listen(port, () => {
      console.log(`listening on port ${port}`)
    })
  })
