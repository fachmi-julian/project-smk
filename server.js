const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express()
const cors = require('cors')
const path = require('path')
require('dotenv/config')

const port = process.env.PORT || 7000; 

// mongoose.connect('mongodb://localhost/project-smk',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

// mongoose.connect('mongodb+srv://fachmijulian:ayu310888@cluster0-0ucxy.mongodb.net/project-smk?retryWrites=true&w=majority',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//LOCAL_DB
//DB_CONNECTION

mongoose.connect(process.env.DB_CONNECTION,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('DB connected!');
    })
    .catch((error) => {
      console.log('error', error);
      process.exit();
    });

//app.use(express.static('/upload/foto-user'))
let corsOption = {
  origin: '*',
  method: ['*'],
  allowedHeaders: ['Content-Type']
}
app.use(cors(corsOption))
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

require('./router/login')(app)
require('./router/router')(app)
require('./router/sliderRouter')(app)
require('./router/sponsorRouter')(app)
require('./router/prestasiRouter')(app)
require('./router/fasilitasRouter')(app)
require('./router/newsRouter')(app)
require('./router/testimoniRouter')(app)
require('./router/jurusanRouter')(app)
require('./router/materiRouter')(app)
require('./router/kontakKamiRouter')(app)
require('./router/pembayaranRouter')(app)
require('./router/adminRouter')(app)

app.listen(port,() => {
    console.log(`Server Running at port ${port}`);
})