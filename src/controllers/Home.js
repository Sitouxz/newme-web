const request = require('request');
exports.data = (req, res, next) => {
    const url = 'https://covid19.mathdro.id/api/countries/indonesia';

    request({
        url: url,
        json: true
    }, function (error, response, body) {
    
        if (!error && response.statusCode === 200) {
            res.json({
                Country: "Indonesia",
                UpdateDate: body.lastUpdate,
                Confirmed: body.confirmed.value,
                Recovered: body.recovered.value,
                Deaths: body.deaths.value,
            })         
        }
    })
}