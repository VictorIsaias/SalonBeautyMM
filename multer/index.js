const express = require('express')
const multer  = require('multer')
const cors = require('cors');
const upload = multer({ dest: 'uploads/' })
const fs = require('node:fs')

const app = express();
app.use(cors());



app.post('/servicios', upload.single('img'), function (req, res) {
    let original=req.file.originalname
    saveImage(req.file)
    res.send(original)
})

function saveImage(file){
    const newPath = `./uploads/${file.originalname}`
    fs.renameSync(file.path, newPath)
    return newPath
}

app.use('/public',express.static('./uploads'))
  
  
app.listen(3000,()=>{
    console.log('si')
})