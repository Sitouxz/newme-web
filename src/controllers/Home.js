const request = require('request');

exports.data = (req, res, next) => {
    const url = 'https://data.covid19.go.id/public/api/update.json';

    request({
        url: url,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.json({
                Date: body.update.penambahan.tanggal,
                Confirmed: {
                    Total : body.update.harian.at(-1).jumlah_positif_kum.value,
                    New : body.update.penambahan.jumlah_positif
                },Recovered: {
                    Total : body.update.harian.at(-1).jumlah_sembuh_kum.value,
                    New : body.update.penambahan.jumlah_sembuh
                }, Deaths: {
                    Total : body.update.harian.at(-1).jumlah_meninggal_kum.value,
                    New : body.update.penambahan.jumlah_meninggal
                }            
            })         
        }
    })
}

// exports.data = (req, res, next) => {
//     const url = 'https://covid19.mathdro.id/api/countries/indonesia';

//     request({
//         url: url,
//         json: true
//     }, function (error, response, body) {
    
//         if (!error && response.statusCode === 200) {
//             res.json({
//                 Country: "Indonesia",
//                 UpdateDate: body.lastUpdate,
//                 Confirmed: body.confirmed.value,
//                 Recovered: body.recovered.value,
//                 Deaths: body.deaths.value,
//             })         
//         }
//     })
// }