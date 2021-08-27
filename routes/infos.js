import {Router} from 'express'
import InfosController from '../controller/Info.js'

const router = Router()

router.route("/").get((req,res)=>res.json({message:"Welcome Here Folks"}))
router.route("/infos").get(InfosController.getAllInfos)

export default router