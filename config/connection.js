const mongoose=require('mongoose')

let connect=mongoose.connect('mongodb://127.0.0.1/coupon')

module.exports=connect;