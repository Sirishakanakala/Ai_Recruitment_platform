const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    company_name: String,
    contact_details: Number,
    industry: String,
    job_role: String,
    company_description: String,
    job_openings: Number,
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel