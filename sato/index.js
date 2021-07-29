const express = require('express');
const app = express();
var router = express.Router();

app.use(express.json());


app.use('/api/', require('./routes/regional'));
app.use('/api/regionales/', require('./routes/regional'));
app.use('/api/bogota/', require('./routes/regional'));

//app.use('/route', router);

app.listen(3100, () => {
    console.log('Example app listening at http://localhost:3100');
});