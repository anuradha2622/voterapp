// grab the mongoose module
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Nerd', {
	name : {type : String, required: true}
});
module.exports = mongoose.model('voters', ProductSchema);