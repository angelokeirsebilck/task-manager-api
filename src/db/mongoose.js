const mongoose = require('mongoose');

mongoose.connect(process.env.MONGDODB_URL, { useNewUrlParser: true, useCreateIndex: true });
