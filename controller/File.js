import path from 'path'

class FileController {

  static downloadFile = (req, res) => {

    const BASE_DIR = path.resolve('')
    const directoryPath = BASE_DIR + "/resources/static/uploads/file.pdf";
    console.log(BASE_DIR)
    res.setHeader('Content-Type', 'application/json');
    res.download(directoryPath, `file.pdf`, (err) => {
      if (err) {
        return res.status(500).send({
          message: "Could not download the file. " + err,
        });
      }
    });
  };

}

export default FileController