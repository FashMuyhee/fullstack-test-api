import path from 'path'

class FileController {

  static downloadFile = (req, res) => {

    const BASE_DIR = path.resolve('./server')
    const directoryPath = BASE_DIR + "/resources/static/uploads/file.pdf";
    console.log(BASE_DIR)
    res.download(directoryPath, `file.pdf`, (err) => {
      if (err) {
        res.status(500).send({
          message: "Could not download the file. " + err,
        });
      } else {
        res.json({ message: 'Downloading' })

      }
    });
  };

}

export default FileController