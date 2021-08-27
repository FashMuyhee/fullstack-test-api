import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import RenderInfoModel from "./model/infos.js"

dotenv.config()

const MongoClient = mongodb.MongoClient

const URL = process.env.APP_URL
const port = process.env.PORT

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
      console.log(`loading ${URL}`)
    })
  })
