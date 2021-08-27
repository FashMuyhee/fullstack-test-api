import mongodb from "mongodb"
let infos

export default class RenderInfoModel {
  static async injectDB(conn) {
    if (infos) {
      return
    }
    try {
      infos = await conn.db(process.env.MONGO_DB_NAME).collection("infos")
    
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in RenderInfoModel: ${e}`,
      )
    }
  }

  static async getInfos() {
    try {
     const result = await infos.find().toArray() 
     return result
    } catch (e) {
      console.error(`Something went wrong`)
      console.log(e)
      throw e
    }
  }

}

