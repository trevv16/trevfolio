function initialize(mongoose, dbUser, dbPW, dbName) {
  mongoose.connect(
    `mongodb+srv://${process.env.MONOG_ATLAS_USER}:${process.env.MONGO_ATLAS_PW}@dev-rv8ag.mongodb.net/${process.env.MONGO_ATLAS_DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }
  );

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    // we're connected!
  });
}

module.exports = initialize;
