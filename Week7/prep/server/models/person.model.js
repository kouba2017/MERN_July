import { Schema, model } from "mongoose";

const personSchema= new Schema({
    userName:{
        type:String,
        required: [true,"UserName is required"],
        minLength: [2, "UserName must be at least 2 characters"],
        maxLength: [20, "UserName must be less than 20 characters"]
    },
    age:{
        type: Number,
        required: [true,"Age is required"],
        min: [18, "You must be at least 18 years old"],
        max:[70, "You are too old for this otherwise"]
    },
    isMarried: {
        type: Boolean, 
        default: false
    }
}, {timestamp: true})

const Person=model('Person',personSchema)
export default Person;
