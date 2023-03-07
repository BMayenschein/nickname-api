const express = require('express');
const app = express();
const PORT = 8000;

let nickNames = {
    "lebron james": {1:"king james", 2:"the chosen one", 3:"lbj"},
    "stephen curry": {1:"steph", 2:"baby faced assassin", 3:"chef curry"},
    "kevin durant": {1:"kd", 2:"the servant", 3:"durantula"},
    "kobe bryant": {1:"black mamba", 2:"vino", 3:"kb24"},
    "michael jordan": {1:"mj", 2:"his airness", 3:"air jordan"},
    "magic johnson": {1:"magic", 2:"the captain", 3:"earvin"},
    "shaquille o'neal": {1:"shaq", 2:"the diesel", 3:"superman"},
    "kawhi leonard": {1:"the klaw", 2:"board man", 3:"leonard"},
    "dirk nowitzki": {1:"dirk", 2:"the german wunderkind", 3:"swish41"},
    "tim duncan": {1:"the big fundamental", 2:"td", 3:"stone face"},
    "larry bird": {1:"larry legend", 2:"the hick from french lick", 3:"the great white hope"},
    "charles barkley": {1:"chuck", 2:"the round mound of rebound", 3:"sir charles"},
    "allen iverson": {1:"ai", 2:"the answer", 3:"bubba chuck"},
    "james harden": {1:"the beard", 2:"jimmy neutron", 3:"stepback j"},
    "damian lillard": {1:"dame", 2:"logo lillard", 3:"dolla"},
    "reggie miller": {1:"kneehigh", 2:"miller time", 3:"big reggie"},
    "jerry west": {1:"the logo", 2:"mr. clutch", 3:"zeke from cabin creek"},
    "karl malone": {1:"the mailman"},
    "kevin garnett": {1:"kg", 2:"the big ticket", 3:"da kid"},
    "scottie pippen": {1:"pip", 2:"no tippin' pippen"},
    "patrick ewing": {1:"big pat", 2:"ewing", 3:"the hoya destroyer"},
    "dwyane wade": {1:"flash", 2:"dwade", 3:"the franchise"},
    "vince carter": {1:"vc", 2:"half man, half amazing", 3:"air canada"},
    "paul pierce": {1:"the truth", 2:"pierce", 3:"captain clutch"},
    "steve nash": {1:"hair canada", 2:"nash", 3:"the point maestro"},
    "chris paul": {1:"cp3", 2:"the point god"},
    "dwight howard": {1:"superman", 2:"the man of steel", 3:"dwight"},
    "dirk nowitzki": {1:"dirk", 2:"the german wunderkind", 3:"swish41"},
}



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/name/:name', (req, res) => {
    let name = req.params.name
    name = name.toLowerCase();

    if (name in nickNames) {
        res.json(nickNames[name]);
    }
    else {
        res.status(400).json({error: `We do not have a nickname for ${name}`})
    }
})

app.listen(process.env.PORT || PORT, ()=> {
    console.log(`Server running on ${PORT}`)
})