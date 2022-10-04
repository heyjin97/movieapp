const express = require('express')
const app = express();
const path = require("path");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { auth } = require('./middleware/auth');
const { User } = require('./models/User');

const config = require('./config/key');

//application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended: true
}));

//application.json
app.use(express.json());
app.use(cookieParser());


const mongoose = require('mongoose')
const connect = mongoose.connect(config.mongoURI,
    {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.use(cors())

app.use('/api/users', require('./routes/users'));
app.use('/api/favorite', require('./routes/favorite'));
app.use('/api/comment', require('./routes/comment'));
app.use('/api/like', require('./routes/like'));


//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
app.use('/uploads', express.static('uploads'));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {

  // Set static folder
  app.use(express.static("client/build"));

  // index.html for all page routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server Running at ${port}`)
});