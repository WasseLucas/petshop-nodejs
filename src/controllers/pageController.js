const req = require("express/lib/request")
const res = require("express/lib/response")


const home = (req,res) =>{
    res.render('pages/pages')
}

const dogs = ( req,res) => {
    res.render('')
}

const cats = (req,res) => {
    res.send('')
}

const fishes = (req,res) => {
    res.send('')
}
module.exports.home = home
module.exports.dogs = dogs
module.exports.cats = cats
module.exports.fishes = fishes