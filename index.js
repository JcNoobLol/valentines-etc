let express  = require("express");let app = express(); app.listen(3000); console.log("up"); let path = require("path")

app.get('/',(req,res) => {
    res.sendfile(path.join(__dirname,'src/val.html'))
})