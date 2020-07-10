const axios = require('axios');

//creating akalijs class -> resolve the requisitions
class Akali {
//get and set instance apikey
    constructor(apikey){
        this.apiKey = apikey;
    };
//servers list
    servers = {
        BR1:	  'br1.api.riotgames.com',
        EUN1:	'eun1.api.riotgames.com',
        EUW1:	'euw1.api.riotgames.com',
        JP1:	  'jp1.api.riotgames.com',
        KR:	  'kr.api.riotgames.com',
        LA1:	  'la1.api.riotgames.com',
        LA2:	  'la2.api.riotgames.com',
        NA1:	  'na1.api.riotgames.com',
        OC1:	  'oc1.api.riotgames.com',
        TR1:	  'tr1.api.riotgames.com',
        RU:	  'ru.api.riotgames.com',
    };
//get summoner method -> basic functionality
    async getSummoner(server, endpoint = 'BYSUMMONERNAME', data){
        const searchServer = this.servers[server];
        switch(endpoint){
            case 'BYSUMMONERNAME':
                try{   
                    const response = await axios.get(`https://${searchServer}/lol/summoner/v4/summoners/by-name/${data.summonerName}`,
                    {headers: {'X-Riot-Token': this.apiKey}});
                    console.log(response.data);
                    return response;
                }catch(error){
                    console.log(error);
                }
            case 'BYSUMMONERID':
                return 0;
            case 'BYACCOUNTID':
                return 0;
            case 'BYPUUID':
                return 0;
        };
    };
};

module.exports = Akali;
