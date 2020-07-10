//Requiring .env file to get API_KEY
require('dotenv/config');
//Requiring akalijs
const AkaliJS = require('./akalijs');
//Instanciating akalijs with API_KEY
const akalijs = new AkaliJS(process.env.API_KEY);
//Getting my summoner data
akalijs.getSummoner('BR1', 'BYSUMMONERNAME', {summonerName: 'nihl999'});
