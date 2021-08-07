const express = require('express')
const path = require('path')

const os = require('os')

var nets = os.networkInterfaces()

console.log(nets)

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)

    if(nets.enp7s0 && nets.wlp8s0){
        console.log('You can search the following to access the server:')
        console.log(`http://${nets.enp7s0[0].address}:${PORT} \nhttp://${nets.wlp8s0[0].address}:${PORT}`)
    }else{
        console.log('nets.enp7s0 or nets.wlp8s0 not found. Check the serve.js at line 19.')
    }
})