const express = require("express");
const mongoose = require("mongoose");

const app = express();

//user Schema

const userSchema = new mongoose.Schema({
    firstName: {type:String, required:true},
    lastName: {type:String, required:false},
    age:{type:Number, required:true},
    email:{type:String, required:true, unique:true},
    address:{type:String, required:true},

},
{
    timestamps:true,
}

);

const User = mongoose.model("user",userSchema);

// Brachdetails schema

const BranchDetailSchema = new mongoose.Schema({
    name:{type:String, required:true},
    address:{type:String, required:true},
    IFSC:{type:String, required:true},
    MICR:{type:String, required:true},
},

{
    timestamps:true,
}

);
const Brachdetails = mongoose.model("branchDetail",BranchDetailSchema);

// MasterAccount Schema

const MasterAccountSchema = new mongoose.Schema({
    balance:{type:String, required:true},
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    branchId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"branchDetail",
        required:true,
    },


},
{
    timestamps:true,
}

);
const MasterAccount = mongoose.model("MasterAccount",MasterAccountSchema);








//SavingAccount Schema

const SavingAccountSchema = new mongoose.Schema({
    account_number:{type:String, required:true},
    balance:{type:String, required:true},
    interestRate:{type:String, required:true},
    MasterId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"MasterAccount",
        required:true,
    },
}, 
{
    timestamps:true,
}

);

const SavingAccount = mongoose.model("SavingAccount",SavingAccountSchema);



//FixedAccount Schema 

const FixedAccountSchema = new mongoose.Schema({
    account_number:{type:String, required:true},
    balance:{type:String, required:true},
    interestRate:{type:String, required:true},
    startDate:{type:String, required:true},
    maturityDate:{type:String, required:true},
    FixedId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"MasterAccount",
        required:true,
    },
    
}, 

{
    timestamps:true,
})

const FixedAccount = mongoose.model("FixedAccount",FixedAccountSchema);







app.listen(5000, async () =>{
    await connect();

    console.log("listen on port 5000")
})