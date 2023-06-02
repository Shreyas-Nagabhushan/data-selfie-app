const express = require('express') ;
const app = express() ;

const database = [] ;

app.listen(3000, () => console.log('listening at port 3000')) ;
app.use(express.static('public')) ;
app.use(express.json({ limit : '1mb' })) ;

app.post('/api', (request, response) => {
    console.log('I got a request !')
    console.log(request.body) ;
    const data = request.body ;
    database.push(data) ;
    console.log("number of entries : %d", database.length) ;
    response.json({
        status : 'success', 
        latitude : request.body.lat ,
        longitude : request.body.lon
    }) ;
}) ;