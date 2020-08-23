const express = require('express');
const app = express();

//Settings
app.set('port', process.env.PORT || 30000);

app.listen(app.get('port'), () => {
    console.log('Conexion Stablish Port: ', app.get('port'));
})