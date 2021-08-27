import {Router} from 'express'
import FilesController from '../controller/File.js'

const router = Router()

router.route("/files/download_cv").get(FilesController.downloadFile)

export default router