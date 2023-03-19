require('dotenv').config();

const app = require('./app.js');
const port = process.env.PORT;

app.listen(port, ()=>{
  console.log('Server started at port ' + port);
})

