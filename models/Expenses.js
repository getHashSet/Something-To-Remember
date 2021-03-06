const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExpansesSchema = new Schema ({

    itemName: {
    type: String,
    required: true
    },
    
    amount: {
        type: Number,
        required: false,
        default:null,
        min: [1, 'put any number you want'],
    },

    // budgetInput: {
    //   type: Number,
    //   required: false,
    //   default:null,
    //   min: [1, 'put any number you want'],
    // },

  //   estimateAmount: {
  //     type: Number,
  //     required: false,
  //     default:null,
  //     min: [1, 'put any number you want'],
  // },

    note: {
        type: String,
        required: true
    },

    category: {
      type: String
    },
    
  //   currency: {
  //     type:Number,
  //     default:"inactive"
  // },

    // status: {
    //     type:Boolean,
    //     default:"inactive"
    // },

    user: [
      {
        // Store ObjectIds in the array
        type: Schema.Types.ObjectId,
        // The ObjectIds will refer to the ids in the Note model
        ref: "user"
      }
    ],

}, { timestamps:true})

const Expenses = mongoose.model("Expenses", ExpansesSchema);

module.exports = Expenses
