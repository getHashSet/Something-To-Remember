const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DolistSchema = new Schema({
    
  title: { 
    type: String, 
    default: '',
    trim: true,
    required: 'Title cannot be blank'
},

  description: { 
      type: String,
      required: 'Title cannot be blank'
    },

    dueDate: {
       type: Date,
       min: '1987-09-28',
    },

    user: 
      {
        // Store ObjectIds in the array
        type: Schema.Types.String,
        // The ObjectIds will refer to the ids in the Note model
        ref: "user"
      }
    

},
{ timestamps:true});

const Dolist = mongoose.model("Dolist", DolistSchema);

module.exports = Dolist;