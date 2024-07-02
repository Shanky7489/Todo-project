// const mongoose = require("mongoose");

// require("dotenv").config;

// const dbConnect = () => {
//   mongoose
//     .connect(process.env.DATABASE_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then(() => console.log("DB ka connection successfull hua"))
//     .catch((err) => {
//       console.log("issue in db connection");
//       console.error(err.message);
//       process.exit;
//     });
// };

// module.exports = dbConnect;


const mongoose = require("mongoose")

require("dotenv").config

const dbConnect = () => {
  mongoose.connect(process.env.DATABASE_URL , {
    useNewUrlParser : true,
    useUnifiedTopology : true,
  })
  .then(()=>{console.log("DB Connection succesfully")})
  .catch((err)=>{
    console.error("issue in server")
    console.log(err.message);
    process.exit;
  })
}

module.exports  = dbConnect;