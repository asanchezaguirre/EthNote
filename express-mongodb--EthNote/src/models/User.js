const mongoose = require('mongoose');
const {Schema} = mongoose

const userSchema = new Schema({
	_id: Schema.Types.ObjectId,
	name: { type: String, required: true },
	email: { type:String, required:true },
	password: { type:String, required: true },
	phoneNumber: { type: String, required: true },
	occupation: { type: String }
});

module.exports = mongoose.model('User', userSchema);

