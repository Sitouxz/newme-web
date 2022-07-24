const request = require('request')
const feedid = require('feedid');
const { response } = require('express');
const BASE_URL = process.env.BASE_URL || '';
exports.tech = (req, res) => {
    feedid.cnbc.tech().then((response) => {
        res.send(response)
    })
}
exports.health = (req, res) => {
    feedid.suara.health().then((response) => {
        res.send(response)
    })
}
