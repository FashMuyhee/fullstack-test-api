import RenderInfoModel from "../model/infos.js"

export default class InfosController {

  static async getAllInfos(req, res,) {
    try {
      const result = await RenderInfoModel.getInfos()
      res.json(result)
    } catch (error) {
      res.status(500).json({ error })
    }

  }

}